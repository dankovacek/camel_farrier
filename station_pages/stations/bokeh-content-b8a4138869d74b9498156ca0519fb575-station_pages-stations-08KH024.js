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
    
    
    const element = document.getElementById("ccafa307-bccb-4304-b81d-3c286a284d30");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ccafa307-bccb-4304-b81d-3c286a284d30' but no matching script tag was found.")
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
                  const docs_json = '{"73bfe6e1-3e4e-4a51-a80d-87b031b4fd95":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p208413","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p208414"}}},"roots":[{"type":"object","name":"Column","id":"p208577","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p208575","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p208574","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p208567","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p208437"},{"type":"object","name":"PanTool","id":"p208513"}]}},{"type":"object","name":"ToolProxy","id":"p208568","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p208438","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p208514","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p208569","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p208439","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p208440","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p208446","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p208445","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p208515","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p208516","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p208522","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p208521","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p208570","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p208447"},{"type":"object","name":"ResetTool","id":"p208523"}]}},{"type":"object","name":"SaveTool","id":"p208571"},{"type":"object","name":"ToolProxy","id":"p208572","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p208489","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p208573","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p208565","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p208415","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p208416"},"y_range":{"type":"object","name":"DataRange1d","id":"p208417"},"x_scale":{"type":"object","name":"LinearScale","id":"p208425"},"y_scale":{"type":"object","name":"LogScale","id":"p208426"},"title":{"type":"object","name":"Title","id":"p208418","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p208455","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208449","attributes":{"selected":{"type":"object","name":"Selection","id":"p208450","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208451"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofc3ooBnTr8bWyOjAwMBgcFrgr71862vBfQa/7IN2yKXG3vlmn5aWduzMmc/2Z8+cuSNp8sEeqC5AzOCt/ZkzZ3JOFt63P/RVw0d+1xWQ+IOfdZfgdOAOuaWVxy/aTzj0dUKi6EV7RqC4CttF+/S0tLh3URfsbbmuNzc4XwDJC1x8cc5eaJ17YkXVWfu17g+V3m08A7I37fDl0/avA3fo/as9ZX99ccHZacUn7TmvL9bY9+2EfcvrwBsXHx+3//f//33/3uMg8YZNmsft82257j9VOmafZ8tlvrT5qP1XjZj7/SJHQe468PnvEfuHVSLHGH4fsf8P1Ld0NoIGiufJNxwBqVsgE4VJy7W+vrjl72Gw+nPfMWmNmP5J004dBrnnf8NU3PTf///tjY0RdPPrwAeX+Q6D7El4euEQnAa621+/7ZC9Hdf1284mh+wfVInsk9c8ZJ+alnZvc+RB+0dA9857dQAUXlyd1Qfs+w597VCVOwDSD/IqnL6wuEDXf9I+e+WY/k8G8ftA7oif+HYPnD555oyKxNQ99ilpaWYf7uwG2/94KYK25Lo+Wff5LvuktLSyeWd32f8G+mO1zC77K4sL5j65uhOsTiACNw20Z3/J5B0Y9IyZMyUvuOyw//P/v/zNc9vhtCww/fmmbweF6/xj3pj0wgLbS5f5toPC779W+zYMuu514IHfj7eC3Bnff4h4WsvYWFicb4v93SqRvuXhm0Di+4syNtoDAB32JgooAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p208456","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208457"}}},"glyph":{"type":"object","name":"Line","id":"p208452","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208453","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p208454","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p208464","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208458","attributes":{"selected":{"type":"object","name":"Selection","id":"p208459","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208460"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofc3ooBnTr8bWyOjAwMBgcFrgr71862vBfQa/7IN2yKXG3vlmn5aWduzMmc/2Z8+cuSNp8sEeqC5AzOCt/ZkzZ3JOFt63P/RVw0d+1xWQ+IOfdZfgdOAOuaWVxy/aTzj0dUKi6EV7RqC4CttF+/S0tLh3URfsbbmuNzc4XwDJC1x8cc5eaJ17YkXVWfu17g+V3m08A7I37fDl0/avA3fo/as9ZX99ccHZacUn7TmvL9bY9+2EfcvrwBsXHx+3//f//33/3uMg8YZNmsft82257j9VOmafZ8tlvrT5qP1XjZj7/SJHQe468PnvEfuHVSLHGH4fsf8P1Ld0NoIGiufJNxwBqVsgE4VJy7W+vrjl72Gw+nPfMWmNmP5J004dBrnnf8NU3PTf///tjY0RdPPrwAeX+Q6D7El4euEQnAa621+/7ZC9Hdf1284mh+wfVInsk9c8ZJ+alnZvc+RB+0dA9857dQAUXlyd1Qfs+w597VCVOwDSD/IqnL6wuEDXf9I+e+WY/k8G8ftA7oif+HYPnD555oyKxNQ99ilpaWYf7uwG2/94KYK25Lo+Wff5LvuktLSyeWd32f8G+mO1zC77K4sL5j65uhOsTiACNw20Z3/J5B0Y9IyZMyUvuOyw//P/v/zNc9vhtCww/fmmbweF6/xj3pj0wgLbS5f5toPC779W+zYMuu514IHfj7eC3Bnff4h4WsvYWFicb4v93SqRvuXhm0Di+4syNtoDAB32JgooAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p208465","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208466"}}},"glyph":{"type":"object","name":"Line","id":"p208461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208462","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p208463","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p208475","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208469","attributes":{"selected":{"type":"object","name":"Selection","id":"p208470","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208471"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Se0gUURjFI8yQCikshRLZsrKHmWa6bemcdXV3Xd3H7DyzKCKCkCBCBNmiiOiBSARigogEImJElBEVRIgQEoZEFBFiSAVSbhAShVngvdczf8zMvfPd75zz+yad9/LZTT2tpdXzn/bwrbFqV9UKLK1Xo7NkY/n88Fos7a/HRGvH56Njefy+CVnP/98amSxgnQebLz8pWNe2hfVboRX+/B1Yvp3ninBsrEi87uT53TjffGJgcMMe9inB68zoizNv9rJfKY6434audpWx7z58F6u+pnL234+2BY/4UkGdSqyUx79WUs+L231NosMB6vqgys4epP4hPPJLpSr6qIZazlfTj4bTc6eubDsO+gKULb+f/vz4I7pphTX0WQOpPp4ZoN8ArnVJAwH6roWyN15L/3XImfEFz92vY44gJrOlcpB5Quj3fihtbwkxVwjKph1mvjDK2lvy+731zFmPv8MyQYR5IxhRDSPM3YAbGZ8uhqcbmL8R8eJ7v96NNpJDFLl2SkhEySOGKVH943qMXGKQ6qnmOPnEUaEAJcgpgZ4LH++86k6QVwKyKjtLJzcdyn5KJz8d0kXvrE6OSexQwZLkmYT6ayaS5GpAxdAM8jVgCoqPHxjkbOCp2F3wmORtQsl2muRu4pKMk2GRv4Uvsn2rxTlYELeTOTMW52Hjrmzj2pyLjTUqoM35OFDlPodzcvB+NCKQOpyXA7Wd73JuLnpnJXiX83OxTF2HsQjo7wsUiAMAAA=="},"shape":[113],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofc3owMDA8GBxwV97BjD4Y88IJDVjvoP4CWlp36D0J7A8k/Z7EH3g89839v///4+3vn8fxF8gpX8VRD/4WXcJgwaq2+9tfhFk7gMVNgQNlG94HXgBTgPFE1Ksz9v/BWrQ2XTW/h+QDuU7C7Znl+cZsL1yradB/P+rZU6B3SUQcRLErz/09QTYnrnvj4P03ffvRdAg87Taj4H48f2HjoL49Y4JR6H+OIJBA5XfXzobkwb5UyYKNw1Sd+77YYI0yF8NUwnTQHfaGxtj0iB/P71wCIMG6qufngfh8+kiaKD4/qKMg9BwPwgOv2uLD4DE7TsdD0DjHZP+A9R3omwfnAaF38S3ezBokPxXjT1g+x4v3Y1BA9093/3hLjj9Gxx/CBoSjzsJ0iB/lEzegZMGukP+5rntGDTQmvnHvAnTkHSyDSf9G5x+tlJE7ynZDDIvnk93E4gPjJeN9gDJr54OiAMAAA=="},"shape":[113],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p208476","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208477"}}},"glyph":{"type":"object","name":"Line","id":"p208472","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208473","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p208474","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p208485","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208479","attributes":{"selected":{"type":"object","name":"Selection","id":"p208480","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208481"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p208486","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208487"}}},"glyph":{"type":"object","name":"Line","id":"p208482","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208483","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p208484","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p208424","attributes":{"tools":[{"id":"p208437"},{"id":"p208438"},{"id":"p208439"},{"id":"p208447"},{"type":"object","name":"SaveTool","id":"p208448"},{"id":"p208489"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p208432","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p208433","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p208434"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p208435"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p208427","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p208428","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p208429"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p208430"}}}],"center":[{"type":"object","name":"Grid","id":"p208431","attributes":{"axis":{"id":"p208427"}}},{"type":"object","name":"Grid","id":"p208436","attributes":{"dimension":1,"axis":{"id":"p208432"}}},{"type":"object","name":"Legend","id":"p208467","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p208468","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p208464"}]}},{"type":"object","name":"LegendItem","id":"p208478","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p208475"}]}},{"type":"object","name":"LegendItem","id":"p208488","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p208485"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p208490","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p208500","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p208492"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p208501"},"y_scale":{"type":"object","name":"LinearScale","id":"p208502"},"title":{"type":"object","name":"Title","id":"p208493","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p208531","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208525","attributes":{"selected":{"type":"object","name":"Selection","id":"p208526","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208527"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46RNfNf7aA2mFDUUfQDQDk/Z7EG1hGvfO/v///4+Xzj5iv/VaVHdq6VH7VatWbXpVfNR+9/d7twOdt9sDAEhrpoZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p208532","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208533"}}},"glyph":{"type":"object","name":"Line","id":"p208528","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208529","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p208530","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p208540","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208534","attributes":{"selected":{"type":"object","name":"Selection","id":"p208535","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208536"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46RNfNf7aA2mFDUUfQDQDk/Z7EG1hGvfO/v///4+Xzj5iv/VaVHdq6VH7VatWbXpVfNR+9/d7twOdt9sDAEhrpoZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p208541","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208542"}}},"glyph":{"type":"object","name":"Line","id":"p208537","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208538","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p208539","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p208551","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208545","attributes":{"selected":{"type":"object","name":"Selection","id":"p208546","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208547"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46RNfNf7aA2mFDUUfQDQDk/Z7EG1hGvfO/v///4+Xzj5iv/VaVHdq6VH7VatWbXpVfNR+9/d7twOdt9sDAEhrpoZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p208552","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208553"}}},"glyph":{"type":"object","name":"Line","id":"p208548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208549","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p208550","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p208561","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p208555","attributes":{"selected":{"type":"object","name":"Selection","id":"p208556","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p208557"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p208562","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p208563"}}},"glyph":{"type":"object","name":"Line","id":"p208558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p208559","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p208560","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p208499","attributes":{"tools":[{"id":"p208513"},{"id":"p208514"},{"id":"p208515"},{"id":"p208523"},{"type":"object","name":"SaveTool","id":"p208524"},{"id":"p208565"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p208508","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p208509","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p208510"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p208511"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p208503","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p208504"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p208505"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p208506"}}}],"center":[{"type":"object","name":"Grid","id":"p208507","attributes":{"axis":{"id":"p208503"}}},{"type":"object","name":"Grid","id":"p208512","attributes":{"dimension":1,"axis":{"id":"p208508"}}},{"type":"object","name":"Legend","id":"p208543","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p208544","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p208540"}]}},{"type":"object","name":"LegendItem","id":"p208554","attributes":{"label":{"type":"value","value":"Median Year (1976)"},"renderers":[{"id":"p208551"}]}},{"type":"object","name":"LegendItem","id":"p208564","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p208561"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p208566","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"73bfe6e1-3e4e-4a51-a80d-87b031b4fd95","roots":{"p208577":"ccafa307-bccb-4304-b81d-3c286a284d30"},"root_ids":["p208577"]}];
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