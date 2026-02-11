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
    
    
    const element = document.getElementById("afd93e33-a561-4df0-b358-8575694e5c25");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'afd93e33-a561-4df0-b358-8575694e5c25' but no matching script tag was found.")
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
                  const docs_json = '{"db4f5a1d-0b1f-4389-8a79-57f17ed8ed9a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p502583","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p502584"}}},"roots":[{"type":"object","name":"Column","id":"p502756","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p502754","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p502753","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p502746","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p502607"},{"type":"object","name":"PanTool","id":"p502683"}]}},{"type":"object","name":"ToolProxy","id":"p502747","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p502608","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p502684","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p502748","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p502609","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p502610","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p502616","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p502615","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p502685","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p502686","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p502692","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p502691","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p502749","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p502617"},{"type":"object","name":"ResetTool","id":"p502693"}]}},{"type":"object","name":"SaveTool","id":"p502750"},{"type":"object","name":"ToolProxy","id":"p502751","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p502659","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p502752","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p502744","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p502585","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p502586"},"y_range":{"type":"object","name":"DataRange1d","id":"p502587"},"x_scale":{"type":"object","name":"LinearScale","id":"p502595"},"y_scale":{"type":"object","name":"LogScale","id":"p502596"},"title":{"type":"object","name":"Title","id":"p502588","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p502625","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502619","attributes":{"selected":{"type":"object","name":"Selection","id":"p502620","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502621"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502626","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502627"}}},"glyph":{"type":"object","name":"Line","id":"p502622","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p502624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p502634","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502628","attributes":{"selected":{"type":"object","name":"Selection","id":"p502629","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502630"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502635","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502636"}}},"glyph":{"type":"object","name":"Line","id":"p502631","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502632","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p502633","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p502645","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502639","attributes":{"selected":{"type":"object","name":"Selection","id":"p502640","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502641"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qu0oDYRCFBdFC8FIowioKgnhBEJVEvGBO3MSYNca9b0wRsRAEBcHOF9AXsLJLJwgGBAshgiBY+AL7BFZ2goWdmX/OFvsz/39mzncmdRv2Vf9vLjVnDzq/r8ztILQegVSpa/F+Eu3rH+vzbIrv05BqtjVD3TzmWs2OZIH6RZjSWmLfMkTdbK+wPwPT1shyziq6zLfGeesYNw0bnLuJrMjtLc7P6f0l6JPX9/c8/bZREN2wTV8bntieFOhfxJEMei6SYwfnIustkacEY5PskquMG3m4L5PPgcH5c8i5B4PhVMhbwaMcd/vkruJVuL6r5D9Q3wmXOVz1/3CZx1OOC4+5POUZ9ZnPV643nzkD5TsNmDfAgBgMhcwdKu9LyPwRxkR4HHEPkfL3xdxHrFxPMfeSKFc94X4S5equcU815XqocV+H+AekA/ONYAIAAA=="},"shape":[76],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PIngGTdtj2+SGIfvB7JZg+4G3+0J4RKL7lxD37////2xsb3wbxgepvgfjzjyjcAItv+3wVpL5hssQVsP6fdZdA4v8v+YLp+gOnLsJpoPyCmTPB9IGiDLD4fm9zMD9BqPkC2JzXgRfA4ifKztn/+///fpUIbvov0B3uD09B7UXQQPF6x4SjYHs+/z0Cp4H6/jdMPYxM7y/KOAjy1wMVtoP2f8D27sNKf9XYQzIN8pdAxE5weB3z3g4Ol5UfN9n/Btu7EYP+BaTL9q23//H/f/zjpasxaJB7SyavwKC//v8vz9a41P4z2JyFZNMQ++fbfwe6d+bMmfZPweIT7R8A3a3V3gaSv++b1ACnt4Htr4DSGfYAX9oq72ACAAA="},"shape":[76],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502646","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502647"}}},"glyph":{"type":"object","name":"Line","id":"p502642","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p502644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p502655","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502649","attributes":{"selected":{"type":"object","name":"Selection","id":"p502650","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502651"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p502656","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502657"}}},"glyph":{"type":"object","name":"Line","id":"p502652","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p502654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p502594","attributes":{"tools":[{"id":"p502607"},{"id":"p502608"},{"id":"p502609"},{"id":"p502617"},{"type":"object","name":"SaveTool","id":"p502618"},{"id":"p502659"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p502602","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p502603","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p502604"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p502605"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p502597","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p502598","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p502599"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p502600"}}}],"center":[{"type":"object","name":"Grid","id":"p502601","attributes":{"axis":{"id":"p502597"}}},{"type":"object","name":"Grid","id":"p502606","attributes":{"dimension":1,"axis":{"id":"p502602"}}},{"type":"object","name":"Legend","id":"p502637","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p502638","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p502634"}]}},{"type":"object","name":"LegendItem","id":"p502648","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p502645"}]}},{"type":"object","name":"LegendItem","id":"p502658","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p502655"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p502660","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p502670","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p502662"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p502671"},"y_scale":{"type":"object","name":"LinearScale","id":"p502672"},"title":{"type":"object","name":"Title","id":"p502663","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p502701","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502695","attributes":{"selected":{"type":"object","name":"Selection","id":"p502696","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502697"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502702","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502703"}}},"glyph":{"type":"object","name":"Line","id":"p502698","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502699","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p502700","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p502710","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502704","attributes":{"selected":{"type":"object","name":"Selection","id":"p502705","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502706"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P///1+veHnO/t///89mPNhoz0BAPToNACFHy+FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502711","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502712"}}},"glyph":{"type":"object","name":"Line","id":"p502707","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502708","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p502709","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p502719","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502713","attributes":{"selected":{"type":"object","name":"Selection","id":"p502714","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502715"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46BkzZ85s+nHePiR06gbW6AP2tTNn3pz1rNeegYA+GA0A/pCrumAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502720","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502721"}}},"glyph":{"type":"object","name":"Line","id":"p502716","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502717","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p502718","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p502730","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502724","attributes":{"selected":{"type":"object","name":"Selection","id":"p502725","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502726"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p502731","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502732"}}},"glyph":{"type":"object","name":"Line","id":"p502727","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502728","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p502729","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p502740","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p502734","attributes":{"selected":{"type":"object","name":"Selection","id":"p502735","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p502736"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p502741","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p502742"}}},"glyph":{"type":"object","name":"Line","id":"p502737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p502738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p502739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p502669","attributes":{"tools":[{"id":"p502683"},{"id":"p502684"},{"id":"p502685"},{"id":"p502693"},{"type":"object","name":"SaveTool","id":"p502694"},{"id":"p502744"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p502678","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p502679","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p502680"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p502681"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p502673","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p502674"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p502675"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p502676"}}}],"center":[{"type":"object","name":"Grid","id":"p502677","attributes":{"axis":{"id":"p502673"}}},{"type":"object","name":"Grid","id":"p502682","attributes":{"dimension":1,"axis":{"id":"p502678"}}},{"type":"object","name":"Legend","id":"p502722","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p502723","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p502719"}]}},{"type":"object","name":"LegendItem","id":"p502733","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p502730"}]}},{"type":"object","name":"LegendItem","id":"p502743","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p502740"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p502745","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"db4f5a1d-0b1f-4389-8a79-57f17ed8ed9a","roots":{"p502756":"afd93e33-a561-4df0-b358-8575694e5c25"},"root_ids":["p502756"]}];
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