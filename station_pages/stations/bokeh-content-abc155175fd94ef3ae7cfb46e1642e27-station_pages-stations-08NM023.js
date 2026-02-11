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
    
    
    const element = document.getElementById("b18cd33d-16b9-4903-9481-31dbf033b3cc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b18cd33d-16b9-4903-9481-31dbf033b3cc' but no matching script tag was found.")
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
                  const docs_json = '{"ff449c87-4781-4bac-afe6-e1bc783282f3":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p507770","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p507771"}}},"roots":[{"type":"object","name":"Column","id":"p507943","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p507941","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p507940","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p507933","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p507794"},{"type":"object","name":"PanTool","id":"p507870"}]}},{"type":"object","name":"ToolProxy","id":"p507934","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p507795","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p507871","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p507935","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p507796","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507797","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507803","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507802","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p507872","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507873","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507879","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507878","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p507936","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p507804"},{"type":"object","name":"ResetTool","id":"p507880"}]}},{"type":"object","name":"SaveTool","id":"p507937"},{"type":"object","name":"ToolProxy","id":"p507938","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p507846","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p507939","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p507931","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p507772","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p507773"},"y_range":{"type":"object","name":"DataRange1d","id":"p507774"},"x_scale":{"type":"object","name":"LinearScale","id":"p507782"},"y_scale":{"type":"object","name":"LogScale","id":"p507783"},"title":{"type":"object","name":"Title","id":"p507775","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p507812","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507806","attributes":{"selected":{"type":"object","name":"Selection","id":"p507807","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507808"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507813","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507814"}}},"glyph":{"type":"object","name":"Line","id":"p507809","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507810","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507811","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507821","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507815","attributes":{"selected":{"type":"object","name":"Selection","id":"p507816","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507817"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PInoEAnZaW5pYk8Mj+YZXIusivD+2NjY2VGY49tF9SYMt1v/Oh/Q651mhdu4f2Z8+c0VGUf2DPdX2xgfqtu/Zr3R/umllz2/764oLY5RNv2R/6qnFHRPam/cyZMy1N467ZLy6wPbXo5RV7oDHTl22+DJa/33LJXq719URu9kv2////rz9w6iKcBlqfbrjxon3QDrmtByZctNeM6WcKKLgIcqfDff+L9oE75I6WSl0EmSvVvPiCfevrwBlV2RdA8gJvtcA0g9Gzc/YaMf1FEzzP2f/7//9+lQhhGuiPWwqTz4D0P/hZdwpOA8Phcqz3CRD/wOe/R+B0y+vAiN8lR0D6/zdMPYxM7/925pD9Z42Y+X6xB+2dH1Zd8bm93/4PUPxE2T4MetrMmZFcu/baJ6elLTtosgcs/lWDclponfvFA2E77RcU2GaxPNoKit8wvf8b7X8D5YsyMOkcW652mSkb7E+fObNm/5t19lZc14M3WKyx//H/f/zjpasxaKA+/jUyq8D+LZm8AoMO7T/EGq26wl7d2LjYX26Z/cwC21tr5y22/wy2byHV6SXuD1exXV5gPwOY3lZqz7eXNjb+XLx1qn08MMHlp/TZP/j///3W9Db7j8D4nhfZZL/wq8acyb9r7beB3VthDwBOZ12uKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507822","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507823"}}},"glyph":{"type":"object","name":"Line","id":"p507818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507819","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p507820","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p507832","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507826","attributes":{"selected":{"type":"object","name":"Selection","id":"p507827","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507828"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qu0oDYRCFBdFC8FIowioKgnhBEJVEvGBO3MSYNca9b0wRsRAEBcHOF9AXsLJLJwgGBAshgiBY+AL7BFZ2goWdmX/OFvsz/39mzncmdRv2Vf9vLjVnDzq/r8ztILQegVSpa/F+Eu3rH+vzbIrv05BqtjVD3TzmWs2OZIH6RZjSWmLfMkTdbK+wPwPT1shyziq6zLfGeesYNw0bnLuJrMjtLc7P6f0l6JPX9/c8/bZREN2wTV8bntieFOhfxJEMei6SYwfnIustkacEY5PskquMG3m4L5PPgcH5c8i5B4PhVMhbwaMcd/vkruJVuL6r5D9Q3wmXOVz1/3CZx1OOC4+5POUZ9ZnPV643nzkD5TsNmDfAgBgMhcwdKu9LyPwRxkR4HHEPkfL3xdxHrFxPMfeSKFc94X4S5equcU815XqocV+H+AekA/ONYAIAAA=="},"shape":[76],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBYI/PIngGTdtj2+SGIfvB7JZg+4G3+0J4RKL7lxD37////2xsb3wbxgepvgfjzjyjcAItv+3wVpL5hssQVsP6fdZdA4v8v+YLp+gOnLsJpoPyCmTPB9IGiDLD4fm9zMD9BqPkC2JzXgRfA4ifKztn/+///fpUIbvov0B3uD09B7UXQQPF6x4SjYHs+/z0Cp4H6/jdMPYxM7y/KOAjy1wMVtoP2f8D27sNKf9XYQzIN8pdAxE5weB3z3g4Ol5UfN9n/Btu7EYP+BaTL9q23//H/f/zjpasxaJB7SyavwKC//v8vz9a41P4z2JyFZNMQ++fbfwe6d+bMmfZPweIT7R8A3a3V3gaSv++b1ACnt4Htr4DSGfYAX9oq72ACAAA="},"shape":[76],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507833","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507834"}}},"glyph":{"type":"object","name":"Line","id":"p507829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p507831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p507842","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507836","attributes":{"selected":{"type":"object","name":"Selection","id":"p507837","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507838"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p507843","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507844"}}},"glyph":{"type":"object","name":"Line","id":"p507839","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507840","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507781","attributes":{"tools":[{"id":"p507794"},{"id":"p507795"},{"id":"p507796"},{"id":"p507804"},{"type":"object","name":"SaveTool","id":"p507805"},{"id":"p507846"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p507789","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p507790","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p507791"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507792"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p507784","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507785","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507786"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507787"}}}],"center":[{"type":"object","name":"Grid","id":"p507788","attributes":{"axis":{"id":"p507784"}}},{"type":"object","name":"Grid","id":"p507793","attributes":{"dimension":1,"axis":{"id":"p507789"}}},{"type":"object","name":"Legend","id":"p507824","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p507825","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p507821"}]}},{"type":"object","name":"LegendItem","id":"p507835","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p507832"}]}},{"type":"object","name":"LegendItem","id":"p507845","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p507842"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p507847","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p507857","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p507849"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p507858"},"y_scale":{"type":"object","name":"LinearScale","id":"p507859"},"title":{"type":"object","name":"Title","id":"p507850","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p507888","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507882","attributes":{"selected":{"type":"object","name":"Selection","id":"p507883","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507884"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507889","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507890"}}},"glyph":{"type":"object","name":"Line","id":"p507885","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507886","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507887","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507897","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507891","attributes":{"selected":{"type":"object","name":"Selection","id":"p507892","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507893"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P///1+veHnO/t///89mPNhoz0BAPToNACFHy+FgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507898","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507899"}}},"glyph":{"type":"object","name":"Line","id":"p507894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507896","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507906","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507900","attributes":{"selected":{"type":"object","name":"Selection","id":"p507901","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507902"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46BkzZ85s+nHePiR06gbW6AP2tTNn3pz1rNeegYA+GA0A/pCrumAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507907","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507908"}}},"glyph":{"type":"object","name":"Line","id":"p507903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p507905","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p507917","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507911","attributes":{"selected":{"type":"object","name":"Selection","id":"p507912","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507913"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46HOWz8/s5b1gn5KWFnbk2kH72pkzb8561mvPQEAfjAYAUsyORmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507918","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507919"}}},"glyph":{"type":"object","name":"Line","id":"p507914","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507915","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p507916","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p507927","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507921","attributes":{"selected":{"type":"object","name":"Selection","id":"p507922","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507923"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p507928","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507929"}}},"glyph":{"type":"object","name":"Line","id":"p507924","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507925","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507926","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507856","attributes":{"tools":[{"id":"p507870"},{"id":"p507871"},{"id":"p507872"},{"id":"p507880"},{"type":"object","name":"SaveTool","id":"p507881"},{"id":"p507931"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p507865","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507866","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507867"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507868"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p507860","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p507861"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p507862"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p507863"}}}],"center":[{"type":"object","name":"Grid","id":"p507864","attributes":{"axis":{"id":"p507860"}}},{"type":"object","name":"Grid","id":"p507869","attributes":{"dimension":1,"axis":{"id":"p507865"}}},{"type":"object","name":"Legend","id":"p507909","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p507910","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p507906"}]}},{"type":"object","name":"LegendItem","id":"p507920","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p507917"}]}},{"type":"object","name":"LegendItem","id":"p507930","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p507927"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p507932","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ff449c87-4781-4bac-afe6-e1bc783282f3","roots":{"p507943":"b18cd33d-16b9-4903-9481-31dbf033b3cc"},"root_ids":["p507943"]}];
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