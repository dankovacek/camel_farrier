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
    
    
    const element = document.getElementById("b09da685-a915-4ce3-9675-1513444fe9de");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b09da685-a915-4ce3-9675-1513444fe9de' but no matching script tag was found.")
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
                  const docs_json = '{"e272494e-90b6-4dd6-a746-1d084095cc8b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p500631","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p500632"}}},"roots":[{"type":"object","name":"Column","id":"p500804","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p500802","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p500801","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p500794","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p500655"},{"type":"object","name":"PanTool","id":"p500731"}]}},{"type":"object","name":"ToolProxy","id":"p500795","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p500656","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p500732","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p500796","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p500657","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p500658","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p500664","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p500663","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p500733","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p500734","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p500740","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p500739","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p500797","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p500665"},{"type":"object","name":"ResetTool","id":"p500741"}]}},{"type":"object","name":"SaveTool","id":"p500798"},{"type":"object","name":"ToolProxy","id":"p500799","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p500707","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p500800","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p500792","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p500633","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p500634"},"y_range":{"type":"object","name":"DataRange1d","id":"p500635"},"x_scale":{"type":"object","name":"LinearScale","id":"p500643"},"y_scale":{"type":"object","name":"LogScale","id":"p500644"},"title":{"type":"object","name":"Title","id":"p500636","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p500673","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500667","attributes":{"selected":{"type":"object","name":"Selection","id":"p500668","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500669"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500674","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500675"}}},"glyph":{"type":"object","name":"Line","id":"p500670","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p500682","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500676","attributes":{"selected":{"type":"object","name":"Selection","id":"p500677","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500678"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500683","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500684"}}},"glyph":{"type":"object","name":"Line","id":"p500679","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500680","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p500681","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p500693","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500687","attributes":{"selected":{"type":"object","name":"Selection","id":"p500688","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500689"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qu0oDYRCFBdFC8FIowioKgnhBEJVEvGBO3MSYNca9b0wRsRAEBcHOF9AXsLJLJwgGBAshgiBY+AL7BFZ2goWdmX/OFvsz/39mzncmdRv2Vf9vLjVnDzq/r8ztILQegVSpa/F+Eu3rH+vzbIrv05BqtjVD3TzmWs2OZIH6RZjSWmLfMkTdbK+wPwPT1shyziq6zLfGeesYNw0bnLuJrMjtLc7P6f0l6JPX9/c8/bZREN2wTV8bntieFOhfxJEMei6SYwfnIustkacEY5PskquMG3m4L5PPgcH5c8i5B4PhVMhbwaMcd/vkruJVuL6r5D9Q3wmXOVz1/3CZx1OOC4+5POUZ9ZnPV643nzkD5TsNmDfAgBgMhcwdKu9LyPwRxkR4HHEPkfL3xdxHrFxPMfeSKFc94X4S5equcU815XqocV+H+AekA/ONYAIAAA=="},"shape":[76],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PIngGTdtj2+SGIfvB7JZg+4G3+0J4RKL7lxD37////2xsb3wbxgepvgfjzjyjcAItv+3wVpL5hssQVsP6fdZdA4v8v+YLp+gOnLsJpoPyCmTPB9IGiDLD4fm9zMD9BqPkC2JzXgRfA4ifKztn/+///fpUIbvov0B3uD09B7UXQQPF6x4SjYHs+/z0Cp4H6/jdMPYxM7y/KOAjy1wMVtoP2f8D27sNKf9XYQzIN8pdAxE5weB3z3g4Ol5UfN9n/Btu7EYP+BaTL9q23//H/f/zjpasxaJB7SyavwKC//v8vz9a41P4z2JyFZNMQ++fbfwe6d+bMmfZPweIT7R8A3a3V3gaSv++b1ACnt4Htr4DSGfYAX9oq72ACAAA="},"shape":[76],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500694","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500695"}}},"glyph":{"type":"object","name":"Line","id":"p500690","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500691","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p500692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p500703","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500697","attributes":{"selected":{"type":"object","name":"Selection","id":"p500698","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500699"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p500704","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500705"}}},"glyph":{"type":"object","name":"Line","id":"p500700","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500701","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p500642","attributes":{"tools":[{"id":"p500655"},{"id":"p500656"},{"id":"p500657"},{"id":"p500665"},{"type":"object","name":"SaveTool","id":"p500666"},{"id":"p500707"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p500650","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p500651","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p500652"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p500653"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p500645","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p500646","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p500647"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p500648"}}}],"center":[{"type":"object","name":"Grid","id":"p500649","attributes":{"axis":{"id":"p500645"}}},{"type":"object","name":"Grid","id":"p500654","attributes":{"dimension":1,"axis":{"id":"p500650"}}},{"type":"object","name":"Legend","id":"p500685","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p500686","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p500682"}]}},{"type":"object","name":"LegendItem","id":"p500696","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p500693"}]}},{"type":"object","name":"LegendItem","id":"p500706","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p500703"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p500708","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p500718","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p500710"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p500719"},"y_scale":{"type":"object","name":"LinearScale","id":"p500720"},"title":{"type":"object","name":"Title","id":"p500711","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p500749","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500743","attributes":{"selected":{"type":"object","name":"Selection","id":"p500744","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500745"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500750","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500751"}}},"glyph":{"type":"object","name":"Line","id":"p500746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p500758","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500752","attributes":{"selected":{"type":"object","name":"Selection","id":"p500753","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500754"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P///1+veHnO/t///89mPNhoz0BAPToNACFHy+FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500759","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500760"}}},"glyph":{"type":"object","name":"Line","id":"p500755","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500756","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p500767","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500761","attributes":{"selected":{"type":"object","name":"Selection","id":"p500762","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500763"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46BkzZ85s+nHePiR06gbW6AP2tTNn3pz1rNeegYA+GA0A/pCrumAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500768","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500769"}}},"glyph":{"type":"object","name":"Line","id":"p500764","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500765","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p500766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p500778","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500772","attributes":{"selected":{"type":"object","name":"Selection","id":"p500773","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500774"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p500779","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500780"}}},"glyph":{"type":"object","name":"Line","id":"p500775","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p500777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p500788","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p500782","attributes":{"selected":{"type":"object","name":"Selection","id":"p500783","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p500784"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p500789","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p500790"}}},"glyph":{"type":"object","name":"Line","id":"p500785","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p500786","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p500787","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p500717","attributes":{"tools":[{"id":"p500731"},{"id":"p500732"},{"id":"p500733"},{"id":"p500741"},{"type":"object","name":"SaveTool","id":"p500742"},{"id":"p500792"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p500726","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p500727","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p500728"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p500729"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p500721","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p500722"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p500723"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p500724"}}}],"center":[{"type":"object","name":"Grid","id":"p500725","attributes":{"axis":{"id":"p500721"}}},{"type":"object","name":"Grid","id":"p500730","attributes":{"dimension":1,"axis":{"id":"p500726"}}},{"type":"object","name":"Legend","id":"p500770","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p500771","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p500767"}]}},{"type":"object","name":"LegendItem","id":"p500781","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p500778"}]}},{"type":"object","name":"LegendItem","id":"p500791","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p500788"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p500793","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e272494e-90b6-4dd6-a746-1d084095cc8b","roots":{"p500804":"b09da685-a915-4ce3-9675-1513444fe9de"},"root_ids":["p500804"]}];
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