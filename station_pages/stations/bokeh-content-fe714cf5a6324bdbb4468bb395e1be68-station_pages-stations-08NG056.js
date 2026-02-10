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
    
    
    const element = document.getElementById("ea27cf24-8996-40ed-94e2-3758e79ec82e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ea27cf24-8996-40ed-94e2-3758e79ec82e' but no matching script tag was found.")
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
                  const docs_json = '{"d1f71b9e-8af7-48f4-906f-dbf2640e22d3":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p458333","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p458334"}}},"roots":[{"type":"object","name":"Column","id":"p458497","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p458495","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p458494","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p458487","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p458357"},{"type":"object","name":"PanTool","id":"p458433"}]}},{"type":"object","name":"ToolProxy","id":"p458488","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p458358","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p458434","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p458489","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p458359","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p458360","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p458366","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p458365","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p458435","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p458436","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p458442","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p458441","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p458490","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p458367"},{"type":"object","name":"ResetTool","id":"p458443"}]}},{"type":"object","name":"SaveTool","id":"p458491"},{"type":"object","name":"ToolProxy","id":"p458492","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p458409","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p458493","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p458485","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p458335","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p458336"},"y_range":{"type":"object","name":"DataRange1d","id":"p458337"},"x_scale":{"type":"object","name":"LinearScale","id":"p458345"},"y_scale":{"type":"object","name":"LogScale","id":"p458346"},"title":{"type":"object","name":"Title","id":"p458338","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p458375","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458369","attributes":{"selected":{"type":"object","name":"Selection","id":"p458370","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458371"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p458376","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458377"}}},"glyph":{"type":"object","name":"Line","id":"p458372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p458374","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p458384","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458378","attributes":{"selected":{"type":"object","name":"Selection","id":"p458379","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458380"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p458385","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458386"}}},"glyph":{"type":"object","name":"Line","id":"p458381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458382","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p458383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p458395","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458389","attributes":{"selected":{"type":"object","name":"Selection","id":"p458390","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458391"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2STUhUURiGRZARogwjLASTiSb7YTTT0alp5p2fO+P83/97ZxG6sGih0UI34SZqEwYtWrSICCpaVLRw6SrbhEGEixZDCBYtTFy4dCV5zveezeWe833v+d7nPen9rYc96e1MWn/3M8Or26+X452Q/240Eu3ZZ/VjkP1e6N/ESZ6fgtF3c2HD6GfdAN7rNcj6KFbWYy/mVs6y7xz09mqM/UP4EjmztLd2gTqX8E2Vr1+mXhwb+mCYuiOY14JXqD+KvTUlMMp7rmJRN4zxvnGIrXHem8CSbpjg/ZPo0CvJOZJ41KNOrnGe69DbkRTnSuFJXCnd4HxpHNdCGc6ZkboyOC+wrOqPZDl3Vvq+Zzl/Tvqf5ugjJzpWnn7yODTRnj1RoK8CfO9w/SzQnwE95nODPg3o7VaRfotQU8f6S/Rdgirv2yzR/xS0vVdT5FDGbyUzUyaPMt4oA9EKuVSg5Nt/K+RThcbyrkpONfxT196pkVcNHxSGi3VyqwuH3Tr5NYTDpwY5NoXDvSZ5NsXPaZNcTfF13yRfU/z9MsnZEp8pi7wt8fvSIndLfB9Y5G+L/2mbOdjC4bPNPGzhMegwF0e4PHCYjyN8/jjMyRVOeZd5ubilDt66zM1FUdnq8pifh/PKwG2POXroVgN99ZinJzyHfObqC4fHPvP1hcOOz5wD4VANmHcgHD4GzD0QDkdD5h8Kh7sh30EoHH6EfA8t/AcqWtK1IAQAAA=="},"shape":[132],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNPZBaIMHyCkQrRKU8B9EM/648AdOXfR+B6APe5g/B6o4oPLBnBDI0Y+5j0EDqQZXIPRDdkDHxrv3////3nzlzB6xfrvU2iP//ku8tED9BIOImWLxs33WwPUzaYHqBlP5VOA1ULq9/9wrYvMkSV0D2AN13GaxPYcMlsHtbX18Eq5858yLYPm9zMD9BqPmC/T+gQCjfWfu/QFqr/RhY3+e/R0B8e2PjwyD5/UUZB8H2A6VA/PgU6/32P4HqdTbtBfMnvt1j/xtI9x/aCtW/BSQuH2G5BSy+p2Qz2F8rP27CoH+Dzd8Ip0Hi1xZvgNO/gOJl+9bD6W///9fbm66D00B3zpfSX2v/A2jP46Wr4fQXoP7VMqvA7i+ZvAKkv96Wa7n9V6C72BqX2n8C+o9jzRz7p2B7JxJNXwXr67F/AA6vNpC5932TGoimt4HdUzFKDxMaADB/N6kgBAAA"},"shape":[132],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p458396","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458397"}}},"glyph":{"type":"object","name":"Line","id":"p458392","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458393","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p458394","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p458405","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458399","attributes":{"selected":{"type":"object","name":"Selection","id":"p458400","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458401"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p458406","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458407"}}},"glyph":{"type":"object","name":"Line","id":"p458402","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458403","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p458404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p458344","attributes":{"tools":[{"id":"p458357"},{"id":"p458358"},{"id":"p458359"},{"id":"p458367"},{"type":"object","name":"SaveTool","id":"p458368"},{"id":"p458409"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p458352","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p458353","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p458354"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p458355"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p458347","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p458348","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p458349"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p458350"}}}],"center":[{"type":"object","name":"Grid","id":"p458351","attributes":{"axis":{"id":"p458347"}}},{"type":"object","name":"Grid","id":"p458356","attributes":{"dimension":1,"axis":{"id":"p458352"}}},{"type":"object","name":"Legend","id":"p458387","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p458388","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p458384"}]}},{"type":"object","name":"LegendItem","id":"p458398","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p458395"}]}},{"type":"object","name":"LegendItem","id":"p458408","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p458405"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p458410","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p458420","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p458412"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p458421"},"y_scale":{"type":"object","name":"LinearScale","id":"p458422"},"title":{"type":"object","name":"Title","id":"p458413","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p458451","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458445","attributes":{"selected":{"type":"object","name":"Selection","id":"p458446","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458447"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p458452","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458453"}}},"glyph":{"type":"object","name":"Line","id":"p458448","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458449","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p458450","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p458460","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458454","attributes":{"selected":{"type":"object","name":"Selection","id":"p458455","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458456"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p458461","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458462"}}},"glyph":{"type":"object","name":"Line","id":"p458457","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p458459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p458471","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458465","attributes":{"selected":{"type":"object","name":"Selection","id":"p458466","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458467"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p458472","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458473"}}},"glyph":{"type":"object","name":"Line","id":"p458468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p458470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p458481","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p458475","attributes":{"selected":{"type":"object","name":"Selection","id":"p458476","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p458477"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p458482","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p458483"}}},"glyph":{"type":"object","name":"Line","id":"p458478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p458479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p458480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p458419","attributes":{"tools":[{"id":"p458433"},{"id":"p458434"},{"id":"p458435"},{"id":"p458443"},{"type":"object","name":"SaveTool","id":"p458444"},{"id":"p458485"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p458428","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p458429","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p458430"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p458431"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p458423","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p458424"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p458425"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p458426"}}}],"center":[{"type":"object","name":"Grid","id":"p458427","attributes":{"axis":{"id":"p458423"}}},{"type":"object","name":"Grid","id":"p458432","attributes":{"dimension":1,"axis":{"id":"p458428"}}},{"type":"object","name":"Legend","id":"p458463","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p458464","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p458460"}]}},{"type":"object","name":"LegendItem","id":"p458474","attributes":{"label":{"type":"value","value":"Median Year (1956)"},"renderers":[{"id":"p458471"}]}},{"type":"object","name":"LegendItem","id":"p458484","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p458481"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p458486","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"d1f71b9e-8af7-48f4-906f-dbf2640e22d3","roots":{"p458497":"ea27cf24-8996-40ed-94e2-3758e79ec82e"},"root_ids":["p458497"]}];
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