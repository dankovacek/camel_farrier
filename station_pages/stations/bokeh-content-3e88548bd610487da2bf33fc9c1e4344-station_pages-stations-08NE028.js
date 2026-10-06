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
    
    
    const element = document.getElementById("e422241e-52f8-44f9-bcf4-15e5fb8fe685");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e422241e-52f8-44f9-bcf4-15e5fb8fe685' but no matching script tag was found.")
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
                  const docs_json = '{"65601df0-bec2-4b60-b27b-3ed5e04b775e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p700990","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p700991"}}},"roots":[{"type":"object","name":"Column","id":"p701154","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p701151","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p701150","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p701143","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p701014"},{"type":"object","name":"PanTool","id":"p701090"}]}},{"type":"object","name":"ToolProxy","id":"p701144","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p701015","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p701091","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p701145","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p701016","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p701017","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p701023","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p701022","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p701092","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p701093","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p701099","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p701098","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p701146","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p701024"},{"type":"object","name":"ResetTool","id":"p701100"}]}},{"type":"object","name":"SaveTool","id":"p701147"},{"type":"object","name":"ToolProxy","id":"p701148","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p701066","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p701149","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p701142","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p700992","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p700993"},"y_range":{"type":"object","name":"DataRange1d","id":"p700994"},"x_scale":{"type":"object","name":"LinearScale","id":"p701002"},"y_scale":{"type":"object","name":"LogScale","id":"p701003"},"title":{"type":"object","name":"Title","id":"p700995","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p701032","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701026","attributes":{"selected":{"type":"object","name":"Selection","id":"p701027","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701028"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0D+BgIEDdT3XM57v/0fsLv3YdCWXNcPt3vvs98k13r73uG99j+BHtTZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2L6vGnvsDYyNs/kE9oDC89ncrbtB7kx4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0uz3QH2/YmbeD3PNfq30b2TTIPVKLt4LceeDz3y0YtA3XdWOnii32W+RaTz/P2mzv+rCq5FzHJpB98Xy6tKMBqUys3SgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p701033","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701034"}}},"glyph":{"type":"object","name":"Line","id":"p701029","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p701031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p701041","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701035","attributes":{"selected":{"type":"object","name":"Selection","id":"p701036","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701037"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0D+BgIEDdT3XM57v/0fsLv3YdCWXNcPt3vvs98k13r73uG99j+BHtTZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2L6vGnvsDYyNs/kE9oDC89ncrbtB7kx4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0uz3QH2/YmbeD3PNfq30b2TTIPVKLt4LceeDz3y0YtA3XdWOnii32W+RaTz/P2mzv+rCq5FzHJpB98Xy6tKMBqUys3SgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p701042","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701043"}}},"glyph":{"type":"object","name":"Line","id":"p701038","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701039","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p701040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p701052","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701046","attributes":{"selected":{"type":"object","name":"Selection","id":"p701047","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701048"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DGXjeC6jNxmHPvyzLzvaZQ/eYO3n96hOwXW0DNsXL4Kala59ZpDTXPxmGF+d6Xvvl2UHPtHVaBgQPUfEeHpp1lCetknaD2ODmAXLNpgjPUPhcHg+t8Z7Yyu0LtdXVgf3arcWeZG9R+d4f7IOe8dIe6w8NhGzPI555Q93g59AFdd+S8F9Rd3g4pYA/7QN3n4wD0HNACX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5g71YFQf0T5AAy7aNxMNRfwQ78YA3BUP+FOFRdng0M0RCoP0MdwN5LCIX6N9Qh6FH6lB+SYVB/hzmAjb8cBvV/uIMmKHp7wqHhEO4AVAyMgAhoeEQ4MIBBpAMAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFI+v////Ibim7YA+n9J8quYdBAcxw41lwBmZfw9MIle0YGhgcqbBdBdEKK9XkQ3ZDz/DRI3//VMqfA4pZbTtj/+/8/vv/QUfu////bGxsfBvHtOx0PwGmgeUBwAGQumP4Dtn8fBv0TaK7Opr32MBpk7sS3e8Dm46NB5n3V2AM2D0QDLUl4vHQ3nAa6a777w10g92GlQeoFInaC1SPTQHv3l0zeATJX/ua57ThpoLPnH/PeDjL/v1b7NqJpUGB8/rsFZC8K/Rvo3z0lm0HmxPPpbqKYBgAWzibNKAIAAA=="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p701053","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701054"}}},"glyph":{"type":"object","name":"Line","id":"p701049","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701050","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p701051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p701062","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701056","attributes":{"selected":{"type":"object","name":"Selection","id":"p701057","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701058"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p701063","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701064"}}},"glyph":{"type":"object","name":"Line","id":"p701059","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701060","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p701061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p701001","attributes":{"tools":[{"id":"p701014"},{"id":"p701015"},{"id":"p701016"},{"id":"p701024"},{"type":"object","name":"SaveTool","id":"p701025"},{"id":"p701066"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p701009","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p701010","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p701011"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p701012"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p701004","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p701005","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p701006"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p701007"}}}],"center":[{"type":"object","name":"Grid","id":"p701008","attributes":{"axis":{"id":"p701004"}}},{"type":"object","name":"Grid","id":"p701013","attributes":{"dimension":1,"axis":{"id":"p701009"}}},{"type":"object","name":"Legend","id":"p701044","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p701045","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p701041"}]}},{"type":"object","name":"LegendItem","id":"p701055","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p701052"}]}},{"type":"object","name":"LegendItem","id":"p701065","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p701062"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p701067","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p701077","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p701069"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p701078"},"y_scale":{"type":"object","name":"LinearScale","id":"p701079"},"title":{"type":"object","name":"Title","id":"p701070","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p701108","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701102","attributes":{"selected":{"type":"object","name":"Selection","id":"p701103","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701104"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p701109","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701110"}}},"glyph":{"type":"object","name":"Line","id":"p701105","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701106","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p701107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p701117","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701111","attributes":{"selected":{"type":"object","name":"Selection","id":"p701112","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701113"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p701118","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701119"}}},"glyph":{"type":"object","name":"Line","id":"p701114","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701115","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p701116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p701128","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701122","attributes":{"selected":{"type":"object","name":"Selection","id":"p701123","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701124"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p701129","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701130"}}},"glyph":{"type":"object","name":"Line","id":"p701125","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701126","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p701127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p701138","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p701132","attributes":{"selected":{"type":"object","name":"Selection","id":"p701133","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p701134"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p701139","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p701140"}}},"glyph":{"type":"object","name":"Line","id":"p701135","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p701136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p701137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p701076","attributes":{"tools":[{"id":"p701090"},{"id":"p701091"},{"id":"p701092"},{"id":"p701100"},{"type":"object","name":"SaveTool","id":"p701101"},{"id":"p701142"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p701085","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p701086","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p701087"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p701088"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p701080","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p701081"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p701082"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p701083"}}}],"center":[{"type":"object","name":"Grid","id":"p701084","attributes":{"axis":{"id":"p701080"}}},{"type":"object","name":"Grid","id":"p701089","attributes":{"dimension":1,"axis":{"id":"p701085"}}},{"type":"object","name":"Legend","id":"p701120","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p701121","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p701117"}]}},{"type":"object","name":"LegendItem","id":"p701131","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p701128"}]}},{"type":"object","name":"LegendItem","id":"p701141","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p701138"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p701153","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"65601df0-bec2-4b60-b27b-3ed5e04b775e","roots":{"p701154":"e422241e-52f8-44f9-bcf4-15e5fb8fe685"},"root_ids":["p701154"]}];
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