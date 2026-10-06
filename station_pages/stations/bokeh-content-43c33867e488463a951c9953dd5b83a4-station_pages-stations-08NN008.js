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
    
    
    const element = document.getElementById("e52ff900-c30a-43ce-bcf2-944ead6daec9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e52ff900-c30a-43ce-bcf2-944ead6daec9' but no matching script tag was found.")
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
                  const docs_json = '{"4bf57950-4bd0-4429-9b04-0e137c2195fd":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p918671","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p918672"}}},"roots":[{"type":"object","name":"Column","id":"p918835","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p918832","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p918831","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p918824","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p918695"},{"type":"object","name":"PanTool","id":"p918771"}]}},{"type":"object","name":"ToolProxy","id":"p918825","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p918696","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p918772","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p918826","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p918697","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p918698","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p918704","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p918703","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p918773","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p918774","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p918780","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p918779","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p918827","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p918705"},{"type":"object","name":"ResetTool","id":"p918781"}]}},{"type":"object","name":"SaveTool","id":"p918828"},{"type":"object","name":"ToolProxy","id":"p918829","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p918747","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p918830","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p918823","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p918673","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p918674"},"y_range":{"type":"object","name":"DataRange1d","id":"p918675"},"x_scale":{"type":"object","name":"LinearScale","id":"p918683"},"y_scale":{"type":"object","name":"LogScale","id":"p918684"},"title":{"type":"object","name":"Title","id":"p918676","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p918713","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918707","attributes":{"selected":{"type":"object","name":"Selection","id":"p918708","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918709"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiw7VJwWFJgu8o4ScFBZJ2749pMORAteOGIrAMDGMg6zJw586YKm7QD1/XFE06GiDt804jRz/kh5hDTf8iUY42Ig1zra8P/C4Wh6oQc/v//v591koBDgS1XuN5/dpA5DbZcrGBaZN1/+7NnzvzRav9nf/rMGZ4LLn/sgeIOD6t+wGmgfSc7Ln0D8YHgC5zmvL54gcaFj/avAnfwZSi9A4k3OCa8BNETJFhe2APdJ1DB/QSsfo3MIzjNCDR/y4l79jAa6D57Y+Pb9uvdH/46M+mGPZB/37/3ur37w6ovW9OvAeWMP59+dxFs/uvACwTpHKA/T/adtf8HNCiUD0ED9ScIRJy0P3rmzJrzV4/Z75Rr9f7peRRkXsLTC4fsV7o/nFU+5xBIn32n4wGoPw/Y/wGG34myffZGxsbB/fd3g9U/Xoqgger3l0zeAdKHlf79/398/6Gt9jB62syZmX7Tt4L8+X/lx00o9LXFG8B8EP33///5Uvpryaa/AM1ZLbPKnli6c+ZMyS85y+y//v8vz9a4lGSaa517Y7HbEvsfYH8twqB/AcOnbN98e3SaDZheSgtn238H+heY1gjSAFDhhDYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p918714","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918715"}}},"glyph":{"type":"object","name":"Line","id":"p918710","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918711","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p918712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p918722","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918716","attributes":{"selected":{"type":"object","name":"Selection","id":"p918717","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918718"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiw7VJwWFJgu8o4ScFBZJ2749pMORAteOGIrAMDGMg6zJw586YKm7QD1/XFE06GiDt804jRz/kh5hDTf8iUY42Ig1zra8P/C4Wh6oQc/v//v591koBDgS1XuN5/dpA5DbZcrGBaZN1/+7NnzvzRav9nf/rMGZ4LLn/sgeIOD6t+wGmgfSc7Ln0D8YHgC5zmvL54gcaFj/avAnfwZSi9A4k3OCa8BNETJFhe2APdJ1DB/QSsfo3MIzjNCDR/y4l79jAa6D57Y+Pb9uvdH/46M+mGPZB/37/3ur37w6ovW9OvAeWMP59+dxFs/uvACwTpHKA/T/adtf8HNCiUD0ED9ScIRJy0P3rmzJrzV4/Z75Rr9f7peRRkXsLTC4fsV7o/nFU+5xBIn32n4wGoPw/Y/wGG34myffZGxsbB/fd3g9U/Xoqgger3l0zeAdKHlf79/398/6Gt9jB62syZmX7Tt4L8+X/lx00o9LXFG8B8EP33///5Uvpryaa/AM1ZLbPKnli6c+ZMyS85y+y//v8vz9a4lGSaa517Y7HbEvsfYH8twqB/AcOnbN98e3SaDZheSgtn238H+heY1gjSAFDhhDYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p918723","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918724"}}},"glyph":{"type":"object","name":"Line","id":"p918719","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918720","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p918721","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p918733","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918727","attributes":{"selected":{"type":"object","name":"Selection","id":"p918728","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918729"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y1Ta0hTYRg2JIwEu2EIWRmahl3NLU2Xe9zm5m7unO1sZyJYBBWBhWAhWAQFQYHQD6FA8oflD6lA6odlIBVEBXaBykAwKCwKA8FiUVHQ937n2Z/xne973/e5vWOdk325+c/eMf2f8+YXFJXWd+fBOS9Fx3jXzJ1DhXC+r4Q6TF3evob3xTi/vLjaGi3hu3WoOfj4wqryDXxfhoXZiZ4vLzexrhxyG+yvYP1mDLqOvh4JV7HPFnR/eHg2v6Ca/bYi2F+iWm5j3x1Q4NSLney/C78X555e2ljDOTX4pE7eM7s5rxavhhp7F2ZrOdeF+wrNUKOb890YCQ9Uxgf3EEcdpPrvrzriqcep3Pz0TXsvcTXgsGLfMd5AfI0wh31KAg9xeuBR0yZ69hFvE6riwrCJuL24KPRLQPyAGqYYgDyacULg9TaTTzNEnYFKH3n5sF9smvaRnx/WqKEQ+MnTj4jQcQXINwBhszgXIO8WuHXDFvJvgTJPNQhShyDKdEGQeoQg7hrDIeoSQqH+0Ep9WpGnf2HqFMZPkWssTL0i+CbHzgh1i+Cj2FsUpX5RvJPrySh1jOG5yNsVo54xPJLnpXHqGsddieNUnPq24ZaU97VR5zZcEzuqE9Q7gSvSbiZB3Q2nb8Cg/obT/6pBHwxnzg+DfpjQ8Y+a9MV05l436Y/pzP9j0qekgyOZpF9J6HjcSNK3pINrSYr+pRx87Sn6mMJqicftFP1MQcd/mUVfLej1PGDRXwvnRJ57Fn228E/itCJNv9PQcTySpu9pfJd1eZCm/2kcEznXZpiDDL5K/I5nmIcM9Do/yTAXGbyXdV5vMx82siL/SZs5sfFG4vrCZl5s6PhXZJmbLJ7Jgp3OMj9ZaLveZpmjdvwHa3pSPZAEAAA="},"shape":[146],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiw7VJwYGBgcDA2BtMLCmzlkGmgkCyID6MbXgfKQPkSIDphh5w4Mv1gcYEYiO/AdV0YmWbQjBEC8Q+cOSMIVt9/SMCBEWwvN4jfYMvFikKLrPtvDxKH0glpaf9AfBjt8LDqB4iPiwb64xtIHgi+YKMfVIl8sgfav8B123uQ/IHPf9+A7XNMeIlML3i//BlYfu77x2Bz1sg8wqBB/thy4h7IPBT6////9sbGt+2R6Pv+vddBfBQaaCwwPK6CxP+vlrkEtv914AWy6X9Ac0L5ztrjokH2CUScBJkPpoHq4vsPHYXTIPGnFw6B5ZFpoDr7TscDIHVgGhQewKCx//P///4TZfvgNEjf46W7wfqx0UD9+0sm7wCZQxT9G+y+rfa4aFC4rfy4CRx+6PS1xRvA4sj03///50vpr7WnFf0FaN9qmVX2lNJf//+XZ2tcak8r+gc4vBbZE6J/AeOpbN98e0L0d2C4zpw5055cGgBo5t8qkAQAAA=="},"shape":[146],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p918734","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918735"}}},"glyph":{"type":"object","name":"Line","id":"p918730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p918732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p918743","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918737","attributes":{"selected":{"type":"object","name":"Selection","id":"p918738","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918739"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p918744","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918745"}}},"glyph":{"type":"object","name":"Line","id":"p918740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p918742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p918682","attributes":{"tools":[{"id":"p918695"},{"id":"p918696"},{"id":"p918697"},{"id":"p918705"},{"type":"object","name":"SaveTool","id":"p918706"},{"id":"p918747"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p918690","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p918691","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p918692"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p918693"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p918685","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p918686","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p918687"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p918688"}}}],"center":[{"type":"object","name":"Grid","id":"p918689","attributes":{"axis":{"id":"p918685"}}},{"type":"object","name":"Grid","id":"p918694","attributes":{"dimension":1,"axis":{"id":"p918690"}}},{"type":"object","name":"Legend","id":"p918725","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p918726","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p918722"}]}},{"type":"object","name":"LegendItem","id":"p918736","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p918733"}]}},{"type":"object","name":"LegendItem","id":"p918746","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p918743"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p918748","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p918758","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p918750"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p918759"},"y_scale":{"type":"object","name":"LinearScale","id":"p918760"},"title":{"type":"object","name":"Title","id":"p918751","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p918789","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918783","attributes":{"selected":{"type":"object","name":"Selection","id":"p918784","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918785"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC7161aq/R4uEHTo7Om5cCX5hPyXIy9Nv6hH7acXnbi7ctdbeLzQ01KxtsT0u/QD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p918790","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918791"}}},"glyph":{"type":"object","name":"Line","id":"p918786","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918787","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p918788","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p918798","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918792","attributes":{"selected":{"type":"object","name":"Selection","id":"p918793","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918794"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC7161aq/R4uEHTo7Om5cCX5hPyXIy9Nv6hH7acXnbi7ctdbeLzQ01KxtsT0u/QD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p918799","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918800"}}},"glyph":{"type":"object","name":"Line","id":"p918795","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p918797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p918809","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918803","attributes":{"selected":{"type":"object","name":"Selection","id":"p918804","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918805"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC7161aq/R4uEHTo7Om5cCX5hPyXIy9Nv6hH7acXnbi7ctdbeLzQ01KxtsT0u/QD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p918810","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918811"}}},"glyph":{"type":"object","name":"Line","id":"p918806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p918808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p918819","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p918813","attributes":{"selected":{"type":"object","name":"Selection","id":"p918814","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p918815"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p918820","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p918821"}}},"glyph":{"type":"object","name":"Line","id":"p918816","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p918817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p918818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p918757","attributes":{"tools":[{"id":"p918771"},{"id":"p918772"},{"id":"p918773"},{"id":"p918781"},{"type":"object","name":"SaveTool","id":"p918782"},{"id":"p918823"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p918766","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p918767","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p918768"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p918769"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p918761","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p918762"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p918763"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p918764"}}}],"center":[{"type":"object","name":"Grid","id":"p918765","attributes":{"axis":{"id":"p918761"}}},{"type":"object","name":"Grid","id":"p918770","attributes":{"dimension":1,"axis":{"id":"p918766"}}},{"type":"object","name":"Legend","id":"p918801","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p918802","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p918798"}]}},{"type":"object","name":"LegendItem","id":"p918812","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p918809"}]}},{"type":"object","name":"LegendItem","id":"p918822","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p918819"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p918834","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"4bf57950-4bd0-4429-9b04-0e137c2195fd","roots":{"p918835":"e52ff900-c30a-43ce-bcf2-944ead6daec9"},"root_ids":["p918835"]}];
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