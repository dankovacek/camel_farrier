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
    
    
    const element = document.getElementById("fbb41288-1219-49f8-835c-ab0585b4e341");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fbb41288-1219-49f8-835c-ab0585b4e341' but no matching script tag was found.")
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
                  const docs_json = '{"ce0de050-3796-4807-8025-93f08a8dfe86":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p91307","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p91308"}}},"roots":[{"type":"object","name":"Column","id":"p91489","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p91486","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p91485","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p91478","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p91331"},{"type":"object","name":"PanTool","id":"p91416"}]}},{"type":"object","name":"ToolProxy","id":"p91479","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p91332","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p91417","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p91480","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p91333","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p91334","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p91340","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p91339","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p91418","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p91419","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p91425","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p91424","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p91481","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p91341"},{"type":"object","name":"ResetTool","id":"p91426"}]}},{"type":"object","name":"SaveTool","id":"p91482"},{"type":"object","name":"ToolProxy","id":"p91483","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p91392","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p91484","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p91477","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p91309","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p91310"},"y_range":{"type":"object","name":"DataRange1d","id":"p91311"},"x_scale":{"type":"object","name":"LinearScale","id":"p91319"},"y_scale":{"type":"object","name":"LogScale","id":"p91320"},"title":{"type":"object","name":"Title","id":"p91312","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p91349","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91343","attributes":{"selected":{"type":"object","name":"Selection","id":"p91344","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91345"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFCI6Rd0YCCRXlJgWxXoKeigGdP/6e1rAYd17g+zuvoEHIyNjR+rGQo4FNpybW9bzu9QLbJu+f43fCB1jx6Z8YH46R9aeR3Onjnz5u8VHgf51teF3Co8IPXfJYq5HQ591ahRO8QFsmdBgS3pNMie3ys5HYJ2yKm2i3GC7RNq5gC5d9Xc9+xgezVi2B2+acTobznB5jBr5kzJDUVsDmlpac/UDNlA7t889z0ryLwGkXWsIPU+3TmsYHVM2qwOD6uABm5mAZnHtYeVBaQvTSCCGWTvoZRVTA5vAnfI7fzDCAqPKl5/Rocdcq3aPw4xgPTfXDqbAeSe9uASBgegclNGXwYHW67rj9epgmnlnX/+20Ps/W8PDI/w7Fn/7R9ViegdavtvD/QPq2Txf/vDXzXu5Mf/tzcBuvOY93/7pQW2XbIW/+13yrVyK/39Z7/e/aEU99Z/9kD3aX3J+WcPtNfyrso/+wmHvnocu/PXvvV1YMT6KX/tgf68fNjpL0h+J/PzPyB7Fzh3/7EHeqetWf+PPdDfOYcv/wapC2au+A2SB4YN6TQwnP1lXv+yB4ZLHOviX/bA8Mt7F/XL/vrigtrrQr9A9vQcOPUT5K85K5t+gvQ9WFxAPA10n7Cb6k+QPyq7+n6Axc99/w7yh5tw4neQ+WvCT30Dq5tj/A0kn9B/6CvJNACChWaXKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91350","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91351"}}},"glyph":{"type":"object","name":"Line","id":"p91346","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91347","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p91348","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p91358","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91352","attributes":{"selected":{"type":"object","name":"Selection","id":"p91353","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91354"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6a2AwMO2pbr+uPfK7UcUtPS5h3r1nBY5/5wVaW7Mkj+weICRYdvGjH/SxMUHUTWuecuTlQAiwfukMegY/oPLdXTkwepW6iaIutgbGxcnLVHBiSvENOPoIH2XXZrlnZ4HbjjWMckSZC4w8Mq3LTbw6opi5QlHf7//98/M1IcJM5wfbEY1Wmgu5gbr4o6HPqqIaNrJAISb7Dlopw2BIbDvUJhhxkzZ3588lAQGg7k04+qRMx0QgSgfD6y6WeBO+7JLud1WOP+UCr5HRc4PRTYcjn8/P8/P2Mip8PMmTMdZ4eyAuNAZF6eEKPDucUFR0sm/7SHpIuf9kwMDAfkWn/YA+NZeI7xN/vMtLQ0yUefwfJVIp9oTns9rPrTw/3Rfqdc6+pe5Xf2jECJkMdviabvVYn0fTZ/AzKvwTHhpT0ACnAlUygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91359","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91360"}}},"glyph":{"type":"object","name":"Line","id":"p91355","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91356","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p91357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p91367","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91361","attributes":{"selected":{"type":"object","name":"Selection","id":"p91362","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91363"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLix2EDJgQEHLdf6+ueVHYoORsbG4btWKjisc3+4S51fxiFoh9xcH1EpB67ri3/kXJN0eB24Y9GLFRIOs2bOTNzzRdwhpv/QXK5j4g7yra9vRkwXd9gh18p9QUXcQTOm/1WfsJjD2TNntpRMFnXweFj1ZkOAKEi9b4mKqEP/oa8cukUiDt80YroXRAiD3HHijA9uenGBbZGuIpj/QcNGCOSeiqw9gg4i69w9e6cLguyX3FAkCLb3kq+gg7Gx8e6vGoIOdlzXuyVYBB3S0tLapr8TALnb0vSeAMhdby6dFQCZt6BgrwBIfTDfWgGH1teBHI2mAqBw+Pygmw/k/1ZpXj6Q/GbXbbwg+x7mx/OC3M0/i4PX4TrQYUc28oD8NXVnNg/I3ByBCB6Qvc7pLjygcJTaZ8DjELBD7unWFm4H9Zh+K+GHnCB7HR5WcYL0ff1WygkKt9U8hZwg8xOVcjgdCm25xC3SOUHmnfFN4gT5qyk5lhNk3qIlfpwO586c+ZPHyAESl3r9iA3kv7inF9gclhTYLrq/jw1otsizm2vYQPpZ4meA5f/lNbKB7P1Rl8UGCoePfcFsDmox/afqT7CCwjfJKJQFJK/Q+prZ4c///+yNU5kdgNYXzCpnBJlnx7Hmn/3zwB1MIcm/7IHqJrwO/GXPCGRo3vlpD3S3YUz/D3utmP6kfqfv9gW2XMu3mH+zfxO4Q2+l8Dd7oP3b5r7/av8IaM6k019B+hOAXieaBrq38sGcr/ZA/6xpCgSLP1Bh+2p/Y3GBYoDZF3vRde6O/O8+gdRxLp70CSS/QSaKMA0M98ku7z+C+AIRlh/tAe1iCEgoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91368","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91369"}}},"glyph":{"type":"object","name":"Line","id":"p91364","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91365","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p91366","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p91378","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91372","attributes":{"selected":{"type":"object","name":"Selection","id":"p91373","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91374"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y1QXUSDURiOEksyyliUsoyVslr/WT2ttbWt1f63YhERu4iIYkTpIkoUEaWLiFh2EWUsoiy7iBLFiNJFRBRLKbvo+07PuXnPOe/7Pn+LBzMT1/jsWRS1ABe5uKptvAT/7zLs3a4b891q/ldiuvRl9jhRzX4NNqTua1rLOR2OJqtqKzJ1nG/Aa3p34WBGz71G/Ibrp85zTdxvRlE2Ofqw1EKcVpQv261fxe3E64CuImNQbnYStwud4mIkfjcc0rR5v4c8gIweV/WSrxcnCYXEYCKvCYJmt4/8Zlw6tx7vns3U0Q/x1Fqox4L7Z+3Ve8RKXQMYEwQD1GeDzKLI2qjTDkHf5qBeB74ldZroIHU7MR9c2dafOal/CIUCaJg+hiGKxkU/LqxK07GUi77cuIFPgnLTnxuiKDz06YGAj3no14Mded3ppW8vnu5kQ17696EmKivwMQcfhGyDn3n4cZiSG37mEsBHRGYOMJ8AmpWba2/qIHMKYk6OIxlkXiGcSig/4RBzCyFPnBH8ASUTGqF4AgAA"},"shape":[79],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6a2AwOU/v////4zZzRB/AeLCxRR6MAd8tjoBe4PZUC0Qkw/Cu3wsEoSH81wfbEYJXSDLZcIOTTQfYJk0nzk0AsKbLnw0UD/sEHdxwqiD8i1MoPpM2cYwOIi6/7bMwLDzdj4vz0kPv6CaCD/NzINFP+Jj07oP/QVG/2gSuQTxTTQfQwhj98SpEH+cUx4aQ8As7hPiXgCAAA="},"shape":[79],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91379","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91380"}}},"glyph":{"type":"object","name":"Line","id":"p91375","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p91377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p91388","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91382","attributes":{"selected":{"type":"object","name":"Selection","id":"p91383","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91384"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p91389","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91390"}}},"glyph":{"type":"object","name":"Line","id":"p91385","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91386","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p91387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p91318","attributes":{"tools":[{"id":"p91331"},{"id":"p91332"},{"id":"p91333"},{"id":"p91341"},{"type":"object","name":"SaveTool","id":"p91342"},{"id":"p91392"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p91326","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p91327","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p91328"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p91329"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p91321","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p91322","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p91323"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p91324"}}}],"center":[{"type":"object","name":"Grid","id":"p91325","attributes":{"axis":{"id":"p91321"}}},{"type":"object","name":"Grid","id":"p91330","attributes":{"dimension":1,"axis":{"id":"p91326"}}},{"type":"object","name":"Legend","id":"p91370","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p91371","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p91367"}]}},{"type":"object","name":"LegendItem","id":"p91381","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p91378"}]}},{"type":"object","name":"LegendItem","id":"p91391","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p91388"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p91393","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p91403","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p91395"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p91404"},"y_scale":{"type":"object","name":"LinearScale","id":"p91405"},"title":{"type":"object","name":"Title","id":"p91396","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p91434","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91428","attributes":{"selected":{"type":"object","name":"Selection","id":"p91429","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91430"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzUp42NNzM5AADzaTGPYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91435","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91436"}}},"glyph":{"type":"object","name":"Line","id":"p91431","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91432","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p91433","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p91443","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91437","attributes":{"selected":{"type":"object","name":"Selection","id":"p91438","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91439"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/5uk4llUcu2DPQMY/KhHohP6D321P3vmTMm++WIOF13Fc4vfSDm8OeIX4+gp7IBFPVYaACpNSphgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91444","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91445"}}},"glyph":{"type":"object","name":"Line","id":"p91440","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91441","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p91442","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p91452","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91446","attributes":{"selected":{"type":"object","name":"Selection","id":"p91447","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91448"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/5uk4llUcu2DPQMY/KhHohP6D321P3vmTMm++WIOF13Fc4vfSDm8OeIX4+gp7IBFPTptbLyZyQEAcLx4A2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91453","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91454"}}},"glyph":{"type":"object","name":"Line","id":"p91449","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91450","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p91451","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p91463","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91457","attributes":{"selected":{"type":"object","name":"Selection","id":"p91458","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91459"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzUp42NNzM5AADzaTGPYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91464","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91465"}}},"glyph":{"type":"object","name":"Line","id":"p91460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p91462","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p91473","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91467","attributes":{"selected":{"type":"object","name":"Selection","id":"p91468","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91469"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p91474","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91475"}}},"glyph":{"type":"object","name":"Line","id":"p91470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p91471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p91472","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p91402","attributes":{"tools":[{"id":"p91416"},{"id":"p91417"},{"id":"p91418"},{"id":"p91426"},{"type":"object","name":"SaveTool","id":"p91427"},{"id":"p91477"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p91411","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p91412","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p91413"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p91414"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p91406","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p91407"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p91408"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p91409"}}}],"center":[{"type":"object","name":"Grid","id":"p91410","attributes":{"axis":{"id":"p91406"}}},{"type":"object","name":"Grid","id":"p91415","attributes":{"dimension":1,"axis":{"id":"p91411"}}},{"type":"object","name":"Legend","id":"p91455","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p91456","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p91452"}]}},{"type":"object","name":"LegendItem","id":"p91466","attributes":{"label":{"type":"value","value":"Median Year (1929)"},"renderers":[{"id":"p91463"}]}},{"type":"object","name":"LegendItem","id":"p91476","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p91473"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p91488","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ce0de050-3796-4807-8025-93f08a8dfe86","roots":{"p91489":"fbb41288-1219-49f8-835c-ab0585b4e341"},"root_ids":["p91489"]}];
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