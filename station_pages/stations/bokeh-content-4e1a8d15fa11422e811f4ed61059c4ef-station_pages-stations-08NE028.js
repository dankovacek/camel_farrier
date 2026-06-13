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
    
    
    const element = document.getElementById("fd033140-d350-4cac-bf42-451c6c67954a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fd033140-d350-4cac-bf42-451c6c67954a' but no matching script tag was found.")
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
                  const docs_json = '{"826abea9-69f0-44e2-bae5-89b2595ee87d":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p504102","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p504103"}}},"roots":[{"type":"object","name":"Column","id":"p504266","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p504263","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p504262","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p504255","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p504126"},{"type":"object","name":"PanTool","id":"p504202"}]}},{"type":"object","name":"ToolProxy","id":"p504256","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p504127","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p504203","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p504257","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p504128","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p504129","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p504135","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p504134","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p504204","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p504205","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p504211","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p504210","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p504258","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p504136"},{"type":"object","name":"ResetTool","id":"p504212"}]}},{"type":"object","name":"SaveTool","id":"p504259"},{"type":"object","name":"ToolProxy","id":"p504260","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p504178","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p504261","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p504254","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p504104","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p504105"},"y_range":{"type":"object","name":"DataRange1d","id":"p504106"},"x_scale":{"type":"object","name":"LinearScale","id":"p504114"},"y_scale":{"type":"object","name":"LogScale","id":"p504115"},"title":{"type":"object","name":"Title","id":"p504107","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p504144","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504138","attributes":{"selected":{"type":"object","name":"Selection","id":"p504139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504140"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0D+BgIEDdT3XM57v/0fsLv3YdCWXNcPt3vvs98k13r73uG99j+BHtTZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2L6vGnvsDYyNs/kE9oDC89ncrbtB7kx4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0uz3QH2/YmbeD3PNfq30b2TTIPVKLt4LceeDz3y0YtA3XdWOnii32W+RaTz/P2mzv+rCq5FzHJpB98Xy6tKMBqUys3SgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504146"}}},"glyph":{"type":"object","name":"Line","id":"p504141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p504153","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504147","attributes":{"selected":{"type":"object","name":"Selection","id":"p504148","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504149"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0D+BgIEDdT3XM57v/0fsLv3YdCWXNcPt3vvs98k13r73uG99j+BHtTZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2L6vGnvsDYyNs/kE9oDC89ncrbtB7kx4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0uz3QH2/YmbeD3PNfq30b2TTIPVKLt4LceeDz3y0YtA3XdWOnii32W+RaTz/P2mzv+rCq5FzHJpB98Xy6tKMBqUys3SgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504154","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504155"}}},"glyph":{"type":"object","name":"Line","id":"p504150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504151","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p504152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p504164","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504158","attributes":{"selected":{"type":"object","name":"Selection","id":"p504159","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504160"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DGXjeC6jNxmHPvyzLzvaZQ/eYO3n96hOwXW0DNsXL4Kala59ZpDTXPxmGF+d6Xvvl2UHPtHVaBgQPUfEeHpp1lCetknaD2ODmAXLNpgjPUPhcHg+t8Z7Yyu0LtdXVgf3arcWeZG9R+d4f7IOe8dIe6w8NhGzPI555Q93g59AFdd+S8F9Rd3g4pYA/7QN3n4wD0HNACX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5g71YFQf0T5AAy7aNxMNRfwQ78YA3BUP+FOFRdng0M0RCoP0MdwN5LCIX6N9Qh6FH6lB+SYVB/hzmAjb8cBvV/uIMmKHp7wqHhEO4AVAyMgAhoeEQ4MIBBpAMAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiYnnfLnoFI+v////Ibim7YA+n9J8quYdBAcxw41lwBmZfw9MIle0YGhgcqbBdBdEKK9XkQ3ZDz/DRI3//VMqfA4pZbTtj/+/8/vv/QUfu////bGxsfBvHtOx0PwGmgeUBwAGQumP4Dtn8fBv0TaK7Opr32MBpk7sS3e8Dm46NB5n3V2AM2D0QDLUl4vHQ3nAa6a777w10g92GlQeoFInaC1SPTQHv3l0zeATJX/ua57ThpoLPnH/PeDjL/v1b7NqJpUGB8/rsFZC8K/Rvo3z0lm0HmxPPpbqKYBgAWzibNKAIAAA=="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504165","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504166"}}},"glyph":{"type":"object","name":"Line","id":"p504161","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p504163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p504174","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504168","attributes":{"selected":{"type":"object","name":"Selection","id":"p504169","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504170"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p504175","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504176"}}},"glyph":{"type":"object","name":"Line","id":"p504171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p504113","attributes":{"tools":[{"id":"p504126"},{"id":"p504127"},{"id":"p504128"},{"id":"p504136"},{"type":"object","name":"SaveTool","id":"p504137"},{"id":"p504178"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p504121","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p504122","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p504123"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p504124"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p504116","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p504117","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p504118"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p504119"}}}],"center":[{"type":"object","name":"Grid","id":"p504120","attributes":{"axis":{"id":"p504116"}}},{"type":"object","name":"Grid","id":"p504125","attributes":{"dimension":1,"axis":{"id":"p504121"}}},{"type":"object","name":"Legend","id":"p504156","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p504157","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p504153"}]}},{"type":"object","name":"LegendItem","id":"p504167","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p504164"}]}},{"type":"object","name":"LegendItem","id":"p504177","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p504174"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p504179","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p504189","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p504181"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p504190"},"y_scale":{"type":"object","name":"LinearScale","id":"p504191"},"title":{"type":"object","name":"Title","id":"p504182","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p504220","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504214","attributes":{"selected":{"type":"object","name":"Selection","id":"p504215","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504216"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504221","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504222"}}},"glyph":{"type":"object","name":"Line","id":"p504217","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504218","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504219","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p504229","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504223","attributes":{"selected":{"type":"object","name":"Selection","id":"p504224","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504225"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504230","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504231"}}},"glyph":{"type":"object","name":"Line","id":"p504226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504227","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p504228","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p504240","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504234","attributes":{"selected":{"type":"object","name":"Selection","id":"p504235","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504236"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKOHqPwoab9t/vVff7uxyyT0lLKwvy2W2PSz8AOiAeoWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p504241","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504242"}}},"glyph":{"type":"object","name":"Line","id":"p504237","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504238","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p504239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p504250","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p504244","attributes":{"selected":{"type":"object","name":"Selection","id":"p504245","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p504246"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p504251","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p504252"}}},"glyph":{"type":"object","name":"Line","id":"p504247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p504248","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p504249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p504188","attributes":{"tools":[{"id":"p504202"},{"id":"p504203"},{"id":"p504204"},{"id":"p504212"},{"type":"object","name":"SaveTool","id":"p504213"},{"id":"p504254"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p504197","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p504198","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p504199"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p504200"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p504192","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p504193"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p504194"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p504195"}}}],"center":[{"type":"object","name":"Grid","id":"p504196","attributes":{"axis":{"id":"p504192"}}},{"type":"object","name":"Grid","id":"p504201","attributes":{"dimension":1,"axis":{"id":"p504197"}}},{"type":"object","name":"Legend","id":"p504232","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p504233","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p504229"}]}},{"type":"object","name":"LegendItem","id":"p504243","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p504240"}]}},{"type":"object","name":"LegendItem","id":"p504253","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p504250"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p504265","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"826abea9-69f0-44e2-bae5-89b2595ee87d","roots":{"p504266":"fd033140-d350-4cac-bf42-451c6c67954a"},"root_ids":["p504266"]}];
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