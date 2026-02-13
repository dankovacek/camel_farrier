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
    
    
    const element = document.getElementById("b1dcd99b-0f36-41ef-9cf2-63dbf035cfaa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b1dcd99b-0f36-41ef-9cf2-63dbf035cfaa' but no matching script tag was found.")
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
                  const docs_json = '{"f3ce0466-9db7-427b-9d55-cf3da0f7e1d8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p651480","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p651481"}}},"roots":[{"type":"object","name":"Column","id":"p651644","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p651641","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p651640","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p651633","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p651504"},{"type":"object","name":"PanTool","id":"p651580"}]}},{"type":"object","name":"ToolProxy","id":"p651634","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p651505","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p651581","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p651635","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p651506","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p651507","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p651513","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p651512","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p651582","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p651583","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p651589","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p651588","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p651636","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p651514"},{"type":"object","name":"ResetTool","id":"p651590"}]}},{"type":"object","name":"SaveTool","id":"p651637"},{"type":"object","name":"ToolProxy","id":"p651638","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p651556","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p651639","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p651632","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p651482","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p651483"},"y_range":{"type":"object","name":"DataRange1d","id":"p651484"},"x_scale":{"type":"object","name":"LinearScale","id":"p651492"},"y_scale":{"type":"object","name":"LogScale","id":"p651493"},"title":{"type":"object","name":"Title","id":"p651485","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p651522","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651516","attributes":{"selected":{"type":"object","name":"Selection","id":"p651517","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651518"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSS0xTQRR9GCWkGOTzykdLKR+hfoDCA0KUMtcaxIURixqjqYqbqgtNCcqiYUHEkrjAChhJjTFIBWIsDQvRukClaiTxBTQYGiRQQIRIQZDw+qNYZ6YkzubmzNx755x77haGqdLOcdBsFwY9I/mgMdpPN7UpQOQw31uqUwDDMO/4YwrQarVzepbiKq02Fxpd6uKJjFxynxlhyYEwhgGOy4GHJtNrqSEbzhvthS8G98G0nr0e27AXZnA86JQDay1PHfdlkT7tJlMWRDrMX56UZUEwGHzL85ngUtseL3dnUh4/OndDPsdxIkcG4RPd15UOBRh3FKST+qn5BRlYy6cPeFUygvFJhiGe52vfSDAX7mRUtoTw65Kc2wWLuK87fCe5j7NIkgiPgVMDieS/C4HERFJfbxcSQIwbXqxNIHk1zUvxUGmTdt7pjSf1pc6KeEgxuPJK+sWER+uhKjHVnxchJn0m+26zhGfvcWDhvSDXPEhl6bxsUpbMJWlsKA6UIsdhZ0Uc/Xd+PZbkPSrZHwtqm9QwfiWG5MsMrmg6d6lhB3jlmuGP16KgUGO8ZX25HU5gPlcnt8Fl7MfGN4bM6WZkBgMOs07Z8jmIvpt1E2OWvwjrC/t5aQOFdAXQ0Wn9/ec9AVStFJ1RlQaQ1OCKqbasIyzXX1y2jjA/37M/fmQX5IGOFj8K+exHezTGmdUUP7qL90PV40NY7xFnhQ+FdPnQU51S9OqrF9E94b0I+xgcNVOMD431rNWD6ljrp8ZuD8F4th5al7bhJlimMf6PWEfybAPF7ToljVN61o2wHyNp4wIK+SEgXO7ZWiBs6luj0aVeQ0XY96a21c261c33FaJDdbZxhfIU5CsI71UNa11G2C9Ff+VvMhdHuGkRjZp1/b+GF9AHQS7RF83T/Buts+gfdHMIiygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p651523","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651524"}}},"glyph":{"type":"object","name":"Line","id":"p651519","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651520","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p651521","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p651531","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651525","attributes":{"selected":{"type":"object","name":"Selection","id":"p651526","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651527"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSS0xTQRR9GCWkGOTzykdLKR+hfoDCA0KUMtcaxIURixqjqYqbqgtNCcqiYUHEkrjAChhJjTFIBWIsDQvRukClaiTxBTQYGiRQQIRIQZDw+qNYZ6YkzubmzNx755x77haGqdLOcdBsFwY9I/mgMdpPN7UpQOQw31uqUwDDMO/4YwrQarVzepbiKq02Fxpd6uKJjFxynxlhyYEwhgGOy4GHJtNrqSEbzhvthS8G98G0nr0e27AXZnA86JQDay1PHfdlkT7tJlMWRDrMX56UZUEwGHzL85ngUtseL3dnUh4/OndDPsdxIkcG4RPd15UOBRh3FKST+qn5BRlYy6cPeFUygvFJhiGe52vfSDAX7mRUtoTw65Kc2wWLuK87fCe5j7NIkgiPgVMDieS/C4HERFJfbxcSQIwbXqxNIHk1zUvxUGmTdt7pjSf1pc6KeEgxuPJK+sWER+uhKjHVnxchJn0m+26zhGfvcWDhvSDXPEhl6bxsUpbMJWlsKA6UIsdhZ0Uc/Xd+PZbkPSrZHwtqm9QwfiWG5MsMrmg6d6lhB3jlmuGP16KgUGO8ZX25HU5gPlcnt8Fl7MfGN4bM6WZkBgMOs07Z8jmIvpt1E2OWvwjrC/t5aQOFdAXQ0Wn9/ec9AVStFJ1RlQaQ1OCKqbasIyzXX1y2jjA/37M/fmQX5IGOFj8K+exHezTGmdUUP7qL90PV40NY7xFnhQ+FdPnQU51S9OqrF9E94b0I+xgcNVOMD431rNWD6ljrp8ZuD8F4th5al7bhJlimMf6PWEfybAPF7ToljVN61o2wHyNp4wIK+SEgXO7ZWiBs6luj0aVeQ0XY96a21c261c33FaJDdbZxhfIU5CsI71UNa11G2C9Ff+VvMhdHuGkRjZp1/b+GF9AHQS7RF83T/Buts+gfdHMIiygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p651532","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651533"}}},"glyph":{"type":"object","name":"Line","id":"p651528","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651529","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p651530","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p651542","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651536","attributes":{"selected":{"type":"object","name":"Selection","id":"p651537","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651538"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TW4hNURzG1SQiTUKahGFmmBnmeuZ+O9+538/ZZ5+z9z6kJpFc4gGFQvHAAx548EIyySSTTDLJJJFLLpFIJBrkkltDueQS9lr/7/dyOufs/V9rfb9v9fYqRrz6o3fUu1vzg9//eQ8fUhRBfh+HjRsUEyH/F6P/uGIy5LkpOLBfMY3PT8c2TQnfm4HVqxQz+f5snNSUcs4c9B1VzOW8MhzUlHNuBfbtVczj/PnYqankOlXYsllRzfUWYJ1mIdetwXJNLdevQ42mnvuoR6WmgftpQJmmkftqxCyNh/vzoETTxH02YaqmmfttRrGmhftuwQRNK/ffirGaNp6jDWM07TxPO/78UrTzXB34/k3RwfN14stnRSfP2YVPHxRdPG833r5RdPPcPXj5QtHD83vxVONlDsBH9foaMA/InHdgLj6Zt8LHfHwy95WPOfll/lI/8/LLOiN+5hbAM7XckgDzC2Cx4kmAOQbx+JGLE2SeQdiWy8Mgcw3hwX0XM8R8QzAU90LMOYy7d1xSYeYdRkJxO8zcI7h5wyUaYf4RhBXXI/QQxdUrLoEofUTh97lcjtJLDBcVPTH6iaFLcSFGTzEMn3dpj9NXHK2Kc3F6i+OsoilBfwl4Gl3OJOgxgcHTLnVJ+kyKl1NJek1iQGmpTtFvSrycSNFzClpLRZq+0yhXWo6l6T0tXkoz9J8RL0cy7EFG8ptksA+G5Jg02AtD8txjsB+G5HrLYE8MyXd8ln3JSs6RLHuTlbx3ZdmfrOR+LcseZSX/IpN9MsWD32SvTPGxw2S/TPFyyWTPTPHz12TfctiuNHXn2Luc+NqaY/9y+K20DefYw5z4+5ljH/PisS3PXubF56Y8+5kXr0N59jSPIeX3a559taA1eyz21oLS3bjeYn8t8T5osceW+B+12GdbelBrs9e2eFlrs9+2eBmw2XNbvLy32XdHvFQ57L0jXlY67L8jXvod3gNHvLx2eB8K4qW8wHtREC/LCrwfBfHSV+A9KYiX5wXel0X4DymhrPVgBgAA"},"shape":[204],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/42UPUxTURiGDx0YSFBKb22xWgm1FlCp2pmcG43p4tKdoVNnBiemLiwaw8BgGEhquncwDmw2LDp0cJK1JAYSr7FEvCBivX73PW9/TtrBuzw55/t/v5MbUapcOSq4EfCRq5Sq7cw9NNx5EFKpqsVypQI2W88sShz9VM8v3+eEUm6hkKc97wZB8L7VWqF9hfYBTf37tPd4j/F3Gb9M/2X6L/G82Kfxy9FuUfLl6Jej350RGv/eOctzln1keX87PM9vehnawerqi0yYv+kvZqjfAvwaH+apG1jeegxW9/00894M6U4d3DD2fVAtrYG19VWwXV9PcY4U41Km7tR15puDfS8NtjccsFY8TDJfkvYk45KMSwyzmd5M0D9BvwT7ujZMmduifD17HPVLe3HaQdE9zr7i9I8bXVoO61kUf1D0dNj3WMrnsG4McYcbMaN7Mcb4GOebBb3SLO9BdVCPUtco76Pc7wzPM9Tl6jClzhXubZr305xnEvFrW5PcX4R7UKynmFdRD8U8gQ77cxqBnoD/X23iQdl/V8v7u9UodrWZ589YeiWLUgeU/Jfa9HkZ5hedcRadQdkzKHV/D1N0GUvpC5T+QdHrQpt9X7BfUPYAyr4sSr+/tNFrlDJn8Lk+oJkHlM+i6HU+QjPfOeezKHOC8j7PtNnTf1HmPuPcFmV+i6KDr817tCi6+NTDpw4+dfhp0SsNaOY4Zf4f4yhxJ30avXCW93nC/Q8Y/r92Ox28o7e7Hfi9ev0d9jdPDU+739Dvk5dg+9OCB793H7/y/RxTz2PqcoT759tf9D8IIj+2YAYAAA=="},"shape":[204],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p651543","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651544"}}},"glyph":{"type":"object","name":"Line","id":"p651539","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651540","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p651541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p651552","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651546","attributes":{"selected":{"type":"object","name":"Selection","id":"p651547","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651548"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p651553","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651554"}}},"glyph":{"type":"object","name":"Line","id":"p651549","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651550","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p651551","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p651491","attributes":{"tools":[{"id":"p651504"},{"id":"p651505"},{"id":"p651506"},{"id":"p651514"},{"type":"object","name":"SaveTool","id":"p651515"},{"id":"p651556"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p651499","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p651500","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p651501"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p651502"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p651494","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p651495","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p651496"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p651497"}}}],"center":[{"type":"object","name":"Grid","id":"p651498","attributes":{"axis":{"id":"p651494"}}},{"type":"object","name":"Grid","id":"p651503","attributes":{"dimension":1,"axis":{"id":"p651499"}}},{"type":"object","name":"Legend","id":"p651534","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p651535","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p651531"}]}},{"type":"object","name":"LegendItem","id":"p651545","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p651542"}]}},{"type":"object","name":"LegendItem","id":"p651555","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p651552"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p651557","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p651567","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p651559"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p651568"},"y_scale":{"type":"object","name":"LinearScale","id":"p651569"},"title":{"type":"object","name":"Title","id":"p651560","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p651598","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651592","attributes":{"selected":{"type":"object","name":"Selection","id":"p651593","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651594"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwI2mHLiVf2s2bOtORlfWv/fE6xVl+HqENoaGhqWpquw9qt105Zyyo4CN/yPlFzV9gBpk/Vc5JP2Omf9kCOwcHmn/Zu4rEmEk7f7QFg+ObeYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p651599","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651600"}}},"glyph":{"type":"object","name":"Line","id":"p651595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p651597","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p651607","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651601","attributes":{"selected":{"type":"object","name":"Selection","id":"p651602","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651603"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwI2mHLiVf2s2bOtORlfWv/fE6xVl+HqENoaGhqWpquw9qt105Zyyo4CN/yPlFzV9gBpk/Vc5JP2Omf9kCOwcHmn/Zu4rEmEk7f7QFg+ObeYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p651608","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651609"}}},"glyph":{"type":"object","name":"Line","id":"p651604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p651606","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p651618","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651612","attributes":{"selected":{"type":"object","name":"Selection","id":"p651613","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651614"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwI2mHLiVf2s2bOtORlfWv/fE6xVl+HqENoaGhqWpquw9qt105Zyyo4CN/yPlFzV9gBpk/Vc5JP2Omf9kCOwcHmn/Zu4rEmEk7f7QFg+ObeYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p651619","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651620"}}},"glyph":{"type":"object","name":"Line","id":"p651615","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651616","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p651617","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p651628","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p651622","attributes":{"selected":{"type":"object","name":"Selection","id":"p651623","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p651624"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p651629","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p651630"}}},"glyph":{"type":"object","name":"Line","id":"p651625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p651626","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p651627","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p651566","attributes":{"tools":[{"id":"p651580"},{"id":"p651581"},{"id":"p651582"},{"id":"p651590"},{"type":"object","name":"SaveTool","id":"p651591"},{"id":"p651632"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p651575","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p651576","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p651577"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p651578"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p651570","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p651571"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p651572"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p651573"}}}],"center":[{"type":"object","name":"Grid","id":"p651574","attributes":{"axis":{"id":"p651570"}}},{"type":"object","name":"Grid","id":"p651579","attributes":{"dimension":1,"axis":{"id":"p651575"}}},{"type":"object","name":"Legend","id":"p651610","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p651611","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p651607"}]}},{"type":"object","name":"LegendItem","id":"p651621","attributes":{"label":{"type":"value","value":"Median Year (1995)"},"renderers":[{"id":"p651618"}]}},{"type":"object","name":"LegendItem","id":"p651631","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p651628"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p651643","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f3ce0466-9db7-427b-9d55-cf3da0f7e1d8","roots":{"p651644":"b1dcd99b-0f36-41ef-9cf2-63dbf035cfaa"},"root_ids":["p651644"]}];
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