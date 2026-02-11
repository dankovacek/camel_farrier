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
    
    
    const element = document.getElementById("c31eb46d-476c-45ee-874b-469f49d65c20");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c31eb46d-476c-45ee-874b-469f49d65c20' but no matching script tag was found.")
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
                  const docs_json = '{"994975d9-06d3-4323-9b05-edccd33bdd36":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p266543","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p266544"}}},"roots":[{"type":"object","name":"Column","id":"p266707","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p266705","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p266704","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p266697","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p266567"},{"type":"object","name":"PanTool","id":"p266643"}]}},{"type":"object","name":"ToolProxy","id":"p266698","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p266568","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p266644","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p266699","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p266569","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p266570","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p266576","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p266575","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p266645","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p266646","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p266652","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p266651","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p266700","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p266577"},{"type":"object","name":"ResetTool","id":"p266653"}]}},{"type":"object","name":"SaveTool","id":"p266701"},{"type":"object","name":"ToolProxy","id":"p266702","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p266619","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p266703","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p266695","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p266545","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p266546"},"y_range":{"type":"object","name":"DataRange1d","id":"p266547"},"x_scale":{"type":"object","name":"LinearScale","id":"p266555"},"y_scale":{"type":"object","name":"LogScale","id":"p266556"},"title":{"type":"object","name":"Title","id":"p266548","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p266585","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266579","attributes":{"selected":{"type":"object","name":"Selection","id":"p266580","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266581"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7P9D6XOLC85enzfT/vv///NnzpxpP8/9odTHuTPsm2bODMyeNd2+8XVgx9Np0+z/AjVoteOmRVpfS96ZO9X+57XFAWGzpti/+//f/mHVFPsTVSLz8mdOtj965syVl1Mn2f8G2js9b5L91jNnbJinTrR/+v///qIMBB2TlrZs97QJ9r/+/7/vm0Q9+utad0fxj732V6pE9Frcu6H+7yKZ7ps586Z2aqf9B6B7SyZ32Os+rCqJS263fwAOhzYMurrANos3p9X+Ijg8WuwtdsixOmQ1269wf9hkktwIdV8D1ejNZ8706CrW218F2sexpoZoOvTQ1w6GoGr7bWB/VVBMs/cfmuqxqNx+OtjfJRj0HI2Y9mWbi6HuLqA6bcx1Pfm5RAHUPRkYdLz7w7oFohn2wmD1ARg0ANrW5/woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p266586","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266587"}}},"glyph":{"type":"object","name":"Line","id":"p266582","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266583","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p266584","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p266594","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266588","attributes":{"selected":{"type":"object","name":"Selection","id":"p266589","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266590"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7P9D6XOLC85enzfT/vv///NnzpxpP8/9odTHuTPsm2bODMyeNd2+8XVgx9Np0+z/AjVoteOmRVpfS96ZO9X+57XFAWGzpti/+//f/mHVFPsTVSLz8mdOtj965syVl1Mn2f8G2js9b5L91jNnbJinTrR/+v///qIMBB2TlrZs97QJ9r/+/7/vm0Q9+utad0fxj732V6pE9Frcu6H+7yKZ7ps586Z2aqf9B6B7SyZ32Os+rCqJS263fwAOhzYMurrANos3p9X+Ijg8WuwtdsixOmQ1269wf9hkktwIdV8D1ejNZ8706CrW218F2sexpoZoOvTQ1w6GoGr7bWB/VVBMs/cfmuqxqNx+OtjfJRj0HI2Y9mWbi6HuLqA6bcx1Pfm5RAHUPRkYdLz7w7oFohn2wmD1ARg0ANrW5/woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p266595","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266596"}}},"glyph":{"type":"object","name":"Line","id":"p266591","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266592","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p266593","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p266605","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266599","attributes":{"selected":{"type":"object","name":"Selection","id":"p266600","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266601"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2RD0ScYRzH05xmoqRsy2WVpD/TVreu1p/re91d3V3d9d57f96rSVRENikVkZKIGYk0I5EoiURkZKREmhyRSGSMjGRHSkb0vr99Xy+v93l+z/fP5xlfxnpHYbxuXL4JsN3/mkyxPcX//1RcxGa+fbekc/0FFnJK+3rcZu5n4832n6UvJbmcy8P070r9zed8Af4mfx6pdhTx3Gv4rWfds74Snn+L04301dviUuqUYWr/hz5qod47yLi1nLpWXF4bghXUr8TXxK2xZbynTxVcz9sHj13V9KvBXbGp98FbS18bVgxbpY7+wJo8YA47nhhy63bmqceHHXXxdKOeuRzYPMyf/7jpYD4nnp38m0vccjKnC12y4WLeBojMdgNzNyLtZliXamR+N/RwE207bvbwYC/p1Wh818M+XmTKAS97NWHAfNBvPmhiv2b8NOIcNrOnD7J85GNfP3SRzouYn71bcCxCLeyvIENvbepVyEGB3Vi9UsgjgE9SOEAuARiXfHkdIB8VgqVPJScV8V2jgEpeQWQZcfuD5BaE5+j8ZdpNkPxCGJJAIXIMYVGMQ+QZhowPh8k1DMF2HybfCPIEbIScI1CuNF0qQt4aRiWQRu4apO6DRv5RiO1YlPcQRYI8rXgEMbVPZhgDAAA="},"shape":[99],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v//3/9vvmz7L///z9/5syZcPrD///7SybPsH/x//99/97p9n////+v1T6NIP31/395tsap9u/+/7d/WDUFTj/7/z9+T8lk+99A+6bnTYLTT4H2FGVMxKB/Ae31TZpAdfoq0D0ca3rs/4P93UU2DQmfDjj9AOz/Npz0RXA4tMBpiP+boO5qoDoN8WcNyfQ2sH8qqEZPB/u3BCcNcW8BzWiIOzJw0sJgdQEYNACgGoS8GAMAAA=="},"shape":[99],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p266606","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266607"}}},"glyph":{"type":"object","name":"Line","id":"p266602","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266603","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p266604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p266615","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266609","attributes":{"selected":{"type":"object","name":"Selection","id":"p266610","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266611"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p266616","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266617"}}},"glyph":{"type":"object","name":"Line","id":"p266612","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266613","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p266614","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p266554","attributes":{"tools":[{"id":"p266567"},{"id":"p266568"},{"id":"p266569"},{"id":"p266577"},{"type":"object","name":"SaveTool","id":"p266578"},{"id":"p266619"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p266562","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p266563","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p266564"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p266565"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p266557","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p266558","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p266559"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p266560"}}}],"center":[{"type":"object","name":"Grid","id":"p266561","attributes":{"axis":{"id":"p266557"}}},{"type":"object","name":"Grid","id":"p266566","attributes":{"dimension":1,"axis":{"id":"p266562"}}},{"type":"object","name":"Legend","id":"p266597","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p266598","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p266594"}]}},{"type":"object","name":"LegendItem","id":"p266608","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p266605"}]}},{"type":"object","name":"LegendItem","id":"p266618","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p266615"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p266620","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p266630","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p266622"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p266631"},"y_scale":{"type":"object","name":"LinearScale","id":"p266632"},"title":{"type":"object","name":"Title","id":"p266623","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p266661","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266655","attributes":{"selected":{"type":"object","name":"Selection","id":"p266656","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266657"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p266662","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266663"}}},"glyph":{"type":"object","name":"Line","id":"p266658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p266660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p266670","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266664","attributes":{"selected":{"type":"object","name":"Selection","id":"p266665","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266666"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p266671","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266672"}}},"glyph":{"type":"object","name":"Line","id":"p266667","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266668","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p266669","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p266681","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266675","attributes":{"selected":{"type":"object","name":"Selection","id":"p266676","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266677"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46COWz20Mayfb+6alNekq1tvH+ytnhPg22n9J2GlvP7PMnoGAfgD15OkUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p266682","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266683"}}},"glyph":{"type":"object","name":"Line","id":"p266678","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266679","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p266680","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p266691","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p266685","attributes":{"selected":{"type":"object","name":"Selection","id":"p266686","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p266687"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p266692","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p266693"}}},"glyph":{"type":"object","name":"Line","id":"p266688","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p266689","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p266690","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p266629","attributes":{"tools":[{"id":"p266643"},{"id":"p266644"},{"id":"p266645"},{"id":"p266653"},{"type":"object","name":"SaveTool","id":"p266654"},{"id":"p266695"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p266638","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p266639","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p266640"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p266641"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p266633","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p266634"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p266635"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p266636"}}}],"center":[{"type":"object","name":"Grid","id":"p266637","attributes":{"axis":{"id":"p266633"}}},{"type":"object","name":"Grid","id":"p266642","attributes":{"dimension":1,"axis":{"id":"p266638"}}},{"type":"object","name":"Legend","id":"p266673","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p266674","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p266670"}]}},{"type":"object","name":"LegendItem","id":"p266684","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p266681"}]}},{"type":"object","name":"LegendItem","id":"p266694","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p266691"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p266696","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"994975d9-06d3-4323-9b05-edccd33bdd36","roots":{"p266707":"c31eb46d-476c-45ee-874b-469f49d65c20"},"root_ids":["p266707"]}];
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