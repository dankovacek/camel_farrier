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
    
    
    const element = document.getElementById("a9d0565d-b5e5-4d9e-83e3-8336d4397e9e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a9d0565d-b5e5-4d9e-83e3-8336d4397e9e' but no matching script tag was found.")
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
                  const docs_json = '{"34ee989a-4ac2-4b50-8ce1-63ad83f509fa":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p722251","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p722252"}}},"roots":[{"type":"object","name":"Column","id":"p722415","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p722412","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p722411","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p722404","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p722275"},{"type":"object","name":"PanTool","id":"p722351"}]}},{"type":"object","name":"ToolProxy","id":"p722405","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p722276","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p722352","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p722406","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p722277","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p722278","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p722284","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p722283","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p722353","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p722354","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p722360","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p722359","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p722407","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p722285"},{"type":"object","name":"ResetTool","id":"p722361"}]}},{"type":"object","name":"SaveTool","id":"p722408"},{"type":"object","name":"ToolProxy","id":"p722409","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p722327","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p722410","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p722403","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p722253","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p722254"},"y_range":{"type":"object","name":"DataRange1d","id":"p722255"},"x_scale":{"type":"object","name":"LinearScale","id":"p722263"},"y_scale":{"type":"object","name":"LogScale","id":"p722264"},"title":{"type":"object","name":"Title","id":"p722256","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p722293","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722287","attributes":{"selected":{"type":"object","name":"Selection","id":"p722288","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722289"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiw7VJwWFJgu8o4ScFBZJ2749pMORAteOGIrAMDGMg6zJw586YKm7QD1/XFE06GiDt804jRz/kh5hDTf8iUY42Ig1zra8P/C4Wh6oQc/v//v591koBDgS1XuN5/dpA5DbZcrGBaZN1/+7NnzvzRav9nf/rMGZ4LLn/sgeIOD6t+wGmgfSc7Ln0D8YHgC5zmvL54gcaFj/avAnfwZSi9A4k3OCa8BNETJFhe2APdJ1DB/QSsfo3MIzjNCDR/y4l79jAa6D57Y+Pb9uvdH/46M+mGPZB/37/3ur37w6ovW9OvAeWMP59+dxFs/uvACwTpHKA/T/adtf8HNCiUD0ED9ScIRJy0P3rmzJrzV4/Z75Rr9f7peRRkXsLTC4fsV7o/nFU+5xBIn32n4wGoPw/Y/wGG34myffZGxsbB/fd3g9U/Xoqgger3l0zeAdKHlf79/398/6Gt9jB62syZmX7Tt4L8+X/lx00o9LXFG8B8EP33///5Uvpryaa/AM1ZLbPKnli6c+ZMyS85y+y//v8vz9a4lGSaa517Y7HbEvsfYH8twqB/AcOnbN98e3SaDZheSgtn238H+heY1gjSAFDhhDYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722294","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722295"}}},"glyph":{"type":"object","name":"Line","id":"p722290","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722291","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p722292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p722302","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722296","attributes":{"selected":{"type":"object","name":"Selection","id":"p722297","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722298"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiw7VJwWFJgu8o4ScFBZJ2749pMORAteOGIrAMDGMg6zJw586YKm7QD1/XFE06GiDt804jRz/kh5hDTf8iUY42Ig1zra8P/C4Wh6oQc/v//v591koBDgS1XuN5/dpA5DbZcrGBaZN1/+7NnzvzRav9nf/rMGZ4LLn/sgeIOD6t+wGmgfSc7Ln0D8YHgC5zmvL54gcaFj/avAnfwZSi9A4k3OCa8BNETJFhe2APdJ1DB/QSsfo3MIzjNCDR/y4l79jAa6D57Y+Pb9uvdH/46M+mGPZB/37/3ur37w6ovW9OvAeWMP59+dxFs/uvACwTpHKA/T/adtf8HNCiUD0ED9ScIRJy0P3rmzJrzV4/Z75Rr9f7peRRkXsLTC4fsV7o/nFU+5xBIn32n4wGoPw/Y/wGG34myffZGxsbB/fd3g9U/Xoqgger3l0zeAdKHlf79/398/6Gt9jB62syZmX7Tt4L8+X/lx00o9LXFG8B8EP33///5Uvpryaa/AM1ZLbPKnli6c+ZMyS85y+y//v8vz9a4lGSaa517Y7HbEvsfYH8twqB/AcOnbN98e3SaDZheSgtn238H+heY1gjSAFDhhDYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722303","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722304"}}},"glyph":{"type":"object","name":"Line","id":"p722299","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p722301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p722313","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722307","attributes":{"selected":{"type":"object","name":"Selection","id":"p722308","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722309"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y1Ta0hTYRg2JIwEu2EIWRmahl3NLU2Xe9zm5m7unO1sZyJYBBWBhWAhWAQFQYHQD6FA8oflD6lA6odlIBVEBXaBykAwKCwKA8FiUVHQ937n2Z/xne973/e5vWOdk325+c/eMf2f8+YXFJXWd+fBOS9Fx3jXzJ1DhXC+r4Q6TF3evob3xTi/vLjaGi3hu3WoOfj4wqryDXxfhoXZiZ4vLzexrhxyG+yvYP1mDLqOvh4JV7HPFnR/eHg2v6Ca/bYi2F+iWm5j3x1Q4NSLney/C78X555e2ljDOTX4pE7eM7s5rxavhhp7F2ZrOdeF+wrNUKOb890YCQ9Uxgf3EEcdpPrvrzriqcep3Pz0TXsvcTXgsGLfMd5AfI0wh31KAg9xeuBR0yZ69hFvE6riwrCJuL24KPRLQPyAGqYYgDyacULg9TaTTzNEnYFKH3n5sF9smvaRnx/WqKEQ+MnTj4jQcQXINwBhszgXIO8WuHXDFvJvgTJPNQhShyDKdEGQeoQg7hrDIeoSQqH+0Ep9WpGnf2HqFMZPkWssTL0i+CbHzgh1i+Cj2FsUpX5RvJPrySh1jOG5yNsVo54xPJLnpXHqGsddieNUnPq24ZaU97VR5zZcEzuqE9Q7gSvSbiZB3Q2nb8Cg/obT/6pBHwxnzg+DfpjQ8Y+a9MV05l436Y/pzP9j0qekgyOZpF9J6HjcSNK3pINrSYr+pRx87Sn6mMJqicftFP1MQcd/mUVfLej1PGDRXwvnRJ57Fn228E/itCJNv9PQcTySpu9pfJd1eZCm/2kcEznXZpiDDL5K/I5nmIcM9Do/yTAXGbyXdV5vMx82siL/SZs5sfFG4vrCZl5s6PhXZJmbLJ7Jgp3OMj9ZaLveZpmjdvwHa3pSPZAEAAA="},"shape":[146],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiw7VJwYGBgcDA2BtMLCmzlkGmgkCyID6MbXgfKQPkSIDphh5w4Mv1gcYEYiO/AdV0YmWbQjBEC8Q+cOSMIVt9/SMCBEWwvN4jfYMvFikKLrPtvDxKH0glpaf9AfBjt8LDqB4iPiwb64xtIHgi+YKMfVIl8sgfav8B123uQ/IHPf9+A7XNMeIlML3i//BlYfu77x2Bz1sg8wqBB/thy4h7IPBT6////9sbGt+2R6Pv+vddBfBQaaCwwPK6CxP+vlrkEtv914AWy6X9Ac0L5ztrjokH2CUScBJkPpoHq4vsPHYXTIPGnFw6B5ZFpoDr7TscDIHVgGhQewKCx//P///4TZfvgNEjf46W7wfqx0UD9+0sm7wCZQxT9G+y+rfa4aFC4rfy4CRx+6PS1xRvA4sj03///50vpr7WnFf0FaN9qmVX2lNJf//+XZ2tcak8r+gc4vBbZE6J/AeOpbN98e0L0d2C4zpw5055cGgBo5t8qkAQAAA=="},"shape":[146],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722314","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722315"}}},"glyph":{"type":"object","name":"Line","id":"p722310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p722312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p722323","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722317","attributes":{"selected":{"type":"object","name":"Selection","id":"p722318","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722319"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p722324","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722325"}}},"glyph":{"type":"object","name":"Line","id":"p722320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p722322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p722262","attributes":{"tools":[{"id":"p722275"},{"id":"p722276"},{"id":"p722277"},{"id":"p722285"},{"type":"object","name":"SaveTool","id":"p722286"},{"id":"p722327"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p722270","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p722271","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p722272"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p722273"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p722265","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p722266","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p722267"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p722268"}}}],"center":[{"type":"object","name":"Grid","id":"p722269","attributes":{"axis":{"id":"p722265"}}},{"type":"object","name":"Grid","id":"p722274","attributes":{"dimension":1,"axis":{"id":"p722270"}}},{"type":"object","name":"Legend","id":"p722305","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p722306","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p722302"}]}},{"type":"object","name":"LegendItem","id":"p722316","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p722313"}]}},{"type":"object","name":"LegendItem","id":"p722326","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p722323"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p722328","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p722338","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p722330"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p722339"},"y_scale":{"type":"object","name":"LinearScale","id":"p722340"},"title":{"type":"object","name":"Title","id":"p722331","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p722369","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722363","attributes":{"selected":{"type":"object","name":"Selection","id":"p722364","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722365"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC7161aq/R4uEHTo7Om5cCX5hPyXIy9Nv6hH7acXnbi7ctdbeLzQ01KxtsT0u/QD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722370","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722371"}}},"glyph":{"type":"object","name":"Line","id":"p722366","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722367","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p722368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p722378","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722372","attributes":{"selected":{"type":"object","name":"Selection","id":"p722373","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722374"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC7161aq/R4uEHTo7Om5cCX5hPyXIy9Nv6hH7acXnbi7ctdbeLzQ01KxtsT0u/QD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722379","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722380"}}},"glyph":{"type":"object","name":"Line","id":"p722375","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p722377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p722389","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722383","attributes":{"selected":{"type":"object","name":"Selection","id":"p722384","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722385"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC7161aq/R4uEHTo7Om5cCX5hPyXIy9Nv6hH7acXnbi7ctdbeLzQ01KxtsT0u/QD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722390","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722391"}}},"glyph":{"type":"object","name":"Line","id":"p722386","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p722388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p722399","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722393","attributes":{"selected":{"type":"object","name":"Selection","id":"p722394","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722395"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p722400","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722401"}}},"glyph":{"type":"object","name":"Line","id":"p722396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p722398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p722337","attributes":{"tools":[{"id":"p722351"},{"id":"p722352"},{"id":"p722353"},{"id":"p722361"},{"type":"object","name":"SaveTool","id":"p722362"},{"id":"p722403"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p722346","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p722347","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p722348"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p722349"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p722341","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p722342"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p722343"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p722344"}}}],"center":[{"type":"object","name":"Grid","id":"p722345","attributes":{"axis":{"id":"p722341"}}},{"type":"object","name":"Grid","id":"p722350","attributes":{"dimension":1,"axis":{"id":"p722346"}}},{"type":"object","name":"Legend","id":"p722381","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p722382","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p722378"}]}},{"type":"object","name":"LegendItem","id":"p722392","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p722389"}]}},{"type":"object","name":"LegendItem","id":"p722402","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p722399"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p722414","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"34ee989a-4ac2-4b50-8ce1-63ad83f509fa","roots":{"p722415":"a9d0565d-b5e5-4d9e-83e3-8336d4397e9e"},"root_ids":["p722415"]}];
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