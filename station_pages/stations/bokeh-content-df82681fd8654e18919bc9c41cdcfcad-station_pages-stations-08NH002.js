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
    
    
    const element = document.getElementById("d95554c7-c5d0-4fc0-af41-4df073439f32");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd95554c7-c5d0-4fc0-af41-4df073439f32' but no matching script tag was found.")
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
                  const docs_json = '{"bafe8b53-c9ea-4604-89e7-3786639e4d87":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p470417","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p470418"}}},"roots":[{"type":"object","name":"Column","id":"p470581","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p470579","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p470578","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p470571","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p470441"},{"type":"object","name":"PanTool","id":"p470517"}]}},{"type":"object","name":"ToolProxy","id":"p470572","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p470442","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p470518","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p470573","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p470443","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p470444","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p470450","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p470449","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p470519","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p470520","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p470526","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p470525","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p470574","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p470451"},{"type":"object","name":"ResetTool","id":"p470527"}]}},{"type":"object","name":"SaveTool","id":"p470575"},{"type":"object","name":"ToolProxy","id":"p470576","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p470493","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p470577","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p470569","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p470419","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p470420"},"y_range":{"type":"object","name":"DataRange1d","id":"p470421"},"x_scale":{"type":"object","name":"LinearScale","id":"p470429"},"y_scale":{"type":"object","name":"LogScale","id":"p470430"},"title":{"type":"object","name":"Title","id":"p470422","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p470459","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470453","attributes":{"selected":{"type":"object","name":"Selection","id":"p470454","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470455"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4WSMUgCURjHLyWICFIzzMrSIiqiCG4RinpJdWeJdFpRIGQE1tAgBCG2uNhqY04GQjRZ0OIQJS01HNRmbbpEYIMQgUR03fe9L6iW3nA//u97//f9370nCPpgS0z/jopDi0BBSASBW5GRINeFAK8HA1xXFeCAuIdk4vkCr88j79UXP5/f8ZPfxzRNW4ss+0jPA4/S6bl/qfuu1KY58nkpn5fn20WGI0/yT+p1mftXZZ7jVQLWtFOJ5iU+L/6hUeL91FnaZ5bWE+00X5rh/Y5/8VbdnqF135z+yQf1wsP9zMPqBKFBOJoiPcWMkC8zyQx4jgnIsRnZH6d8Y6wGuXxuqOv/RWQfmpZJPw7DProe5PsV+tmnBqMPfCv5y15gKW5FPiuxHqAzWXEBC28nyFI2igynDC66TyfeYzbqpP7IxPVbN+pyHHmYtiMLqtoFue6zVQdpB6uHV+J2UP9O7JuTOvCdhFLt+H5Cd3Za34brlJqNvx9fK7Atd2MlnxXOJ5ffW0AfVJQW8lmwHkohTcUNZDjfZeHnrZkxtzWHrCoxMz+nByk32khfm/AeilnkmbSOHEgOmcjfzL4ANd11+ygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470460","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470461"}}},"glyph":{"type":"object","name":"Line","id":"p470456","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470457","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p470468","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470462","attributes":{"selected":{"type":"object","name":"Selection","id":"p470463","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470464"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4WSMUgCURjHLyWICFIzzMrSIiqiCG4RinpJdWeJdFpRIGQE1tAgBCG2uNhqY04GQjRZ0OIQJS01HNRmbbpEYIMQgUR03fe9L6iW3nA//u97//f9370nCPpgS0z/jopDi0BBSASBW5GRINeFAK8HA1xXFeCAuIdk4vkCr88j79UXP5/f8ZPfxzRNW4ss+0jPA4/S6bl/qfuu1KY58nkpn5fn20WGI0/yT+p1mftXZZ7jVQLWtFOJ5iU+L/6hUeL91FnaZ5bWE+00X5rh/Y5/8VbdnqF135z+yQf1wsP9zMPqBKFBOJoiPcWMkC8zyQx4jgnIsRnZH6d8Y6wGuXxuqOv/RWQfmpZJPw7DProe5PsV+tmnBqMPfCv5y15gKW5FPiuxHqAzWXEBC28nyFI2igynDC66TyfeYzbqpP7IxPVbN+pyHHmYtiMLqtoFue6zVQdpB6uHV+J2UP9O7JuTOvCdhFLt+H5Cd3Za34brlJqNvx9fK7Atd2MlnxXOJ5ffW0AfVJQW8lmwHkohTcUNZDjfZeHnrZkxtzWHrCoxMz+nByk32khfm/AeilnkmbSOHEgOmcjfzL4ANd11+ygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470469","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470470"}}},"glyph":{"type":"object","name":"Line","id":"p470465","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470466","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p470467","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p470479","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470473","attributes":{"selected":{"type":"object","name":"Selection","id":"p470474","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470475"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3SWW4UVxQG4FiKFAkJKUQgIyIQmDBPtvGM7b49z901VyHBLmAVziocVmFW4bxkCXEe85SnSJjrzy/t6rrnO3/91YPVj5/O+3+1BvHz79bn8/7lf/+6/q8VP1b/9/1KiJcffwxX938Kb84uTk9eXwtX566HH+Lfz+Hq/I3wz+Xds4tfzN0M8evzW+ZXQxw/u825E/74fvz0V97d8Pv3y5N73PvO3+c/MLdmz5r5h/b9xnlk7yPeY/ufcJ9yn4Y49ukZ9zn3OfcF9yX3FfcV9zX3DXfd+XX+urkN+TfCn3F+w75Nzqa9m7y39r/lbnG3uFvcbfm35drm7nB3uDvcXe4ud4+7x93j7nP3ufvcgxDHTw64ByHe7r/jvgsr0T3kHoav0T3kHunhiHvEPZb3OMTjF8fytkK8PG3JG4La+cFckD/IFexrc9r2tuVsew9tbkeODrfD7cjf4XbC7Xigy+3qqcvteq4utydvj9vTX0/enuftydvn9rl9bp/b5w7kHXAH8g64A3kH3CF3qIchd6iHIXfEHXFH3BF3xB1xx9yxvGPvayzvmDvhTsKHeHCihwl3wp3od+p3NeVO5Z3KO/U7m+l3Ju9M3pn3NtPvTN65vHM9zMOX6M7lncu7kHfBXXAX8i64C+6Su+Qu9bDkLrmJ50vkTswl9iSeN7Ev8dyJvQkv0VfCTeVIuSk35aZypXpPuSk31WvquVJuxs30kXEzbiZvJm/GzfSfyZvJm3FzPeTy5tycm3Nzbs7N5c25OTfnFvIW3IJbcAs9FHoouAW30EOhh4Jbcks9lNySW8pbyltyS24pbylvya24FbfiVtyKW3ErbsWtuBW34tbcWg81t+bWeqj1UHNrbq2HmltzG24jb8NtuI28jbwNt+E28jbchvs+fAO+HGfPmAgAAA=="},"shape":[275],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7WTO2iTURTHo6BDEZqXNGlsnhobBBEiFEljv0abh401SVtE6NApc8HJTlm6FTp3CxTEQbp06Wbo4JTFKbjZpUvG0qFTPLnnl8ZL0wiC35Bfzut/zj33+1wueZx1R36b+/trfW7W766pfbnaZ6v91dBJrxrKP4uSV9O6s5r6W7BZ0/gn4nn8UfyXVerg96r228XOV8mvav+jCroVrf9QIa+i8TRx1zuN/1zhXCsa/2hRnrfMWyavTLzs9Hq9b+0yvDekxpexl6l789+p/a5T5y+NZmMsZX8ldErcQ/FGmrw29uci9TdTdYu6r/PCFVWngE6BeQrUWZT7/Eee5+lzndo3T1+L0teiKGEHR1L6LKE7pOqPpfSzuFmvYztL6A+puq+x/8ZXvPc5vpec1u/m6JMjL8f7P8hbJG5RIovEHfUnHee2iS+gs6D22csran6W93Zev+fyPOfNcE8Z+mc03n4B59CdI/6c/DQ6z9B9Cp+wnxR2yrll8gecxf+YvCTnS+J/hP+h8e+dJLTuyNDVSST6/l/b/gR58b7d8B/G0VEeh+PMa+hMdGKmrnps2Lr4YjG6safxg62Y5r83bGQnYuio3f0RZZ82T7ctNrrVqM6fIy9t2Arf0fjJReRPylwR6i26UhsRnXPWMLrTDXMvFiU/TP7APzOOct4ZzjuwH7BXi67OQUjn3glxjhBzT3Nf08Qtyr6DnCvI/EH6B7ivAHMH8E+hP4XOfeawKLp++vq5b8PoYcGi9POzLx91Pup83KuPuJf+FmU+L3uxKPN62bNhcyvr5X0bSXk0r3DqQd+DvkXR93AfFuU98rAXi6LvQd+DvpvvxaLcn0XZqxt9N/oWRd/Nvt3sZ5I5J53fmbdjHZgIAAA="},"shape":[275],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470480","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470481"}}},"glyph":{"type":"object","name":"Line","id":"p470476","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470477","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p470478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p470489","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470483","attributes":{"selected":{"type":"object","name":"Selection","id":"p470484","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470485"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p470490","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470491"}}},"glyph":{"type":"object","name":"Line","id":"p470486","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470487","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p470428","attributes":{"tools":[{"id":"p470441"},{"id":"p470442"},{"id":"p470443"},{"id":"p470451"},{"type":"object","name":"SaveTool","id":"p470452"},{"id":"p470493"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p470436","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p470437","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p470438"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470439"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p470431","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p470432","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p470433"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470434"}}}],"center":[{"type":"object","name":"Grid","id":"p470435","attributes":{"axis":{"id":"p470431"}}},{"type":"object","name":"Grid","id":"p470440","attributes":{"dimension":1,"axis":{"id":"p470436"}}},{"type":"object","name":"Legend","id":"p470471","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p470472","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p470468"}]}},{"type":"object","name":"LegendItem","id":"p470482","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p470479"}]}},{"type":"object","name":"LegendItem","id":"p470492","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p470489"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p470494","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p470504","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p470496"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p470505"},"y_scale":{"type":"object","name":"LinearScale","id":"p470506"},"title":{"type":"object","name":"Title","id":"p470497","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p470535","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470529","attributes":{"selected":{"type":"object","name":"Selection","id":"p470530","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470531"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9J7du4WbGcwcorPXXm3Y5uXg4uLS8nqit0P22q3brt3yczA6JsGce8vNAahuc2OfroNkco9gd6+Cg7GxcTN7sYTD3OJzmjH9gg4AEtlEIWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470536","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470537"}}},"glyph":{"type":"object","name":"Line","id":"p470532","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470533","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470534","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p470544","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470538","attributes":{"selected":{"type":"object","name":"Selection","id":"p470539","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470540"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9J7du4WbGcwcorPXXm3Y5uXg4uLS8nqit0P22q3brt3yczA6JsGce8vNAahuc2OfroNkco9gd6+Cg7GxcTN7sYTD3OJzmjH9gg4AEtlEIWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470545","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470546"}}},"glyph":{"type":"object","name":"Line","id":"p470541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470542","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p470543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p470555","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470549","attributes":{"selected":{"type":"object","name":"Selection","id":"p470550","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470551"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9J7du4WbGcwcorPXXm3Y5uXg4uLS8nqit0P22q3brt3yczA6JsGce8vNAahuc2OfroNkco9gd6+Cg7GxcTN7sYTD3OJzmjH9gg4AEtlEIWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470556","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470557"}}},"glyph":{"type":"object","name":"Line","id":"p470552","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470553","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p470554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p470565","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470559","attributes":{"selected":{"type":"object","name":"Selection","id":"p470560","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470561"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p470566","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470567"}}},"glyph":{"type":"object","name":"Line","id":"p470562","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470563","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p470503","attributes":{"tools":[{"id":"p470517"},{"id":"p470518"},{"id":"p470519"},{"id":"p470527"},{"type":"object","name":"SaveTool","id":"p470528"},{"id":"p470569"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p470512","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p470513","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p470514"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470515"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p470507","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p470508"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p470509"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p470510"}}}],"center":[{"type":"object","name":"Grid","id":"p470511","attributes":{"axis":{"id":"p470507"}}},{"type":"object","name":"Grid","id":"p470516","attributes":{"dimension":1,"axis":{"id":"p470512"}}},{"type":"object","name":"Legend","id":"p470547","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p470548","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p470544"}]}},{"type":"object","name":"LegendItem","id":"p470558","attributes":{"label":{"type":"value","value":"Median Year (1915)"},"renderers":[{"id":"p470555"}]}},{"type":"object","name":"LegendItem","id":"p470568","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p470565"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p470570","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"bafe8b53-c9ea-4604-89e7-3786639e4d87","roots":{"p470581":"d95554c7-c5d0-4fc0-af41-4df073439f32"},"root_ids":["p470581"]}];
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