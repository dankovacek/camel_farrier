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
    
    
    const element = document.getElementById("e72c33a6-9b2d-4d2f-808a-46fe0fdb6c21");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e72c33a6-9b2d-4d2f-808a-46fe0fdb6c21' but no matching script tag was found.")
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
                  const docs_json = '{"2ae0a992-6d22-4d13-b7f8-02deb9c97e4c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p453547","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p453548"}}},"roots":[{"type":"object","name":"Column","id":"p453711","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p453709","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p453708","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p453701","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p453571"},{"type":"object","name":"PanTool","id":"p453647"}]}},{"type":"object","name":"ToolProxy","id":"p453702","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p453572","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p453648","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p453703","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p453573","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p453574","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p453580","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p453579","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p453649","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p453650","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p453656","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p453655","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p453704","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p453581"},{"type":"object","name":"ResetTool","id":"p453657"}]}},{"type":"object","name":"SaveTool","id":"p453705"},{"type":"object","name":"ToolProxy","id":"p453706","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p453623","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p453707","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p453699","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p453549","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p453550"},"y_range":{"type":"object","name":"DataRange1d","id":"p453551"},"x_scale":{"type":"object","name":"LinearScale","id":"p453559"},"y_scale":{"type":"object","name":"LogScale","id":"p453560"},"title":{"type":"object","name":"Title","id":"p453552","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p453589","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453583","attributes":{"selected":{"type":"object","name":"Selection","id":"p453584","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453585"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p453590","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453591"}}},"glyph":{"type":"object","name":"Line","id":"p453586","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453587","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p453588","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p453598","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453592","attributes":{"selected":{"type":"object","name":"Selection","id":"p453593","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453594"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p453599","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453600"}}},"glyph":{"type":"object","name":"Line","id":"p453595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p453597","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p453609","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453603","attributes":{"selected":{"type":"object","name":"Selection","id":"p453604","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453605"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2STUhUURiGRZARogwjLASTiSb7YTTT0alp5p2fO+P83/97ZxG6sGih0UI34SZqEwYtWrSICCpaVLRw6SrbhEGEixZDCBYtTFy4dCV5zveezeWe833v+d7nPen9rYc96e1MWn/3M8Or26+X452Q/240Eu3ZZ/VjkP1e6N/ESZ6fgtF3c2HD6GfdAN7rNcj6KFbWYy/mVs6y7xz09mqM/UP4EjmztLd2gTqX8E2Vr1+mXhwb+mCYuiOY14JXqD+KvTUlMMp7rmJRN4zxvnGIrXHem8CSbpjg/ZPo0CvJOZJ41KNOrnGe69DbkRTnSuFJXCnd4HxpHNdCGc6ZkboyOC+wrOqPZDl3Vvq+Zzl/Tvqf5ugjJzpWnn7yODTRnj1RoK8CfO9w/SzQnwE95nODPg3o7VaRfotQU8f6S/Rdgirv2yzR/xS0vVdT5FDGbyUzUyaPMt4oA9EKuVSg5Nt/K+RThcbyrkpONfxT196pkVcNHxSGi3VyqwuH3Tr5NYTDpwY5NoXDvSZ5NsXPaZNcTfF13yRfU/z9MsnZEp8pi7wt8fvSIndLfB9Y5G+L/2mbOdjC4bPNPGzhMegwF0e4PHCYjyN8/jjMyRVOeZd5ubilDt66zM1FUdnq8pifh/PKwG2POXroVgN99ZinJzyHfObqC4fHPvP1hcOOz5wD4VANmHcgHD4GzD0QDkdD5h8Kh7sh30EoHH6EfA8t/AcqWtK1IAQAAA=="},"shape":[132],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNPZBaIMHyCkQrRKU8B9EM/648AdOXfR+B6APe5g/B6o4oPLBnBDI0Y+5j0EDqQZXIPRDdkDHxrv3////3nzlzB6xfrvU2iP//ku8tED9BIOImWLxs33WwPUzaYHqBlP5VOA1ULq9/9wrYvMkSV0D2AN13GaxPYcMlsHtbX18Eq5858yLYPm9zMD9BqPmC/T+gQCjfWfu/QFqr/RhY3+e/R0B8e2PjwyD5/UUZB8H2A6VA/PgU6/32P4HqdTbtBfMnvt1j/xtI9x/aCtW/BSQuH2G5BSy+p2Qz2F8rP27CoH+Dzd8Ip0Hi1xZvgNO/gOJl+9bD6W///9fbm66D00B3zpfSX2v/A2jP46Wr4fQXoP7VMqvA7i+ZvAKkv96Wa7n9V6C72BqX2n8C+o9jzRz7p2B7JxJNXwXr67F/AA6vNpC5932TGoimt4HdUzFKDxMaADB/N6kgBAAA"},"shape":[132],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p453610","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453611"}}},"glyph":{"type":"object","name":"Line","id":"p453606","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453607","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p453608","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p453619","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453613","attributes":{"selected":{"type":"object","name":"Selection","id":"p453614","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453615"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p453620","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453621"}}},"glyph":{"type":"object","name":"Line","id":"p453616","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453617","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p453618","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p453558","attributes":{"tools":[{"id":"p453571"},{"id":"p453572"},{"id":"p453573"},{"id":"p453581"},{"type":"object","name":"SaveTool","id":"p453582"},{"id":"p453623"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p453566","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p453567","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p453568"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p453569"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p453561","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p453562","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p453563"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p453564"}}}],"center":[{"type":"object","name":"Grid","id":"p453565","attributes":{"axis":{"id":"p453561"}}},{"type":"object","name":"Grid","id":"p453570","attributes":{"dimension":1,"axis":{"id":"p453566"}}},{"type":"object","name":"Legend","id":"p453601","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p453602","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p453598"}]}},{"type":"object","name":"LegendItem","id":"p453612","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p453609"}]}},{"type":"object","name":"LegendItem","id":"p453622","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p453619"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p453624","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p453634","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p453626"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p453635"},"y_scale":{"type":"object","name":"LinearScale","id":"p453636"},"title":{"type":"object","name":"Title","id":"p453627","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p453665","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453659","attributes":{"selected":{"type":"object","name":"Selection","id":"p453660","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453661"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p453666","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453667"}}},"glyph":{"type":"object","name":"Line","id":"p453662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p453664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p453674","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453668","attributes":{"selected":{"type":"object","name":"Selection","id":"p453669","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453670"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p453675","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453676"}}},"glyph":{"type":"object","name":"Line","id":"p453671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p453673","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p453685","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453679","attributes":{"selected":{"type":"object","name":"Selection","id":"p453680","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453681"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p453686","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453687"}}},"glyph":{"type":"object","name":"Line","id":"p453682","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p453684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p453695","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p453689","attributes":{"selected":{"type":"object","name":"Selection","id":"p453690","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p453691"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p453696","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p453697"}}},"glyph":{"type":"object","name":"Line","id":"p453692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p453693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p453694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p453633","attributes":{"tools":[{"id":"p453647"},{"id":"p453648"},{"id":"p453649"},{"id":"p453657"},{"type":"object","name":"SaveTool","id":"p453658"},{"id":"p453699"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p453642","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p453643","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p453644"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p453645"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p453637","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p453638"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p453639"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p453640"}}}],"center":[{"type":"object","name":"Grid","id":"p453641","attributes":{"axis":{"id":"p453637"}}},{"type":"object","name":"Grid","id":"p453646","attributes":{"dimension":1,"axis":{"id":"p453642"}}},{"type":"object","name":"Legend","id":"p453677","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p453678","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p453674"}]}},{"type":"object","name":"LegendItem","id":"p453688","attributes":{"label":{"type":"value","value":"Median Year (1956)"},"renderers":[{"id":"p453685"}]}},{"type":"object","name":"LegendItem","id":"p453698","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p453695"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p453700","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"2ae0a992-6d22-4d13-b7f8-02deb9c97e4c","roots":{"p453711":"e72c33a6-9b2d-4d2f-808a-46fe0fdb6c21"},"root_ids":["p453711"]}];
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