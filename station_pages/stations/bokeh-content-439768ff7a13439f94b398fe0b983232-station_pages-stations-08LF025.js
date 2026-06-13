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
    
    
    const element = document.getElementById("bf5feda1-b703-481d-ad4e-085f49c735b7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf5feda1-b703-481d-ad4e-085f49c735b7' but no matching script tag was found.")
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
                  const docs_json = '{"3ae3f354-3511-41ea-b967-0dcc92659ae3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p342795","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p342796"}}},"roots":[{"type":"object","name":"Column","id":"p342959","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p342956","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p342955","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p342948","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p342819"},{"type":"object","name":"PanTool","id":"p342895"}]}},{"type":"object","name":"ToolProxy","id":"p342949","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p342820","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p342896","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p342950","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p342821","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p342822","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p342828","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p342827","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p342897","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p342898","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p342904","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p342903","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p342951","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p342829"},{"type":"object","name":"ResetTool","id":"p342905"}]}},{"type":"object","name":"SaveTool","id":"p342952"},{"type":"object","name":"ToolProxy","id":"p342953","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p342871","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p342954","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p342947","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p342797","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p342798"},"y_range":{"type":"object","name":"DataRange1d","id":"p342799"},"x_scale":{"type":"object","name":"LinearScale","id":"p342807"},"y_scale":{"type":"object","name":"LogScale","id":"p342808"},"title":{"type":"object","name":"Title","id":"p342800","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p342837","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342831","attributes":{"selected":{"type":"object","name":"Selection","id":"p342832","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342833"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/AwyXE2X7QOETP/HtHvv7VSL7Fr3cY29gbDx5u/IecLg+XrrbPqb/0FWNabtB8TLf/eEue5eHVVfWn9xl/xsYD6tlRmliw2HSzJmSrx9ts/+qEXM+Q3arPff1xQLygpvtj585cyZv9wZQemX/5bLO/hcw/dtyLbcHAMeyqE0oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p342838","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342839"}}},"glyph":{"type":"object","name":"Line","id":"p342834","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342835","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p342836","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p342846","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342840","attributes":{"selected":{"type":"object","name":"Selection","id":"p342841","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342842"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/AwyXE2X7QOETP/HtHvv7VSL7Fr3cY29gbDx5u/IecLg+XrrbPqb/0FWNabtB8TLf/eEue5eHVVfWn9xl/xsYD6tlRmliw2HSzJmSrx9ts/+qEXM+Q3arPff1xQLygpvtj585cyZv9wZQemX/5bLO/hcw/dtyLbcHAMeyqE0oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p342847","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342848"}}},"glyph":{"type":"object","name":"Line","id":"p342843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p342845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p342857","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342851","attributes":{"selected":{"type":"object","name":"Selection","id":"p342852","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342853"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3RzytscRgGcBupu7GgdFMkCWnicv28mGdmGDPGcObMnHOG1HRLCmXDgoWNjQ0LFjYsWLDwX8hNJLcbyU1uNxIJYcFCivO+5/lsTmfmfN8fzzeTEY9+fWQ+/HMqB957LlZXRB683wswOSEK+X8xNjdECb8rxdKiKOP35ZhRlTxXhdER4eP5amypGtb5hvU1Uct6dVhW31m3HgvzooH1GzGrmtinGdNTooX9fmBctbJvG4ZUO/v74VPgHECFCnCeAEpVkHMFUaRCnC+Er6qDc3YgX3Vy3k7kqjDnDuOL6uL8XchWEe4RQZaKcp8o3t9ElHt14/VFdHO/GJ6fRIx79uDhTvRw3zhurkWce/fi8kL0cv8+nKs+5mDgXo6PGczD8OrcGswl4dUbTjCfhFf3KsGcTK/+T5N5mV6f/yZzS+KftBtMMr8kBsRZkjmm8PfU5aSYZwq25TpJMVcLx0cu02K+Fgzxx2LONn4fuuI287YREwc2c3ewv+eKOMzfQVjsOryHNH7tuEJp3kcawYBrO8176ccnkTJfDjADAAA="},"shape":[102],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5u//f///9a7cfsgZT8XZVjIH69Y8JROA0Uv7909hF7oPIFMlFH7P8BBRqmHobTQPGEpxcOgeThNJ/uIZB59QdOHQSp21+UMUoDw+P/tcUHQOEEBAfs/wDD5UTZPjgNDKf4iW/3gMILTIPkv2rsAYfr46W74TQwfua7P9wFih8w/Rto7mqZUZrUcICk+22gcD3w+e8WUHr9v/LjJjB9bfEG+2/A9Gtvus7+F5C25VpuDwCGi6L3MAMAAA=="},"shape":[102],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p342858","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342859"}}},"glyph":{"type":"object","name":"Line","id":"p342854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p342856","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p342867","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342861","attributes":{"selected":{"type":"object","name":"Selection","id":"p342862","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342863"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p342868","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342869"}}},"glyph":{"type":"object","name":"Line","id":"p342864","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342865","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p342866","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p342806","attributes":{"tools":[{"id":"p342819"},{"id":"p342820"},{"id":"p342821"},{"id":"p342829"},{"type":"object","name":"SaveTool","id":"p342830"},{"id":"p342871"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p342814","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p342815","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p342816"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p342817"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p342809","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p342810","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p342811"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p342812"}}}],"center":[{"type":"object","name":"Grid","id":"p342813","attributes":{"axis":{"id":"p342809"}}},{"type":"object","name":"Grid","id":"p342818","attributes":{"dimension":1,"axis":{"id":"p342814"}}},{"type":"object","name":"Legend","id":"p342849","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p342850","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p342846"}]}},{"type":"object","name":"LegendItem","id":"p342860","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p342857"}]}},{"type":"object","name":"LegendItem","id":"p342870","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p342867"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p342872","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p342882","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p342874"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p342883"},"y_scale":{"type":"object","name":"LinearScale","id":"p342884"},"title":{"type":"object","name":"Title","id":"p342875","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p342913","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342907","attributes":{"selected":{"type":"object","name":"Selection","id":"p342908","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342909"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p342914","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342915"}}},"glyph":{"type":"object","name":"Line","id":"p342910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342911","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p342912","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p342922","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342916","attributes":{"selected":{"type":"object","name":"Selection","id":"p342917","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342918"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p342923","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342924"}}},"glyph":{"type":"object","name":"Line","id":"p342919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p342921","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p342933","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342927","attributes":{"selected":{"type":"object","name":"Selection","id":"p342928","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342929"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p342934","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342935"}}},"glyph":{"type":"object","name":"Line","id":"p342930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342931","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p342932","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p342943","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p342937","attributes":{"selected":{"type":"object","name":"Selection","id":"p342938","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p342939"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p342944","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p342945"}}},"glyph":{"type":"object","name":"Line","id":"p342940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p342941","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p342942","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p342881","attributes":{"tools":[{"id":"p342895"},{"id":"p342896"},{"id":"p342897"},{"id":"p342905"},{"type":"object","name":"SaveTool","id":"p342906"},{"id":"p342947"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p342890","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p342891","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p342892"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p342893"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p342885","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p342886"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p342887"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p342888"}}}],"center":[{"type":"object","name":"Grid","id":"p342889","attributes":{"axis":{"id":"p342885"}}},{"type":"object","name":"Grid","id":"p342894","attributes":{"dimension":1,"axis":{"id":"p342890"}}},{"type":"object","name":"Legend","id":"p342925","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p342926","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p342922"}]}},{"type":"object","name":"LegendItem","id":"p342936","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p342933"}]}},{"type":"object","name":"LegendItem","id":"p342946","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p342943"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p342958","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"3ae3f354-3511-41ea-b967-0dcc92659ae3","roots":{"p342959":"bf5feda1-b703-481d-ad4e-085f49c735b7"},"root_ids":["p342959"]}];
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