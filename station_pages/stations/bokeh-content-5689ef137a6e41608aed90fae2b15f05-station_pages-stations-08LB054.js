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
    
    
    const element = document.getElementById("fcf95480-df56-4025-bc34-aa15d794c65c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fcf95480-df56-4025-bc34-aa15d794c65c' but no matching script tag was found.")
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
                  const docs_json = '{"b79b885f-7449-4e39-8e1f-7097c0b03f20":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p384182","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p384183"}}},"roots":[{"type":"object","name":"Column","id":"p384346","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p384343","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p384342","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p384335","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p384206"},{"type":"object","name":"PanTool","id":"p384282"}]}},{"type":"object","name":"ToolProxy","id":"p384336","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p384207","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p384283","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p384337","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p384208","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384209","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384215","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384214","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p384284","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384285","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384291","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384290","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p384338","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p384216"},{"type":"object","name":"ResetTool","id":"p384292"}]}},{"type":"object","name":"SaveTool","id":"p384339"},{"type":"object","name":"ToolProxy","id":"p384340","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p384258","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p384341","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p384334","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p384184","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p384185"},"y_range":{"type":"object","name":"DataRange1d","id":"p384186"},"x_scale":{"type":"object","name":"LinearScale","id":"p384194"},"y_scale":{"type":"object","name":"LogScale","id":"p384195"},"title":{"type":"object","name":"Title","id":"p384187","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384224","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384218","attributes":{"selected":{"type":"object","name":"Selection","id":"p384219","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384220"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusg/n3/XgQNdAeDZsx1+zNA++WTr4HUJR6+fBXsrv5DCBqovt4xAUEDxQ98/nsFJw1UJ69/9woo3OwKzoHFHR5WodANkyUQNNDem+e+XwbRkQIRl8H2Pr1wCUQLPNC9BLb3wKmLIP6CmTPBNMO/Kxfg9OyZM39qxJwHu//q83P2hsbGzeu2nQL5K+QE+1H7f0D90/MOUY3+A3TQaplDYPfu8jxgD4xENjObvfZGxsbOlRE77E8C08F7i63Q8NiCkwaaJx9hiaB///8fv6dkM5yeOHNm5VTnzfbJwIBUcNxo/wsYn2X71sPpI2fOzLlmst7+G9Bd9qbr7CfNnNnosX+t/d///+dL6a+1TwSmn6tha+x/AM17vHS1fVxamp7PslUg+/aXTF4Bp+PT0tQeRSwHmVtvy4VJfwKmP441c+wBi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384225","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384226"}}},"glyph":{"type":"object","name":"Line","id":"p384221","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384222","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384223","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p384233","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384227","attributes":{"selected":{"type":"object","name":"Selection","id":"p384228","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384229"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusg/n3/XgQNdAeDZsx1+zNA++WTr4HUJR6+fBXsrv5DCBqovt4xAUEDxQ98/nsFJw1UJ69/9woo3OwKzoHFHR5WodANkyUQNNDem+e+XwbRkQIRl8H2Pr1wCUQLPNC9BLb3wKmLIP6CmTPBNMO/Kxfg9OyZM39qxJwHu//q83P2hsbGzeu2nQL5K+QE+1H7f0D90/MOUY3+A3TQaplDYPfu8jxgD4xENjObvfZGxsbOlRE77E8C08F7i63Q8NiCkwaaJx9hiaB///8fv6dkM5yeOHNm5VTnzfbJwIBUcNxo/wsYn2X71sPpI2fOzLlmst7+G9Bd9qbr7CfNnNnosX+t/d///+dL6a+1TwSmn6tha+x/AM17vHS1fVxamp7PslUg+/aXTF4Bp+PT0tQeRSwHmVtvy4VJfwKmP441c+wBi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384234","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384235"}}},"glyph":{"type":"object","name":"Line","id":"p384230","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p384232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p384244","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384238","attributes":{"selected":{"type":"object","name":"Selection","id":"p384239","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384240"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TOUwUARiFTUywEGOEGCHGgAd4gMrNcu2+vdl759idscBGK2yw0QYrKipstKLCBhutqKiwwQobbLBQKyq0wMRoo8y/H8WSnf2P9773T6xn5Xg49jURs/8/E0+CjWd9i7/5/i8RffasnFbr+Rm52x1bA85ZtX4/r7WdP13raxfUquvU877Fk8qL1F/Sw9WDV5sL3fRdVuaouP8uc4X+Hr3eXDip6GXOVVn56jXmXdeL9r3db8s3mNunp/G2w0dL/cy/qcdL0YNb7LmtMHoc3GHfgKJtR8VB9t6Vtcfvsf++utejzUPoGFLnSdd2xzB6hmXr20fQNSJrbxtF36hO2d8YOsf0tysaOIbecf2Kyo7H0T2hHyZoAv2TsnGHk/iI6ftyNCiGnyl9idYeTOFrWp8jO/vT+JvRp0je3gw+Z2Vfd2fxOyezsTOH77isbTuO/4TM7lYCDmKP4CH2CS5JOTYgCZ+kDM9eEk4plUxHCl4pfTQ9KbillTVdafil9cH0peGYUcIKM/DMoDcD1wy6s/DNoj8L56xGrCAH75zeG4gc3HMaNAN5+OdlNjfz5JBX68zmyWNehmNjnlzm1TrbAvkUZNjWC+RUgGMRjkU4FuFYhGOJ/Ep6aRxL5FjSOeNYJs8yHMvkWoZjhXwrcKyQcwWOVfKuwrEKxyocq3CswbEGxxoca/ioU1fHT536Or7q9NXxV6e/jk+HPBzuxpFhXXK4H4d8HO7Ikdk6crgnl7xc7sqVxbPowsXVW8vP5c5ccnTh5KnfGjzuziNXD26e3li+HnfokbMHR1+9Vuhzl75s3YIPV5/8ffj6MlkHPpx9ODbg2JDJDxpwbMCxAceGzOZ+A44NODbh2IRjk/tucj9NODbh2OTem9xTAMcAjgH3H8Ax4D0I4BjAMYBjyHsRcnchHEM4hrwnIRxDOIZwfKD/bDiJBmgGAAA="},"shape":[205],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+Uwvf2jMwMDxQM3wDoh1M416BaIY1MhD6asVLEN3gmACmF0jpg+kHKmwQ2jfpBVgf1/XnyHSD2M1nYPXvl4Nphsu+YPqAt/lTZJrh35UnyPSBkslgWsGQA4Ve8LbmMZjffOARMg00F0w32JtC6ENfH9gzAhmaMfdBtMOWE/fgNMj8ha737P8D/X3mzB2wex9W3QHx43d5gml7Y+PbIPr/Jd9b2Gh7886bOGmQeZ2ON2hGg9w99/11OA3yT9k+MP++fy9hGhIuCBooXm/LBabtt32+CqeB0gn9hwjTIP2OCbhpkPs+/71CMQ00T17/LiYNiT+i6IbJEkTRD5Yfu4xMJzy9cAkb/eBnHZhWaH19EezfA6cQNCi9zpyJQgPT9wWc9F9g+rO+fx4ULwkp1ggako/Ogf3BseYM1N5T9v+A6vsPHYWGzxEQv3563qEhQ0PC6SA4X11bfAAcDkCv2P8E8nU27QX7b+LbPeDwFojYaf8HGN83z223/w3291aov7dQTAPtkY+wJEyD7N1TspkgDYpHPt1NIP7+ooyNUP9tsP8F5JftW0+Q/gYMF3vTdThpoPnzpfTX4qR/AO1/vHQ1TvoL0D2rZVaB/LW/ZPIKgvQvcPmwnGz6E7A84Vgzxx4A83n3oGgGAAA="},"shape":[205],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384245","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384246"}}},"glyph":{"type":"object","name":"Line","id":"p384241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p384243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p384254","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384248","attributes":{"selected":{"type":"object","name":"Selection","id":"p384249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384250"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p384255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384256"}}},"glyph":{"type":"object","name":"Line","id":"p384251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384193","attributes":{"tools":[{"id":"p384206"},{"id":"p384207"},{"id":"p384208"},{"id":"p384216"},{"type":"object","name":"SaveTool","id":"p384217"},{"id":"p384258"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p384201","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p384202","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p384203"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384204"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p384196","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384197","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384198"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384199"}}}],"center":[{"type":"object","name":"Grid","id":"p384200","attributes":{"axis":{"id":"p384196"}}},{"type":"object","name":"Grid","id":"p384205","attributes":{"dimension":1,"axis":{"id":"p384201"}}},{"type":"object","name":"Legend","id":"p384236","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384237","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p384233"}]}},{"type":"object","name":"LegendItem","id":"p384247","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p384244"}]}},{"type":"object","name":"LegendItem","id":"p384257","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p384254"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p384259","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p384269","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p384261"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p384270"},"y_scale":{"type":"object","name":"LinearScale","id":"p384271"},"title":{"type":"object","name":"Title","id":"p384262","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384300","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384294","attributes":{"selected":{"type":"object","name":"Selection","id":"p384295","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384296"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MXdejNe5dy07+zo+CPq+sS+5Jyle4bRdXsnDsUjUpJX7J1dXKa8X37M/umc4nNHo7bZ//r/f/7BT6vsYfoBB+ELrmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384301","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384302"}}},"glyph":{"type":"object","name":"Line","id":"p384297","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384298","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384299","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p384309","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384303","attributes":{"selected":{"type":"object","name":"Selection","id":"p384304","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384305"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MXdejNe5dy07+zo+CPq+sS+5Jyle4bRdXsnDsUjUpJX7J1dXKa8X37M/umc4nNHo7bZ//r/f/7BT6vsYfoBB+ELrmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384310","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384311"}}},"glyph":{"type":"object","name":"Line","id":"p384306","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p384308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p384320","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384314","attributes":{"selected":{"type":"object","name":"Selection","id":"p384315","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384316"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MXdejNe5dy07+zo+CPq+sS+5Jyle4bRdXsnDsUjUpJX7J1dXKa8X37M/umc4nNHo7bZ//r/f/7BT6vsYfoBB+ELrmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384321","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384322"}}},"glyph":{"type":"object","name":"Line","id":"p384317","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p384319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p384330","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384324","attributes":{"selected":{"type":"object","name":"Selection","id":"p384325","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384326"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p384331","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384332"}}},"glyph":{"type":"object","name":"Line","id":"p384327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384268","attributes":{"tools":[{"id":"p384282"},{"id":"p384283"},{"id":"p384284"},{"id":"p384292"},{"type":"object","name":"SaveTool","id":"p384293"},{"id":"p384334"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p384277","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384278","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384279"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384280"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p384272","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p384273"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p384274"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p384275"}}}],"center":[{"type":"object","name":"Grid","id":"p384276","attributes":{"axis":{"id":"p384272"}}},{"type":"object","name":"Grid","id":"p384281","attributes":{"dimension":1,"axis":{"id":"p384277"}}},{"type":"object","name":"Legend","id":"p384312","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384313","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p384309"}]}},{"type":"object","name":"LegendItem","id":"p384323","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p384320"}]}},{"type":"object","name":"LegendItem","id":"p384333","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p384330"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p384345","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b79b885f-7449-4e39-8e1f-7097c0b03f20","roots":{"p384346":"fcf95480-df56-4025-bc34-aa15d794c65c"},"root_ids":["p384346"]}];
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