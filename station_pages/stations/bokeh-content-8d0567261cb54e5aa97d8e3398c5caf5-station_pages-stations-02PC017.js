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
    
    
    const element = document.getElementById("d4d8594c-a342-439a-8273-a3d77781af47");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd4d8594c-a342-439a-8273-a3d77781af47' but no matching script tag was found.")
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
                  const docs_json = '{"59611ad7-2615-4e29-8d2e-8335ba155420":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p91621","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p91622"}}},"roots":[{"type":"object","name":"Column","id":"p91744","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p91626","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02PC017&lt;/strong&gt;:\\n        180 revised days; 0 removed.\\n        2.37% of the earlier published daily record changed.\\n        Affected interval: 2022-10-05 to 2023-09-30;\\n        longest consecutive revision run: 66 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p91627","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p91628"},"y_range":{"type":"object","name":"DataRange1d","id":"p91629"},"x_scale":{"type":"object","name":"LinearScale","id":"p91636"},"y_scale":{"type":"object","name":"LinearScale","id":"p91637"},"title":{"type":"object","name":"Title","id":"p91634"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p91677","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p91623","attributes":{"selected":{"type":"object","name":"Selection","id":"p91624","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p91625"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DB1cOAAAAwK+QXUJEtmQkyc4mqyGjqDRJQhpoKZUimVFGGWmgiCj+YHfvXSAQCAQZ7BSnOs0QpzvDmc5ytnOca6hhzjPc+S5woREucrGRLnGpUS5zuStc6SpXu8a1RrvOGNe7wY1uMtbNxrnFeLea4Da3u8Od7nK3e0x0r/vc7wEPesjDHvGoSR7zuCc86SmTTTHVNE+b7hnPes7zZpjpBS+aZbY5XjLXPPMtsNAiL3vFYq9a4jVLve4Nb1rmLcutsNIqb3vHu1ZbY6111nvPBhu9b5PNtvjAVtt86CPbfWyHT3zqM5/7wpd2+srXdtntG9/6zvf22OsHP/rJz/b5xX4HHHTIr37zu8OO+MOfjvrL3475x7+OO+E//zsJgUEajdACAAA="},"shape":[180],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLaUwPcBjA8YfQZhHGXGN44Sa0WtP181fKHMXm3BzJXGFZjljxIDmTykpJ6UD507Bszvabua+GyBEimhwzR1gtzNerz57n+zwi2mHayFiHiIktRnnRiHb0RN9/avFBNO7fUFYF+9GfZqCa92gO+/nT3ZLRrniFWukZQPdPRCl4jLo8PpB9RTnKyD6Gv9yVqC2voYnqOop+LwqtdxlqdjsHvXkkyqLTaO+4jqZ7zkSTeQzlz2+08ycF0W8WoBn2AyU9NJjemIUa8QnNtcAx9CGpaFPfoP7yDqHP3o5y+RnaAUND6cmKpv7+/7mfxDEnTUb5Voh2+k/UsrHxOCVtPXfn36L09tnAXeIO1I9VaCZ7KP3MRrQ9KlA3991Ir4tFCbuFtrTHJnq3aDR6CaW242b6uIWoJ8+i6eyWQI+fjfb1CdRQly30kikoHYvQrm1AfTk+kR6ci+L8grZd0Fb66nQ0Ve9QHL7b6EeSUNtUo4kZsZ3+JAFtQCVq4YAd9NZxKNF30T7stZPuG4Mm7wqKa5dd9KVLUO9fQOPjnkTPiUDrUoq6uNVuevl0FC8n2qwmVAlPpi/IR7n9He3wkD30jEw0TR9QIgNS6Nf3oA6tQbPXK5XesBXtnKeoVwan0QdtQD2Tncnc8zNKwqgs7uvSUMNq0Zz22U/vvhOtPket9cimj9+EcqoCbed+B+jxa9HU3EIZ2zOHXhKNZl2nXPbVC9EGn0N1uh2kt5+DsuYk2iqXPLpjKpqiIpS2jWhjJuTTn+SiCfyKciiogN46AzW6Ds0j30K63260edWorp6H6Mu2oDyoROsz8DA9Jw5Ni3KUJb2P0MtjUL2uotnfpYjeLArtgouot92L6SPmoewrRdvU6ig9cgaaG04Uj99o94Y76Q35aObWo1wNOUYflIWa8hHNz4Dj9FkpaC/VoPb3Lol1/AX8vWj5oAUAAA=="},"shape":[180],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12UPWwTQRCFLyYh4RIICQ4Qfi6GALKFKJClEIQsDgnhiuIqGkuYJrVrV25cu74GWXKfhsYdlmv3bu3aDY1r883bXSewzdPc7c68efN2oyjqjJdxGkXRKOlup6vV6ntvvJVuRFFarW7Z92g62DRM523hrF0U9vP8hiFr0879nkxe+PiNR8XN3vjEsF//cer3VRTn+TNhq/bY45Ehde4ZNi8uDoXDRDiaTPS91Ogpht+Bvifdu4adRSYsdRf7vs4di2eD1m1hNtwTtotC8oVY++Cza8iSHoEHeF9x9de5YT8/fuvzly2eZeen7n/1qWGnePlA8bwd+gn8P/l9Hwypd+bxvcu399lilvRrDn8qb9CJvqUj/FVnrVueH1tcuqw/NIwqDVc/nqo+54uG6CBETyFzl37kczhoST901zzQS3nZ5/YvMulPX+qHPrWfvPuGLOmYxlOn43QQez/dsu/ovWPIuW1D6t40lL/wG/NzPoun8hX79R8eVxj8aecqDflztCzrHLyFxP/4An7BL9KHuokhfbn+Fpn6Qz/xRi+XN+k6HstywfMr2H/ybRiG+uyXDvhR+dBHc6IvzQH+mgM+lX70rzqhf/yqOp1a7HC8FF/yPtK+wZ+S99sri6mr+aBXmLP444cwl6O1P9HrY/xNPmLu8g38dQ6mXw3x9Ze0IP3eWYzuNUN8frbOw3zoL9zvkv0PPOjjxL8XL/3+1+58Lr7Ue27IefEmv/iynC+zoe4XS/rBU3rh9+BL8eX7k+v/yXPg68p/zFP3GT2lb3jX0EX3mfO73o9Of/8ewCu8H/Iv58O91RzxheNXaRza+VW5cVXvmi7MS+8a+/WuMWfND54un3+v/n9n0FH3o1+f73ifiS/+idO/kp+AVqAFAAA="},"shape":[180],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12UO4zTQBRFvT8+zvIPn/AxARaUFTRoJViEIhmESANF+kikSr11KjepXbuLtBLlNjTpsFK7oUqb1K5Th/PuzKxY3Fy/N+N59913x1EURYvTOAXaZ73LhsvTkz3DaW+1m25FUVb3dxWfdIVpvNgxjA4HO+lms/mRzxVPi+LA4t9V9cbibL5+Ydge5E8Nh/lnxew7NExX42eGWTd+5PGuITzuGFLvtuJJfUtxUShPXeV5lCe+aViuO0L23TDk/OuGw1lyTTga7Xu+Db++r3w+1zp1lc+aZ1d9rHrk7xly7rEhz1sfdxy21Bf9Pjak7n1DvlM/6Of5lp8snhatj4asvPP4wWH05V/9WNe55zrVfemI/qoTdKOvlsXLcfOBITqoPnNVfdabhugpRE/1VVaV9COWbvAVpkdHmgd1dS766DvODXqonzKZaD88pDe6SUfyjdT5Rr7CT9KT864YMi/5jD72/D75Cv7OZ0UhP7H/kiH8L2DwJ3OVT+Gv/eF7XtUXuoe+gl+kD3WfGNKX62+WqD/mF+6BeKGD4xEvtmyd87d9XnGoDx/V4dF56Kw5kdcc0ENzoO/g34b3ofijm+owj21DeIkvfT80zOo/bUP898qQOWg+1A9zFn/4hbmoHvvlz2X/WD5CJ/kGfvqO/r4bDkc/vxqW1bf3Lv+ra8gjf4ZzeD2wGH7uPs8S55N4kVie56Uh+18bwl98mcNz4XytflgXX+bgfJhMdL/oX/OBp9b53t17z5e86oV1/O3Weyvdc2LdZ87XPT7/r01q+Y/zgx+1rv8BiH/D/HTOsj9z+oU5jpuO37ojfenjQj1STpfRSP815qP/Gv4N/br5e1/+/59hju5/M8jd/Ygi8YRfnP4FcNpvd6AFAAA="},"shape":[180],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/5WUPW4CMRSE904cIEeAG3CDSGlXinIEGqSIhqRIQ0PNisLchHSJUkPBAnFmzX6LNckKpXoa+/2N3zzXMcZt+Ra+ZYeredi0eFAUxafOwdy7fZDfSHGl4iazKjwKv8p+CcdyGnYyL7NFyn+3WnZ+Z+Gx8D7FLX7Zuu2DePfjHD+39O3nDa938fJzx17vmHhUAQtfeMHH+yXvSfFPWbznOytBc8/7kQ97efdlO6fru1Hvv9b5guFNPbDf5/hZ8/N8vH/fHFxv6Ihzzwfu06P7uz5yHQ7/0N1B8/nIdOF909+9/Jo98T5v5ff+0CF5LnOed3tAPuZfpj2pun1iLs6TOvjXKtDsmesj12NQ3tjureuUPOjSdQjmHn/07Tru05P3Bw8/d778U/6+jpmvz9X9fI5ef53+gave4e18ibs1J9eR6+IH6aQYeKAFAAA="},"shape":[180],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/11UezTUaRgWUk0dll3ZShyF3FqXZIdwIkfa3dlGUYtSjqSy42y6LHXSVIp2szqtFFHUNtGibDRrtT3UtBu51CKbGRu5zOU3199v3KaYHVumc/av73zfe773ec7zPu+TbT2Qwp0gwWabpuZtVCLAUkQ7lTmKhZ+bfVzuOAbD0OFf41rHcE47iz8JEty4ysFCWwotK/7ZcuwCBaaBgYHXCgoHi/hdvTw5guc8CagwH8KkVqtFfiO0t0ru1jgO4GpFQ/HOp/0wWH1wLKpVhGXuTpHpzwYx+/JncZx0IYjEDJtqOzkyHpflM1lKpE08rEttJxDR+sRoolQFqyT30ihnJXyPa/J5ASoY9RgZtxWQoPLWD9tNyrHGNGjf1m0KvJ4fNmMNTQmiyjM/94oSpULDPa47VJBs13Ift6uQZlwW0rKKhPM8/62L/lSBdGFt2DtThRkj8xe/PkPixemiv32rKD0PFu+R2idVigV85Upf8Qt0bA6PKLv7CjklLW92t4oxOtJ0qFjTj2SbxvNeDAlmGzlpVCYErLw5WzKeyNDjVBpxtZrAkaUXopdrniGreVNsdmYXTjUv/eN8uAApk/A1MXiBw3YF0SlEm16/JSv3304+16/XaU5a4xAnUoSPvqxvke3S4bzT7e1/MVo9bsaMxkjgL3nOqU0gkFyzcbmAIYNpU1cJy1yBEI+FBbfWK3DSdYmBW5sCmZab3CaOSRHfmRupHZchkNPT8bu9AsI+ukNmjBAVPp+6Owt074WlL5ElR+KPtT7BbAlYpiVze5kq9K6+c83kFznoDa8EHjFq6Gxg8IG5CnMuehfRdpDYl26Ru5hO4VbI02LPXgoFf92gOV1X42TiRV+7K8PIMGR+MzWXaX/ZFeaymgZJXL/JPtIZTcE9mR3M2z8Ck1phgOHp9+e0Py24HNtAjQrMzdW57vMoXApMzLFaMA7DqIkS+nMZrBvUofxYCl6ST3qNeQRc/Vxnhabo+Ndfe+2cJcbatp/CfW6I4MQI8ybTFbjnL/qCyyNRZN+wx756FHcc8mPhp4H9taCQIs838GEQZophNR4x6B9WGY9gGn9k7UDUYJcc9byB64UJYqTFN9YdThBhNG6eS54FgTUHDqzw/1aGmY5T/SR4WZ6TFHSUxPhXloSvxyiSvLbHKkIp2LSHXTVzVcPRaEk2p1eJPJp4xtdmIhSSHW7WPw+Bv+FEttRciqaKhLKNO4Ro+iEy+vZeAhWtPt931sjh4rh23bCuzrfgLasvEur92dsjU4519+N+h2pBgmYQtYHKK40MAl5hJ7zD+h7hUJUkoNGzGb/ZBKfdi+KjJynHVpjWiW2s0fCCYYG+z8MBsxGiUjE1Z/akVojiTgF9Cm+La2q3oEYEgSXjQYSHHFbG3O4jM4Xv/C1FA6+Gbdo+gOiSftt1/lKYXX6bE1N+uZgvRpCfQOvrKv3PP8W6O7GBNlDAkEN8Z7zPz0mm58uMthMeejCkr3cZZ9TlPZTiu/Kl0rm7lZhcRUsZqVChsZm9LHsTiex3ueY42W1oc4KC2JI+btZHImbXUc2lvaQ+DxxoO535BQrwK03TqFdK1HmddjjsJXs/R+t1zJpaKRzOHR/rZ6kQy6g9eHyXWo83rcv0HqrPPq2U0YfQEs9RUm+E4MRPcLNjZPq8+n/OMM+Up5eHyaFbx7POuWoscsnzV+yjMPv+oli3Din+BQTohQagBQAA"},"shape":[180],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p91678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91679"}}},"glyph":{"type":"object","name":"Scatter","id":"p91674","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p91675","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p91676","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p91685","attributes":{"data_source":{"id":"p91623"},"view":{"type":"object","name":"CDSView","id":"p91686","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91687"}}},"glyph":{"type":"object","name":"Scatter","id":"p91682","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p91683","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p91684","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p91635","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p91662"},{"type":"object","name":"WheelZoomTool","id":"p91663","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p91664","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p91665","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p91671","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p91670","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p91672"},{"type":"object","name":"SaveTool","id":"p91673"},{"type":"object","name":"HoverTool","id":"p91742","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p91657","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p91658","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p91659"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p91660"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p91638","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p91639","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p91640","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p91641","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p91642","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p91643","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p91644","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p91645","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p91646","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p91647","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p91648","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p91649","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p91650","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p91651"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p91654","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p91653","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p91652","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p91655"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p91656","attributes":{"axis":{"id":"p91638"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p91661","attributes":{"dimension":1,"axis":{"id":"p91657"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p91680","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p91681","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p91677"}]}},{"type":"object","name":"LegendItem","id":"p91688","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p91685"}]}}]}}]}},{"type":"object","name":"Figure","id":"p91689","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p91628"},"y_range":{"type":"object","name":"DataRange1d","id":"p91691"},"x_scale":{"type":"object","name":"LinearScale","id":"p91698"},"y_scale":{"type":"object","name":"LinearScale","id":"p91699"},"title":{"type":"object","name":"Title","id":"p91696"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p91739","attributes":{"data_source":{"id":"p91623"},"view":{"type":"object","name":"CDSView","id":"p91740","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p91741"}}},"glyph":{"type":"object","name":"Scatter","id":"p91736","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p91737","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p91738","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p91697","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p91724"},{"type":"object","name":"WheelZoomTool","id":"p91725","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p91726","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p91727","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p91733","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p91732","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p91734"},{"type":"object","name":"SaveTool","id":"p91735"},{"type":"object","name":"HoverTool","id":"p91743","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p91719","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p91720","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p91721"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p91722"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p91700","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p91701","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p91702","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p91703","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p91704","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p91705","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p91706","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p91707","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p91708","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p91709","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p91710","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p91711","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p91712","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p91713"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p91716","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p91715","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p91714","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p91717"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p91718","attributes":{"axis":{"id":"p91700"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p91723","attributes":{"dimension":1,"axis":{"id":"p91719"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"59611ad7-2615-4e29-8d2e-8335ba155420","roots":{"p91744":"d4d8594c-a342-439a-8273-a3d77781af47"},"root_ids":["p91744"]}];
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