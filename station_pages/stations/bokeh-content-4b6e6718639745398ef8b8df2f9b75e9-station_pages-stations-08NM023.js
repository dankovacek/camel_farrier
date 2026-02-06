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
    
    
    const element = document.getElementById("f0606683-7d37-4d84-a59d-1bcfea1cbee1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0606683-7d37-4d84-a59d-1bcfea1cbee1' but no matching script tag was found.")
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
                  const docs_json = '{"7a7257e7-4e5f-462f-a2b0-237ff96b7e78":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p495697","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p495698"}}},"roots":[{"type":"object","name":"Column","id":"p495870","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p495868","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p495867","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p495860","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p495721"},{"type":"object","name":"PanTool","id":"p495797"}]}},{"type":"object","name":"ToolProxy","id":"p495861","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p495722","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p495798","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p495862","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p495723","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p495724","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p495730","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p495729","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p495799","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p495800","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p495806","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p495805","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p495863","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p495731"},{"type":"object","name":"ResetTool","id":"p495807"}]}},{"type":"object","name":"SaveTool","id":"p495864"},{"type":"object","name":"ToolProxy","id":"p495865","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p495773","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p495866","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p495858","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p495699","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p495700"},"y_range":{"type":"object","name":"DataRange1d","id":"p495701"},"x_scale":{"type":"object","name":"LinearScale","id":"p495709"},"y_scale":{"type":"object","name":"LogScale","id":"p495710"},"title":{"type":"object","name":"Title","id":"p495702","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p495739","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495733","attributes":{"selected":{"type":"object","name":"Selection","id":"p495734","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495735"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495740","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495741"}}},"glyph":{"type":"object","name":"Line","id":"p495736","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p495748","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495742","attributes":{"selected":{"type":"object","name":"Selection","id":"p495743","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495744"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495749","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495750"}}},"glyph":{"type":"object","name":"Line","id":"p495745","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p495747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p495759","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495753","attributes":{"selected":{"type":"object","name":"Selection","id":"p495754","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495755"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qu0oDYRCFBdFC8FIowioKgnhBEJVEvGBO3MSYNca9b0wRsRAEBcHOF9AXsLJLJwgGBAshgiBY+AL7BFZ2goWdmX/OFvsz/39mzncmdRv2Vf9vLjVnDzq/r8ztILQegVSpa/F+Eu3rH+vzbIrv05BqtjVD3TzmWs2OZIH6RZjSWmLfMkTdbK+wPwPT1shyziq6zLfGeesYNw0bnLuJrMjtLc7P6f0l6JPX9/c8/bZREN2wTV8bntieFOhfxJEMei6SYwfnIustkacEY5PskquMG3m4L5PPgcH5c8i5B4PhVMhbwaMcd/vkruJVuL6r5D9Q3wmXOVz1/3CZx1OOC4+5POUZ9ZnPV643nzkD5TsNmDfAgBgMhcwdKu9LyPwRxkR4HHEPkfL3xdxHrFxPMfeSKFc94X4S5equcU815XqocV+H+AekA/ONYAIAAA=="},"shape":[76],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PIngGTdtj2+SGIfvB7JZg+4G3+0J4RKL7lxD37////2xsb3wbxgepvgfjzjyjcAItv+3wVpL5hssQVsP6fdZdA4v8v+YLp+gOnLsJpoPyCmTPB9IGiDLD4fm9zMD9BqPkC2JzXgRfA4ifKztn/+///fpUIbvov0B3uD09B7UXQQPF6x4SjYHs+/z0Cp4H6/jdMPYxM7y/KOAjy1wMVtoP2f8D27sNKf9XYQzIN8pdAxE5weB3z3g4Ol5UfN9n/Btu7EYP+BaTL9q23//H/f/zjpasxaJB7SyavwKC//v8vz9a41P4z2JyFZNMQ++fbfwe6d+bMmfZPweIT7R8A3a3V3gaSv++b1ACnt4Htr4DSGfYAX9oq72ACAAA="},"shape":[76],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495760","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495761"}}},"glyph":{"type":"object","name":"Line","id":"p495756","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p495758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p495769","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495763","attributes":{"selected":{"type":"object","name":"Selection","id":"p495764","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495765"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p495770","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495771"}}},"glyph":{"type":"object","name":"Line","id":"p495766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p495708","attributes":{"tools":[{"id":"p495721"},{"id":"p495722"},{"id":"p495723"},{"id":"p495731"},{"type":"object","name":"SaveTool","id":"p495732"},{"id":"p495773"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p495716","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p495717","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p495718"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p495719"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p495711","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p495712","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p495713"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p495714"}}}],"center":[{"type":"object","name":"Grid","id":"p495715","attributes":{"axis":{"id":"p495711"}}},{"type":"object","name":"Grid","id":"p495720","attributes":{"dimension":1,"axis":{"id":"p495716"}}},{"type":"object","name":"Legend","id":"p495751","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p495752","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p495748"}]}},{"type":"object","name":"LegendItem","id":"p495762","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p495759"}]}},{"type":"object","name":"LegendItem","id":"p495772","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p495769"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p495774","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p495784","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p495776"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p495785"},"y_scale":{"type":"object","name":"LinearScale","id":"p495786"},"title":{"type":"object","name":"Title","id":"p495777","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p495815","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495809","attributes":{"selected":{"type":"object","name":"Selection","id":"p495810","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495811"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495816","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495817"}}},"glyph":{"type":"object","name":"Line","id":"p495812","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495813","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495814","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p495824","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495818","attributes":{"selected":{"type":"object","name":"Selection","id":"p495819","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495820"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P///1+veHnO/t///89mPNhoz0BAPToNACFHy+FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495825","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495826"}}},"glyph":{"type":"object","name":"Line","id":"p495821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p495833","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495827","attributes":{"selected":{"type":"object","name":"Selection","id":"p495828","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495829"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46BkzZ85s+nHePiR06gbW6AP2tTNn3pz1rNeegYA+GA0A/pCrumAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495834","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495835"}}},"glyph":{"type":"object","name":"Line","id":"p495830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p495832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p495844","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495838","attributes":{"selected":{"type":"object","name":"Selection","id":"p495839","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495840"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495845","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495846"}}},"glyph":{"type":"object","name":"Line","id":"p495841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p495843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p495854","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495848","attributes":{"selected":{"type":"object","name":"Selection","id":"p495849","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495850"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p495855","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495856"}}},"glyph":{"type":"object","name":"Line","id":"p495851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p495783","attributes":{"tools":[{"id":"p495797"},{"id":"p495798"},{"id":"p495799"},{"id":"p495807"},{"type":"object","name":"SaveTool","id":"p495808"},{"id":"p495858"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p495792","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p495793","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p495794"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p495795"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p495787","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p495788"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p495789"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p495790"}}}],"center":[{"type":"object","name":"Grid","id":"p495791","attributes":{"axis":{"id":"p495787"}}},{"type":"object","name":"Grid","id":"p495796","attributes":{"dimension":1,"axis":{"id":"p495792"}}},{"type":"object","name":"Legend","id":"p495836","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p495837","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p495833"}]}},{"type":"object","name":"LegendItem","id":"p495847","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p495844"}]}},{"type":"object","name":"LegendItem","id":"p495857","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p495854"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p495859","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"7a7257e7-4e5f-462f-a2b0-237ff96b7e78","roots":{"p495870":"f0606683-7d37-4d84-a59d-1bcfea1cbee1"},"root_ids":["p495870"]}];
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