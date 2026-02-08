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
    
    
    const element = document.getElementById("de2c7016-b9e0-4b66-a2c9-f6dc127783d2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'de2c7016-b9e0-4b66-a2c9-f6dc127783d2' but no matching script tag was found.")
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
                  const docs_json = '{"a987e4ff-53b9-4fb7-930c-f52f0e5d2649":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p262706","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p262707"}}},"roots":[{"type":"object","name":"Column","id":"p262870","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p262868","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p262867","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p262860","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p262730"},{"type":"object","name":"PanTool","id":"p262806"}]}},{"type":"object","name":"ToolProxy","id":"p262861","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p262731","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p262807","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p262862","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p262732","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p262733","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p262739","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p262738","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p262808","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p262809","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p262815","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p262814","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p262863","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p262740"},{"type":"object","name":"ResetTool","id":"p262816"}]}},{"type":"object","name":"SaveTool","id":"p262864"},{"type":"object","name":"ToolProxy","id":"p262865","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p262782","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p262866","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p262858","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p262708","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p262709"},"y_range":{"type":"object","name":"DataRange1d","id":"p262710"},"x_scale":{"type":"object","name":"LinearScale","id":"p262718"},"y_scale":{"type":"object","name":"LogScale","id":"p262719"},"title":{"type":"object","name":"Title","id":"p262711","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p262748","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262742","attributes":{"selected":{"type":"object","name":"Selection","id":"p262743","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262744"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7P9D6XOLC85enzfT/vv///NnzpxpP8/9odTHuTPsm2bODMyeNd2+8XVgx9Np0+z/AjVoteOmRVpfS96ZO9X+57XFAWGzpti/+//f/mHVFPsTVSLz8mdOtj965syVl1Mn2f8G2js9b5L91jNnbJinTrR/+v///qIMBB2TlrZs97QJ9r/+/7/vm0Q9+utad0fxj732V6pE9Frcu6H+7yKZ7ps586Z2aqf9B6B7SyZ32Os+rCqJS263fwAOhzYMurrANos3p9X+Ijg8WuwtdsixOmQ1269wf9hkktwIdV8D1ejNZ8706CrW218F2sexpoZoOvTQ1w6GoGr7bWB/VVBMs/cfmuqxqNx+OtjfJRj0HI2Y9mWbi6HuLqA6bcx1Pfm5RAHUPRkYdLz7w7oFohn2wmD1ARg0ANrW5/woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262749","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262750"}}},"glyph":{"type":"object","name":"Line","id":"p262745","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p262757","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262751","attributes":{"selected":{"type":"object","name":"Selection","id":"p262752","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262753"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7P9D6XOLC85enzfT/vv///NnzpxpP8/9odTHuTPsm2bODMyeNd2+8XVgx9Np0+z/AjVoteOmRVpfS96ZO9X+57XFAWGzpti/+//f/mHVFPsTVSLz8mdOtj965syVl1Mn2f8G2js9b5L91jNnbJinTrR/+v///qIMBB2TlrZs97QJ9r/+/7/vm0Q9+utad0fxj732V6pE9Frcu6H+7yKZ7ps586Z2aqf9B6B7SyZ32Os+rCqJS263fwAOhzYMurrANos3p9X+Ijg8WuwtdsixOmQ1269wf9hkktwIdV8D1ejNZ8706CrW218F2sexpoZoOvTQ1w6GoGr7bWB/VVBMs/cfmuqxqNx+OtjfJRj0HI2Y9mWbi6HuLqA6bcx1Pfm5RAHUPRkYdLz7w7oFohn2wmD1ARg0ANrW5/woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262758","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262759"}}},"glyph":{"type":"object","name":"Line","id":"p262754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262755","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p262756","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p262768","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262762","attributes":{"selected":{"type":"object","name":"Selection","id":"p262763","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262764"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2RD0ScYRzH05xmoqRsy2WVpD/TVreu1p/re91d3V3d9d57f96rSVRENikVkZKIGYk0I5EoiURkZKREmhyRSGSMjGRHSkb0vr99Xy+v93l+z/fP5xlfxnpHYbxuXL4JsN3/mkyxPcX//1RcxGa+fbekc/0FFnJK+3rcZu5n4832n6UvJbmcy8P070r9zed8Af4mfx6pdhTx3Gv4rWfds74Snn+L04301dviUuqUYWr/hz5qod47yLi1nLpWXF4bghXUr8TXxK2xZbynTxVcz9sHj13V9KvBXbGp98FbS18bVgxbpY7+wJo8YA47nhhy63bmqceHHXXxdKOeuRzYPMyf/7jpYD4nnp38m0vccjKnC12y4WLeBojMdgNzNyLtZliXamR+N/RwE207bvbwYC/p1Wh818M+XmTKAS97NWHAfNBvPmhiv2b8NOIcNrOnD7J85GNfP3SRzouYn71bcCxCLeyvIENvbepVyEGB3Vi9UsgjgE9SOEAuARiXfHkdIB8VgqVPJScV8V2jgEpeQWQZcfuD5BaE5+j8ZdpNkPxCGJJAIXIMYVGMQ+QZhowPh8k1DMF2HybfCPIEbIScI1CuNF0qQt4aRiWQRu4apO6DRv5RiO1YlPcQRYI8rXgEMbVPZhgDAAA="},"shape":[99],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7L///z9/5syZcPrD///7SybPsH/x//99/97p9n////+v1T6NIP31/395tsap9u/+/7d/WDUFTj/7/z9+T8lk+99A+6bnTYLTT4H2FGVMxKB/Ae31TZpAdfoq0D0ca3rs/4P93UU2DQmfDjj9AOz/Npz0RXA4tMBpiP+boO5qoDoN8WcNyfQ2sH8qqEZPB/u3BCcNcW8BzWiIOzJw0sJgdQEYNACgGoS8GAMAAA=="},"shape":[99],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262769","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262770"}}},"glyph":{"type":"object","name":"Line","id":"p262765","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p262767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p262778","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262772","attributes":{"selected":{"type":"object","name":"Selection","id":"p262773","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262774"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p262779","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262780"}}},"glyph":{"type":"object","name":"Line","id":"p262775","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p262717","attributes":{"tools":[{"id":"p262730"},{"id":"p262731"},{"id":"p262732"},{"id":"p262740"},{"type":"object","name":"SaveTool","id":"p262741"},{"id":"p262782"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p262725","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p262726","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p262727"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p262728"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p262720","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p262721","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p262722"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p262723"}}}],"center":[{"type":"object","name":"Grid","id":"p262724","attributes":{"axis":{"id":"p262720"}}},{"type":"object","name":"Grid","id":"p262729","attributes":{"dimension":1,"axis":{"id":"p262725"}}},{"type":"object","name":"Legend","id":"p262760","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p262761","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p262757"}]}},{"type":"object","name":"LegendItem","id":"p262771","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p262768"}]}},{"type":"object","name":"LegendItem","id":"p262781","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p262778"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p262783","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p262793","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p262785"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p262794"},"y_scale":{"type":"object","name":"LinearScale","id":"p262795"},"title":{"type":"object","name":"Title","id":"p262786","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p262824","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262818","attributes":{"selected":{"type":"object","name":"Selection","id":"p262819","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262820"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262825","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262826"}}},"glyph":{"type":"object","name":"Line","id":"p262821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p262833","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262827","attributes":{"selected":{"type":"object","name":"Selection","id":"p262828","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262829"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262834","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262835"}}},"glyph":{"type":"object","name":"Line","id":"p262830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p262832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p262844","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262838","attributes":{"selected":{"type":"object","name":"Selection","id":"p262839","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262840"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262845","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262846"}}},"glyph":{"type":"object","name":"Line","id":"p262841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p262843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p262854","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262848","attributes":{"selected":{"type":"object","name":"Selection","id":"p262849","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262850"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p262855","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262856"}}},"glyph":{"type":"object","name":"Line","id":"p262851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p262792","attributes":{"tools":[{"id":"p262806"},{"id":"p262807"},{"id":"p262808"},{"id":"p262816"},{"type":"object","name":"SaveTool","id":"p262817"},{"id":"p262858"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p262801","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p262802","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p262803"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p262804"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p262796","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p262797"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p262798"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p262799"}}}],"center":[{"type":"object","name":"Grid","id":"p262800","attributes":{"axis":{"id":"p262796"}}},{"type":"object","name":"Grid","id":"p262805","attributes":{"dimension":1,"axis":{"id":"p262801"}}},{"type":"object","name":"Legend","id":"p262836","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p262837","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p262833"}]}},{"type":"object","name":"LegendItem","id":"p262847","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p262844"}]}},{"type":"object","name":"LegendItem","id":"p262857","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p262854"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p262859","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a987e4ff-53b9-4fb7-930c-f52f0e5d2649","roots":{"p262870":"de2c7016-b9e0-4b66-a2c9-f6dc127783d2"},"root_ids":["p262870"]}];
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