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
    
    
    const element = document.getElementById("c632dfa2-501a-4c44-a8fb-1d62d8267456");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c632dfa2-501a-4c44-a8fb-1d62d8267456' but no matching script tag was found.")
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
                  const docs_json = '{"b617c4fb-557a-44a0-8aea-d9d5e68fdaf3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p539683","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p539684"}}},"roots":[{"type":"object","name":"Column","id":"p539847","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p539844","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p539843","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p539836","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p539707"},{"type":"object","name":"PanTool","id":"p539783"}]}},{"type":"object","name":"ToolProxy","id":"p539837","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p539708","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p539784","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p539838","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p539709","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p539710","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p539716","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p539715","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p539785","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p539786","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p539792","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p539791","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p539839","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p539717"},{"type":"object","name":"ResetTool","id":"p539793"}]}},{"type":"object","name":"SaveTool","id":"p539840"},{"type":"object","name":"ToolProxy","id":"p539841","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p539759","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p539842","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p539835","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p539685","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p539686"},"y_range":{"type":"object","name":"DataRange1d","id":"p539687"},"x_scale":{"type":"object","name":"LinearScale","id":"p539695"},"y_scale":{"type":"object","name":"LogScale","id":"p539696"},"title":{"type":"object","name":"Title","id":"p539688","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p539725","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539719","attributes":{"selected":{"type":"object","name":"Selection","id":"p539720","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539721"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/AwyXE2X7QOETP/HtHvv7VSL7Fr3cY29gbDx5u/IecLg+XrrbPqb/0FWNabtB8TLf/eEue5eHVVfWn9xl/xsYD6tlRmliw2HSzJmSrx9ts/+qEXM+Q3arPff1xQLygpvtj585cyZv9wZQemX/5bLO/hcw/dtyLbcHAMeyqE0oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p539726","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539727"}}},"glyph":{"type":"object","name":"Line","id":"p539722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p539724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p539734","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539728","attributes":{"selected":{"type":"object","name":"Selection","id":"p539729","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539730"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/AwyXE2X7QOETP/HtHvv7VSL7Fr3cY29gbDx5u/IecLg+XrrbPqb/0FWNabtB8TLf/eEue5eHVVfWn9xl/xsYD6tlRmliw2HSzJmSrx9ts/+qEXM+Q3arPff1xQLygpvtj585cyZv9wZQemX/5bLO/hcw/dtyLbcHAMeyqE0oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p539735","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539736"}}},"glyph":{"type":"object","name":"Line","id":"p539731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p539733","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p539745","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539739","attributes":{"selected":{"type":"object","name":"Selection","id":"p539740","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539741"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3RzytscRgGcBupu7GgdFMkCWnicv28mGdmGDPGcObMnHOG1HRLCmXDgoWNjQ0LFjYsWLDwX8hNJLcbyU1uNxIJYcFCivO+5/lsTmfmfN8fzzeTEY9+fWQ+/HMqB957LlZXRB683wswOSEK+X8xNjdECb8rxdKiKOP35ZhRlTxXhdER4eP5amypGtb5hvU1Uct6dVhW31m3HgvzooH1GzGrmtinGdNTooX9fmBctbJvG4ZUO/v74VPgHECFCnCeAEpVkHMFUaRCnC+Er6qDc3YgX3Vy3k7kqjDnDuOL6uL8XchWEe4RQZaKcp8o3t9ElHt14/VFdHO/GJ6fRIx79uDhTvRw3zhurkWce/fi8kL0cv8+nKs+5mDgXo6PGczD8OrcGswl4dUbTjCfhFf3KsGcTK/+T5N5mV6f/yZzS+KftBtMMr8kBsRZkjmm8PfU5aSYZwq25TpJMVcLx0cu02K+Fgzxx2LONn4fuuI287YREwc2c3ewv+eKOMzfQVjsOryHNH7tuEJp3kcawYBrO8176ccnkTJfDjADAAA="},"shape":[102],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5u//f///9a7cfsgZT8XZVjIH69Y8JROA0Uv7909hF7oPIFMlFH7P8BBRqmHobTQPGEpxcOgeThNJ/uIZB59QdOHQSp21+UMUoDw+P/tcUHQOEEBAfs/wDD5UTZPjgNDKf4iW/3gMILTIPkv2rsAYfr46W74TQwfua7P9wFih8w/Rto7mqZUZrUcICk+22gcD3w+e8WUHr9v/LjJjB9bfEG+2/A9Gtvus7+F5C25VpuDwCGi6L3MAMAAA=="},"shape":[102],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p539746","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539747"}}},"glyph":{"type":"object","name":"Line","id":"p539742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539743","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p539744","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p539755","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539749","attributes":{"selected":{"type":"object","name":"Selection","id":"p539750","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539751"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p539756","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539757"}}},"glyph":{"type":"object","name":"Line","id":"p539752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539753","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p539754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p539694","attributes":{"tools":[{"id":"p539707"},{"id":"p539708"},{"id":"p539709"},{"id":"p539717"},{"type":"object","name":"SaveTool","id":"p539718"},{"id":"p539759"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p539702","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p539703","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p539704"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p539705"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p539697","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p539698","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p539699"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p539700"}}}],"center":[{"type":"object","name":"Grid","id":"p539701","attributes":{"axis":{"id":"p539697"}}},{"type":"object","name":"Grid","id":"p539706","attributes":{"dimension":1,"axis":{"id":"p539702"}}},{"type":"object","name":"Legend","id":"p539737","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p539738","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p539734"}]}},{"type":"object","name":"LegendItem","id":"p539748","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p539745"}]}},{"type":"object","name":"LegendItem","id":"p539758","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p539755"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p539760","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p539770","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p539762"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p539771"},"y_scale":{"type":"object","name":"LinearScale","id":"p539772"},"title":{"type":"object","name":"Title","id":"p539763","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p539801","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539795","attributes":{"selected":{"type":"object","name":"Selection","id":"p539796","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539797"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p539802","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539803"}}},"glyph":{"type":"object","name":"Line","id":"p539798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p539800","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p539810","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539804","attributes":{"selected":{"type":"object","name":"Selection","id":"p539805","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539806"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p539811","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539812"}}},"glyph":{"type":"object","name":"Line","id":"p539807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p539809","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p539821","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539815","attributes":{"selected":{"type":"object","name":"Selection","id":"p539816","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539817"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p539822","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539823"}}},"glyph":{"type":"object","name":"Line","id":"p539818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539819","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p539820","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p539831","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p539825","attributes":{"selected":{"type":"object","name":"Selection","id":"p539826","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p539827"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p539832","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p539833"}}},"glyph":{"type":"object","name":"Line","id":"p539828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p539829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p539830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p539769","attributes":{"tools":[{"id":"p539783"},{"id":"p539784"},{"id":"p539785"},{"id":"p539793"},{"type":"object","name":"SaveTool","id":"p539794"},{"id":"p539835"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p539778","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p539779","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p539780"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p539781"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p539773","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p539774"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p539775"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p539776"}}}],"center":[{"type":"object","name":"Grid","id":"p539777","attributes":{"axis":{"id":"p539773"}}},{"type":"object","name":"Grid","id":"p539782","attributes":{"dimension":1,"axis":{"id":"p539778"}}},{"type":"object","name":"Legend","id":"p539813","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p539814","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p539810"}]}},{"type":"object","name":"LegendItem","id":"p539824","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p539821"}]}},{"type":"object","name":"LegendItem","id":"p539834","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p539831"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p539846","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b617c4fb-557a-44a0-8aea-d9d5e68fdaf3","roots":{"p539847":"c632dfa2-501a-4c44-a8fb-1d62d8267456"},"root_ids":["p539847"]}];
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