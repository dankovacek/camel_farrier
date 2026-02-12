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
    
    
    const element = document.getElementById("f20c1713-8e65-4f11-826f-7c0d7b24a938");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f20c1713-8e65-4f11-826f-7c0d7b24a938' but no matching script tag was found.")
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
                  const docs_json = '{"c13633f2-790b-4755-adbb-8f1ce9bc000d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p876758","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p876759"}}},"roots":[{"type":"object","name":"Column","id":"p876922","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p876919","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p876918","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p876911","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p876782"},{"type":"object","name":"PanTool","id":"p876858"}]}},{"type":"object","name":"ToolProxy","id":"p876912","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p876783","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p876859","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p876913","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p876784","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p876785","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p876791","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p876790","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p876860","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p876861","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p876867","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p876866","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p876914","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p876792"},{"type":"object","name":"ResetTool","id":"p876868"}]}},{"type":"object","name":"SaveTool","id":"p876915"},{"type":"object","name":"ToolProxy","id":"p876916","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p876834","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p876917","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p876910","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p876760","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p876761"},"y_range":{"type":"object","name":"DataRange1d","id":"p876762"},"x_scale":{"type":"object","name":"LinearScale","id":"p876770"},"y_scale":{"type":"object","name":"LogScale","id":"p876771"},"title":{"type":"object","name":"Title","id":"p876763","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p876800","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876794","attributes":{"selected":{"type":"object","name":"Selection","id":"p876795","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876796"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAIHVweu64s3HON2ddCM6VeK6XdxAIompKUh6FkzZ1pyhYP5QPUuDksKbF9dUALzF8yUxKSrRNal7/niDOI7GG92dri+uEB2Q5EzVL+zw8yZM28uNnB2+KYRw7/mjhNE300nh+j+Q6VTm51A5nvxMDk5pKWltR0qdXR4Hbjj3lJpR6h5DlB3odAHzvg4OOySa/XunW7vYMd1nVmb3R4qbgen09PSnlVNsXUI2iHX+lLN1uHwV40Y63gbh0Jbruvnyq0d3B9Whew6aeXADLTn4S9LiH3GliD58gxBSwcPoPzTCxYg/+z17LGAhouFw1Kge807zR0mHPqqYchhDrHvjBnEH01mUHPMHMTWuScK3DCF+gNKG5s6PKoS8TPvNIGGnwlUvzFUnbFDAdD+A17GoPhhapxqBAqXZ1UiRg6trwMrDpwyhOibiaCB8fkhONkQ6m+yaKC7oOZJGkLjwxASfwyGkHC7bwB1J1Ya6G4UGugu3HRM/6Gtn2sNHN4E7pj3MQhqjg9eGug+FBroTgNouBhA3YlJQ+JP3+HcmTM9h77qObS9DrS4q6LncHNxwV0VNh2ov7Sh6QpBAwCjHgFSKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p876801","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876802"}}},"glyph":{"type":"object","name":"Line","id":"p876797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p876799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p876809","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876803","attributes":{"selected":{"type":"object","name":"Selection","id":"p876804","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876805"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAIHVweu64s3HON2ddCM6VeK6XdxAIompKUh6FkzZ1pyhYP5QPUuDksKbF9dUALzF8yUxKSrRNal7/niDOI7GG92dri+uEB2Q5EzVL+zw8yZM28uNnB2+KYRw7/mjhNE300nh+j+Q6VTm51A5nvxMDk5pKWltR0qdXR4Hbjj3lJpR6h5DlB3odAHzvg4OOySa/XunW7vYMd1nVmb3R4qbgen09PSnlVNsXUI2iHX+lLN1uHwV40Y63gbh0Jbruvnyq0d3B9Whew6aeXADLTn4S9LiH3GliD58gxBSwcPoPzTCxYg/+z17LGAhouFw1Kge807zR0mHPqqYchhDrHvjBnEH01mUHPMHMTWuScK3DCF+gNKG5s6PKoS8TPvNIGGnwlUvzFUnbFDAdD+A17GoPhhapxqBAqXZ1UiRg6trwMrDpwyhOibiaCB8fkhONkQ6m+yaKC7oOZJGkLjwxASfwyGkHC7bwB1J1Ya6G4UGugu3HRM/6Gtn2sNHN4E7pj3MQhqjg9eGug+FBroTgNouBhA3YlJQ+JP3+HcmTM9h77qObS9DrS4q6LncHNxwV0VNh2ov7Sh6QpBAwCjHgFSKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p876810","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876811"}}},"glyph":{"type":"object","name":"Line","id":"p876806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p876808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p876820","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876814","attributes":{"selected":{"type":"object","name":"Selection","id":"p876815","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876816"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Ve4hVVRTGDQXLMjVNS6tJx2Z0dHTuPJ073rnffb/vPe9zpMCgP6LpbVExQpHQw0oqwshQUDAIreyJisGEgZRUlPTAIKFAtLTSkLIYobP2+uafwz1n77XX+r7ft6c8y/vqvp9/SJfN81T6kSsnFs799Tx//5OOfzx59Pglvr8M67dsvoCT06Dfp6P35Zve3P7TDOi6mdh09Hj35Nhs6Po5uLu+e3rXnXO5bx5kV3jHfO5fgJQ1fOip9dezzkJ0HJu69YNbb2C9GzHbbGhj3ZsxOSYFF7P+Ypzfm4h3LuE57Th5dv7jAx1Led5SyK767lt4bgfMY0knz+/Ep/uO5Md3LmMfy7H/nBTsYj9deEvKb1/BvlZi1wY5uZv9dSN+efG711axz9UojO+MV/Sw3x5MmIU97DuBZHzKls0J9p/Ah7K93Ms5erHKLOzjPH2Imzi870gf5+pHu2m0n/P1Y4d8zg9wzgEsiFcdmzrIeQdhxjg8yLmHcJVpaIjzD+FpU2gNdViDKeZvmHoMY6OMMzFMXZK4YDpJUp8k7peyqRHqNILTosrkCPVai/hjXGktdUvhhLQ7nqJ+KYRmwSh1HIXZdnGUeqbREBn2p6krtN4IqC+07uugzoCR4z9Q7wwWyet1GeqeQSQFDmaof0bPvS5LH7J6/mNZ+pGFxiNLX3Iwtgzl6E8Oz4kgr+boUw6i4oa/c/Qrj2lygJ+nb3lk5MNHefqXh7Hr2gJ9LMC0+XCBfhYgXc36tkBfixgUYfuK9LeIh2SQV4r0uYh3pYG/ivS7hN+lDadE30uIxTy3970S/S9BfibmlMlBGW+I3A+UyUMZxt6vy+SiAnPM6gr5qMDI9mKFnFSwTQr/USEvVXwft+81q+Sminli+9tV8lOFKTOzRo5qMLLcUyNPNRibv6iRqxoulwFW1MlXXbl4vk7O6jDLfquTt4ZyUW2Qu4ZysadB/hrKxRVNctjEo8LFXU3y2IR5fNYkl02YsZa1yGdLuXimRU5bysWpFnm11Kd2i9xa6pdrkV9LfdtkkWNL/XvfIs+W+viLRa4t9fMam3zb6mvGJue2+vugTd5t9XmXTe5t9fsbm/zb6vsUhzlw1P8eh3lwlIPbHebCUR5ecpgPR7n4xGFOHLQJH386zIurnLS5zI2rvLRc5seFkekJlzlylZ93XObJxQER/ITLXLnK09Ue8+UpV6Mec+bB2Hqvx7x5ytkOj7nzlLcvPebPU+4uecyhr/yt9JlHXzm8zWcufeXxBZ/59GH+C3zsM6e+8nnGZ14DdIpwiwLmNlAuagHzGygXGwPmOFAu9gTMc6Bc/Bgw14FyMSNkvkPlIhky56FyMRYy76FysS1k7kPl4vOQ+Q+Vi39D3gORcrE84n0QKRdRxHshUi6ejXg/RMrFgYj3RKRcnI54X6zD/3E9yRxgCAAA"},"shape":[268],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/82Vy1HCUBSGo12kATc4KCSGl+Al6o4iXFGHBdAAO1Y2YAFSQBqwARqwAPzJ+cLlDpjBEWa8m2/uefzncTOTKNJxzy7ydMnXk1uv1x9F8bS5v0zf4PRPlPJRXMzj09PmebT53mupfgPKU0vtK9/lYv5ZS9XJrZ9ZTh38cW66URU33nBZzMbEwauAOmPi3S6V58g7istiElD6Dn3nLsu4B/r0LO2rkd3nI/JrqTOizyG6nqU9GaJ3v0vlw2KAfYB9gC73oo9+H3+fPnsW99qjTkDN42nx3S1Nt0vdgNLztDnwx1VeB38Hf4e63FcZcQepOhn5GfkZ+Z6mc7elzb9Py+eeeFpeSr2UuBQ/9jhlzyn9JYeoOp6mg3+SoFPFt5kroOq17ftbtYgLKN0WfR5F6bb4ztGZ/Etq7lpqbwepU0vt8XaX2uNJqfeopd7hLNS7BtT7BtRez0q9y6+o96qlzulo/7sbd1HW9zR7kz02sTfJq+zX3Pdp+Q3iGuz7Z34DXsKwQWAIAAA="},"shape":[268],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p876821","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876822"}}},"glyph":{"type":"object","name":"Line","id":"p876817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p876819","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p876830","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876824","attributes":{"selected":{"type":"object","name":"Selection","id":"p876825","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876826"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p876831","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876832"}}},"glyph":{"type":"object","name":"Line","id":"p876827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p876829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p876769","attributes":{"tools":[{"id":"p876782"},{"id":"p876783"},{"id":"p876784"},{"id":"p876792"},{"type":"object","name":"SaveTool","id":"p876793"},{"id":"p876834"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p876777","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p876778","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p876779"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p876780"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p876772","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p876773","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p876774"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p876775"}}}],"center":[{"type":"object","name":"Grid","id":"p876776","attributes":{"axis":{"id":"p876772"}}},{"type":"object","name":"Grid","id":"p876781","attributes":{"dimension":1,"axis":{"id":"p876777"}}},{"type":"object","name":"Legend","id":"p876812","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p876813","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p876809"}]}},{"type":"object","name":"LegendItem","id":"p876823","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p876820"}]}},{"type":"object","name":"LegendItem","id":"p876833","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p876830"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p876835","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p876845","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p876837"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p876846"},"y_scale":{"type":"object","name":"LinearScale","id":"p876847"},"title":{"type":"object","name":"Title","id":"p876838","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p876876","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876870","attributes":{"selected":{"type":"object","name":"Selection","id":"p876871","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876872"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9N6Xvuu9V5k6JPcYuj266ujg4uJiYizs4vDjXnX+uZ32DrXv94ZPrDBzUFJSYpr7zcDh/d7v+1J+GjgANSekPTNwuB6V3Wt4TM8BAIbhp0FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p876877","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876878"}}},"glyph":{"type":"object","name":"Line","id":"p876873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p876875","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p876885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876879","attributes":{"selected":{"type":"object","name":"Selection","id":"p876880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876881"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9N6Xvuu9V5k6JPcYuj266ujg4uJiYizs4vDjXnX+uZ32DrXv94ZPrDBzUFJSYpr7zcDh/d7v+1J+GjgANSekPTNwuB6V3Wt4TM8BAIbhp0FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p876886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876887"}}},"glyph":{"type":"object","name":"Line","id":"p876882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p876884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p876896","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876890","attributes":{"selected":{"type":"object","name":"Selection","id":"p876891","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876892"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9N6Xvuu9V5k6JPcYuj266ujg4uJiYizs4vDjXnX+uZ32DrXv94ZPrDBzUFJSYpr7zcDh/d7v+1J+GjgANSekPTNwuB6V3Wt4TM8BAIbhp0FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p876897","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876898"}}},"glyph":{"type":"object","name":"Line","id":"p876893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p876895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p876906","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p876900","attributes":{"selected":{"type":"object","name":"Selection","id":"p876901","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p876902"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p876907","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p876908"}}},"glyph":{"type":"object","name":"Line","id":"p876903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p876904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p876905","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p876844","attributes":{"tools":[{"id":"p876858"},{"id":"p876859"},{"id":"p876860"},{"id":"p876868"},{"type":"object","name":"SaveTool","id":"p876869"},{"id":"p876910"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p876853","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p876854","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p876855"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p876856"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p876848","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p876849"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p876850"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p876851"}}}],"center":[{"type":"object","name":"Grid","id":"p876852","attributes":{"axis":{"id":"p876848"}}},{"type":"object","name":"Grid","id":"p876857","attributes":{"dimension":1,"axis":{"id":"p876853"}}},{"type":"object","name":"Legend","id":"p876888","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p876889","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p876885"}]}},{"type":"object","name":"LegendItem","id":"p876899","attributes":{"label":{"type":"value","value":"Median Year (1914)"},"renderers":[{"id":"p876896"}]}},{"type":"object","name":"LegendItem","id":"p876909","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p876906"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p876921","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c13633f2-790b-4755-adbb-8f1ce9bc000d","roots":{"p876922":"f20c1713-8e65-4f11-826f-7c0d7b24a938"},"root_ids":["p876922"]}];
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