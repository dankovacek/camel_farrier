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
    
    
    const element = document.getElementById("d8b98d7d-7140-4353-961b-c566026a2810");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd8b98d7d-7140-4353-961b-c566026a2810' but no matching script tag was found.")
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
                  const docs_json = '{"72cc769d-c8a7-4719-bcc7-7496acb29bb6":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p375281","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p375282"}}},"roots":[{"type":"object","name":"Column","id":"p375445","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p375442","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p375441","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p375434","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p375305"},{"type":"object","name":"PanTool","id":"p375381"}]}},{"type":"object","name":"ToolProxy","id":"p375435","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p375306","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p375382","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p375436","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p375307","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p375308","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p375314","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p375313","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p375383","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p375384","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p375390","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p375389","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p375437","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p375315"},{"type":"object","name":"ResetTool","id":"p375391"}]}},{"type":"object","name":"SaveTool","id":"p375438"},{"type":"object","name":"ToolProxy","id":"p375439","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p375357","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p375440","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p375433","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p375283","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p375284"},"y_range":{"type":"object","name":"DataRange1d","id":"p375285"},"x_scale":{"type":"object","name":"LinearScale","id":"p375293"},"y_scale":{"type":"object","name":"LogScale","id":"p375294"},"title":{"type":"object","name":"Title","id":"p375286","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p375323","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375317","attributes":{"selected":{"type":"object","name":"Selection","id":"p375318","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375319"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+E2XX7NOA4J/zJfvUtDS1YNbD9jNmzrwpXXPQfiqQrvfYb/8HrG6fPQMDQ8LXnbvAtEDETpC4/M1z2+0NjI2Lbbm22//9//+/Vvs2kPyBz3+3wOkzZ87kLLy2xd4QqG5PyWZ7oLL/Kz9ugtP/gPyzkhtB7ij7bbXBPjEtbZld+Gr7L0Dx1TKr7H/9/19vy7Ucg54wc2alv9wy+69Ad7A1LgW5x/5h1RL7eKB+P4fF9j/A9iyyP3TmDM8e1kX2n4H+KMpYCKdPAsUf6C6w33PmzJt9fHPs22bO/MkWP8P+HdicKUTTT8HmTrSH0euB/tU8PcH+KtAcjjU99g/A4dJGNH0XaB6rUAvIv/d9kxpIpq2A8Rh4q9p+G9CckskVZNOp4PAtg+rPGLE0ADTFvt8oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375324","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375325"}}},"glyph":{"type":"object","name":"Line","id":"p375320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p375322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p375332","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375326","attributes":{"selected":{"type":"object","name":"Selection","id":"p375327","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375328"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+E2XX7NOA4J/zJfvUtDS1YNbD9jNmzrwpXXPQfiqQrvfYb/8HrG6fPQMDQ8LXnbvAtEDETpC4/M1z2+0NjI2Lbbm22//9//+/Vvs2kPyBz3+3wOkzZ87kLLy2xd4QqG5PyWZ7oLL/Kz9ugtP/gPyzkhtB7ij7bbXBPjEtbZld+Gr7L0Dx1TKr7H/9/19vy7Ucg54wc2alv9wy+69Ad7A1LgW5x/5h1RL7eKB+P4fF9j/A9iyyP3TmDM8e1kX2n4H+KMpYCKdPAsUf6C6w33PmzJt9fHPs22bO/MkWP8P+HdicKUTTT8HmTrSH0euB/tU8PcH+KtAcjjU99g/A4dJGNH0XaB6rUAvIv/d9kxpIpq2A8Rh4q9p+G9CckskVZNOp4PAtg+rPGLE0ADTFvt8oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375333","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375334"}}},"glyph":{"type":"object","name":"Line","id":"p375329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p375331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p375343","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375337","attributes":{"selected":{"type":"object","name":"Selection","id":"p375338","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375339"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SOUgDURCGYyMINooIEkGUKIpnNMbbTO5szr13xTZtLFPb2mppa2sbW1vbtLEUu7SpjW++ZWF5u++bb/43+9EbDXqj39yHeU5y1nNqes+Irmflf2U9z4u+X5CEuZb4viwGG6ywb1XMsrfG/nXZNOAGXIrvm/BbYnTWNnV24Haptwd3AHfI84h9aeqk8RzLi6l3ApeRB9NQBu4ULguXxXNGH+dwF/RzId8mzyXcFdwV3DW+G7hbfLf4ctrXorAW9XwJ9fLKPeapm1dvtkCegnLjAp6icm9FfCXl7kt4S/jK+Mr4yvgq+Cr4Ksplq+Spat5xlfOoSf1/QG81fJaY47i3OB8LX51zquOr42vITGJ6PTbwNfA18TXxNcnXIl8LXxtfm3xtfB3ydfB1eG8rJzbfbfW+2uyztc7Epj9H+3AdzsXRft4d+nWUm3OZi6vn0XWZj6vcp8ucXO036ZHHU1/fI5envqFHPl99+z5z9NX35JPXV+7HJ19AvoB8AfkC8gXkC8gXKueG5AuVew/JF5IvYi6Rct2I+UTki5hTpFwy5v+I9Vz6Mf9JrL5hTL47+QNGxqKBYAQAAA=="},"shape":[140],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+E2XX7P8D6bnvj4Po+gOnDsLpf///23c6HrD/A1a3D04zMDAkPF662x5EC0TshNNAdfI3z20HqQPTf4EGarVvg9NA9Qc+/90CUo+VBtonH2G5BWT//5UfN+Glry3eAJYH0UB75kvpr7X/AuSvllkFp38B/WPLtdyeEP0VaC9b41J7GA10v/3DqiUgf4DpH2D3LMKgPwPDpShjoT0uGmjv/rJ98+0/Ac3hWDPH/jvQnTNnzrR/8f//ff/e6fbvwOZPIZt+CrZ/oj0u+irY3h57GP0A6A+t9jZ7Smmgv+77JjWAwpWq9Dagf0omV9jTh86A2jNKQ8Kb+uEAAE3MUx5gBAAA"},"shape":[140],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375344","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375345"}}},"glyph":{"type":"object","name":"Line","id":"p375340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p375342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p375353","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375347","attributes":{"selected":{"type":"object","name":"Selection","id":"p375348","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375349"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p375354","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375355"}}},"glyph":{"type":"object","name":"Line","id":"p375350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p375352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p375292","attributes":{"tools":[{"id":"p375305"},{"id":"p375306"},{"id":"p375307"},{"id":"p375315"},{"type":"object","name":"SaveTool","id":"p375316"},{"id":"p375357"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p375300","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p375301","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p375302"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p375303"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p375295","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p375296","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p375297"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p375298"}}}],"center":[{"type":"object","name":"Grid","id":"p375299","attributes":{"axis":{"id":"p375295"}}},{"type":"object","name":"Grid","id":"p375304","attributes":{"dimension":1,"axis":{"id":"p375300"}}},{"type":"object","name":"Legend","id":"p375335","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p375336","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p375332"}]}},{"type":"object","name":"LegendItem","id":"p375346","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p375343"}]}},{"type":"object","name":"LegendItem","id":"p375356","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p375353"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p375358","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p375368","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p375360"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p375369"},"y_scale":{"type":"object","name":"LinearScale","id":"p375370"},"title":{"type":"object","name":"Title","id":"p375361","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p375399","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375393","attributes":{"selected":{"type":"object","name":"Selection","id":"p375394","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375395"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC219/vOdb3f32IempR0T+THXvnrrNakVG6rsD545s0Po7DT7zdtyZ29ULrLHpR8A1UxkTGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375400","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375401"}}},"glyph":{"type":"object","name":"Line","id":"p375396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p375398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p375408","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375402","attributes":{"selected":{"type":"object","name":"Selection","id":"p375403","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375404"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC219/vOdb3f32IempR0T+THXvnrrNakVG6rsD545s0Po7DT7zdtyZ29ULrLHpR8A1UxkTGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375409","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375410"}}},"glyph":{"type":"object","name":"Line","id":"p375405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p375407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p375419","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375413","attributes":{"selected":{"type":"object","name":"Selection","id":"p375414","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375415"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC219/vOdb3f32IempR0T+THXvnrrNakVG6rsD545s0Po7DT7zdtyZ29ULrLHpR8A1UxkTGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375420","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375421"}}},"glyph":{"type":"object","name":"Line","id":"p375416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p375418","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p375429","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375423","attributes":{"selected":{"type":"object","name":"Selection","id":"p375424","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375425"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p375430","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375431"}}},"glyph":{"type":"object","name":"Line","id":"p375426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p375428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p375367","attributes":{"tools":[{"id":"p375381"},{"id":"p375382"},{"id":"p375383"},{"id":"p375391"},{"type":"object","name":"SaveTool","id":"p375392"},{"id":"p375433"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p375376","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p375377","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p375378"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p375379"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p375371","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p375372"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p375373"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p375374"}}}],"center":[{"type":"object","name":"Grid","id":"p375375","attributes":{"axis":{"id":"p375371"}}},{"type":"object","name":"Grid","id":"p375380","attributes":{"dimension":1,"axis":{"id":"p375376"}}},{"type":"object","name":"Legend","id":"p375411","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p375412","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p375408"}]}},{"type":"object","name":"LegendItem","id":"p375422","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p375419"}]}},{"type":"object","name":"LegendItem","id":"p375432","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p375429"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p375444","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"72cc769d-c8a7-4719-bcc7-7496acb29bb6","roots":{"p375445":"d8b98d7d-7140-4353-961b-c566026a2810"},"root_ids":["p375445"]}];
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