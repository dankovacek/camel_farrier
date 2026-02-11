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
    
    
    const element = document.getElementById("bcbc8b03-a572-4098-aacc-8e2ec629350b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bcbc8b03-a572-4098-aacc-8e2ec629350b' but no matching script tag was found.")
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
                  const docs_json = '{"4994e48b-24ee-48c1-a301-2a543897f8cc":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p541112","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p541113"}}},"roots":[{"type":"object","name":"Column","id":"p541258","attributes":{"children":[{"type":"object","name":"Figure","id":"p541114","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p541115"},"y_range":{"type":"object","name":"DataRange1d","id":"p541116"},"x_scale":{"type":"object","name":"LinearScale","id":"p541124"},"y_scale":{"type":"object","name":"LinearScale","id":"p541125"},"title":{"type":"object","name":"Title","id":"p541117","attributes":{"text":"08OB003 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p541178","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541172","attributes":{"selected":{"type":"object","name":"Selection","id":"p541173","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541174"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLj1ws/7EADeRE+pCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541179","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541180"}}},"glyph":{"type":"object","name":"VArea","id":"p541175","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541176","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541177","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541189","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541183","attributes":{"selected":{"type":"object","name":"Selection","id":"p541184","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541185"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYKg75Ol9iIGBIUDfHUwrzXEB0184nLwPAQCDiqS0IAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541190","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541191"}}},"glyph":{"type":"object","name":"VArea","id":"p541186","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541187","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541188","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541198","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541192","attributes":{"selected":{"type":"object","name":"Selection","id":"p541193","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541194"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYMjyt/I+BAD6rcw6CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541199","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541200"}}},"glyph":{"type":"object","name":"VArea","id":"p541195","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541196","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541197","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541207","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541201","attributes":{"selected":{"type":"object","name":"Selection","id":"p541202","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541203"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHDKlPY+xMDAIHJNwvsQAKe9oBsQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541208","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541209"}}},"glyph":{"type":"object","name":"VArea","id":"p541204","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541205","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541206","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541216","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541210","attributes":{"selected":{"type":"object","name":"Selection","id":"p541211","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541212"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhiw+J9CACoPJY7CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541217","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541218"}}},"glyph":{"type":"object","name":"VArea","id":"p541213","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541214","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541215","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541225","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541219","attributes":{"selected":{"type":"object","name":"Selection","id":"p541220","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541221"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEgy++R1CACU/yyaCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541226","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541227"}}},"glyph":{"type":"object","name":"VArea","id":"p541222","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541223","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541224","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541234","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541228","attributes":{"selected":{"type":"object","name":"Selection","id":"p541229","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541230"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFAweOB1CAB/3NaCCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541235","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541236"}}},"glyph":{"type":"object","name":"VArea","id":"p541231","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541232","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541233","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541243","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541237","attributes":{"selected":{"type":"object","name":"Selection","id":"p541238","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541239"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJijvMfrEADPFutwCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541244","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541245"}}},"glyph":{"type":"object","name":"VArea","id":"p541240","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p541241","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p541242","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.616420007944107},"y2":{"type":"value","value":26.927999610900887},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p541252","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p541246","attributes":{"selected":{"type":"object","name":"Selection","id":"p541247","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p541248"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[792],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2YPUwCMRTHDyWGgCGoEF0kmBgElEEvJmpC7m3ObA4MTBcHB2YWWYwjYWQjYXBzcXHTEMebZYVEYxRB/EBRVGxf35mb8SOg7fJLe+/o+/9LyyuKwlt7WxlQ2hQFVNUFyoDr6IHJbOlc48zVzzgLJwFkYH/9lvPYv/OE/URWQX/KxRHOQj4/AeK5F5h/mVp8FISPXR4P1XSbMxNz4vuFVOzR2q8UU880/oLxqtrB+VqhV03k1cK4+MoMzRfkTOr6AvVVWi8HiM+ZJk7heDiB+bG83ZzgLLvouYN02MGiy5zfzIv785l3l7XT4gPleU/5CX8Mo4l9z0Yd9W1d1JCbuUscd0ev6L0a6WtaWUl7G5rI5xrnu9mj+INl0jkLQ6h7jfRGQPjrB7FOPtLjoXhTJ64T02Mj395J35vVb9aWaN0ixNB/3Ad9v091PSzXRVLye8jOOZ/cT5KSX6ublfndhib9kOzXc76axno/490fBlF326neD4Co38fBEmc+N+tldl/p8Pr/yDCiIDgHP7CPzLqbzRu03meSh/5JquPHUEep5bT2TR2srcrfs979x/ur9EOyz8nOq0X5PZWUlPzl/5/u/myd/wH9ZPLgwBgAAA=="},"shape":[792],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p541253","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p541254"}}},"glyph":{"type":"object","name":"Line","id":"p541249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p541250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p541251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p541123","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p541150"},{"type":"object","name":"WheelZoomTool","id":"p541151","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p541152","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p541153","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p541159","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p541158","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p541160","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p541161","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p541162","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p541163","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p541169","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p541168","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p541170"},{"type":"object","name":"SaveTool","id":"p541171"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p541145","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p541146","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p541147"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p541148"}}}],"right":[{"type":"object","name":"Legend","id":"p541181","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p541182","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p541178"},{"id":"p541189"},{"id":"p541198"},{"id":"p541207"},{"id":"p541216"},{"id":"p541225"},{"id":"p541234"},{"id":"p541243"}]}},{"type":"object","name":"LegendItem","id":"p541255","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p541252"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p541126","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p541127","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p541128","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p541129","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p541130","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p541131","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p541132","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p541133","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p541134","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p541135","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p541136","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p541137","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p541138","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p541139"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p541142","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p541141","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p541140","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p541143"}}}],"center":[{"type":"object","name":"Grid","id":"p541144","attributes":{"axis":{"id":"p541126"}}},{"type":"object","name":"Grid","id":"p541149","attributes":{"dimension":1,"axis":{"id":"p541145"}}}]}},{"type":"object","name":"Div","id":"p541256","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"4994e48b-24ee-48c1-a301-2a543897f8cc","roots":{"p541258":"bcbc8b03-a572-4098-aacc-8e2ec629350b"},"root_ids":["p541258"]}];
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