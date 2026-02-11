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
    
    
    const element = document.getElementById("c7c5dd40-f2b0-4c5b-9a8a-924e03f17647");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c7c5dd40-f2b0-4c5b-9a8a-924e03f17647' but no matching script tag was found.")
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
                  const docs_json = '{"98a80fd5-2470-4ec3-a334-e688c5033c8b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p265440","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p265441"}}},"roots":[{"type":"object","name":"Column","id":"p265604","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p265602","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p265601","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p265594","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p265464"},{"type":"object","name":"PanTool","id":"p265540"}]}},{"type":"object","name":"ToolProxy","id":"p265595","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p265465","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p265541","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p265596","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p265466","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p265467","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p265473","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265472","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p265542","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p265543","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p265549","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265548","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p265597","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p265474"},{"type":"object","name":"ResetTool","id":"p265550"}]}},{"type":"object","name":"SaveTool","id":"p265598"},{"type":"object","name":"ToolProxy","id":"p265599","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p265516","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p265600","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p265592","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p265442","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p265443"},"y_range":{"type":"object","name":"DataRange1d","id":"p265444"},"x_scale":{"type":"object","name":"LinearScale","id":"p265452"},"y_scale":{"type":"object","name":"LogScale","id":"p265453"},"title":{"type":"object","name":"Title","id":"p265445","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p265482","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265476","attributes":{"selected":{"type":"object","name":"Selection","id":"p265477","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265478"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7P9D6XOLC85enzfT/vv///NnzpxpP8/9odTHuTPsm2bODMyeNd2+8XVgx9Np0+z/AjVoteOmRVpfS96ZO9X+57XFAWGzpti/+//f/mHVFPsTVSLz8mdOtj965syVl1Mn2f8G2js9b5L91jNnbJinTrR/+v///qIMBB2TlrZs97QJ9r/+/7/vm0Q9+utad0fxj732V6pE9Frcu6H+7yKZ7ps586Z2aqf9B6B7SyZ32Os+rCqJS263fwAOhzYMurrANos3p9X+Ijg8WuwtdsixOmQ1269wf9hkktwIdV8D1ejNZ8706CrW218F2sexpoZoOvTQ1w6GoGr7bWB/VVBMs/cfmuqxqNx+OtjfJRj0HI2Y9mWbi6HuLqA6bcx1Pfm5RAHUPRkYdLz7w7oFohn2wmD1ARg0ANrW5/woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265483","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265484"}}},"glyph":{"type":"object","name":"Line","id":"p265479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p265491","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265485","attributes":{"selected":{"type":"object","name":"Selection","id":"p265486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265487"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7P9D6XOLC85enzfT/vv///NnzpxpP8/9odTHuTPsm2bODMyeNd2+8XVgx9Np0+z/AjVoteOmRVpfS96ZO9X+57XFAWGzpti/+//f/mHVFPsTVSLz8mdOtj965syVl1Mn2f8G2js9b5L91jNnbJinTrR/+v///qIMBB2TlrZs97QJ9r/+/7/vm0Q9+utad0fxj732V6pE9Frcu6H+7yKZ7ps586Z2aqf9B6B7SyZ32Os+rCqJS263fwAOhzYMurrANos3p9X+Ijg8WuwtdsixOmQ1269wf9hkktwIdV8D1ejNZ8706CrW218F2sexpoZoOvTQ1w6GoGr7bWB/VVBMs/cfmuqxqNx+OtjfJRj0HI2Y9mWbi6HuLqA6bcx1Pfm5RAHUPRkYdLz7w7oFohn2wmD1ARg0ANrW5/woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265493"}}},"glyph":{"type":"object","name":"Line","id":"p265488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p265490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p265502","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265496","attributes":{"selected":{"type":"object","name":"Selection","id":"p265497","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265498"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2RD0ScYRzH05xmoqRsy2WVpD/TVreu1p/re91d3V3d9d57f96rSVRENikVkZKIGYk0I5EoiURkZKREmhyRSGSMjGRHSkb0vr99Xy+v93l+z/fP5xlfxnpHYbxuXL4JsN3/mkyxPcX//1RcxGa+fbekc/0FFnJK+3rcZu5n4832n6UvJbmcy8P070r9zed8Af4mfx6pdhTx3Gv4rWfds74Snn+L04301dviUuqUYWr/hz5qod47yLi1nLpWXF4bghXUr8TXxK2xZbynTxVcz9sHj13V9KvBXbGp98FbS18bVgxbpY7+wJo8YA47nhhy63bmqceHHXXxdKOeuRzYPMyf/7jpYD4nnp38m0vccjKnC12y4WLeBojMdgNzNyLtZliXamR+N/RwE207bvbwYC/p1Wh818M+XmTKAS97NWHAfNBvPmhiv2b8NOIcNrOnD7J85GNfP3SRzouYn71bcCxCLeyvIENvbepVyEGB3Vi9UsgjgE9SOEAuARiXfHkdIB8VgqVPJScV8V2jgEpeQWQZcfuD5BaE5+j8ZdpNkPxCGJJAIXIMYVGMQ+QZhowPh8k1DMF2HybfCPIEbIScI1CuNF0qQt4aRiWQRu4apO6DRv5RiO1YlPcQRYI8rXgEMbVPZhgDAAA="},"shape":[99],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7L///z9/5syZcPrD///7SybPsH/x//99/97p9n////+v1T6NIP31/395tsap9u/+/7d/WDUFTj/7/z9+T8lk+99A+6bnTYLTT4H2FGVMxKB/Ae31TZpAdfoq0D0ca3rs/4P93UU2DQmfDjj9AOz/Npz0RXA4tMBpiP+boO5qoDoN8WcNyfQ2sH8qqEZPB/u3BCcNcW8BzWiIOzJw0sJgdQEYNACgGoS8GAMAAA=="},"shape":[99],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265503","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265504"}}},"glyph":{"type":"object","name":"Line","id":"p265499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p265501","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p265512","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265506","attributes":{"selected":{"type":"object","name":"Selection","id":"p265507","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265508"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p265513","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265514"}}},"glyph":{"type":"object","name":"Line","id":"p265509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265510","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p265451","attributes":{"tools":[{"id":"p265464"},{"id":"p265465"},{"id":"p265466"},{"id":"p265474"},{"type":"object","name":"SaveTool","id":"p265475"},{"id":"p265516"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p265459","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p265460","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p265461"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265462"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p265454","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p265455","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265456"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265457"}}}],"center":[{"type":"object","name":"Grid","id":"p265458","attributes":{"axis":{"id":"p265454"}}},{"type":"object","name":"Grid","id":"p265463","attributes":{"dimension":1,"axis":{"id":"p265459"}}},{"type":"object","name":"Legend","id":"p265494","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p265495","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p265491"}]}},{"type":"object","name":"LegendItem","id":"p265505","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p265502"}]}},{"type":"object","name":"LegendItem","id":"p265515","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p265512"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p265517","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p265527","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p265519"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p265528"},"y_scale":{"type":"object","name":"LinearScale","id":"p265529"},"title":{"type":"object","name":"Title","id":"p265520","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p265558","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265552","attributes":{"selected":{"type":"object","name":"Selection","id":"p265553","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265554"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265559","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265560"}}},"glyph":{"type":"object","name":"Line","id":"p265555","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p265567","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265561","attributes":{"selected":{"type":"object","name":"Selection","id":"p265562","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265563"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265568","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265569"}}},"glyph":{"type":"object","name":"Line","id":"p265564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p265566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p265578","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265572","attributes":{"selected":{"type":"object","name":"Selection","id":"p265573","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265574"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265579","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265580"}}},"glyph":{"type":"object","name":"Line","id":"p265575","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265576","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p265577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p265588","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265582","attributes":{"selected":{"type":"object","name":"Selection","id":"p265583","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265584"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p265589","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265590"}}},"glyph":{"type":"object","name":"Line","id":"p265585","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265586","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265587","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p265526","attributes":{"tools":[{"id":"p265540"},{"id":"p265541"},{"id":"p265542"},{"id":"p265550"},{"type":"object","name":"SaveTool","id":"p265551"},{"id":"p265592"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p265535","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p265536","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265537"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265538"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p265530","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p265531"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p265532"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p265533"}}}],"center":[{"type":"object","name":"Grid","id":"p265534","attributes":{"axis":{"id":"p265530"}}},{"type":"object","name":"Grid","id":"p265539","attributes":{"dimension":1,"axis":{"id":"p265535"}}},{"type":"object","name":"Legend","id":"p265570","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p265571","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p265567"}]}},{"type":"object","name":"LegendItem","id":"p265581","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p265578"}]}},{"type":"object","name":"LegendItem","id":"p265591","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p265588"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p265593","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"98a80fd5-2470-4ec3-a334-e688c5033c8b","roots":{"p265604":"c7c5dd40-f2b0-4c5b-9a8a-924e03f17647"},"root_ids":["p265604"]}];
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