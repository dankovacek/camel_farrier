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
    
    
    const element = document.getElementById("b638d636-85cd-4a7e-9dae-650c3165e2c5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b638d636-85cd-4a7e-9dae-650c3165e2c5' but no matching script tag was found.")
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
                  const docs_json = '{"e7152cfb-1120-4da4-bae9-86f15992cfc9":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p182090","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p182091"}}},"roots":[{"type":"object","name":"Column","id":"p182188","attributes":{"children":[{"type":"object","name":"Figure","id":"p182092","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p182093"},"y_range":{"type":"object","name":"DataRange1d","id":"p182094"},"x_scale":{"type":"object","name":"LinearScale","id":"p182102"},"y_scale":{"type":"object","name":"LinearScale","id":"p182103"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p182150","attributes":{"start":4.939999809265137,"end":8.668999900817871}}]]},"title":{"type":"object","name":"Title","id":"p182095","attributes":{"text":"08GA053 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p182161","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p182155","attributes":{"selected":{"type":"object","name":"Selection","id":"p182156","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p182157"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3HaVwIBhjA4XfkKG0RkiMxYVIjOWKUiMy1uTbHJkVCNJKjNL1CCTnDSoaQhGIiUkiuXImSs5FCrojkSpv/p+f3iOgj37EevUTkQAO3L+r8VJT+7uN4/eru/H486p6fPPjcN6i9I8dzE8cJ/FYBSmyoJ59hM5H3yEatOduL5zSaxDcfR/GeMJl3NpzCqySgXhrqzSPLUSdET+Xtnafxj0UoZ5f68DXt/uBjc1Db+E/nZRYz+ImTKMu9fPmvxjN5i/2oL0b48ZQPqIs3z+JDXGbzJsUoj8Pn8AMd5vKgPNT+gf7crHkAv38aZe+UeXyuSSB3SUI1GfUnv12BGhszn/u6BvEez1AMVyvP6bSAb7mF6h0UzLtYLeRVMlEuT1vEI00Xc89k1Pa/hfBPEsrP7kBZ238JH1uCYh0RxssclvL0u6jLg5fxka2X8xYXUUqmh/OU+it4SArqELeV3MJgFX8ch5I0aDUPKkUZsGENN+u+lhfcQ927OIL7W6/jLlkotf3W89vmG/jONFRfj7+4Y41IbrgHJffnKL6lDGVq1EbexSmaVy1EvbxkE4+y/Zt7XkWxm7OZf2q8hZ87gbrWcyt3M4rh1okob4dt4+nvUMI3becje+3gVo9QS5bF8qPtd/KQXJShAXHcwnIXL85ATZoUz/Xr3XzAPygNft3DCz6iJGzZy/37JPA+T1Brr0zkd+z38Z03UGb+uZ87fvsPNzqLmut9gG+tncSnHkRxGH2QV61Eydp2iEf1S+YTn6ParTnMKzof4eduo0RoCndreZS3PY/61ieVn6ybxsMPo4z6/Ri3qnKcv4xFPTrgBA99iTp0XTpv2u0kL85HObgwg+t3p/jAS6gNfE/zB2ZneMJRlIBxZ3mfaud4nXjUO4Mzedxr1Jl/nedOPS5wowKU6yEX+da2l/i0K6gOsy5zg0ZZPOsYysbxV/jEmtm8w17UiiFXeeZb1IiN1/i4njm8bRFKeVguP/n9db7iGuqouXm8pcUN/jIdJXXiTR5a6xYftg+16Yjb/Ml71IN/3+ELet/lAx+jmIfn8wd2//LE66gB8+7xvs3u8zqnUe5OLuBx3zzgfgdQnUYW8loVqNe3FvGYvg/5tKcoXVc94gadHvMrN1E3zi/mXi2e8A7nUD5Pfcoz6zzj6w6hjhvznNvIC16+HSXjxxK+4gXK6LUveUuHV/zVHdTUBaV8SavXfNgFFMvpb/iTemX80BHUBWPf8kFVy7l5HErhwHc88RXKvPXved8fPnDTe6h3F33ku9p84n6XUXrOrOC1zD/zvFTUGPdK7lNdxn95190o1X7+il95gxIdWYV7OVbl9g9QP4ca8PM21fi6bBT32dW5TeMa/N1x1IwJNflKQ0M+OgGl1TAj/qocJS26Fl/ibMyHP0S1XPY1f9ruG34oByXY34QPalqbN8xALfSqw/cZm/J5+1Fcf6nLTT+i5G+ux3e51OezilF7rjDjxvYNeF4eyrZAc+7TvCHvdga1mncjnm3SmEcnoUwa1YTbf0apjLHg512b8vXPUN1XW3Lbzs34u1sop4Ka85VW3/IxmaitfFrwUlMrnpaMEvZbSz78q1a8WSzq0/6teXIJanDEd3xw1za8YT5KUbA139e6LQ+8iOo6w4bXNbPl+Sko8W7f81kG7bjzLlTjwe35jVLUbRvs+B/dO/Bu91Gqh9jzbOuOfFMW6iS/Trxjw868Mg3lgkcXvr6GA/fYg2o7pCt/X4Z6KqobX+X0Ax9TiNI6rDsvte3Bj11FDZvjyEc0ceLN0lGeefbkyUbOfGEi6uDhvXij96hFm3rz/b1ceOAjlH7L+/C6dn35v7mo8QGufLZlP+586n//A7rYRV5oCwAA"},"shape":[365],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9WW/09VdRjHD2qFjgEh3+RLHL70hRErYoBljEN0ZUiGlOsLEp1ImTlAMkRirE5RKOENyTVijHUYQxYZNizWSOnA5AbIGNkYMSwPIRljpMylMir63Pf73Br/QFv3l9eeL5/neT7PfT6fz3GTJHXmbj9FEvSM9XVSD1wHar1hoLn0F6gkrfeHfu5EgJPGcDg5WAYq+cdgl6sMxiv4BVTiT5NJ66mvX2C8/GMWvZnPf3Kj0196y4/y3D3MH1VNtm/FennqdcaZ3QGa2ZuR11z+hHnUWfrFubNeYxv9yl8h2x2Ip/qshWxkeHDddAX8jdLjlONPU26xMc7eO0FpvBx26Zn3rXx7mC/Xi3VU+ELWS5KRxxgZwb709Je4r/6DoJxzGXqXXcm3+uDbucpPdByyNNHKeM37Qb3pcdC1TuzHV3ETipMh0Iu+kNvzGW/uBGkMw8848CvjODJd+wW1D9NYvy2R+oQ80Gy9Rv+r9zJuawnze7yNeGKOVtnV+iLIUmwX/b4Y/De/UKu7v6a+tpB+E5Fcv3gBfZHfnWd/Mjy4zjWPWXbI5vafqd/3KOqTYg77Oesw25ogqz5VrL8mFZRvdyNzvcgqhXZ7A9fHdoF64ybQuP4n67uURb+En2hvOsf1cUfIyVFQnB9/Z365KxTnQUveEMA+7+XcdLwK6oHvcJ76D8JfnWmjvO8M/XbOgEpNH6j2DHGuInZRb50naSISeTVr/5r/85Bd50ArvMJ6bYk8n5eyQNd5kaIvwi6N30LfjAOsU0v5knV0LDJv6zUyqhrUHZmsq+4xUJwfyleW2Y/nHub6nS/T3rwf1FJV5NcbG0G1J4N1ud9PfeA69q03jHLJWdJxnlyoBI2RJ0B5cpR1jR4i2x2BTr2ZZQdFnei/2RYMf6EHlfh4UJ3dQX35HOPFHSGnllbVr6WajF/5Dex6sQ/ztJZAljoWydiHmNfWDYr5IQdvbHLKqudnQfCXJFDdvQV6cT/SL8ODbBlgHmv/ir2B+bK/ApW8Hti13o9BdcuL9Hf1qfgD+AkPUD1TStYXrZK15PeY7+bTqENrKGadPUNcH32R+Wr6Aq0+QtYXLzDfwh/orzj30MsPvEB7YyPz1PWTBQVkzxDWmWMRlv+PkOXOb0Gj+SoorYmB3Wwtod/kk4wbdIp5Q3IYp93B9VUK7Iq6BxT/F/Ti/IOiv4xfuhF2I+MoKK35lPLIyOp8OZe5zjovikVxnzGO9f+I95Hr2reyPkcm+M9cd7/GOZqI5DkYvMHz2vCbdU8F0z5ezvlajmZ8+XPW7/0D9PriU/SLuQP3hZhnyHJnOu1ptWTJWcap8MV6/ZzMfeR7M+5dt4Hix/j1RfDXUhLI+WyuX3qDrEwBFXsA7cc/4n0hSbfeZJz/FfX0ad7nG57l+zF6CDRabNS7nwRl610Q7w9k3XGe+s507N/4/T5Q6b5Oe9Ap6m9+H+rUa/PfBTtpLkdzvloGOG+uvvusRf81q9+q9Z0k6mPcvEesd6QZfZet7xglqYZ5WgboV1tI2hv4f2Vvxr2ip2WGI3/brnBlZWUlrCs0DPr0aZxv3Za4am7NqGrISk0q58IzlrTeHcX6LhL3DvKos2MhTor9geLd4/wvVLKO8jnWVdMHuu5dzRiGXdyfnMfBMs6VsY2y/CDqk3O9rPlcwHo5t450vbOzYzg/clcz9K53T/STsut7L2KK6w77I49R1gtZ/P77uf0bFmKurGgLAAA="},"shape":[365],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p182162","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p182163"}}},"glyph":{"type":"object","name":"Line","id":"p182158","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p182159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p182160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p182172","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p182166","attributes":{"selected":{"type":"object","name":"Selection","id":"p182167","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p182168"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p182173","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p182174"}}},"glyph":{"type":"object","name":"Scatter","id":"p182169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p182170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p182171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p182182","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p182176","attributes":{"selected":{"type":"object","name":"Selection","id":"p182177","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p182178"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p182183","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p182184"}}},"glyph":{"type":"object","name":"Scatter","id":"p182179","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p182180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p182181","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p182101","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p182128"},{"type":"object","name":"WheelZoomTool","id":"p182129","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p182130","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p182131","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p182137","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p182136","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p182138","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p182139","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p182140","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p182141","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p182147","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p182146","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p182148"},{"type":"object","name":"SaveTool","id":"p182149"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p182123","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p182124","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p182125"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p182126"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p182151","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p182152","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p182153"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p182154"}}},{"type":"object","name":"Legend","id":"p182164","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p182165","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p182161"}]}},{"type":"object","name":"LegendItem","id":"p182175","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p182172"}]}},{"type":"object","name":"LegendItem","id":"p182185","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p182182"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p182104","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p182105","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p182106","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p182107","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p182108","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p182109","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p182110","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p182111","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p182112","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p182113","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p182114","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p182115","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p182116","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p182117"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p182120","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p182119","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p182118","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p182121"}}}],"center":[{"type":"object","name":"Grid","id":"p182122","attributes":{"axis":{"id":"p182104"}}},{"type":"object","name":"Grid","id":"p182127","attributes":{"dimension":1,"axis":{"id":"p182123"}}}]}},{"type":"object","name":"Div","id":"p182186","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"e7152cfb-1120-4da4-bae9-86f15992cfc9","roots":{"p182188":"b638d636-85cd-4a7e-9dae-650c3165e2c5"},"root_ids":["p182188"]}];
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