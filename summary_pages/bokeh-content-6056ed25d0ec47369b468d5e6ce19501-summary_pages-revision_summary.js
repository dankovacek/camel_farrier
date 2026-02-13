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
    
    
    const element = document.getElementById("eecfe704-92c0-4eb4-8687-105dd423bb06");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'eecfe704-92c0-4eb4-8687-105dd423bb06' but no matching script tag was found.")
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
                  const docs_json = '{"aa3219fa-1db1-490d-a73f-3a3cf384a68c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1083923","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1083924"}}},"roots":[{"type":"object","name":"Figure","id":"p1083925","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1083926"},"y_range":{"type":"object","name":"DataRange1d","id":"p1083927","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p1083935"},"y_scale":{"type":"object","name":"LinearScale","id":"p1083936"},"title":{"type":"object","name":"Title","id":"p1083928","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1083967","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1083961","attributes":{"selected":{"type":"object","name":"Selection","id":"p1083962","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1083963"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+3Xe1DNWRwAcMZrdm0ikVdt2ZZIRiPcEX2p9dqWlkaSPNu28koao5pQSJQtmlhLUhqux/YQqQgpSqqbXlouSeKmuudbcUsSe86PnbMzd65qN3bNOP985t479/f7nu/9fr/n/sSVM0e/0ZNBb6/xp80WyEAvbr3zXnkV9F85+1mQdQ1cHvPbyAH7aiAcxRmWE+TgM/PKJm2RHJ7EfFuxLVwOlx5pamc9lkMnYREot9VKzKfem97Fo6c+AcuqriZ9xhNQDxt79NwEAgppia/7dAKpi3Sn1jkQ2K5mFRvqSEBb5PSdiysBi2iXUrcAAsFpCgP7YPLu/gR6GcUfRjGBzrPZNwjIdhvI1S4TSOmmoQkZBHJz2CIQy8LKpdcNzz2VV8yNfmm/5vprrtvvgVLnTgiLClPoDhCuBxtvNNJDSIrtQi+NMHS1h9exUQiuvl3pR9yxwsJ3+eCuiLxtgiKEYdbdokImIoQ2dF964AcEUyFgBMsbPSYfmo9QZOg4sNwWIbDFsbFiOULYNV2acQR9g827k1dxu/vuswhcjSCE6YrwpTOLCEEycO7dwd4INptizq/YguBXPTdJxw+BZa+Wuj/+K7o1BLufTB9Y/YKgI/yQCGLPzBETQ7hCGkMRvOvjflx1kLtECJTuv6VhQ1kY3e+1M6PXRiE00ld9jiFcHK7eM+E497DPsLQdYm4OyUo3j0aImfHQSzMGYX2T+tPEWO79hO3et84iXOnFCgIh0ulslXsCwrbUm5HTziOw7Gglckdk9868kIRAvGHckgvceBpV5xSaZ38/u8K/+dripbw6lcuivnSVm87KKg1BKKcMBLYLz0yEOoecxZY3EIRyyOIm9GvOJtQDazVoiAheLH3ZXHtWxjnKmnnanhiXi6Bb4Lq0hwSBVeWpPAT6pumcfG5AUEX91wUIa2TNJ+veo9WUvsvTC7nGrC2KuH3rp+b9XMxVfL9wh+g2QvIr/+fSEoRD84+cjv6DK5TPHWXNlz2+NVTK1RcuoNrKlYYNv95X9iatApdSWr9DWCW23aANboPVypRdJ9lZUEqdNzxiV9xD1Zr4JE7ZWq6s1h1Jo/UjbpMxm2AI0gDWiNy386ztHpk0qujgE9UKbSzjOhA7c7NK1U6bwTqldYXtvscvmiJoZylbw8ZFdetK6NS0qVFtHBuT8vYbYs86U1kbYcC3X+HYqG27g4SDp3VfDXAv0ahvu/TQop384bzKxuOzf27UN6xh268fndYLFe3XqVhGJ0HHOYv+S2npAA39+9MJ0HGqlRntiXjx4UQR6/h/b/5e1mgfT3aq92v+dNzPxvN/oEfYUdpp/z/tFMl3A1o+PSfNYRX42b/UEbMHvM92lG+fc2s/mn8CNT8C1KAPAAA="},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1083968","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1083969"}}},"glyph":{"type":"object","name":"Line","id":"p1083964","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1083965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1083966","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1083978","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1083972","attributes":{"selected":{"type":"object","name":"Selection","id":"p1083973","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1083974"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+3Xe1DNWRwAcMZrdm0ikVdt2ZZIRiPcEX2p9dqWlkaSPNu28koao5pQSJQtmlhLUhqux/YQqQgpSqqbXlouSeKmuudbcUsSe86PnbMzd65qN3bNOP985t479/f7nu/9fr/n/sSVM0e/0ZNBb6/xp80WyEAvbr3zXnkV9F85+1mQdQ1cHvPbyAH7aiAcxRmWE+TgM/PKJm2RHJ7EfFuxLVwOlx5pamc9lkMnYREot9VKzKfem97Fo6c+AcuqriZ9xhNQDxt79NwEAgppia/7dAKpi3Sn1jkQ2K5mFRvqSEBb5PSdiysBi2iXUrcAAsFpCgP7YPLu/gR6GcUfRjGBzrPZNwjIdhvI1S4TSOmmoQkZBHJz2CIQy8LKpdcNzz2VV8yNfmm/5vprrtvvgVLnTgiLClPoDhCuBxtvNNJDSIrtQi+NMHS1h9exUQiuvl3pR9yxwsJ3+eCuiLxtgiKEYdbdokImIoQ2dF964AcEUyFgBMsbPSYfmo9QZOg4sNwWIbDFsbFiOULYNV2acQR9g827k1dxu/vuswhcjSCE6YrwpTOLCEEycO7dwd4INptizq/YguBXPTdJxw+BZa+Wuj/+K7o1BLufTB9Y/YKgI/yQCGLPzBETQ7hCGkMRvOvjflx1kLtECJTuv6VhQ1kY3e+1M6PXRiE00ld9jiFcHK7eM+E497DPsLQdYm4OyUo3j0aImfHQSzMGYX2T+tPEWO79hO3et84iXOnFCgIh0ulslXsCwrbUm5HTziOw7Gglckdk9868kIRAvGHckgvceBpV5xSaZ38/u8K/+dripbw6lcuivnSVm87KKg1BKKcMBLYLz0yEOoecxZY3EIRyyOIm9GvOJtQDazVoiAheLH3ZXHtWxjnKmnnanhiXi6Bb4Lq0hwSBVeWpPAT6pumcfG5AUEX91wUIa2TNJ+veo9WUvsvTC7nGrC2KuH3rp+b9XMxVfL9wh+g2QvIr/+fSEoRD84+cjv6DK5TPHWXNlz2+NVTK1RcuoNrKlYYNv95X9iatApdSWr9DWCW23aANboPVypRdJ9lZUEqdNzxiV9xD1Zr4JE7ZWq6s1h1Jo/UjbpMxm2AI0gDWiNy386ztHpk0qujgE9UKbSzjOhA7c7NK1U6bwTqldYXtvscvmiJoZylbw8ZFdetK6NS0qVFtHBuT8vYbYs86U1kbYcC3X+HYqG27g4SDp3VfDXAv0ahvu/TQop384bzKxuOzf27UN6xh268fndYLFe3XqVhGJ0HHOYv+S2npAA39+9MJ0HGqlRntiXjx4UQR6/h/b/5e1mgfT3aq92v+dNzPxvN/oEfYUdpp/z/tFMl3A1o+PSfNYRX42b/UEbMHvM92lG+fc2s/mn8CNT8C1KAPAAA="},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1083979","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1083980"}}},"glyph":{"type":"object","name":"Scatter","id":"p1083975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1083976","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1083977","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1083987","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1083981","attributes":{"selected":{"type":"object","name":"Selection","id":"p1083982","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1083983"},"data":{"type":"map","entries":[["x",[0.9951749999999999,0.9951749999999999]],["y",[0.01,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1083988","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1083989"}}},"glyph":{"type":"object","name":"Line","id":"p1083984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1083985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1083986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1083996","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1083990","attributes":{"selected":{"type":"object","name":"Selection","id":"p1083991","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1083992"},"data":{"type":"map","entries":[["x",[0.7229,0.9951749999999999]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1083997","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1083998"}}},"glyph":{"type":"object","name":"Line","id":"p1083993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1083994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1083995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1084005","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1083999","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084000","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084001"},"data":{"type":"map","entries":[["x",[0.9985,0.9985]],["y",[0.01,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084006","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084007"}}},"glyph":{"type":"object","name":"Line","id":"p1084002","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084003","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1084014","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084008","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084009","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084010"},"data":{"type":"map","entries":[["x",[0.7229,0.9985]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084015","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084016"}}},"glyph":{"type":"object","name":"Line","id":"p1084011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084013","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1084023","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084017","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084018","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084019"},"data":{"type":"map","entries":[["x",[0.9996,0.9996]],["y",[0.01,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084024","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084025"}}},"glyph":{"type":"object","name":"Line","id":"p1084020","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084022","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1084032","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084026","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084027","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084028"},"data":{"type":"map","entries":[["x",[0.7229,0.9996]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084033","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084034"}}},"glyph":{"type":"object","name":"Line","id":"p1084029","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1083934","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1083947"},{"type":"object","name":"WheelZoomTool","id":"p1083948","attributes":{"renderers":"auto"}},{"type":"object","name":"LassoSelectTool","id":"p1083949","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p1083950","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p1083951","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p1083952","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p1083958","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1083957","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1083959"},{"type":"object","name":"SaveTool","id":"p1083960"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1083942","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1083943","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1083944"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1083945"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1083937","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1083938","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1083939"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p1083940"}}}],"center":[{"type":"object","name":"Grid","id":"p1083941","attributes":{"axis":{"id":"p1083937"}}},{"type":"object","name":"Grid","id":"p1083946","attributes":{"dimension":1,"axis":{"id":"p1083942"}}},{"type":"object","name":"Legend","id":"p1083970","attributes":{"location":"top_left","items":[{"type":"object","name":"LegendItem","id":"p1083971","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p1083967"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"aa3219fa-1db1-490d-a73f-3a3cf384a68c","roots":{"p1083925":"eecfe704-92c0-4eb4-8687-105dd423bb06"},"root_ids":["p1083925"]}];
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