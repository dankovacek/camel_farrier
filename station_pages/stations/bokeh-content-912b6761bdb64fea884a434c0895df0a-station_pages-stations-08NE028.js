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
    
    
    const element = document.getElementById("f7208613-7072-400b-84ce-9349a3be9d93");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7208613-7072-400b-84ce-9349a3be9d93' but no matching script tag was found.")
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
                  const docs_json = '{"c2b1d8c1-ccf4-4e22-8911-a53399270240":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p504700","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p504701"}}},"roots":[{"type":"object","name":"Column","id":"p504864","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p504861","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p504860","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p504853","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p504724"},{"type":"object","name":"PanTool","id":"p504800"}]}},{"type":"object","name":"ToolProxy","id":"p504854","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p504725","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p504801","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p504855","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p504726","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p504727","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p504733","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p504732","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p504802","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p504803","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p504809","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p504808","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p504856","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p504734"},{"type":"object","name":"ResetTool","id":"p504810"}]}},{"type":"object","name":"SaveTool","id":"p504857"},{"type":"object","name":"ToolProxy","id":"p504858","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p504776","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p504859","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p504852","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p504702","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p504703"},"y_range":{"type":"object","name":"DataRange1d","id":"p504704"},"x_scale":{"type":"object","name":"LinearScale","id":"p504712"},"y_scale":{"type":"object","name":"LogScale","id":"p504713"},"title":{"type":"object","name":"Title","id":"p504705","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p504742","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504736","attributes":{"selected":{"type":"object","name":"Selection","id":"p504737","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504738"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0D+BgIEDdT3XM57v/0fsLv3YdCWXNcPt3vvs98k13r73uG99j+BHtTZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2L6vGnvsDYyNs/kE9oDC89ncrbtB7kx4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0uz3QH2/YmbeD3PNfq30b2TTIPVKLt4LceeDz3y0YtA3XdWOnii32W+RaTz/P2mzv+rCq5FzHJpB98Xy6tKMBqUys3SgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504743","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504744"}}},"glyph":{"type":"object","name":"Line","id":"p504739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p504751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504745","attributes":{"selected":{"type":"object","name":"Selection","id":"p504746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504747"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0D+BgIEDdT3XM57v/0fsLv3YdCWXNcPt3vvs98k13r73uG99j+BHtTZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2L6vGnvsDYyNs/kE9oDC89ncrbtB7kx4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0uz3QH2/YmbeD3PNfq30b2TTIPVKLt4LceeDz3y0YtA3XdWOnii32W+RaTz/P2mzv+rCq5FzHJpB98Xy6tKMBqUys3SgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504753"}}},"glyph":{"type":"object","name":"Line","id":"p504748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p504750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p504762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504756","attributes":{"selected":{"type":"object","name":"Selection","id":"p504757","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504758"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DGXjeC6jNxmHPvyzLzvaZQ/eYO3n96hOwXW0DNsXL4Kala59ZpDTXPxmGF+d6Xvvl2UHPtHVaBgQPUfEeHpp1lCetknaD2ODmAXLNpgjPUPhcHg+t8Z7Yyu0LtdXVgf3arcWeZG9R+d4f7IOe8dIe6w8NhGzPI555Q93g59AFdd+S8F9Rd3g4pYA/7QN3n4wD0HNACX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5g71YFQf0T5AAy7aNxMNRfwQ78YA3BUP+FOFRdng0M0RCoP0MdwN5LCIX6N9Qh6FH6lB+SYVB/hzmAjb8cBvV/uIMmKHp7wqHhEO4AVAyMgAhoeEQ4MIBBpAMAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFI+v////Ibim7YA+n9J8quYdBAcxw41lwBmZfw9MIle0YGhgcqbBdBdEKK9XkQ3ZDz/DRI3//VMqfA4pZbTtj/+/8/vv/QUfu////bGxsfBvHtOx0PwGmgeUBwAGQumP4Dtn8fBv0TaK7Opr32MBpk7sS3e8Dm46NB5n3V2AM2D0QDLUl4vHQ3nAa6a777w10g92GlQeoFInaC1SPTQHv3l0zeATJX/ua57ThpoLPnH/PeDjL/v1b7NqJpUGB8/rsFZC8K/Rvo3z0lm0HmxPPpbqKYBgAWzibNKAIAAA=="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504764"}}},"glyph":{"type":"object","name":"Line","id":"p504759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p504761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p504772","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504766","attributes":{"selected":{"type":"object","name":"Selection","id":"p504767","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504768"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p504773","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504774"}}},"glyph":{"type":"object","name":"Line","id":"p504769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p504711","attributes":{"tools":[{"id":"p504724"},{"id":"p504725"},{"id":"p504726"},{"id":"p504734"},{"type":"object","name":"SaveTool","id":"p504735"},{"id":"p504776"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p504719","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p504720","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p504721"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p504722"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p504714","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p504715","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p504716"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p504717"}}}],"center":[{"type":"object","name":"Grid","id":"p504718","attributes":{"axis":{"id":"p504714"}}},{"type":"object","name":"Grid","id":"p504723","attributes":{"dimension":1,"axis":{"id":"p504719"}}},{"type":"object","name":"Legend","id":"p504754","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p504755","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p504751"}]}},{"type":"object","name":"LegendItem","id":"p504765","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p504762"}]}},{"type":"object","name":"LegendItem","id":"p504775","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p504772"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p504777","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p504787","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p504779"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p504788"},"y_scale":{"type":"object","name":"LinearScale","id":"p504789"},"title":{"type":"object","name":"Title","id":"p504780","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p504818","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504812","attributes":{"selected":{"type":"object","name":"Selection","id":"p504813","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504814"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504819","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504820"}}},"glyph":{"type":"object","name":"Line","id":"p504815","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504816","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p504827","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504821","attributes":{"selected":{"type":"object","name":"Selection","id":"p504822","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504823"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504828","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504829"}}},"glyph":{"type":"object","name":"Line","id":"p504824","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504825","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p504826","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p504838","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504832","attributes":{"selected":{"type":"object","name":"Selection","id":"p504833","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504834"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504839","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504840"}}},"glyph":{"type":"object","name":"Line","id":"p504835","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504836","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p504837","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p504848","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504842","attributes":{"selected":{"type":"object","name":"Selection","id":"p504843","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504844"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p504849","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504850"}}},"glyph":{"type":"object","name":"Line","id":"p504845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504847","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p504786","attributes":{"tools":[{"id":"p504800"},{"id":"p504801"},{"id":"p504802"},{"id":"p504810"},{"type":"object","name":"SaveTool","id":"p504811"},{"id":"p504852"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p504795","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p504796","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p504797"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p504798"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p504790","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p504791"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p504792"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p504793"}}}],"center":[{"type":"object","name":"Grid","id":"p504794","attributes":{"axis":{"id":"p504790"}}},{"type":"object","name":"Grid","id":"p504799","attributes":{"dimension":1,"axis":{"id":"p504795"}}},{"type":"object","name":"Legend","id":"p504830","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p504831","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p504827"}]}},{"type":"object","name":"LegendItem","id":"p504841","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p504838"}]}},{"type":"object","name":"LegendItem","id":"p504851","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p504848"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p504863","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c2b1d8c1-ccf4-4e22-8911-a53399270240","roots":{"p504864":"f7208613-7072-400b-84ce-9349a3be9d93"},"root_ids":["p504864"]}];
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