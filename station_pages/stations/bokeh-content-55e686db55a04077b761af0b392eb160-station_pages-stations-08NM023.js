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
    
    
    const element = document.getElementById("c143b08c-9c16-46a7-8403-7f7ceec63fff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c143b08c-9c16-46a7-8403-7f7ceec63fff' but no matching script tag was found.")
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
                  const docs_json = '{"aa68c738-57d1-4c89-9878-d8ae728c6c91":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p500850","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p500851"}}},"roots":[{"type":"object","name":"Column","id":"p501023","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p501021","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p501020","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p501013","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p500874"},{"type":"object","name":"PanTool","id":"p500950"}]}},{"type":"object","name":"ToolProxy","id":"p501014","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p500875","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p500951","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p501015","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p500876","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p500877","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p500883","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p500882","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p500952","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p500953","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p500959","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p500958","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p501016","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p500884"},{"type":"object","name":"ResetTool","id":"p500960"}]}},{"type":"object","name":"SaveTool","id":"p501017"},{"type":"object","name":"ToolProxy","id":"p501018","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p500926","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p501019","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p501011","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p500852","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p500853"},"y_range":{"type":"object","name":"DataRange1d","id":"p500854"},"x_scale":{"type":"object","name":"LinearScale","id":"p500862"},"y_scale":{"type":"object","name":"LogScale","id":"p500863"},"title":{"type":"object","name":"Title","id":"p500855","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p500892","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500886","attributes":{"selected":{"type":"object","name":"Selection","id":"p500887","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500888"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500893","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500894"}}},"glyph":{"type":"object","name":"Line","id":"p500889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p500901","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500895","attributes":{"selected":{"type":"object","name":"Selection","id":"p500896","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500897"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500902","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500903"}}},"glyph":{"type":"object","name":"Line","id":"p500898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p500900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p500912","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500906","attributes":{"selected":{"type":"object","name":"Selection","id":"p500907","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500908"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qu0oDYRCFBdFC8FIowioKgnhBEJVEvGBO3MSYNca9b0wRsRAEBcHOF9AXsLJLJwgGBAshgiBY+AL7BFZ2goWdmX/OFvsz/39mzncmdRv2Vf9vLjVnDzq/r8ztILQegVSpa/F+Eu3rH+vzbIrv05BqtjVD3TzmWs2OZIH6RZjSWmLfMkTdbK+wPwPT1shyziq6zLfGeesYNw0bnLuJrMjtLc7P6f0l6JPX9/c8/bZREN2wTV8bntieFOhfxJEMei6SYwfnIustkacEY5PskquMG3m4L5PPgcH5c8i5B4PhVMhbwaMcd/vkruJVuL6r5D9Q3wmXOVz1/3CZx1OOC4+5POUZ9ZnPV643nzkD5TsNmDfAgBgMhcwdKu9LyPwRxkR4HHEPkfL3xdxHrFxPMfeSKFc94X4S5equcU815XqocV+H+AekA/ONYAIAAA=="},"shape":[76],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PIngGTdtj2+SGIfvB7JZg+4G3+0J4RKL7lxD37////2xsb3wbxgepvgfjzjyjcAItv+3wVpL5hssQVsP6fdZdA4v8v+YLp+gOnLsJpoPyCmTPB9IGiDLD4fm9zMD9BqPkC2JzXgRfA4ifKztn/+///fpUIbvov0B3uD09B7UXQQPF6x4SjYHs+/z0Cp4H6/jdMPYxM7y/KOAjy1wMVtoP2f8D27sNKf9XYQzIN8pdAxE5weB3z3g4Ol5UfN9n/Btu7EYP+BaTL9q23//H/f/zjpasxaJB7SyavwKC//v8vz9a41P4z2JyFZNMQ++fbfwe6d+bMmfZPweIT7R8A3a3V3gaSv++b1ACnt4Htr4DSGfYAX9oq72ACAAA="},"shape":[76],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500913","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500914"}}},"glyph":{"type":"object","name":"Line","id":"p500909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p500911","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p500922","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500916","attributes":{"selected":{"type":"object","name":"Selection","id":"p500917","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500918"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p500923","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500924"}}},"glyph":{"type":"object","name":"Line","id":"p500919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500921","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p500861","attributes":{"tools":[{"id":"p500874"},{"id":"p500875"},{"id":"p500876"},{"id":"p500884"},{"type":"object","name":"SaveTool","id":"p500885"},{"id":"p500926"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p500869","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p500870","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p500871"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p500872"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p500864","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p500865","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p500866"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p500867"}}}],"center":[{"type":"object","name":"Grid","id":"p500868","attributes":{"axis":{"id":"p500864"}}},{"type":"object","name":"Grid","id":"p500873","attributes":{"dimension":1,"axis":{"id":"p500869"}}},{"type":"object","name":"Legend","id":"p500904","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p500905","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p500901"}]}},{"type":"object","name":"LegendItem","id":"p500915","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p500912"}]}},{"type":"object","name":"LegendItem","id":"p500925","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p500922"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p500927","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p500937","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p500929"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p500938"},"y_scale":{"type":"object","name":"LinearScale","id":"p500939"},"title":{"type":"object","name":"Title","id":"p500930","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p500968","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500962","attributes":{"selected":{"type":"object","name":"Selection","id":"p500963","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500964"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500969","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500970"}}},"glyph":{"type":"object","name":"Line","id":"p500965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500966","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500967","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p500977","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500971","attributes":{"selected":{"type":"object","name":"Selection","id":"p500972","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500973"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P///1+veHnO/t///89mPNhoz0BAPToNACFHy+FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500978","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500979"}}},"glyph":{"type":"object","name":"Line","id":"p500974","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500976","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p500986","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500980","attributes":{"selected":{"type":"object","name":"Selection","id":"p500981","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500982"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46BkzZ85s+nHePiR06gbW6AP2tTNn3pz1rNeegYA+GA0A/pCrumAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500987","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500988"}}},"glyph":{"type":"object","name":"Line","id":"p500983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p500985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p500997","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500991","attributes":{"selected":{"type":"object","name":"Selection","id":"p500992","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500993"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500998","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500999"}}},"glyph":{"type":"object","name":"Line","id":"p500994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p500996","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p501007","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p501001","attributes":{"selected":{"type":"object","name":"Selection","id":"p501002","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p501003"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p501008","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p501009"}}},"glyph":{"type":"object","name":"Line","id":"p501004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p501005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p501006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p500936","attributes":{"tools":[{"id":"p500950"},{"id":"p500951"},{"id":"p500952"},{"id":"p500960"},{"type":"object","name":"SaveTool","id":"p500961"},{"id":"p501011"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p500945","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p500946","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p500947"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p500948"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p500940","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p500941"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p500942"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p500943"}}}],"center":[{"type":"object","name":"Grid","id":"p500944","attributes":{"axis":{"id":"p500940"}}},{"type":"object","name":"Grid","id":"p500949","attributes":{"dimension":1,"axis":{"id":"p500945"}}},{"type":"object","name":"Legend","id":"p500989","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p500990","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p500986"}]}},{"type":"object","name":"LegendItem","id":"p501000","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p500997"}]}},{"type":"object","name":"LegendItem","id":"p501010","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p501007"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p501012","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"aa68c738-57d1-4c89-9878-d8ae728c6c91","roots":{"p501023":"c143b08c-9c16-46a7-8403-7f7ceec63fff"},"root_ids":["p501023"]}];
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