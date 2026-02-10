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
    
    
    const element = document.getElementById("e5702f55-9bcc-4c66-bb8a-e30490234f64");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e5702f55-9bcc-4c66-bb8a-e30490234f64' but no matching script tag was found.")
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
                  const docs_json = '{"f8e929d9-bb31-4512-a59e-f7df70ea069e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p212428","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p212429"}}},"roots":[{"type":"object","name":"Column","id":"p212592","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p212590","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p212589","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p212582","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p212452"},{"type":"object","name":"PanTool","id":"p212528"}]}},{"type":"object","name":"ToolProxy","id":"p212583","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p212453","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p212529","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p212584","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p212454","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p212455","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p212461","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p212460","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p212530","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p212531","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p212537","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p212536","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p212585","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p212462"},{"type":"object","name":"ResetTool","id":"p212538"}]}},{"type":"object","name":"SaveTool","id":"p212586"},{"type":"object","name":"ToolProxy","id":"p212587","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p212504","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p212588","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p212580","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p212430","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p212431"},"y_range":{"type":"object","name":"DataRange1d","id":"p212432"},"x_scale":{"type":"object","name":"LinearScale","id":"p212440"},"y_scale":{"type":"object","name":"LogScale","id":"p212441"},"title":{"type":"object","name":"Title","id":"p212433","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p212470","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212464","attributes":{"selected":{"type":"object","name":"Selection","id":"p212465","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212466"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofc3ooBnTr8bWyOjAwMBgcFrgr71862vBfQa/7IN2yKXG3vlmn5aWduzMmc/2Z8+cuSNp8sEeqC5AzOCt/ZkzZ3JOFt63P/RVw0d+1xWQ+IOfdZfgdOAOuaWVxy/aTzj0dUKi6EV7RqC4CttF+/S0tLh3URfsbbmuNzc4XwDJC1x8cc5eaJ17YkXVWfu17g+V3m08A7I37fDl0/avA3fo/as9ZX99ccHZacUn7TmvL9bY9+2EfcvrwBsXHx+3//f//33/3uMg8YZNmsft82257j9VOmafZ8tlvrT5qP1XjZj7/SJHQe468PnvEfuHVSLHGH4fsf8P1Ld0NoIGiufJNxwBqVsgE4VJy7W+vrjl72Gw+nPfMWmNmP5J004dBrnnf8NU3PTf///tjY0RdPPrwAeX+Q6D7El4euEQnAa621+/7ZC9Hdf1284mh+wfVInsk9c8ZJ+alnZvc+RB+0dA9857dQAUXlyd1Qfs+w597VCVOwDSD/IqnL6wuEDXf9I+e+WY/k8G8ftA7oif+HYPnD555oyKxNQ99ilpaWYf7uwG2/94KYK25Lo+Wff5LvuktLSyeWd32f8G+mO1zC77K4sL5j65uhOsTiACNw20Z3/J5B0Y9IyZMyUvuOyw//P/v/zNc9vhtCww/fmmbweF6/xj3pj0wgLbS5f5toPC779W+zYMuu514IHfj7eC3Bnff4h4WsvYWFicb4v93SqRvuXhm0Di+4syNtoDAB32JgooAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212471","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212472"}}},"glyph":{"type":"object","name":"Line","id":"p212467","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p212469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p212479","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212473","attributes":{"selected":{"type":"object","name":"Selection","id":"p212474","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212475"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofc3ooBnTr8bWyOjAwMBgcFrgr71862vBfQa/7IN2yKXG3vlmn5aWduzMmc/2Z8+cuSNp8sEeqC5AzOCt/ZkzZ3JOFt63P/RVw0d+1xWQ+IOfdZfgdOAOuaWVxy/aTzj0dUKi6EV7RqC4CttF+/S0tLh3URfsbbmuNzc4XwDJC1x8cc5eaJ17YkXVWfu17g+V3m08A7I37fDl0/avA3fo/as9ZX99ccHZacUn7TmvL9bY9+2EfcvrwBsXHx+3//f//33/3uMg8YZNmsft82257j9VOmafZ8tlvrT5qP1XjZj7/SJHQe468PnvEfuHVSLHGH4fsf8P1Ld0NoIGiufJNxwBqVsgE4VJy7W+vrjl72Gw+nPfMWmNmP5J004dBrnnf8NU3PTf///tjY0RdPPrwAeX+Q6D7El4euEQnAa621+/7ZC9Hdf1284mh+wfVInsk9c8ZJ+alnZvc+RB+0dA9857dQAUXlyd1Qfs+w597VCVOwDSD/IqnL6wuEDXf9I+e+WY/k8G8ftA7oif+HYPnD555oyKxNQ99ilpaWYf7uwG2/94KYK25Lo+Wff5LvuktLSyeWd32f8G+mO1zC77K4sL5j65uhOsTiACNw20Z3/J5B0Y9IyZMyUvuOyw//P/v/zNc9vhtCww/fmmbweF6/xj3pj0wgLbS5f5toPC779W+zYMuu514IHfj7eC3Bnff4h4WsvYWFicb4v93SqRvuXhm0Di+4syNtoDAB32JgooAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212480","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212481"}}},"glyph":{"type":"object","name":"Line","id":"p212476","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212477","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p212478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p212490","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212484","attributes":{"selected":{"type":"object","name":"Selection","id":"p212485","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212486"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Se0gUURjFI8yQCikshRLZsrKHmWa6bemcdXV3Xd3H7DyzKCKCkCBCBNmiiOiBSARigogEImJElBEVRIgQEoZEFBFiSAVSbhAShVngvdczf8zMvfPd75zz+yad9/LZTT2tpdXzn/bwrbFqV9UKLK1Xo7NkY/n88Fos7a/HRGvH56Njefy+CVnP/98amSxgnQebLz8pWNe2hfVboRX+/B1Yvp3ninBsrEi87uT53TjffGJgcMMe9inB68zoizNv9rJfKY6434audpWx7z58F6u+pnL234+2BY/4UkGdSqyUx79WUs+L231NosMB6vqgys4epP4hPPJLpSr6qIZazlfTj4bTc6eubDsO+gKULb+f/vz4I7pphTX0WQOpPp4ZoN8ArnVJAwH6roWyN15L/3XImfEFz92vY44gJrOlcpB5Quj3fihtbwkxVwjKph1mvjDK2lvy+731zFmPv8MyQYR5IxhRDSPM3YAbGZ8uhqcbmL8R8eJ7v96NNpJDFLl2SkhEySOGKVH943qMXGKQ6qnmOPnEUaEAJcgpgZ4LH++86k6QVwKyKjtLJzcdyn5KJz8d0kXvrE6OSexQwZLkmYT6ayaS5GpAxdAM8jVgCoqPHxjkbOCp2F3wmORtQsl2muRu4pKMk2GRv4Uvsn2rxTlYELeTOTMW52Hjrmzj2pyLjTUqoM35OFDlPodzcvB+NCKQOpyXA7Wd73JuLnpnJXiX83OxTF2HsQjo7wsUiAMAAA=="},"shape":[113],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofc3owMDA8GBxwV97BjD4Y88IJDVjvoP4CWlp36D0J7A8k/Z7EH3g89839v///4+3vn8fxF8gpX8VRD/4WXcJgwaq2+9tfhFk7gMVNgQNlG94HXgBTgPFE1Ksz9v/BWrQ2XTW/h+QDuU7C7Znl+cZsL1yradB/P+rZU6B3SUQcRLErz/09QTYnrnvj4P03ffvRdAg87Taj4H48f2HjoL49Y4JR6H+OIJBA5XfXzobkwb5UyYKNw1Sd+77YYI0yF8NUwnTQHfaGxtj0iB/P71wCIMG6qufngfh8+kiaKD4/qKMg9BwPwgOv2uLD4DE7TsdD0DjHZP+A9R3omwfnAaF38S3ezBokPxXjT1g+x4v3Y1BA9093/3hLjj9Gxx/CBoSjzsJ0iB/lEzegZMGukP+5rntGDTQmvnHvAnTkHSyDSf9G5x+tlJE7ynZDDIvnk93E4gPjJeN9gDJr54OiAMAAA=="},"shape":[113],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212491","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212492"}}},"glyph":{"type":"object","name":"Line","id":"p212487","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p212489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p212500","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212494","attributes":{"selected":{"type":"object","name":"Selection","id":"p212495","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212496"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p212501","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212502"}}},"glyph":{"type":"object","name":"Line","id":"p212497","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212498","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p212499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p212439","attributes":{"tools":[{"id":"p212452"},{"id":"p212453"},{"id":"p212454"},{"id":"p212462"},{"type":"object","name":"SaveTool","id":"p212463"},{"id":"p212504"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p212447","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p212448","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p212449"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p212450"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p212442","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p212443","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p212444"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p212445"}}}],"center":[{"type":"object","name":"Grid","id":"p212446","attributes":{"axis":{"id":"p212442"}}},{"type":"object","name":"Grid","id":"p212451","attributes":{"dimension":1,"axis":{"id":"p212447"}}},{"type":"object","name":"Legend","id":"p212482","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p212483","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p212479"}]}},{"type":"object","name":"LegendItem","id":"p212493","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p212490"}]}},{"type":"object","name":"LegendItem","id":"p212503","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p212500"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p212505","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p212515","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p212507"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p212516"},"y_scale":{"type":"object","name":"LinearScale","id":"p212517"},"title":{"type":"object","name":"Title","id":"p212508","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p212546","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212540","attributes":{"selected":{"type":"object","name":"Selection","id":"p212541","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212542"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46RNfNf7aA2mFDUUfQDQDk/Z7EG1hGvfO/v///4+Xzj5iv/VaVHdq6VH7VatWbXpVfNR+9/d7twOdt9sDAEhrpoZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212547","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212548"}}},"glyph":{"type":"object","name":"Line","id":"p212543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212544","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p212545","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p212555","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212549","attributes":{"selected":{"type":"object","name":"Selection","id":"p212550","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212551"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46RNfNf7aA2mFDUUfQDQDk/Z7EG1hGvfO/v///4+Xzj5iv/VaVHdq6VH7VatWbXpVfNR+9/d7twOdt9sDAEhrpoZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212556","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212557"}}},"glyph":{"type":"object","name":"Line","id":"p212552","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212553","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p212554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p212566","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212560","attributes":{"selected":{"type":"object","name":"Selection","id":"p212561","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212562"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46RNfNf7aA2mFDUUfQDQDk/Z7EG1hGvfO/v///4+Xzj5iv/VaVHdq6VH7VatWbXpVfNR+9/d7twOdt9sDAEhrpoZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212567","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212568"}}},"glyph":{"type":"object","name":"Line","id":"p212563","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p212565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p212576","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212570","attributes":{"selected":{"type":"object","name":"Selection","id":"p212571","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212572"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p212577","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212578"}}},"glyph":{"type":"object","name":"Line","id":"p212573","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212574","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p212575","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p212514","attributes":{"tools":[{"id":"p212528"},{"id":"p212529"},{"id":"p212530"},{"id":"p212538"},{"type":"object","name":"SaveTool","id":"p212539"},{"id":"p212580"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p212523","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p212524","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p212525"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p212526"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p212518","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p212519"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p212520"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p212521"}}}],"center":[{"type":"object","name":"Grid","id":"p212522","attributes":{"axis":{"id":"p212518"}}},{"type":"object","name":"Grid","id":"p212527","attributes":{"dimension":1,"axis":{"id":"p212523"}}},{"type":"object","name":"Legend","id":"p212558","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p212559","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p212555"}]}},{"type":"object","name":"LegendItem","id":"p212569","attributes":{"label":{"type":"value","value":"Median Year (1976)"},"renderers":[{"id":"p212566"}]}},{"type":"object","name":"LegendItem","id":"p212579","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p212576"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p212581","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f8e929d9-bb31-4512-a59e-f7df70ea069e","roots":{"p212592":"e5702f55-9bcc-4c66-bb8a-e30490234f64"},"root_ids":["p212592"]}];
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