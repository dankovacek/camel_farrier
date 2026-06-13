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
    
    
    const element = document.getElementById("a3d0f7b7-edf5-4812-854e-daa6f48072d7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a3d0f7b7-edf5-4812-854e-daa6f48072d7' but no matching script tag was found.")
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
                  const docs_json = '{"a2299abd-09df-49ce-82ef-cdc7810e9a81":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p185560","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p185561"}}},"roots":[{"type":"object","name":"Column","id":"p185724","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p185721","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p185720","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p185713","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p185584"},{"type":"object","name":"PanTool","id":"p185660"}]}},{"type":"object","name":"ToolProxy","id":"p185714","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p185585","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p185661","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p185715","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p185586","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p185587","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p185593","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p185592","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p185662","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p185663","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p185669","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p185668","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p185716","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p185594"},{"type":"object","name":"ResetTool","id":"p185670"}]}},{"type":"object","name":"SaveTool","id":"p185717"},{"type":"object","name":"ToolProxy","id":"p185718","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p185636","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p185719","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p185712","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p185562","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p185563"},"y_range":{"type":"object","name":"DataRange1d","id":"p185564"},"x_scale":{"type":"object","name":"LinearScale","id":"p185572"},"y_scale":{"type":"object","name":"LogScale","id":"p185573"},"title":{"type":"object","name":"Title","id":"p185565","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p185602","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185596","attributes":{"selected":{"type":"object","name":"Selection","id":"p185597","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185598"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v2/3+9vek6+7///8+X0l+Lk/7x/3/846Wr7WH0l////6+WWWVPKv3v///9JZNX2MPo8P5DpuEVy+1/Ad1hy0U6/fX/f3m2xqX2tKLfaMTwT0xcav/n/3/7h1VL4HSOLVe6evNiUHj8X/lxkf1noL+KMhaC/LG/bN98nPQnoDkca+bY04o+XyUyb9qp2favwPGFSbvukJsaIjHbHujs+n3zZ8Hp78D4nzlzpj0u+gM43mbYw+j6Q18VpBtn2L/4//++f+90DBqYnv5rtU8DpScUGhJPU6HxNdV+15kzZ/Y8nmL/Dhy+uOlnQP/sKZlsj4v+DfTP9LxJ9sTST8HxNdEeRue/DswwPNdv/67ldWDq/Vb7q+B4qgHF433fpAR7AMZSJB4oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p185603","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185604"}}},"glyph":{"type":"object","name":"Line","id":"p185599","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185600","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p185601","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p185611","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185605","attributes":{"selected":{"type":"object","name":"Selection","id":"p185606","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185607"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v2/3+9vek6+7///8+X0l+Lk/7x/3/846Wr7WH0l////6+WWWVPKv3v///9JZNX2MPo8P5DpuEVy+1/Ad1hy0U6/fX/f3m2xqX2tKLfaMTwT0xcav/n/3/7h1VL4HSOLVe6evNiUHj8X/lxkf1noL+KMhaC/LG/bN98nPQnoDkca+bY04o+XyUyb9qp2favwPGFSbvukJsaIjHbHujs+n3zZ8Hp78D4nzlzpj0u+gM43mbYw+j6Q18VpBtn2L/4//++f+90DBqYnv5rtU8DpScUGhJPU6HxNdV+15kzZ/Y8nmL/Dhy+uOlnQP/sKZlsj4v+DfTP9LxJ9sTST8HxNdEeRue/DswwPNdv/67ldWDq/Vb7q+B4qgHF433fpAR7AMZSJB4oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p185612","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185613"}}},"glyph":{"type":"object","name":"Line","id":"p185608","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185609","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p185610","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p185622","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185616","attributes":{"selected":{"type":"object","name":"Selection","id":"p185617","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185618"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UCWxUVRiFpQpYKQSwFLBUbAultNh2OrTTlpnOmb2zv5k3896rIoi4ghBwCYsRKgElgBqgiAoRFFlqXADrgrsYcAlrEA1giQJRWYoSoDTVove+nslLJm+59///c75zL3Q++W/dgjbnBfO/3bljvuF4+/YO3nc7mz/9vu3MzAz0PO+DA7V/rH/8QCZ6vu+P3hMzynqtHYie7wajIHfl89/5s/l9DpzHR7a/2DGU64Zj0ivvRvQtuVyfB7OcNpL73IF9/X7vfXlRPvcrwN3T3/ngp7sKue8onPvhiQc+qRzN/Yswt8Q+5LVbxrDOGPRdduOeZ04Vs95YvHRWLihh3VKMCq4S1zjWvxOt2xp/HDetjH2UI3/xQPfN+RXspwJnrVeGd2VZ2JcF20//fOl8p4X9VWLOailQJfu0wunZ8PrBQ1b2Ox59Li+a9/Vn49l3Ffa/8WDi/W1V7L8azcnQ2M3N1ZzDBlPOJhvnsaFw56BjSx+t4Vw1OD/l6vb5Ri3nq8UO+dpbxznrIIrdO6liAuedANfsjTXKCDvntiPTHNDB+R04eOihP61XHNShHmubwl+N/rWeejgxuaL85aH7nNQFuHVW5sc3TQT1AToC/2zqPgzq5IJpd8BFvVz44trJp/763EXdXBDiiIJu6ufGkq271d9a3NTRjUcWtgpkPNTTg6i+pfTIGg919cBsp5+X+nqRbRrupc5edMpy17zU24cTH84Ql4+6+/DlC5O/fe+0j/r7sUna0einD348Vy8N9NOPAKblVC1/1RegLwHELhYJywP0J4DKvcOmrrA00KcGCBjjS7Y20K8GdMlY5QXpWxBtUblBkP4FIcQePCszRB9DeLP78PWHF4boZwhLj35zbsrVEH0Nw4zD9DD9DUMUEwKG6XME1ntkwCL0OwKz/f0R+h5FV9bTz9Z7ovQ/ipNnZj5m2xUlB1HslviUx8hDDJtNQGPkIgYBW3VBbpx8xDFD3q6Mk5M4igdIRxTyouA2s6BCbhRkyXjPU8iPguty3FaFHCkQ5gkHFfKUwKmWv1NzSxLkKoEja2SgE+QrARF2zN6YIGcJfCTtPpEgbwm0yHjnJMldEut8MoFJ8pfECos0MEkOk1iQJwlJksckTNwzVHKp4j4ZP4dKPlUIeEWDKjlV4TcDrpJXFbZd636JXlTJbQoi7ELQFPlNwTwu70+R4xT6S3s2pMhzCv8JdZzHU+Q6hUtCDfuQNPlOQ05fo6TJeRpHxbRVy9PkPQ0Tz71pcp+GnKasl0b+Nbwl5bVrzIGG9aLbojka86BBdle4U2MuNDTJeLZrzIduVh9RrDMnOmS1YVN15kVH2jygdeZGR0DsNuiYzvzoqBWrB2QbzJGBUnmcxw3myYB823eZwVwZMPHaYzBfBm4wf434HzbkC0vIBgAA"},"shape":[217],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v2/3+9vek6+7///8+X0l9LNv3j///4x0tX2xOiv/z//3+1zCp7etP//v/fXzJ5hT0h+hcwPGy5ltsPNP31/395tsal9sON/vP/v/3DqiX2xNLA9PR/5cdFoHSFQn8GxmdRxkJ7GA2Mr/1l++aD4o0i+hPQfRxr5tgPN/oVOH/OtqeUBkZD/b75s+wJ0d+B5cnMmTPtKaU/gPPtDHti6Rf//9/3751uTyoNLP/+a7VPA5V/JNGQ/DkVmk9x0+/A6X6KPbXoZ8D43FMy2Z5S+jcwPqfnTbKnFf0UnE8n2hNLXwXnvx5ofHfYXwSHW4s9RLwGTk8Hi5eA8vt936QEewA+vqCYyAYAAA=="},"shape":[217],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p185623","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185624"}}},"glyph":{"type":"object","name":"Line","id":"p185619","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185620","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p185621","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p185632","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185626","attributes":{"selected":{"type":"object","name":"Selection","id":"p185627","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185628"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p185633","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185634"}}},"glyph":{"type":"object","name":"Line","id":"p185629","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185630","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p185631","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p185571","attributes":{"tools":[{"id":"p185584"},{"id":"p185585"},{"id":"p185586"},{"id":"p185594"},{"type":"object","name":"SaveTool","id":"p185595"},{"id":"p185636"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p185579","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p185580","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p185581"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p185582"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p185574","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p185575","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p185576"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p185577"}}}],"center":[{"type":"object","name":"Grid","id":"p185578","attributes":{"axis":{"id":"p185574"}}},{"type":"object","name":"Grid","id":"p185583","attributes":{"dimension":1,"axis":{"id":"p185579"}}},{"type":"object","name":"Legend","id":"p185614","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p185615","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p185611"}]}},{"type":"object","name":"LegendItem","id":"p185625","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p185622"}]}},{"type":"object","name":"LegendItem","id":"p185635","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p185632"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p185637","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p185647","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p185639"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p185648"},"y_scale":{"type":"object","name":"LinearScale","id":"p185649"},"title":{"type":"object","name":"Title","id":"p185640","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p185678","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185672","attributes":{"selected":{"type":"object","name":"Selection","id":"p185673","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185674"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9em3t+Uqhy63vz+neN1fhtX2DR0dK+Z9WmrvrLnUpeXXAvvs8vLjR1xn278WusXNlznTfvaqVavqlafYX6wSkUqZNNE+SL3s0rnvk+3BxgHNg9EAnKvUUmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p185679","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185680"}}},"glyph":{"type":"object","name":"Line","id":"p185675","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p185677","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p185687","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185681","attributes":{"selected":{"type":"object","name":"Selection","id":"p185682","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185683"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9em3t+Uqhy63vz+neN1fhtX2DR0dK+Z9WmrvrLnUpeXXAvvs8vLjR1xn278WusXNlznTfvaqVavqlafYX6wSkUqZNNE+SL3s0rnvk+3BxgHNg9EAnKvUUmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p185688","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185689"}}},"glyph":{"type":"object","name":"Line","id":"p185684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p185686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p185698","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185692","attributes":{"selected":{"type":"object","name":"Selection","id":"p185693","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185694"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9em3t+Uqhy63vz+neN1fhtX2DR0dK+Z9WmrvrLnUpeXXAvvs8vLjR1xn278WusXNlznTfvaqVavqlafYX6wSkUqZNNE+SL3s0rnvk+3BxgHNg9EAnKvUUmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p185699","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185700"}}},"glyph":{"type":"object","name":"Line","id":"p185695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185696","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p185697","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p185708","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p185702","attributes":{"selected":{"type":"object","name":"Selection","id":"p185703","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p185704"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p185709","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p185710"}}},"glyph":{"type":"object","name":"Line","id":"p185705","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p185706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p185707","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p185646","attributes":{"tools":[{"id":"p185660"},{"id":"p185661"},{"id":"p185662"},{"id":"p185670"},{"type":"object","name":"SaveTool","id":"p185671"},{"id":"p185712"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p185655","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p185656","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p185657"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p185658"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p185650","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p185651"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p185652"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p185653"}}}],"center":[{"type":"object","name":"Grid","id":"p185654","attributes":{"axis":{"id":"p185650"}}},{"type":"object","name":"Grid","id":"p185659","attributes":{"dimension":1,"axis":{"id":"p185655"}}},{"type":"object","name":"Legend","id":"p185690","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p185691","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p185687"}]}},{"type":"object","name":"LegendItem","id":"p185701","attributes":{"label":{"type":"value","value":"Median Year (1977)"},"renderers":[{"id":"p185698"}]}},{"type":"object","name":"LegendItem","id":"p185711","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p185708"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p185723","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a2299abd-09df-49ce-82ef-cdc7810e9a81","roots":{"p185724":"a3d0f7b7-edf5-4812-854e-daa6f48072d7"},"root_ids":["p185724"]}];
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