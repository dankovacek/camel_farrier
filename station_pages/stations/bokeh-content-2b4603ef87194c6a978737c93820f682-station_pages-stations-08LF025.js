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
    
    
    const element = document.getElementById("bc678c01-58a5-448b-a4b6-7a2931b49722");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bc678c01-58a5-448b-a4b6-7a2931b49722' but no matching script tag was found.")
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
                  const docs_json = '{"a9bf52d3-85c0-4cf8-9525-30b2a30e7e1e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p343393","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p343394"}}},"roots":[{"type":"object","name":"Column","id":"p343557","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p343554","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p343553","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p343546","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p343417"},{"type":"object","name":"PanTool","id":"p343493"}]}},{"type":"object","name":"ToolProxy","id":"p343547","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p343418","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p343494","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p343548","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p343419","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p343420","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p343426","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p343425","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p343495","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p343496","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p343502","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p343501","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p343549","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p343427"},{"type":"object","name":"ResetTool","id":"p343503"}]}},{"type":"object","name":"SaveTool","id":"p343550"},{"type":"object","name":"ToolProxy","id":"p343551","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p343469","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p343552","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p343545","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p343395","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p343396"},"y_range":{"type":"object","name":"DataRange1d","id":"p343397"},"x_scale":{"type":"object","name":"LinearScale","id":"p343405"},"y_scale":{"type":"object","name":"LogScale","id":"p343406"},"title":{"type":"object","name":"Title","id":"p343398","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p343435","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343429","attributes":{"selected":{"type":"object","name":"Selection","id":"p343430","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343431"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/AwyXE2X7QOETP/HtHvv7VSL7Fr3cY29gbDx5u/IecLg+XrrbPqb/0FWNabtB8TLf/eEue5eHVVfWn9xl/xsYD6tlRmliw2HSzJmSrx9ts/+qEXM+Q3arPff1xQLygpvtj585cyZv9wZQemX/5bLO/hcw/dtyLbcHAMeyqE0oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p343436","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343437"}}},"glyph":{"type":"object","name":"Line","id":"p343432","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343433","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p343434","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p343444","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343438","attributes":{"selected":{"type":"object","name":"Selection","id":"p343439","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343440"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/AwyXE2X7QOETP/HtHvv7VSL7Fr3cY29gbDx5u/IecLg+XrrbPqb/0FWNabtB8TLf/eEue5eHVVfWn9xl/xsYD6tlRmliw2HSzJmSrx9ts/+qEXM+Q3arPff1xQLygpvtj585cyZv9wZQemX/5bLO/hcw/dtyLbcHAMeyqE0oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p343445","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343446"}}},"glyph":{"type":"object","name":"Line","id":"p343441","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343442","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p343443","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p343455","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343449","attributes":{"selected":{"type":"object","name":"Selection","id":"p343450","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343451"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3RzytscRgGcBupu7GgdFMkCWnicv28mGdmGDPGcObMnHOG1HRLCmXDgoWNjQ0LFjYsWLDwX8hNJLcbyU1uNxIJYcFCivO+5/lsTmfmfN8fzzeTEY9+fWQ+/HMqB957LlZXRB683wswOSEK+X8xNjdECb8rxdKiKOP35ZhRlTxXhdER4eP5amypGtb5hvU1Uct6dVhW31m3HgvzooH1GzGrmtinGdNTooX9fmBctbJvG4ZUO/v74VPgHECFCnCeAEpVkHMFUaRCnC+Er6qDc3YgX3Vy3k7kqjDnDuOL6uL8XchWEe4RQZaKcp8o3t9ElHt14/VFdHO/GJ6fRIx79uDhTvRw3zhurkWce/fi8kL0cv8+nKs+5mDgXo6PGczD8OrcGswl4dUbTjCfhFf3KsGcTK/+T5N5mV6f/yZzS+KftBtMMr8kBsRZkjmm8PfU5aSYZwq25TpJMVcLx0cu02K+Fgzxx2LONn4fuuI287YREwc2c3ewv+eKOMzfQVjsOryHNH7tuEJp3kcawYBrO8176ccnkTJfDjADAAA="},"shape":[102],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBg0j5u//f///9a7cfsgZT8XZVjIH69Y8JROA0Uv7909hF7oPIFMlFH7P8BBRqmHobTQPGEpxcOgeThNJ/uIZB59QdOHQSp21+UMUoDw+P/tcUHQOEEBAfs/wDD5UTZPjgNDKf4iW/3gMILTIPkv2rsAYfr46W74TQwfua7P9wFih8w/Rto7mqZUZrUcICk+22gcD3w+e8WUHr9v/LjJjB9bfEG+2/A9Gtvus7+F5C25VpuDwCGi6L3MAMAAA=="},"shape":[102],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p343456","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343457"}}},"glyph":{"type":"object","name":"Line","id":"p343452","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343453","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p343454","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p343465","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343459","attributes":{"selected":{"type":"object","name":"Selection","id":"p343460","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343461"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p343466","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343467"}}},"glyph":{"type":"object","name":"Line","id":"p343462","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343463","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p343464","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p343404","attributes":{"tools":[{"id":"p343417"},{"id":"p343418"},{"id":"p343419"},{"id":"p343427"},{"type":"object","name":"SaveTool","id":"p343428"},{"id":"p343469"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p343412","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p343413","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p343414"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p343415"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p343407","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p343408","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p343409"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p343410"}}}],"center":[{"type":"object","name":"Grid","id":"p343411","attributes":{"axis":{"id":"p343407"}}},{"type":"object","name":"Grid","id":"p343416","attributes":{"dimension":1,"axis":{"id":"p343412"}}},{"type":"object","name":"Legend","id":"p343447","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p343448","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p343444"}]}},{"type":"object","name":"LegendItem","id":"p343458","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p343455"}]}},{"type":"object","name":"LegendItem","id":"p343468","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p343465"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p343470","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p343480","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p343472"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p343481"},"y_scale":{"type":"object","name":"LinearScale","id":"p343482"},"title":{"type":"object","name":"Title","id":"p343473","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p343511","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343505","attributes":{"selected":{"type":"object","name":"Selection","id":"p343506","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343507"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p343512","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343513"}}},"glyph":{"type":"object","name":"Line","id":"p343508","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p343510","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p343520","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343514","attributes":{"selected":{"type":"object","name":"Selection","id":"p343515","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343516"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p343521","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343522"}}},"glyph":{"type":"object","name":"Line","id":"p343517","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343518","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p343519","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p343531","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343525","attributes":{"selected":{"type":"object","name":"Selection","id":"p343526","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343527"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD33qzJmcRpat9r////+/WmaXfcbardeebN5v//bdu3c31xyyx6UfAETfuBZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p343532","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343533"}}},"glyph":{"type":"object","name":"Line","id":"p343528","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343529","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p343530","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p343541","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p343535","attributes":{"selected":{"type":"object","name":"Selection","id":"p343536","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p343537"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p343542","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p343543"}}},"glyph":{"type":"object","name":"Line","id":"p343538","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p343539","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p343540","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p343479","attributes":{"tools":[{"id":"p343493"},{"id":"p343494"},{"id":"p343495"},{"id":"p343503"},{"type":"object","name":"SaveTool","id":"p343504"},{"id":"p343545"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p343488","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p343489","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p343490"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p343491"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p343483","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p343484"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p343485"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p343486"}}}],"center":[{"type":"object","name":"Grid","id":"p343487","attributes":{"axis":{"id":"p343483"}}},{"type":"object","name":"Grid","id":"p343492","attributes":{"dimension":1,"axis":{"id":"p343488"}}},{"type":"object","name":"Legend","id":"p343523","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p343524","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p343520"}]}},{"type":"object","name":"LegendItem","id":"p343534","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p343531"}]}},{"type":"object","name":"LegendItem","id":"p343544","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p343541"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p343556","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a9bf52d3-85c0-4cf8-9525-30b2a30e7e1e","roots":{"p343557":"bc678c01-58a5-448b-a4b6-7a2931b49722"},"root_ids":["p343557"]}];
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