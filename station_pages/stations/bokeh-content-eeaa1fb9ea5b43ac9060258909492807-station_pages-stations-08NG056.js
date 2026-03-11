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
    
    
    const element = document.getElementById("e31dd1a5-a129-48a8-9e11-b77dee66c5a8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e31dd1a5-a129-48a8-9e11-b77dee66c5a8' but no matching script tag was found.")
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
                  const docs_json = '{"955e14e9-3556-48b4-9b91-e77189c624f7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p726211","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p726212"}}},"roots":[{"type":"object","name":"Column","id":"p726375","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p726372","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p726371","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p726364","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p726235"},{"type":"object","name":"PanTool","id":"p726311"}]}},{"type":"object","name":"ToolProxy","id":"p726365","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p726236","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p726312","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p726366","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p726237","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p726238","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p726244","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p726243","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p726313","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p726314","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p726320","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p726319","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p726367","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p726245"},{"type":"object","name":"ResetTool","id":"p726321"}]}},{"type":"object","name":"SaveTool","id":"p726368"},{"type":"object","name":"ToolProxy","id":"p726369","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p726287","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p726370","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p726363","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p726213","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p726214"},"y_range":{"type":"object","name":"DataRange1d","id":"p726215"},"x_scale":{"type":"object","name":"LinearScale","id":"p726223"},"y_scale":{"type":"object","name":"LogScale","id":"p726224"},"title":{"type":"object","name":"Title","id":"p726216","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p726253","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726247","attributes":{"selected":{"type":"object","name":"Selection","id":"p726248","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726249"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p726254","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726255"}}},"glyph":{"type":"object","name":"Line","id":"p726250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p726252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p726262","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726256","attributes":{"selected":{"type":"object","name":"Selection","id":"p726257","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726258"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p726263","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726264"}}},"glyph":{"type":"object","name":"Line","id":"p726259","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p726261","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p726273","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726267","attributes":{"selected":{"type":"object","name":"Selection","id":"p726268","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726269"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2STUhUURiGRZARogwjLASTiSb7YTTT0alp5p2fO+P83/97ZxG6sGih0UI34SZqEwYtWrSICCpaVLRw6SrbhEGEixZDCBYtTFy4dCV5zveezeWe833v+d7nPen9rYc96e1MWn/3M8Or26+X452Q/240Eu3ZZ/VjkP1e6N/ESZ6fgtF3c2HD6GfdAN7rNcj6KFbWYy/mVs6y7xz09mqM/UP4EjmztLd2gTqX8E2Vr1+mXhwb+mCYuiOY14JXqD+KvTUlMMp7rmJRN4zxvnGIrXHem8CSbpjg/ZPo0CvJOZJ41KNOrnGe69DbkRTnSuFJXCnd4HxpHNdCGc6ZkboyOC+wrOqPZDl3Vvq+Zzl/Tvqf5ugjJzpWnn7yODTRnj1RoK8CfO9w/SzQnwE95nODPg3o7VaRfotQU8f6S/Rdgirv2yzR/xS0vVdT5FDGbyUzUyaPMt4oA9EKuVSg5Nt/K+RThcbyrkpONfxT196pkVcNHxSGi3VyqwuH3Tr5NYTDpwY5NoXDvSZ5NsXPaZNcTfF13yRfU/z9MsnZEp8pi7wt8fvSIndLfB9Y5G+L/2mbOdjC4bPNPGzhMegwF0e4PHCYjyN8/jjMyRVOeZd5ubilDt66zM1FUdnq8pifh/PKwG2POXroVgN99ZinJzyHfObqC4fHPvP1hcOOz5wD4VANmHcgHD4GzD0QDkdD5h8Kh7sh30EoHH6EfA8t/AcqWtK1IAQAAA=="},"shape":[132],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNPZBaIMHyCkQrRKU8B9EM/648AdOXfR+B6APe5g/B6o4oPLBnBDI0Y+5j0EDqQZXIPRDdkDHxrv3////3nzlzB6xfrvU2iP//ku8tED9BIOImWLxs33WwPUzaYHqBlP5VOA1ULq9/9wrYvMkSV0D2AN13GaxPYcMlsHtbX18Eq5858yLYPm9zMD9BqPmC/T+gQCjfWfu/QFqr/RhY3+e/R0B8e2PjwyD5/UUZB8H2A6VA/PgU6/32P4HqdTbtBfMnvt1j/xtI9x/aCtW/BSQuH2G5BSy+p2Qz2F8rP27CoH+Dzd8Ip0Hi1xZvgNO/gOJl+9bD6W///9fbm66D00B3zpfSX2v/A2jP46Wr4fQXoP7VMqvA7i+ZvAKkv96Wa7n9V6C72BqX2n8C+o9jzRz7p2B7JxJNXwXr67F/AA6vNpC5932TGoimt4HdUzFKDxMaADB/N6kgBAAA"},"shape":[132],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p726274","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726275"}}},"glyph":{"type":"object","name":"Line","id":"p726270","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p726272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p726283","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726277","attributes":{"selected":{"type":"object","name":"Selection","id":"p726278","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726279"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p726284","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726285"}}},"glyph":{"type":"object","name":"Line","id":"p726280","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726281","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p726282","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p726222","attributes":{"tools":[{"id":"p726235"},{"id":"p726236"},{"id":"p726237"},{"id":"p726245"},{"type":"object","name":"SaveTool","id":"p726246"},{"id":"p726287"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p726230","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p726231","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p726232"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p726233"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p726225","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p726226","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p726227"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p726228"}}}],"center":[{"type":"object","name":"Grid","id":"p726229","attributes":{"axis":{"id":"p726225"}}},{"type":"object","name":"Grid","id":"p726234","attributes":{"dimension":1,"axis":{"id":"p726230"}}},{"type":"object","name":"Legend","id":"p726265","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p726266","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p726262"}]}},{"type":"object","name":"LegendItem","id":"p726276","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p726273"}]}},{"type":"object","name":"LegendItem","id":"p726286","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p726283"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p726288","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p726298","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p726290"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p726299"},"y_scale":{"type":"object","name":"LinearScale","id":"p726300"},"title":{"type":"object","name":"Title","id":"p726291","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p726329","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726323","attributes":{"selected":{"type":"object","name":"Selection","id":"p726324","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726325"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p726330","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726331"}}},"glyph":{"type":"object","name":"Line","id":"p726326","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p726328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p726338","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726332","attributes":{"selected":{"type":"object","name":"Selection","id":"p726333","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726334"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p726339","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726340"}}},"glyph":{"type":"object","name":"Line","id":"p726335","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726336","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p726337","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p726349","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726343","attributes":{"selected":{"type":"object","name":"Selection","id":"p726344","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726345"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p726350","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726351"}}},"glyph":{"type":"object","name":"Line","id":"p726346","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726347","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p726348","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p726359","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p726353","attributes":{"selected":{"type":"object","name":"Selection","id":"p726354","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p726355"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p726360","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p726361"}}},"glyph":{"type":"object","name":"Line","id":"p726356","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p726357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p726358","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p726297","attributes":{"tools":[{"id":"p726311"},{"id":"p726312"},{"id":"p726313"},{"id":"p726321"},{"type":"object","name":"SaveTool","id":"p726322"},{"id":"p726363"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p726306","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p726307","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p726308"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p726309"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p726301","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p726302"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p726303"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p726304"}}}],"center":[{"type":"object","name":"Grid","id":"p726305","attributes":{"axis":{"id":"p726301"}}},{"type":"object","name":"Grid","id":"p726310","attributes":{"dimension":1,"axis":{"id":"p726306"}}},{"type":"object","name":"Legend","id":"p726341","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p726342","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p726338"}]}},{"type":"object","name":"LegendItem","id":"p726352","attributes":{"label":{"type":"value","value":"Median Year (1956)"},"renderers":[{"id":"p726349"}]}},{"type":"object","name":"LegendItem","id":"p726362","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p726359"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p726374","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"955e14e9-3556-48b4-9b91-e77189c624f7","roots":{"p726375":"e31dd1a5-a129-48a8-9e11-b77dee66c5a8"},"root_ids":["p726375"]}];
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