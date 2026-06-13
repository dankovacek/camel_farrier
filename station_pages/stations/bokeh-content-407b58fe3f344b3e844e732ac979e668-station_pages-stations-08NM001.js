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
    
    
    const element = document.getElementById("b795997a-2dc8-4653-97ff-3687e26a589f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b795997a-2dc8-4653-97ff-3687e26a589f' but no matching script tag was found.")
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
                  const docs_json = '{"a86e99e5-9f73-43c3-b08a-c417adbc28ea":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p654128","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p654129"}}},"roots":[{"type":"object","name":"Column","id":"p654292","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p654289","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p654288","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p654281","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p654152"},{"type":"object","name":"PanTool","id":"p654228"}]}},{"type":"object","name":"ToolProxy","id":"p654282","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p654153","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p654229","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p654283","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p654154","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p654155","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p654161","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p654160","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p654230","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p654231","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p654237","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p654236","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p654284","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p654162"},{"type":"object","name":"ResetTool","id":"p654238"}]}},{"type":"object","name":"SaveTool","id":"p654285"},{"type":"object","name":"ToolProxy","id":"p654286","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p654204","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p654287","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p654280","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p654130","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p654131"},"y_range":{"type":"object","name":"DataRange1d","id":"p654132"},"x_scale":{"type":"object","name":"LinearScale","id":"p654140"},"y_scale":{"type":"object","name":"LogScale","id":"p654141"},"title":{"type":"object","name":"Title","id":"p654133","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p654170","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654164","attributes":{"selected":{"type":"object","name":"Selection","id":"p654165","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654166"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAIHVweu64s3HON2ddCM6VeK6XdxAIompKUh6FkzZ1pyhYP5QPUuDksKbF9dUALzF8yUxKSrRNal7/niDJJ3MN7s7HB9cYHshiIwHyji7DBz5sybiw2cHb5pxPCvueMEEl8w86aTQ3T/odKpzU4g8714mJwc0tLS2g6VOjq8Dtxxb6m0I0gd0DwHEA10Hwp94IyPg8MuuVbv3un2DnZc15m12e1B6oDidnA6PS3tWdUUW4egHXKtL9VsHQ5/1YixjrdxKLTlun6u3NrB/WFVyK6TVg7MQHse/rKE2GdsCZIvzxC0dPAAyj+9YAHyz17PHgsHSLhYOCwFute809xhwqGvGoYc5hD7zphB/NFkBjXHzEFsnXuiwA1TCH8zlDY2dXhUJeJn3mkCEgeGJ5g+cOaMMVSdsUMB0P4DXsag+GFqnGoECpdnVSJGDq2vAysOnDKE6JuJoIHx+SE4GcwH+p8s2sHYGGqepCE0PsB8IDCEhNt9A4j5Z7DSwHgCi8PoBTNngvlY6Zj+Q1s/1xo4vAncMe9jENQ8H7w00H1Q8yE0MNwMoOECFgcCTBoSf/oO586c6Tn0Vc+h7XWgxV0VPYebiwvuqrDpQP2lDdIPTF8IGgCjHgFSKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p654171","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654172"}}},"glyph":{"type":"object","name":"Line","id":"p654167","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654168","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p654169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p654179","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654173","attributes":{"selected":{"type":"object","name":"Selection","id":"p654174","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654175"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAIHVweu64s3HON2ddCM6VeK6XdxAIompKUh6FkzZ1pyhYP5QPUuDksKbF9dUALzF8yUxKSrRNal7/niDJJ3MN7s7HB9cYHshiIwHyji7DBz5sybiw2cHb5pxPCvueMEEl8w86aTQ3T/odKpzU4g8714mJwc0tLS2g6VOjq8Dtxxb6m0I0gd0DwHEA10Hwp94IyPg8MuuVbv3un2DnZc15m12e1B6oDidnA6PS3tWdUUW4egHXKtL9VsHQ5/1YixjrdxKLTlun6u3NrB/WFVyK6TVg7MQHse/rKE2GdsCZIvzxC0dPAAyj+9YAHyz17PHgsHSLhYOCwFute809xhwqGvGoYc5hD7zphB/NFkBjXHzEFsnXuiwA1TCH8zlDY2dXhUJeJn3mkCEgeGJ5g+cOaMMVSdsUMB0P4DXsag+GFqnGoECpdnVSJGDq2vAysOnDKE6JuJoIHx+SE4GcwH+p8s2sHYGGqepCE0PsB8IDCEhNt9A4j5Z7DSwHgCi8PoBTNngvlY6Zj+Q1s/1xo4vAncMe9jENQ8H7w00H1Q8yE0MNwMoOECFgcCTBoSf/oO586c6Tn0Vc+h7XWgxV0VPYebiwvuqrDpQP2lDdIPTF8IGgCjHgFSKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p654180","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654181"}}},"glyph":{"type":"object","name":"Line","id":"p654176","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654177","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p654178","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p654190","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654184","attributes":{"selected":{"type":"object","name":"Selection","id":"p654185","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654186"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2Ve4hVZRTFDQXLMjVNS6tJx2Z09OrceXrveGfWfb/vPe9zpMCgP6LpbVExQqHQw0oqwshQUDAIreyJRoFhIDVUlPTAIKFAtLdGlMUInf3tdf+5nLnn29/ea/3Wnsoc7/O7fvh2rGK+T489cOmRxfN/Osfnf8bihy2TJy7w7xdh4/Ztf+HUDOj7M9H33HWv7Pp+FvS92dg6eSIxNT4XWmcebm/sm9lz63yeWwC5JbxlIc8vQsZKvf/oxqtZZzG6jk/f8faN17DetZhrDnSw7vWYGpeCS1l/Kc4dSMYdLOM9nTj168KHB7uW877lkG4a+27gvV0w1y/r5v3d+OjgscLEnhXsYyUOnZWCPeynB69K+V2r2Ndq7N0kkyXYXwJxs+e/fnEN+1yL4sSe+I1e9tsLUXPLZC/7TiIdT7t9W5L9J/GOHK/0cY4+rDED9nOefsTiHj14rJ9zDaDTCDbA+QawW34uDHLOQSyKpz8+fYjzDsHYc3SIcw/jMtPQMOcfxmPG0HXUYR2mmU+KeqSwWcY5kqIuacTmxwqnqU8ad4ucmRHqNIIzMS2JqRHqtR7xj3HD66lbBiel3YkM9ctATlupUeo4CmP/+VHqOYam4HNojLpC642A+kLrvgTqDBg5/gP1zmKJyL8hS92ziOS+97LUP6v3XpWjDzm9/6Ec/chB45GjL3kYnIfz9CePJ0WQF/L0KQ+hadPfefpVwAwZxy/QtwKyIt+7BfpXgLHryiJ9LMLgcX+RfhYhdMz5qkhfSxiSgPSX6G8J9wmOz5focwlvSAN/luh3Gb9JHJwyfS8jFvPsgTfL9L8MeUzOq5CDCl4Wue+pkIcKjL1fVMhFFQantVXyUYXB95kqOalipyyG36vkpYZv4va9Vo3c1LBA1slrNfJTg4n/7Do5qsOslzvq5KkOs04+rZOrOi6WAVY1yFdDuXiqQc4aMPj93CBvTeWi1iR3TeVif5P8NZWLS1rksIUHZf/d1iKPLZh4f9wily2Y9bCiTT7bysXjbXLaVi5Ot8mrpT51WuTWUr9ci/xa6ttWixxb6t9bFnm21McfLXJtqZ9X2OTbVl+zNjm31d97bfJuq897bXJvq99f2uTfVt+nOcyBo/73OsyDoxzc7DAXjvLwrMN8OMrFhw5z4qBD+PjDYV5c5aTDZW5c5aXtMj8uzLp8xGWOXOXndZd5cnFYBD/pMleu8nS5x3x5ytWox5x5MP+u7vSYN0852+0xd57y9pnH/HnK3QWPOfSVv9U+8+grhzf5zKWvPD7tM58+5LrEBz5z6iufv/jMa4BuWWhLAuY2UC7qAfMbKBebA+Y4UC72B8xzoFx8FzDXgXIxK2S+Q+UiHTLnoXIxHjLvoXKxM2TuQ+Xik5D5D5WLf0PugUi5WBlxH0TKRRRxL0TKxRMR90OkXByOuCci5eJMxH2xAf8DcT3JHGAIAAA="},"shape":[268],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/82Vy1ECQRCG0SxIgIsWPhYBUXREvBEEp43DAEhgb5xMgAAkgE3ABEjAAPCbv3tdtmCRKrHKuXz193O6ZykaDU54CRHOkHyOw3q9fs/zcbRP0zdn+itSX/k/cZ41FXdU2jzPsW5IFns5TVP5C5IhXUf2NYr+gvPsQ7qO9B/ZfmeKo4/HN0WOSNxT5DKficQ5WxXikiY+bJI8afIO4jKfKK7gNG1Jc0I4VZ3HqHmXkrKvHsyeieTvJSHyc9+h1y0pezL0evebpK70Ms/v3C5iFzmu80HU1BfxD6zP6jbqRuNVpE+FzCUt2lz9b2Knb9/8WYXUkxZtT+5viuT13N9zvzT9Xa+6HreT8yyTnfpdz5cmv6Td98bve2P+xTbtfm5PSlp+J+bRr+N9pOnj9qbIEZkr2UX2Lrto/TxuIrLfIu86auaqkH7SfFdXkfSpkLrS3PMgUl9xfL9eZ/Ivydy6Vx3Zm89bJSmy15E9XkZ/QfYpfSzyHqpXR95J/mOTd1Xdgryvz2nkd+9z/g15J5/7MPJ+vofdZBCf5wi0/7uLcKLvqaTZ2/4ebfdLcwr7uettWv6Z54vsvZ5fXsKwQWAIAAA="},"shape":[268],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p654191","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654192"}}},"glyph":{"type":"object","name":"Line","id":"p654187","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654188","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p654189","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p654200","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654194","attributes":{"selected":{"type":"object","name":"Selection","id":"p654195","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654196"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p654201","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654202"}}},"glyph":{"type":"object","name":"Line","id":"p654197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654198","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p654199","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p654139","attributes":{"tools":[{"id":"p654152"},{"id":"p654153"},{"id":"p654154"},{"id":"p654162"},{"type":"object","name":"SaveTool","id":"p654163"},{"id":"p654204"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p654147","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p654148","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p654149"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p654150"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p654142","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p654143","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p654144"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p654145"}}}],"center":[{"type":"object","name":"Grid","id":"p654146","attributes":{"axis":{"id":"p654142"}}},{"type":"object","name":"Grid","id":"p654151","attributes":{"dimension":1,"axis":{"id":"p654147"}}},{"type":"object","name":"Legend","id":"p654182","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p654183","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p654179"}]}},{"type":"object","name":"LegendItem","id":"p654193","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p654190"}]}},{"type":"object","name":"LegendItem","id":"p654203","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p654200"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p654205","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p654215","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p654207"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p654216"},"y_scale":{"type":"object","name":"LinearScale","id":"p654217"},"title":{"type":"object","name":"Title","id":"p654208","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p654246","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654240","attributes":{"selected":{"type":"object","name":"Selection","id":"p654241","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654242"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKid770ne99ypTh+QeQ7dHVx0dXFxcTIyFXRx+3KvOP7fT3qH2/d7wiRVmDkpKSkxzvxk4vN/7fV/KTwMHoCEJac8MHK5HZfcaHtNzAACG4adBYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p654247","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654248"}}},"glyph":{"type":"object","name":"Line","id":"p654243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p654245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p654255","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654249","attributes":{"selected":{"type":"object","name":"Selection","id":"p654250","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654251"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKid770ne99ypTh+QeQ7dHVx0dXFxcTIyFXRx+3KvOP7fT3qH2/d7wiRVmDkpKSkxzvxk4vN/7fV/KTwMHoCEJac8MHK5HZfcaHtNzAACG4adBYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p654256","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654257"}}},"glyph":{"type":"object","name":"Line","id":"p654252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p654254","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p654266","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654260","attributes":{"selected":{"type":"object","name":"Selection","id":"p654261","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654262"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKid770ne99ypTh+QeQ7dHVx0dXFxcTIyFXRx+3KvOP7fT3qH2/d7wiRVmDkpKSkxzvxk4vN/7fV/KTwMHoCEJac8MHK5HZfcaHtNzAACG4adBYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p654267","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654268"}}},"glyph":{"type":"object","name":"Line","id":"p654263","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654264","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p654265","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p654276","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p654270","attributes":{"selected":{"type":"object","name":"Selection","id":"p654271","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p654272"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p654277","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p654278"}}},"glyph":{"type":"object","name":"Line","id":"p654273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p654274","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p654275","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p654214","attributes":{"tools":[{"id":"p654228"},{"id":"p654229"},{"id":"p654230"},{"id":"p654238"},{"type":"object","name":"SaveTool","id":"p654239"},{"id":"p654280"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p654223","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p654224","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p654225"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p654226"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p654218","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p654219"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p654220"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p654221"}}}],"center":[{"type":"object","name":"Grid","id":"p654222","attributes":{"axis":{"id":"p654218"}}},{"type":"object","name":"Grid","id":"p654227","attributes":{"dimension":1,"axis":{"id":"p654223"}}},{"type":"object","name":"Legend","id":"p654258","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p654259","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p654255"}]}},{"type":"object","name":"LegendItem","id":"p654269","attributes":{"label":{"type":"value","value":"Median Year (1914)"},"renderers":[{"id":"p654266"}]}},{"type":"object","name":"LegendItem","id":"p654279","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p654276"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p654291","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a86e99e5-9f73-43c3-b08a-c417adbc28ea","roots":{"p654292":"b795997a-2dc8-4653-97ff-3687e26a589f"},"root_ids":["p654292"]}];
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