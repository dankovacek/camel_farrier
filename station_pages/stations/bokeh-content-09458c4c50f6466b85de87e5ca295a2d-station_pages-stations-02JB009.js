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
    
    
    const element = document.getElementById("d14233bd-04af-4d09-b13f-dfe3b56cc283");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd14233bd-04af-4d09-b13f-dfe3b56cc283' but no matching script tag was found.")
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
                  const docs_json = '{"a21af317-7c59-4866-a483-8d47ec9c51bf":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p19706","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p19707"}}},"roots":[{"type":"object","name":"Column","id":"p19829","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p19711","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02JB009&lt;/strong&gt;:\\n        293 revised days; 0 removed.\\n        1.78% of the earlier published daily record changed.\\n        Affected interval: 2022-10-16 to 2023-09-26;\\n        longest consecutive revision run: 185 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p19712","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p19713"},"y_range":{"type":"object","name":"DataRange1d","id":"p19714"},"x_scale":{"type":"object","name":"LinearScale","id":"p19721"},"y_scale":{"type":"object","name":"LinearScale","id":"p19722"},"title":{"type":"object","name":"Title","id":"p19719"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p19762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p19708","attributes":{"selected":{"type":"object","name":"Selection","id":"p19709","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p19710"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xXTZYMIBgAA0DscLuTdOe5wuqbZMJs2XcNsunOmc9Od090xsZkcNt3dXZtupheMPR/eT3gBAQEBgcQhLvEIIj4JSEgwIYQSRiISk4SkJCM54UQQSQqiSEkqookhNWlISyzpSE8GMpKJzGQhK9nITg4+ICe5yE0e8pKP/BSgIB/yEYUoTBE+piif8CnFKE4JSlKK0pShLJ9RjvJUoCKVqEwVqlKN6tTgc2pSi9p8QR2+5CvqUo/6NKAhjWhME5rSjOa0oCWtaE0b2tKOr2nPN3SgI53oTBe60o3u9KAnvejNt3xHH/rSj/4MYCCDGMwQhjKM4YxgJKMYzRjG8j3jGM8EJjKJyUxhKtOYzgxmMovZzGEu85jPAhayiMX8wBKWsozl/MhPrOBnVrKK1axhLev4hfVsYCO/8hub2MwWtrKN7exgJ7vYzR72so/9HOAghzjMEY5yjOOc4CSnOM0ZznKO81zgIpe4zBV+5w+uco3r3OAmt7jNHe5yj/s84CGPeMyfPOEpz3jOC17yir/4m3/4l9e84T/e8o73+QOJQ1ziEUR8EpCQYEIIJYxEJCYJSUlGcsKJIJIURJGSVEQTQ2rSkJZY0pGeDGQkE/8DF7pDbZQEAAA="},"shape":[293],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXKe1QIZhjH8WeaXOY6bYzlZNnMZYzp6Gi1t+QSKWURURSRohQpolelVooIKZQsaoW5ZO68TLQx5q5pQ07GMHdOptn6+utznt/3ETEzbzjGuIgox2Snek3+LFWvnA11xqm7XOg5mwegf+rgevVSPYR/M8eNPf3Dofw/noH6YJth7LbBKKl73tz7vnfntmkwnL+7m1B51b65Ex560D1WetZrdv6JKj59BHvNH6i3JXrRb8z1Zm8TOZI75hgq15CvuVu28OF/9gRUV3egODccRd80GnWzEpQrHqPZHQtQNRnkyx6+Gs2Fv1D3dxzDblmNJrTvWPazyaj6VaKs6+5Hb7AA1emPxnHnnED9+oPx7JPD0Hze2p99VRCqV7tQAhsH0E+MRf3ZFlRZr1FqvSbQ/QtRH3uOqpvbRPZn91H7qUD2I8tRutSgSe8XxO5bhXKo5yR224WoU8+jevDxZLpPDJp9P6O2sQ6mJ4ej3DuCxstqCn13MCrrvSiJ70yl3x6P2mMbqrIGIfT2Pmjii1DX1KIa5j6Nvj0PzfuPUMcNCKVXr0QZchvNlv5h9DYZqGKvoVzrPZ3umoS65BKqVl1n0KPnobn6C2pnm3B6USRK83I0kW0j6FdCUDkdQClsMZM9fCeqiw0j2R180awvQW1ZhyrMM4p+rgBNv6eo1w2aRbfIQQm5i+a042x630xUudUoYhdNn5yC+mQlqt495tCzF6B59SvqQNsYesVslJ4VaLLax9Jrw1AFHEYpbz2X3m0S6swfUD1vPI8+zg/NkS2ou0gcPcMb5UkhGt8XqA+5zad3XouS9jeaB2oB3ScL1f4alE728fTkNNT3qlB599L0PQvRWF9AnfjJQvqdGBTPk2jKrBPo7SNQ6aMot6wS6cOmoN6+F1XbZkn0+f5oqrehHmKxiL7VB8WqGE3sS9TX3JPpA/NRSh+haeWaQo9eharqNoqLwzf0ogzUza+jiuqTSq9MQuN0GXVh1zR60ziUiNNoLtospjtEoSooR2nULp0eNg31uQOo7Ftm0PMmorEoQx1iuYR+xhfFrhRNbh1qGbGUHrwB5dRTNL0HZ9Kzc1DV3UUJclpGr8hE3fMmqhV2y+kvU9AE/Ia6vEcWvXs8yrKzaJ7brqCPi0Z1tALl0w4r6RnTUT85jGrMu6vohyeh6bwbdVqTbPpDP5RRW9Hsl9X0TiNRpWxEuf8CjffQHPqetag6PkBJcs6l38lC7XkL1S77NfQOi9Ho31Hf6rWW7p6AsuMCmrZd1tHnx6K6eRLFrWMefWsEaqsfUc19L59+fQqagftQlzZbT28dgDJnO5oqiwK6yyhUxcUoLf5BEzV8A70yH9VXj1E2un5Lb5qNOuIOqksOhfQvl6ApuI660Rcb6dMXoZy/jMa+2yZ6Xhyqt8+gTOtURD8ThdruOKo17Yrpb4WiCT6I+lTL7+h9AlFWl6GpsyyhB41B9VMpSq9/0awYUUp/uQHVhGcoxwdvpnfPRb3s3v/+B+ePKYwoCQAA"},"shape":[293],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/42WPW6UMRCG5wjb0vkIkXIAXFGEIMI/AQEmwBL+F0JD5yoVRaRU6VxRcwN8AIpt0/kIe4Mlu/O8W4y0EmkejWe+8djzjjdmV39jmlew9tZpx84qO7DjbzDBTpw4sEug8mq/bVScvs/kSaGeaCtffu/n6B+d6bOzfIEz5wLWr27PvjnncHbi9m84hwuYvrt/B2Z4EGz5J6wbVJ5Bvh72O8MWVU9hPcMdaKqP+hewwTNYYYE5+Hv4PpFX+7ZQr+oXda7/PZ/yxnOoD6pf9U6ob07f1L+Mrb42+ptho/8dPfRP3r+GTvIHt+s7p+ahMSfpja/3V8QdOctLWPA/h0+d+YlzPM7L5fL67vkj4h8604MVy/TGfefpvRXz7vldt3/dWbFdXIM/Dtw+vO28vOXxJ/ur/H/+7t/09Ys94vZ8/Sf2xdpvVtfflemp8q33v9r50GnPnJ3z1BfYsHJe4/wVDmhH5IEJVpF7NO7V9B4FZuxOXFY8HK99nyo/8XpH1M9Cf42+G3qYoQ8LehrYmhvNk3TaNXfMs/Sv+dC8Js1LmDvpuId9J9idulSfdGyql/r1vjXONaRnWDn34F2scPNOovcMh34Hwjuv93Vzr7zH8X2Odlc/YIHqa9J8hXX5xY0+6LP6Lco/8LegK61LR5HyK0/0K59Ygh5lV9ajrfzKq31KuJ+ue9r2u6rfXfUn9K9g97De6XtDDynoRLax3onbvIvBNuxGXulrs4/2gyXoTvrTd0l1bdGr4lSP5ln61rri6pZ9TXVxPynoXv/n1OP8D8AtwCsoCQAA"},"shape":[293],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3WWO5ITMRCGdQACp2QTbTxVPgCKd00xsFvAAgVidzELy8M8EjIdgMApmY7gKg6ADrCBj6ADELiKAxiP+/uTrvIkX7WkbrXUv6QJYffVeRwR8ltjg0k2/Q2Wa8bDAAvjxYodHRVX8x2ixsm/I05weXlb8br3lmf5YAyfjPGzcViwXrj4Ynb6aqwwfSMOrLDByXfr72APo7PVH2jfuDhr7JWbL2OLymegvYcd3JB3c1xiZ7iAA+xd/8r5T4iveZcuX+Uvan9Eta8OrE9x/TpUB+WtfAP5Veqm+vXYjbouYQ8z9c/ooXy0+mXp5AYdvEMf6C2j//AGPVwy7sIYX8NEvJfwuTE8i9vt9t7091P8noyM0+lj47+zkeXXXXh+OtppPn9k7T8ejqy3fwfjbBjj/bm988D4876NP5qN3H0n1j47ZtyxtUfxZLR38+394vR0HzfNj/bz775zY31hzKwnvsKGifVWmNiHCptjuDD/JLKP7craG/ub2G+x0z1FfwflV/GP6pe/7jPqGalvpd4VHeg+2KCThI7W0hd6W0OdB+nZ61znVboO0r07dxvir5yOlUchnwgnsKDjQv4VHUen58Z6O5i5F3U/VvYlSe/ufu+wq7vHdR+Leh/0nnhbdYw6R3pXqFd1lA48NS45HajuhfYsHbm4vl/jRMUX/fjk4sYDeajdU/HEJn/2Q/uTsbW/etcKdVBdMvVpeo+pYwczDLKpf9I5gIHzIL1U6UX9UOcnyF/x9N5C6Sy5fuku0C4W7AqbiyM/jdP80rXy8n6ROPIPmueA7vV/k9jPeB3/A9FK678oCQAA"},"shape":[293],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEP+8HUKD0aDoM6HTAcoG46xWUeLnHK80kD0AMJac/2N/z//3/+zJfg9Abi46ML0ORhfBDtANRoYfwYToPMAfEPAM3XRxKHqYOJg9RlQM2dAXXHBCi9AEqTXh5QO9xg5qGbi85HjxdC8jD16Oaj68PFR9eHbh46H109LnNx+QOmnuMAKN4YGKhNC9DIXFzupNQ/6OEJsweXuejqCfHR4w+dj64fPd7Q1aPz0eMflzy6PbTio4cfrewh1lx096CnI0LmkKoel3kIdwAA6mwtbigJAAA="},"shape":[293],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[293],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p19763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p19764"}}},"glyph":{"type":"object","name":"Scatter","id":"p19759","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p19760","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p19761","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p19770","attributes":{"data_source":{"id":"p19708"},"view":{"type":"object","name":"CDSView","id":"p19771","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p19772"}}},"glyph":{"type":"object","name":"Scatter","id":"p19767","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p19768","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p19769","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p19720","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p19747"},{"type":"object","name":"WheelZoomTool","id":"p19748","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p19749","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p19750","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p19756","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p19755","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p19757"},{"type":"object","name":"SaveTool","id":"p19758"},{"type":"object","name":"HoverTool","id":"p19827","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p19742","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p19743","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p19744"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p19745"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p19723","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p19724","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p19725","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p19726","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p19727","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p19728","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p19729","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p19730","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p19731","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p19732","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p19733","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p19734","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p19735","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p19736"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p19739","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p19738","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p19737","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p19740"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p19741","attributes":{"axis":{"id":"p19723"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p19746","attributes":{"dimension":1,"axis":{"id":"p19742"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p19765","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p19766","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p19762"}]}},{"type":"object","name":"LegendItem","id":"p19773","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p19770"}]}}]}}]}},{"type":"object","name":"Figure","id":"p19774","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p19713"},"y_range":{"type":"object","name":"DataRange1d","id":"p19776"},"x_scale":{"type":"object","name":"LinearScale","id":"p19783"},"y_scale":{"type":"object","name":"LinearScale","id":"p19784"},"title":{"type":"object","name":"Title","id":"p19781"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p19824","attributes":{"data_source":{"id":"p19708"},"view":{"type":"object","name":"CDSView","id":"p19825","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p19826"}}},"glyph":{"type":"object","name":"Scatter","id":"p19821","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p19822","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p19823","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p19782","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p19809"},{"type":"object","name":"WheelZoomTool","id":"p19810","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p19811","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p19812","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p19818","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p19817","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p19819"},{"type":"object","name":"SaveTool","id":"p19820"},{"type":"object","name":"HoverTool","id":"p19828","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p19804","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p19805","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p19806"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p19807"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p19785","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p19786","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p19787","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p19788","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p19789","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p19790","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p19791","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p19792","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p19793","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p19794","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p19795","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p19796","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p19797","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p19798"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p19801","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p19800","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p19799","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p19802"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p19803","attributes":{"axis":{"id":"p19785"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p19808","attributes":{"dimension":1,"axis":{"id":"p19804"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"a21af317-7c59-4866-a483-8d47ec9c51bf","roots":{"p19829":"d14233bd-04af-4d09-b13f-dfe3b56cc283"},"root_ids":["p19829"]}];
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