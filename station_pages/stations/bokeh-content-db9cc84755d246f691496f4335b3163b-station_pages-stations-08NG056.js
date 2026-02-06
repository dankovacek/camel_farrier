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
    
    
    const element = document.getElementById("aaf13249-3e27-4501-bd97-12888b84eea2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aaf13249-3e27-4501-bd97-12888b84eea2' but no matching script tag was found.")
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
                  const docs_json = '{"c41c08f5-55de-4ab4-b581-776ea6ce901e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p454737","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p454738"}}},"roots":[{"type":"object","name":"Column","id":"p454901","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p454899","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p454898","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p454891","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p454761"},{"type":"object","name":"PanTool","id":"p454837"}]}},{"type":"object","name":"ToolProxy","id":"p454892","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p454762","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p454838","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p454893","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p454763","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p454764","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p454770","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p454769","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p454839","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p454840","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p454846","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p454845","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p454894","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p454771"},{"type":"object","name":"ResetTool","id":"p454847"}]}},{"type":"object","name":"SaveTool","id":"p454895"},{"type":"object","name":"ToolProxy","id":"p454896","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p454813","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p454897","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p454889","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p454739","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p454740"},"y_range":{"type":"object","name":"DataRange1d","id":"p454741"},"x_scale":{"type":"object","name":"LinearScale","id":"p454749"},"y_scale":{"type":"object","name":"LogScale","id":"p454750"},"title":{"type":"object","name":"Title","id":"p454742","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p454779","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454773","attributes":{"selected":{"type":"object","name":"Selection","id":"p454774","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454775"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p454780","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454781"}}},"glyph":{"type":"object","name":"Line","id":"p454776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p454778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p454788","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454782","attributes":{"selected":{"type":"object","name":"Selection","id":"p454783","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454784"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwPqK5lcMUrTiAYAdH61migDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p454789","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454790"}}},"glyph":{"type":"object","name":"Line","id":"p454785","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454786","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p454787","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p454799","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454793","attributes":{"selected":{"type":"object","name":"Selection","id":"p454794","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454795"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2STUhUURiGRZARogwjLASTiSb7YTTT0alp5p2fO+P83/97ZxG6sGih0UI34SZqEwYtWrSICCpaVLRw6SrbhEGEixZDCBYtTFy4dCV5zveezeWe833v+d7nPen9rYc96e1MWn/3M8Or26+X452Q/240Eu3ZZ/VjkP1e6N/ESZ6fgtF3c2HD6GfdAN7rNcj6KFbWYy/mVs6y7xz09mqM/UP4EjmztLd2gTqX8E2Vr1+mXhwb+mCYuiOY14JXqD+KvTUlMMp7rmJRN4zxvnGIrXHem8CSbpjg/ZPo0CvJOZJ41KNOrnGe69DbkRTnSuFJXCnd4HxpHNdCGc6ZkboyOC+wrOqPZDl3Vvq+Zzl/Tvqf5ugjJzpWnn7yODTRnj1RoK8CfO9w/SzQnwE95nODPg3o7VaRfotQU8f6S/Rdgirv2yzR/xS0vVdT5FDGbyUzUyaPMt4oA9EKuVSg5Nt/K+RThcbyrkpONfxT196pkVcNHxSGi3VyqwuH3Tr5NYTDpwY5NoXDvSZ5NsXPaZNcTfF13yRfU/z9MsnZEp8pi7wt8fvSIndLfB9Y5G+L/2mbOdjC4bPNPGzhMegwF0e4PHCYjyN8/jjMyRVOeZd5ubilDt66zM1FUdnq8pifh/PKwG2POXroVgN99ZinJzyHfObqC4fHPvP1hcOOz5wD4VANmHcgHD4GzD0QDkdD5h8Kh7sh30EoHH6EfA8t/AcqWtK1IAQAAA=="},"shape":[132],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGC4vviNPZBaIMHyCkQrRKU8B9EM/648AdOXfR+B6APe5g/B6o4oPLBnBDI0Y+5j0EDqQZXIPRDdkDHxrv3////3nzlzB6xfrvU2iP//ku8tED9BIOImWLxs33WwPUzaYHqBlP5VOA1ULq9/9wrYvMkSV0D2AN13GaxPYcMlsHtbX18Eq5858yLYPm9zMD9BqPmC/T+gQCjfWfu/QFqr/RhY3+e/R0B8e2PjwyD5/UUZB8H2A6VA/PgU6/32P4HqdTbtBfMnvt1j/xtI9x/aCtW/BSQuH2G5BSy+p2Qz2F8rP27CoH+Dzd8Ip0Hi1xZvgNO/gOJl+9bD6W///9fbm66D00B3zpfSX2v/A2jP46Wr4fQXoP7VMqvA7i+ZvAKkv96Wa7n9V6C72BqX2n8C+o9jzRz7p2B7JxJNXwXr67F/AA6vNpC5932TGoimt4HdUzFKDxMaADB/N6kgBAAA"},"shape":[132],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p454800","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454801"}}},"glyph":{"type":"object","name":"Line","id":"p454796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p454798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p454809","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454803","attributes":{"selected":{"type":"object","name":"Selection","id":"p454804","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454805"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p454810","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454811"}}},"glyph":{"type":"object","name":"Line","id":"p454806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p454808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p454748","attributes":{"tools":[{"id":"p454761"},{"id":"p454762"},{"id":"p454763"},{"id":"p454771"},{"type":"object","name":"SaveTool","id":"p454772"},{"id":"p454813"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p454756","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p454757","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p454758"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p454759"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p454751","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p454752","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p454753"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p454754"}}}],"center":[{"type":"object","name":"Grid","id":"p454755","attributes":{"axis":{"id":"p454751"}}},{"type":"object","name":"Grid","id":"p454760","attributes":{"dimension":1,"axis":{"id":"p454756"}}},{"type":"object","name":"Legend","id":"p454791","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p454792","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p454788"}]}},{"type":"object","name":"LegendItem","id":"p454802","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p454799"}]}},{"type":"object","name":"LegendItem","id":"p454812","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p454809"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p454814","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p454824","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p454816"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p454825"},"y_scale":{"type":"object","name":"LinearScale","id":"p454826"},"title":{"type":"object","name":"Title","id":"p454817","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p454855","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454849","attributes":{"selected":{"type":"object","name":"Selection","id":"p454850","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454851"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p454856","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454857"}}},"glyph":{"type":"object","name":"Line","id":"p454852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p454854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p454864","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454858","attributes":{"selected":{"type":"object","name":"Selection","id":"p454859","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454860"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p454865","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454866"}}},"glyph":{"type":"object","name":"Line","id":"p454861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p454863","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p454875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454869","attributes":{"selected":{"type":"object","name":"Selection","id":"p454870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454871"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aGNj42yXzMf29+7eFRQUvGi/7lrUbnHhpfbb/v/fXzK5wj6toyPiyv5Ge1z6ASwqSg1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p454876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454877"}}},"glyph":{"type":"object","name":"Line","id":"p454872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p454874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p454885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p454879","attributes":{"selected":{"type":"object","name":"Selection","id":"p454880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p454881"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p454886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p454887"}}},"glyph":{"type":"object","name":"Line","id":"p454882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p454883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p454884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p454823","attributes":{"tools":[{"id":"p454837"},{"id":"p454838"},{"id":"p454839"},{"id":"p454847"},{"type":"object","name":"SaveTool","id":"p454848"},{"id":"p454889"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p454832","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p454833","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p454834"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p454835"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p454827","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p454828"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p454829"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p454830"}}}],"center":[{"type":"object","name":"Grid","id":"p454831","attributes":{"axis":{"id":"p454827"}}},{"type":"object","name":"Grid","id":"p454836","attributes":{"dimension":1,"axis":{"id":"p454832"}}},{"type":"object","name":"Legend","id":"p454867","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p454868","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p454864"}]}},{"type":"object","name":"LegendItem","id":"p454878","attributes":{"label":{"type":"value","value":"Median Year (1956)"},"renderers":[{"id":"p454875"}]}},{"type":"object","name":"LegendItem","id":"p454888","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p454885"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p454890","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c41c08f5-55de-4ab4-b581-776ea6ce901e","roots":{"p454901":"aaf13249-3e27-4501-bd97-12888b84eea2"},"root_ids":["p454901"]}];
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