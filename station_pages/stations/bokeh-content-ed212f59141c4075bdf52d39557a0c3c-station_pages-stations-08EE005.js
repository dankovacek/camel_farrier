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
    
    
    const element = document.getElementById("a3b4c3e8-5f4c-4c4b-8991-c10897f01f34");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a3b4c3e8-5f4c-4c4b-8991-c10897f01f34' but no matching script tag was found.")
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
                  const docs_json = '{"6ce59667-d0dd-4587-aedb-0db81b326319":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p336044","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p336045"}}},"roots":[{"type":"object","name":"Column","id":"p336167","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p336049","attributes":{"text":"&lt;p&gt;&lt;strong&gt;08EE005&lt;/strong&gt;:\\n        86 revised days; 0 removed.\\n        1.28% of the earlier published daily record changed.\\n        Affected interval: 2023-01-01 to 2023-03-31;\\n        longest consecutive revision run: 47 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p336050","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p336051"},"y_range":{"type":"object","name":"DataRange1d","id":"p336052"},"x_scale":{"type":"object","name":"LinearScale","id":"p336059"},"y_scale":{"type":"object","name":"LinearScale","id":"p336060"},"title":{"type":"object","name":"Title","id":"p336057"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p336100","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p336046","attributes":{"selected":{"type":"object","name":"Selection","id":"p336047","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p336048"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DiTJCAQAAwEdSCCmVSo5CByWSo1wpFYmE//8VuzMbBEGw4KIhlwy7bMSoK666Zsx1N9w07pYJk26bMm3GHbPmzLtrwT33PfDQoiWPPPbEshWr1jz1zLoNz2164aUtr2x77Y233tmx670PPvrksz1f7Dvw1aEjx7757sQPp3765cxv5/7465//YqBAgVgBAAA="},"shape":[86],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JXUgTYBSA4cNASawokiIhEEWkRDEQBovJSUUMw/DCnPMnN11prlYLZVLkF0owSBTFKMIwEoTBQMmIIOQLEi9ESbIwCgYDQYIIDYPBwui9ei4eEXMwdjlSKaLhNMpmfdN/rfsFmpe/UbNqPHzoCdqNH2hc7mZ+ehQlM4m2t9zLrz9EdX5FmSpu4R330XR/RF3Lb+XL+9A+XUazf7KNDwRRVhbRlh1t5x93oqZfo/gPXOGXvWhK4qgT+yiphg6+fQbNhz+oZy74+LFnaPd+omlRP/9+HKVoC+0jZye/G0X1fEdZLO3iCx6giX5C/VUY4BsjaBtyrvFvrqKeeosylN3Nb7ehqZ9DXXD08LmNaAdn0WylUOsuXufnn6M9voPmXlUvn5xEqd1GG3cF+WMjqAMJlMTZG3z1MJrYF9Qjp2/y/XfRfltFcz4vxM+GUQ4toQ2fuMVv9qBWvEOZOXybz/KhCb1C/ZwR5s950E7H0GT+RQ1euhOp/Adn+7sgsAIAAA=="},"shape":[86],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/52R0Q3CMAxELbboGBAqoKUoA3SIfmWOrpG/7tAFOkDmYA4uZ1sI1A9Ef55yjs/nVESWnNsoIlsZ23gQmdLzXM/QSegkPjKGNeh5JlEnl9yYLqaXk+qZFJlJ3De9MV1ML8dahz+J++SUEom+XcYQrG+fyGV+PsfzYj/dl/vD51KJuVeldFZ/k/fWrta3Uj6IOX3V8W6D8WE+JPoG9Uus47tXwod9mEtiT/NRP58DX8uRbO5IIjeJz3Pe6hl9u0QO6v8SOdj/TeSn/iu9nzn0Pxh9P39ffQ/c6+ML2qWhf7ACAAA="},"shape":[86],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4WSyxGDMAxENemCOjjwDy6AInKijrThGz3QAAW4DurIspJgyA9f3ki2V9bKIrKk1IabyGMc2yAiU8zIkM+N5RvLkzhfbxR5kiHPaz23Vls8xUguabA4q2y/1HwicY6EjuUHEnqWl9LuFZqfSdz7S+hx/xfRV7Hrat9exzj6e42j9SvsH7rmw+B+dZqX+0bok/CxN//6Pc96a2f1zdfoeqavda58xv7ht/bBGP4dviPG+uo/3nmaw/s8OBf3ByKY52lOHvu8rgg/TvP91NN/gbreh/8r+o/3NeEFv2Y4y7ACAAA="},"shape":[86],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3WQsUoDQRCGR4koNppG0KS4RwiZFHa3DyOrj5FHsDN7TZ4j1dqKqwhWdgeCIASMRIIQcZ2Znb1Eg81+/P+/89/sAcAwhK5pEa3tmq8YI2tQnf2sicD3mACJlevwPCB22KeeE81X5B7njjd8qYHN+9nfWcurND9ElJ6G2tv0a077pHur7x7xHFSubfaI1u6LBmiZNp19XJYFMYRpGb9jHLuJT3ntVZesR+5VCPBZbtF5brcN/bbYx13DbuXeNa/LQ9LWLlTPGn+9/9LdeJ4fE3m+h4/CUyVrzq/cU7MP5wC16AE++5pyJBakz+yL+Jm0r+S3YSr+gxJgJpr2/cUBzrV37t9o7i58iL6wC+G96kx6n/hB/f/4916e594D3aOQnrRnj95zre9eyv+Z+B8IM8aGsAIAAA=="},"shape":[86],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+Pe6FG5apWDw751Ww6D6HqB5c8mWjo6nDmSMmGZtaNDZ+oVpps1jg4MDAwCDAccHSY+KEo0YnVy0Lv/Sff+J0eHsuP2B7QeODrMOSLuKnjW0UH6VPaLgDhHB23DCPMOT0cHr4N9jnKVjg7iP9fMlvZxdEhb4X6o6BCQ/msbvf6Lo8NTi77HFnxODqaXNIM0nJwcDK9snTIhxslB1XOSiuckJ4faWZK/Z691cpDzn/POqd7JIb2/66KrKYIOrN7mdWqWkwOMvpe9jC8+wMkBRrd0fpy8ZJsTxJ4+Owf7cMVe1zNmDm/ChDx+sBg42P2+vXv/FTWHvX4M6YX+sg6fIuSlnJN5HTj////fP/fG/rOKJ3mS9v7dL9C85eSuU9ft8zzvXQn6we7wT1PhTXiymIP1iuPWHFqKDtVLbb2/p6k6LJx93fzCLl6Hk4xrS86r/LJPCg0NXbVKyCGsvypr/nsuh85vbl1/TH/bd97allt8+9r+Lpbtt2pZn++PLbnoet31+f4zc5Zki039uJ+t4Myy0G0f9+sKy6sLvPy431BbsjaF/8d+jWuGOZN9/+1PVojoFcr+t//dcnNXkSCmA5xlSeoaZUwH8hybfBTmsx44s+dY55QtrAcC3L7uSDzHcWDreeUXei+4DySKvhb6z8xzwNUoTvC+Av+BVTO+VT6UE4TTRhJ22cFrhQ7A6NXTW2OOWosccBI/62t+SvTAtv+v1RgDROC0FEPHtP/3RQ/MmT17dnKKCE560sSJE79+RaiDmQMz97hxlA/nX4EDX7U4d15w5T4A8Tfjgdwn4atLC7/vD3pV+vyS1PX9AL8Cb5awAgAA"},"shape":[86],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p336101","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p336102"}}},"glyph":{"type":"object","name":"Scatter","id":"p336097","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p336098","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p336099","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p336108","attributes":{"data_source":{"id":"p336046"},"view":{"type":"object","name":"CDSView","id":"p336109","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p336110"}}},"glyph":{"type":"object","name":"Scatter","id":"p336105","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p336106","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p336107","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p336058","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p336085"},{"type":"object","name":"WheelZoomTool","id":"p336086","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p336087","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p336088","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p336094","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p336093","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p336095"},{"type":"object","name":"SaveTool","id":"p336096"},{"type":"object","name":"HoverTool","id":"p336165","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p336080","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p336081","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p336082"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p336083"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p336061","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p336062","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p336063","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p336064","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p336065","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p336066","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p336067","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p336068","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p336069","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p336070","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p336071","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p336072","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p336073","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p336074"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p336077","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p336076","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p336075","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p336078"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p336079","attributes":{"axis":{"id":"p336061"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p336084","attributes":{"dimension":1,"axis":{"id":"p336080"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p336103","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p336104","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p336100"}]}},{"type":"object","name":"LegendItem","id":"p336111","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p336108"}]}}]}}]}},{"type":"object","name":"Figure","id":"p336112","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p336051"},"y_range":{"type":"object","name":"DataRange1d","id":"p336114"},"x_scale":{"type":"object","name":"LinearScale","id":"p336121"},"y_scale":{"type":"object","name":"LinearScale","id":"p336122"},"title":{"type":"object","name":"Title","id":"p336119"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p336162","attributes":{"data_source":{"id":"p336046"},"view":{"type":"object","name":"CDSView","id":"p336163","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p336164"}}},"glyph":{"type":"object","name":"Scatter","id":"p336159","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p336160","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p336161","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p336120","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p336147"},{"type":"object","name":"WheelZoomTool","id":"p336148","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p336149","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p336150","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p336156","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p336155","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p336157"},{"type":"object","name":"SaveTool","id":"p336158"},{"type":"object","name":"HoverTool","id":"p336166","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p336142","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p336143","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p336144"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p336145"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p336123","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p336124","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p336125","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p336126","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p336127","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p336128","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p336129","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p336130","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p336131","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p336132","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p336133","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p336134","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p336135","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p336136"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p336139","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p336138","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p336137","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p336140"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p336141","attributes":{"axis":{"id":"p336123"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p336146","attributes":{"dimension":1,"axis":{"id":"p336142"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"6ce59667-d0dd-4587-aedb-0db81b326319","roots":{"p336167":"a3b4c3e8-5f4c-4c4b-8991-c10897f01f34"},"root_ids":["p336167"]}];
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