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
    
    
    const element = document.getElementById("b554dd36-e55e-49c9-af85-584bb33915f8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b554dd36-e55e-49c9-af85-584bb33915f8' but no matching script tag was found.")
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
                  const docs_json = '{"7bfa3d74-f639-4492-81ed-d182f3535ad8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p384541","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p384542"}}},"roots":[{"type":"object","name":"Column","id":"p384705","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p384702","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p384701","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p384694","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p384565"},{"type":"object","name":"PanTool","id":"p384641"}]}},{"type":"object","name":"ToolProxy","id":"p384695","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p384566","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p384642","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p384696","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p384567","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384568","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384574","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384573","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p384643","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384644","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384650","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384649","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p384697","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p384575"},{"type":"object","name":"ResetTool","id":"p384651"}]}},{"type":"object","name":"SaveTool","id":"p384698"},{"type":"object","name":"ToolProxy","id":"p384699","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p384617","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p384700","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p384693","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p384543","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p384544"},"y_range":{"type":"object","name":"DataRange1d","id":"p384545"},"x_scale":{"type":"object","name":"LinearScale","id":"p384553"},"y_scale":{"type":"object","name":"LogScale","id":"p384554"},"title":{"type":"object","name":"Title","id":"p384546","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384583","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384577","attributes":{"selected":{"type":"object","name":"Selection","id":"p384578","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384579"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusg/n3/XgQNdAeDZsx1+zNA++WTr4HUJR6+fBXsrv5DCBqovt4xAUEDxQ98/nsFJw1UJ69/9woo3OwKzoHFHR5WodANkyUQNNDem+e+XwbRkQIRl8H2Pr1wCUQLPNC9BLb3wKmLIP6CmTPBNMO/Kxfg9OyZM39qxJwHu//q83P2hsbGzeu2nQL5K+QE+1H7f0D90/MOUY3+A3TQaplDYPfu8jxgD4xENjObvfZGxsbOlRE77E8C08F7i63Q8NiCkwaaJx9hiaB///8fv6dkM5yeOHNm5VTnzfbJwIBUcNxo/wsYn2X71sPpI2fOzLlmst7+G9Bd9qbr7CfNnNnosX+t/d///+dL6a+1TwSmn6tha+x/AM17vHS1fVxamp7PslUg+/aXTF4Bp+PT0tQeRSwHmVtvy4VJfwKmP441c+wBi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384584","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384585"}}},"glyph":{"type":"object","name":"Line","id":"p384580","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384581","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384582","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p384592","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384586","attributes":{"selected":{"type":"object","name":"Selection","id":"p384587","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384588"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusg/n3/XgQNdAeDZsx1+zNA++WTr4HUJR6+fBXsrv5DCBqovt4xAUEDxQ98/nsFJw1UJ69/9woo3OwKzoHFHR5WodANkyUQNNDem+e+XwbRkQIRl8H2Pr1wCUQLPNC9BLb3wKmLIP6CmTPBNMO/Kxfg9OyZM39qxJwHu//q83P2hsbGzeu2nQL5K+QE+1H7f0D90/MOUY3+A3TQaplDYPfu8jxgD4xENjObvfZGxsbOlRE77E8C08F7i63Q8NiCkwaaJx9hiaB///8fv6dkM5yeOHNm5VTnzfbJwIBUcNxo/wsYn2X71sPpI2fOzLlmst7+G9Bd9qbr7CfNnNnosX+t/d///+dL6a+1TwSmn6tha+x/AM17vHS1fVxamp7PslUg+/aXTF4Bp+PT0tQeRSwHmVtvy4VJfwKmP441c+wBi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384593","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384594"}}},"glyph":{"type":"object","name":"Line","id":"p384589","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384590","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p384591","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p384603","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384597","attributes":{"selected":{"type":"object","name":"Selection","id":"p384598","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384599"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TOUwUARiFTUywEGOEGCHGgAd4gMrNcu2+vdl759idscBGK2yw0QYrKipstKLCBhutqKiwwQobbLBQKyq0wMRoo8y/H8WSnf2P9773T6xn5Xg49jURs/8/E0+CjWd9i7/5/i8RffasnFbr+Rm52x1bA85ZtX4/r7WdP13raxfUquvU877Fk8qL1F/Sw9WDV5sL3fRdVuaouP8uc4X+Hr3eXDip6GXOVVn56jXmXdeL9r3db8s3mNunp/G2w0dL/cy/qcdL0YNb7LmtMHoc3GHfgKJtR8VB9t6Vtcfvsf++utejzUPoGFLnSdd2xzB6hmXr20fQNSJrbxtF36hO2d8YOsf0tysaOIbecf2Kyo7H0T2hHyZoAv2TsnGHk/iI6ftyNCiGnyl9idYeTOFrWp8jO/vT+JvRp0je3gw+Z2Vfd2fxOyezsTOH77isbTuO/4TM7lYCDmKP4CH2CS5JOTYgCZ+kDM9eEk4plUxHCl4pfTQ9KbillTVdafil9cH0peGYUcIKM/DMoDcD1wy6s/DNoj8L56xGrCAH75zeG4gc3HMaNAN5+OdlNjfz5JBX68zmyWNehmNjnlzm1TrbAvkUZNjWC+RUgGMRjkU4FuFYhGOJ/Ep6aRxL5FjSOeNYJs8yHMvkWoZjhXwrcKyQcwWOVfKuwrEKxyocq3CswbEGxxoca/ioU1fHT536Or7q9NXxV6e/jk+HPBzuxpFhXXK4H4d8HO7Ikdk6crgnl7xc7sqVxbPowsXVW8vP5c5ccnTh5KnfGjzuziNXD26e3li+HnfokbMHR1+9Vuhzl75s3YIPV5/8ffj6MlkHPpx9ODbg2JDJDxpwbMCxAceGzOZ+A44NODbh2IRjk/tucj9NODbh2OTem9xTAMcAjgH3H8Ax4D0I4BjAMYBjyHsRcnchHEM4hrwnIRxDOIZwfKD/bDiJBmgGAAA="},"shape":[205],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+Uwvf2jMwMDxQM3wDoh1M416BaIY1MhD6asVLEN3gmACmF0jpg+kHKmwQ2jfpBVgf1/XnyHSD2M1nYPXvl4Nphsu+YPqAt/lTZJrh35UnyPSBkslgWsGQA4Ve8LbmMZjffOARMg00F0w32JtC6ENfH9gzAhmaMfdBtMOWE/fgNMj8ha737P8D/X3mzB2wex9W3QHx43d5gml7Y+PbIPr/Jd9b2Gh7886bOGmQeZ2ON2hGg9w99/11OA3yT9k+MP++fy9hGhIuCBooXm/LBabtt32+CqeB0gn9hwjTIP2OCbhpkPs+/71CMQ00T17/LiYNiT+i6IbJEkTRD5Yfu4xMJzy9cAkb/eBnHZhWaH19EezfA6cQNCi9zpyJQgPT9wWc9F9g+rO+fx4ULwkp1ggako/Ogf3BseYM1N5T9v+A6vsPHYWGzxEQv3563qEhQ0PC6SA4X11bfAAcDkCv2P8E8nU27QX7b+LbPeDwFojYaf8HGN83z223/w3291aov7dQTAPtkY+wJEyD7N1TspkgDYpHPt1NIP7+ooyNUP9tsP8F5JftW0+Q/gYMF3vTdThpoPnzpfTX4qR/AO1/vHQ1TvoL0D2rZVaB/LW/ZPIKgvQvcPmwnGz6E7A84Vgzxx4A83n3oGgGAAA="},"shape":[205],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384604","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384605"}}},"glyph":{"type":"object","name":"Line","id":"p384600","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384601","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p384602","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p384613","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384607","attributes":{"selected":{"type":"object","name":"Selection","id":"p384608","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384609"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p384614","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384615"}}},"glyph":{"type":"object","name":"Line","id":"p384610","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384611","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384612","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384552","attributes":{"tools":[{"id":"p384565"},{"id":"p384566"},{"id":"p384567"},{"id":"p384575"},{"type":"object","name":"SaveTool","id":"p384576"},{"id":"p384617"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p384560","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p384561","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p384562"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384563"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p384555","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384556","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384557"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384558"}}}],"center":[{"type":"object","name":"Grid","id":"p384559","attributes":{"axis":{"id":"p384555"}}},{"type":"object","name":"Grid","id":"p384564","attributes":{"dimension":1,"axis":{"id":"p384560"}}},{"type":"object","name":"Legend","id":"p384595","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384596","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p384592"}]}},{"type":"object","name":"LegendItem","id":"p384606","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p384603"}]}},{"type":"object","name":"LegendItem","id":"p384616","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p384613"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p384618","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p384628","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p384620"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p384629"},"y_scale":{"type":"object","name":"LinearScale","id":"p384630"},"title":{"type":"object","name":"Title","id":"p384621","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384659","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384653","attributes":{"selected":{"type":"object","name":"Selection","id":"p384654","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384655"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MXdejNe5dy07+zo+CPq+sS+5Jyle4bRdXsnDsUjUpJX7J1dXKa8X37M/umc4nNHo7bZ//r/f/7BT6vsYfoBB+ELrmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384660","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384661"}}},"glyph":{"type":"object","name":"Line","id":"p384656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384657","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p384668","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384662","attributes":{"selected":{"type":"object","name":"Selection","id":"p384663","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384664"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MXdejNe5dy07+zo+CPq+sS+5Jyle4bRdXsnDsUjUpJX7J1dXKa8X37M/umc4nNHo7bZ//r/f/7BT6vsYfoBB+ELrmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384669","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384670"}}},"glyph":{"type":"object","name":"Line","id":"p384665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p384667","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p384679","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384673","attributes":{"selected":{"type":"object","name":"Selection","id":"p384674","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384675"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MXdejNe5dy07+zo+CPq+sS+5Jyle4bRdXsnDsUjUpJX7J1dXKa8X37M/umc4nNHo7bZ//r/f/7BT6vsYfoBB+ELrmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384680","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384681"}}},"glyph":{"type":"object","name":"Line","id":"p384676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384677","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p384678","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p384689","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384683","attributes":{"selected":{"type":"object","name":"Selection","id":"p384684","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384685"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p384690","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384691"}}},"glyph":{"type":"object","name":"Line","id":"p384686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384687","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384688","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384627","attributes":{"tools":[{"id":"p384641"},{"id":"p384642"},{"id":"p384643"},{"id":"p384651"},{"type":"object","name":"SaveTool","id":"p384652"},{"id":"p384693"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p384636","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384637","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384638"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384639"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p384631","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p384632"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p384633"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p384634"}}}],"center":[{"type":"object","name":"Grid","id":"p384635","attributes":{"axis":{"id":"p384631"}}},{"type":"object","name":"Grid","id":"p384640","attributes":{"dimension":1,"axis":{"id":"p384636"}}},{"type":"object","name":"Legend","id":"p384671","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384672","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p384668"}]}},{"type":"object","name":"LegendItem","id":"p384682","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p384679"}]}},{"type":"object","name":"LegendItem","id":"p384692","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p384689"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p384704","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"7bfa3d74-f639-4492-81ed-d182f3535ad8","roots":{"p384705":"b554dd36-e55e-49c9-af85-584bb33915f8"},"root_ids":["p384705"]}];
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