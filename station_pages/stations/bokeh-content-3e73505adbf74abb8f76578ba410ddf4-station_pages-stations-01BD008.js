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
    
    
    const element = document.getElementById("c7898097-7915-4822-a9ea-737ef31410b6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c7898097-7915-4822-a9ea-737ef31410b6' but no matching script tag was found.")
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
                  const docs_json = '{"0b855a30-4458-4459-9aae-bd1048d3db61":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1788","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1789"}}},"roots":[{"type":"object","name":"Column","id":"p1911","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p1793","attributes":{"text":"&lt;p&gt;&lt;strong&gt;01BD008&lt;/strong&gt;:\\n        267 revised days; 0 removed.\\n        2.00% of the earlier published daily record changed.\\n        Affected interval: 2019-10-28 to 2021-06-25;\\n        longest consecutive revision run: 96 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p1794","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p1795"},"y_range":{"type":"object","name":"DataRange1d","id":"p1796"},"x_scale":{"type":"object","name":"LinearScale","id":"p1803"},"y_scale":{"type":"object","name":"LinearScale","id":"p1804"},"title":{"type":"object","name":"Title","id":"p1801"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1844","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1790","attributes":{"selected":{"type":"object","name":"Selection","id":"p1791","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1792"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xXTY4MQBgAA0LuuuuuWuWXbbtm2bbu2Zdu2bdt2W25t2bWWra3Xh/cTXkBAQEAgYQgiLOEITzAhRCCUH4hIJCIThahEIzoxiEksYhOHH/mJuMQjPglISCISk4SkJCM5KUhJKlKThrSkIz0ZyEgmMpOFrGQjOznISS5yk4efyUs+8lOAghSiMEUoSjGKU4KSlKI0ZShLOcpTgYpUojJVqEo1qlODmtSiNnWoSz3q04CGNKIxTWhKM5rTgpa0ojVtaEs72tOBjnSiM13oyi/8ym90ozs96EkvetOHvvSjPwMYyCAGM4ShDGM4IxjJKEYzhrGMYzwTmMgkJjOFqUxjOjOYySxmM4e5zGM+C1jIIhazhKUsYzkrWMkqVrOGtaxjPRvYyCY2s4WtbGM7O9jJLnazh73sYz8HOMghDnOEoxzjOCc4ySlO8zt/cIaznOM8F7jIJS7zJ1f4i7+5yjWuc4Ob3OI2d7jLPe7zgIc84jH/8IR/ecoznvOCl7ziNW94yzve84GPfOIzX/jKf/zP9/yBhCGIsIQjPMGEEIFQvgHRxEkjLAQAAA=="},"shape":[267],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXMe1TIZxzH8e9ouY3URLnV1kSJznKZHcnjPjtMptJFiNxKSCqx6WEoSiLkkqQpWobJWJ3Mg7GY0za7RLTVcomQWh2Xjp2d3v56nc/z/v5+Imb3y8qY0SJytb6qReM+9p8W9c5dqJprUEKGV9Mvb0HtVolqu8cd+vP1aILLUF90uUt3+QxlaymaRsd79MAoVOYSirPdfXpSGOr6YlTTrWroZ0NQJ1o+4P2JP4pPPprCV6gdvB/SN2Sj1Dai8Z5Qy17n9Yi7ydWoCoY8xqqSOlxpU0/Pa9fAtpqBEn3s9c7N+Zf91nNUI+oauc+Ie44+l1vFtjiga9cWVdpClBdFaGZ27Eb/YRYq15MoqRZ29CY/1EF5qM43o/T9xJ6enIW6oQGV/7ju9O/T0Tg9RL3Jswe9LgXFtwpN0aCedMeNqDbeQHnk2os+9XNUp8Id2PGdHdlxHznx3Vcj32N33o4ScwfNraF96KM2oTp8C6XjQGf6co36xnVUXn360g/Foml3FfXSnv3ofyxBGX4eTdbbLnTL+agWf4dyvb0r/YNg1PuPo2rdqj99kQ+a0lzUg1+8fpdMN97nPUX1/s4B3KffR1Xy10B62hfufDdlylR2t9Rp9OrBPtxPTEBz7CbqLm6+9FVrUCp/QTPOyY+eH43KugQltvt0+u3FqEefQ3XE2p/eKRRN1GnUN9sG0EcGoeR8jaa9BNKXfYrqz0Mons/QHJwYRG+TgSriCcpvagZ9WBrqzLuoLIYF08M2o/n5Nuoh7jPp+9aivPE7mvnOs+jXVqLy+Alld6/Z9FdLUc+9gOpKlxC6+wI0OwpRv+wwhz57JsrlE2j6t55L3+aL6tlhlOCXaC5MCqX3O4AqpR6lccw8esAu1OdqUPUZPp+etAXN079R+3ksoBevR3m3DE2Cy0L649WoppWiFDouoveOQr3+EqqH3cLo3mFovi1G3cMqnL42BOV+AZpJlovpJ/1R2eWjrHmFpnpKBH1iNqrjjSi2E5bQV+1BXVmLarzXUvrRVDTW1ahjhyyjVySgjClHc8Qtkt4pHtWKX1HKnZbTR8agzilBiYyIYnvarOA+OxSl7Rk0Ee2i6WE5MbwP/TgWQyvi6LPjVtNt5yTw/epTKFWWifTxAaiP5qOy+Q9lpfcmekU26jFNqPImbKZb7UWz4hHqcq8kutqGkluNpsPQZHpkIqqycpQRA7bQs+Nf++GVFPqbS7bSww2qjDOp3O2sS+M/zaN20H+8h2pr33R2UxyawGuoTe/ddOdIlOSLaOpt99CnL0R1tgjFqeNeeuIs1E++QeVjsY9e5IfGIQ/1hmZUtZMz6FOz0JxuQN1z3H76unSUmgdoJntm0gtSUNlXocQPOkC/swHVCdcs7qreOci7jX02d2M7f0mPbnModvT/hqj9QFgIAAA="},"shape":[267],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/21VLXATURA+QBHDDJOKAA1tSNOmTZPQ6w/TEjgCNCamChNRzOkYDOoMjhn0uczU18TUMHQwmDOoDK6YmkoGHb793m7uZ3jmm327b29/vt3zPC8ozSqBB/T95WA+n39Lknpwi/Km3OO0FLcX6PRtkSdxvK3vDGl/GoZbC3T2lHGox7umyk39nuG6yg3VN1ReEzn6/uGJvq8Lroy+1IjnPxyO7hEDf7oqGJXbxKuzMRH5PhS8/LtBRJ4PBKObE9ZhMu5Vqa9+MlwWGfk8Elw5HxC95ojv4ZfvJ4PfZb2/6+T3Neo/lhkv4iDCLxFnQ5F1hf+u4lOH10TEt6N2vsp+cJv2KcLuMhlSP4kren+94+yAdk+7xOz2VL8vetwfCSLSQBD1O9a+vnWy31f9K8FJ/It2iMPsXzq76QvFnuJzQfOPOA/1u8/kHt87cOjt6/2uYpoPrJCX1UHrE3bkHb6f8pL+Fvza1PhZZ9gVeVV3+mFN9N7s7HEWwQ/23XgS9Up3RJ6Mv66qX/NnvE3nxM0R5wOnq/xlvMgjld1c6H1M+0w+5s/ui/PWUr+Wf6rndzCXeX9F2fy3NB/OO95Z3SgjHkPWEfp1QRyrK+cU90TYN9WfzW06x86Ocww7Q84x3q9l8wH/2OcMnwu8DfdEj0PE+12HFSJ4VeBPrPyJdC5CyuCj8YnzBz8djaOdjQfx2t7iHmOdXP+s/6wT5lXjjjWuyoHymTzHHBDxngh75X/EOcTReRzyPerAfGCXywv3Ng+5POC3q/XP8Qr31n/jzZbGb3va+s+9jHz/OzeZPrF/2L9uv938rPHdRZUYlN5x32JPcq6uTi64N5HHkiD25f3CfOb4bPHCnn3BsX1o/VJ5wROrA/uO/rN+6C/3DPwcuT6EPe0H9xT03F/gme61mHgaNvqCeNl3cX5+LXLg/yHivBHEHhwI4t7wWGS8Vz+Z/ej2tn43KezF5ND58XP7MeXJ1HhhPDHe239A809y9QHf7L/S0Xrn9kyG18bndG86ftueY7/RtxrjLM3YX+xH/ifRZ/YX/8Ol4B/7i0L+WAgAAA=="},"shape":[267],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/11VLVAbYRC9tqqVHRDpD6UJSRPCT8oVKLSQK0wbExMfEXUaU1MVE8cM+lxmMoPEYHDNoOMxFcHUxHSmU52+fbvL5e7My+63337783YTBMF4MilEAfBf9bUgvrLgMEnWBXtxvGHypsmb0Xw+/zmZbEWPgiAKwy3Tu+zndbOr231H+sPn/mt27vjO/FXMf8VkxjVeGZTM75rdK4rcfHZXVLlAnHZu3goiPmL/9jsR+b4U7N2sEJH3C8HVqxbrAPsV4v0PR61LrftK9MOzI2J/1lE/caz3B7Ml0cPPU8Hp6Kwo8Qd3pZLIuKeYJCXLq0p9krCuiKth+F6xvSMYhddEvBiaHEaPpS+/U8Qp7vMc/ojjSdvO47z+g9ntqp94X/2Gn/XeeSTYiy+/CcLTV8XoRHA8Of8iiPdph7gii6dpeGx4pOcBcZgU6B/5HNq7B2bH9+Fnz/Qel8fp8bMO4CPrA3+sFz7yz+sIdH7Vrc4140ueV2uin1e7Rbv/ZhHBD/bdeQJ8QvniljzC5/1z/5k5QRzbtI9jj9Ow37B4eI6vYXG67PPk/nyutnPz5nNG/uC9dB4X5hJHmfq47HNNVHvOJz4i9Kms8159qKPae/4V03NOEQfnGF++3m7n+8WRfcA+KRtaPgX2m3wm3+OUt9CD77v6Tt8wIMKedvhy/Cn4vOwY73y+bN50/jD/3p983TatTim/9D3fW9xneN/5uadx9Pct/o8iwz8R/DVMjP+B2/Ge5wf7NC+fe/XDucDcZPKAwvdHyqssH9L9DGPEm++z89n7m/bR+4R76EdZ99tI91rr3vddMZKwal3du7MO56q/dOX7c1nk1cHseW4+Nx76vxAv4uPcpHOv9cX+YZ6oj/OE6HsQP1lH7Buv8yeTfR81RYZf23cV22uXRPg90XjaJyIjg1NBvEuMwr+nFm/L9I7cm7hPP5n9SP31sejR/9xeDBkf8j0UxP4+MDvnDXmC/JxXxosCeQ695a//Gwv1yexL5JvuGe1nZv7x/vpDXzQe7z/ndTr6UxQMar/YX+xF/k/i/5D9xf/mcvQfsQ+GtVgIAAA="},"shape":[267],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/5VVvU6CMRSt8UHkDTTRRLfyXCSoA7sOJko04uBD6GJZmZ2+CUaDxtUEQTz3aw+UI1VhOdyf3p7ent5vPMev1QnjhG3n3F330T/BvuwOvLkN4XYH+88Luw//Luyd5CfG9YPFetYhah3W17wWAmfgQT60p/CfPNx62pH3hf+YzeceftrvltfqJLvjxQ5viIfs3LTVz76U/Iwn9K+oO0Rd8nzZcq4JXl/wG79JHb9fnGu1H5VHGP1eosWdG9X93wTtfqzOf9fZvj3k17zR909g6D6GGfoKO54HfsaJcd3AH2Ojc+hE0fbfg04Mj5J+bB/yauLP1YY82Z/rtM50afVyNF6mW9Wj6or3pPevdrrXhZ70nfA9kEcDf26yexzWfCofeVWe+fTz/XA9+Ws9fW+6r8a1L1qf+7BPtJUP36f2z3TSgy7op63vVm3m6Xqeh30yvut0r/r+K591mviT683WmR653tB0RR46t9iXmP9zzrEO91tn5/rXuPLTOr/F83M00jlLeiidj/fIc+v9ME6cYZ8R5hnn23TbudNs7ur8TO9K3tGyj+S12ufKs0/aL/anhJaf9yXAPsS8aNf++H0z1LmW5p9P848Ykp/zMEww3/uYj/QL1rytPuci9ze+Ng+JMa+q821OqL5L56O/lJ/XNV2X3jX9vPfS3OS85PdOv4u832+zlstGWAgAAA=="},"shape":[267],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[267],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1845","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1846"}}},"glyph":{"type":"object","name":"Scatter","id":"p1841","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1842","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1843","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1852","attributes":{"data_source":{"id":"p1790"},"view":{"type":"object","name":"CDSView","id":"p1853","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1854"}}},"glyph":{"type":"object","name":"Scatter","id":"p1849","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1850","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1851","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1802","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1829"},{"type":"object","name":"WheelZoomTool","id":"p1830","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1831","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p1832","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1838","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1837","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1839"},{"type":"object","name":"SaveTool","id":"p1840"},{"type":"object","name":"HoverTool","id":"p1909","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1824","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1825","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1826"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1827"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p1805","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p1806","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p1807","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p1808","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p1809","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p1810","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p1811","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p1812","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p1813","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p1814","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p1815","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p1816","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p1817","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p1818"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p1821","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p1820","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p1819","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1822"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p1823","attributes":{"axis":{"id":"p1805"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p1828","attributes":{"dimension":1,"axis":{"id":"p1824"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p1847","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p1848","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p1844"}]}},{"type":"object","name":"LegendItem","id":"p1855","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p1852"}]}}]}}]}},{"type":"object","name":"Figure","id":"p1856","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p1795"},"y_range":{"type":"object","name":"DataRange1d","id":"p1858"},"x_scale":{"type":"object","name":"LinearScale","id":"p1865"},"y_scale":{"type":"object","name":"LinearScale","id":"p1866"},"title":{"type":"object","name":"Title","id":"p1863"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1906","attributes":{"data_source":{"id":"p1790"},"view":{"type":"object","name":"CDSView","id":"p1907","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1908"}}},"glyph":{"type":"object","name":"Scatter","id":"p1903","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1904","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1905","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1864","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1891"},{"type":"object","name":"WheelZoomTool","id":"p1892","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1893","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p1894","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1900","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1899","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1901"},{"type":"object","name":"SaveTool","id":"p1902"},{"type":"object","name":"HoverTool","id":"p1910","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1886","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1887","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1888"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1889"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p1867","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p1868","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p1869","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p1870","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p1871","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p1872","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p1873","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p1874","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p1875","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p1876","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p1877","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p1878","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p1879","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p1880"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p1883","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p1882","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p1881","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1884"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p1885","attributes":{"axis":{"id":"p1867"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p1890","attributes":{"dimension":1,"axis":{"id":"p1886"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"0b855a30-4458-4459-9aae-bd1048d3db61","roots":{"p1911":"c7898097-7915-4822-a9ea-737ef31410b6"},"root_ids":["p1911"]}];
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