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
    
    
    const element = document.getElementById("f7884f2d-b463-4762-9532-f06434576a82");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7884f2d-b463-4762-9532-f06434576a82' but no matching script tag was found.")
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
                  const docs_json = '{"4d5f3bde-42ea-461d-ac2e-dcff591f5d9e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p87468","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p87469"}}},"roots":[{"type":"object","name":"Column","id":"p87591","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p87473","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02PC002&lt;/strong&gt;:\\n        89 revised days; 0 removed.\\n        0.26% of the earlier published daily record changed.\\n        Affected interval: 2020-11-08 to 2023-09-29;\\n        longest consecutive revision run: 28 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p87474","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p87475"},"y_range":{"type":"object","name":"DataRange1d","id":"p87476"},"x_scale":{"type":"object","name":"LinearScale","id":"p87483"},"y_scale":{"type":"object","name":"LinearScale","id":"p87484"},"title":{"type":"object","name":"Title","id":"p87481"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p87524","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p87470","attributes":{"selected":{"type":"object","name":"Selection","id":"p87471","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p87472"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzYCUAAA0GckZESikrIrsiIiq6IkIRn9/5e495wbQghjjjvhpBGnjDrtjLPGnHPeBReNu+SyCVdMuuqaKdNmXDfrhjnzbrrltjvuuue+BYuWPPDQskcee+KpZ1Y898Kql15Z89ob6956570PPtqwacsnn23b8cWur/Z8s++7H3468Muh3/74658j/wFiv0kjZAEAAA=="},"shape":[89],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLayjdcRzH8a9oIdqKlAeSKS17MEWN2oMfTaspoRW5jiIP5vLA2uaSn2nKWklpuR2OeXQcZ87M/bafS8lSlqbUanWGXNZGpCS0/d8evfp+3r+fiK7MyH6RJKLK/uZY6p6dXG6f+Dzsasi3FK/vaEqiCthXggvZb3a+5V9maQd3ZGAn78aOu7n39m28D/X0cNfH9tK336B+vInKHW1nr1lD7Yno43YU9WP3uoO9o9xpKcVBg+xfi1HHTKB67++iX+SiKRy69uzsI+/yU4Z4t2RDiT5C05Lkpp+2ocrZRZlP+ESPeofqOGaYPasRzewG6sg7n+nN1SiHq2iehI9wN4WMcv8uRZ0+jWo8cIwe9hTN62HUez7j9NRMlBEHmtAL1PWpE/QdO0rKCRp38iQ9pB1V7QHKrwdT9EctqF0eVEFx0/RXTWh+bqJ+eHeGPlCHcusbmue3Z+k/qlAlLqMJeDaH/aNf6H6+hl6RjbIxiNqePo/3uxbotj8o3mqR/5c3Bl5a+4oT5d4VmrY0p6U+/4CS1+piX9j67z/KSxwhyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/11SwU0DMRAE3jRwDfAhiQJGCiRAnICCkIKghHu5ARpIAdeAf3nx4ncF4ALcAA3QAAUcM+O1hLKf0azXM3PrG4bhK+dnf8TaGaaNH9TfWP+hoF8RU+6EbfgQevdr853mU/58K/136XnXm05ak7fhxxP3Md4XbG6JqDnRO7cgtuFsTdzH5rX0e+PfT+QoceReGt4R6/2Ut3N/Ij/1oWN+UX4pZ/PdyQ95bojQuy68UR7o6By69XxW+tlwq3n5AeFjftG+p9cc7l8RUc74JRG+F0TkmRJRU9v/hLwNYWJ87I+lM2Yfe9U8zoXQ0TxyiFdU/9898BHPUSPrn5NDR7o4V07kUT7oKC/6h3nFsa9ZyXf6aHN6X+Sr+9XekPtwX8vyPkH7go/mcU/vCf9V0e30/vgfXojYr/6r+n7gC/8HHPWmr8gCAAA="},"shape":[89],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12Sy00DMRRFB9Y0kAaQ+CZgpIR8wAwoKBIISpiVG6CBKYAGvMuKBqYApgA3QANpgAKG+66vJcCLOfL73PfxVBVOv/H4evcmdmu7w772wzB8pvd7u/fp6c64jZH0riObsFN8S8L+mu2Bek34kE6qs//bK+4m0y2N2ziaG1FnIXttbMLhixGeOveTHjMP6Ec/t+LKyPx9ywvUwyl1yD6lZfbvVDeqXndtfujNjN65uXToh27xT5UvhtnveshjH9iD5knTrDu6yjrp0oi9XeQ4R0J/ovnOc3w8M+KQmOdU9hMj6kx0H/s93kvcWPF/7JiLeTgk9I6Vd6S68rfsE/HsE8dpPt7RJ/stfrDM92B2vDffl3vOcdwb8v7vi+9WVe1K+oxHnt7zq/xvfH/M92zE/7DR/hkP+8L/AFLVf3rIAgAA"},"shape":[89],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/21SMQ7CMAwMP+ApQBnY8hr6C8QX2FC6wDc6mbUzExsSEhJb50IJduQLraFDT/b5ztekfR/jNtT0imPsta/olfdPnqNQWyTMO3mqzJPOgx/pDuozRLsHNbCbOHfivMgl/v/0kWMc2T++x7zE24XGg7d6W2NumEv2ZX/sUbR6oyOOy3kbkhyr4pzqfbik2rkrTfm9LG7Ucn/OKN2yvKd6zSh8FR55XviFzguP2vaHOui/Pm321fzJh88p4Yxzbkxu8PhevZf8n9jzQv1zbno/6Nv7h6/skf/O+mD/Bw2Cqm7IAgAA"},"shape":[89],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VRe0jTcRycghkOnQoKE00tn0Q5K+0h8pHmVk4LlJTQ2mxmuaZpS3yhWIJKKhW+KmU6MwOXmlZYxOz7S+d0c0639nLDmWTWNF+oUxfM8A/X/XNwx3FwN3uiIJ8mG0W4PRDFaKeDYe7wlaLHcxdt9S5SZMhlBpoyJmHz9ekBY40Cesl1MmOEAi4LPiXk+yqgbCA4PPjHGDqSU59bfkOKSh56k/ChQ0ClyqIM/mJU1LcQKQ6VIr5ld3fXWQ6RswdFnBUFbMV6jEUvKIE+X1fDE6lhr/4pVwubOUsb2ZUayFgOPdTUJgfeIDPMvV4IXvQ/pT2eckhy+xg1qJKgC518vsOIHIKqXgbR4pXQsTyWttinsuYT75RU9CRqYYiewWu5rYL3lUgURlbB6JcVTnvqPDSFJAQYz6jheq6coqFogGNBZw/gpkBknrzK8NaBffvJw+xyLVzxGbcU39OAz8/f88XpU4BncuzWIvSQXnWNSZjTAZmk5bOSdLDft1mTTiBbVNDgYLTJJGhhfIiat4PTg98cwbTYM4PWPSTs55pVVNYvKO1imNGTnLTCquO22Ntz63aRE/YYEYeLssE5Yd+PRbaGHyVguiyuRMx2xWi1nF6BxBVLaB4f3Vxwwxzm3hQJ1u2x5m02vjvaEav2nKRtxblipti8z684jlbe1/dzGsM7UleqO1brF+N6V++ODQfVprBYXhhrKZYhEbphThJNW5bLDLr5tRGfabeGpjGtVGHYRvqWzOT4U2uI2DQfoaX8tfr7e/xSVQYOLk5AQHA3ZZr6DeKrM3mtcWqgMxgMb+IUUAqybU0Neutez1adGBUcJWRT2YUTQhWEyDqNbK4apj/0uqSSlNCYHxaXbJbDi0u3UvxjhPAgvBP6N4aBfP/8Ulqp+P9/Dc6PRrga+AeDjUoAyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p87525","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p87526"}}},"glyph":{"type":"object","name":"Scatter","id":"p87521","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p87522","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p87523","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p87532","attributes":{"data_source":{"id":"p87470"},"view":{"type":"object","name":"CDSView","id":"p87533","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p87534"}}},"glyph":{"type":"object","name":"Scatter","id":"p87529","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p87530","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p87531","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p87482","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p87509"},{"type":"object","name":"WheelZoomTool","id":"p87510","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p87511","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p87512","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p87518","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p87517","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p87519"},{"type":"object","name":"SaveTool","id":"p87520"},{"type":"object","name":"HoverTool","id":"p87589","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p87504","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p87505","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p87506"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p87507"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p87485","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p87486","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p87487","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p87488","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p87489","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p87490","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p87491","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p87492","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p87493","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p87494","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p87495","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p87496","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p87497","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p87498"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p87501","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p87500","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p87499","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p87502"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p87503","attributes":{"axis":{"id":"p87485"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p87508","attributes":{"dimension":1,"axis":{"id":"p87504"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p87527","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p87528","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p87524"}]}},{"type":"object","name":"LegendItem","id":"p87535","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p87532"}]}}]}}]}},{"type":"object","name":"Figure","id":"p87536","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p87475"},"y_range":{"type":"object","name":"DataRange1d","id":"p87538"},"x_scale":{"type":"object","name":"LinearScale","id":"p87545"},"y_scale":{"type":"object","name":"LinearScale","id":"p87546"},"title":{"type":"object","name":"Title","id":"p87543"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p87586","attributes":{"data_source":{"id":"p87470"},"view":{"type":"object","name":"CDSView","id":"p87587","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p87588"}}},"glyph":{"type":"object","name":"Scatter","id":"p87583","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p87584","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p87585","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p87544","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p87571"},{"type":"object","name":"WheelZoomTool","id":"p87572","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p87573","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p87574","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p87580","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p87579","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p87581"},{"type":"object","name":"SaveTool","id":"p87582"},{"type":"object","name":"HoverTool","id":"p87590","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p87566","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p87567","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p87568"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p87569"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p87547","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p87548","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p87549","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p87550","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p87551","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p87552","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p87553","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p87554","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p87555","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p87556","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p87557","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p87558","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p87559","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p87560"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p87563","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p87562","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p87561","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p87564"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p87565","attributes":{"axis":{"id":"p87547"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p87570","attributes":{"dimension":1,"axis":{"id":"p87566"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"4d5f3bde-42ea-461d-ac2e-dcff591f5d9e","roots":{"p87591":"f7884f2d-b463-4762-9532-f06434576a82"},"root_ids":["p87591"]}];
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