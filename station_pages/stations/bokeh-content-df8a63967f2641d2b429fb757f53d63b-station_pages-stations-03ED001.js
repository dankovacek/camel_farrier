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
    
    
    const element = document.getElementById("b316b422-f8bd-487a-a7d4-794bb2048c28");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b316b422-f8bd-487a-a7d4-794bb2048c28' but no matching script tag was found.")
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
                  const docs_json = '{"c4d2335f-996c-4871-9644-f38a3bb2a55e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p164508","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p164509"}}},"roots":[{"type":"object","name":"Column","id":"p164631","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p164513","attributes":{"text":"&lt;p&gt;&lt;strong&gt;03ED001&lt;/strong&gt;:\\n        108 revised days; 0 removed.\\n        0.57% of the earlier published daily record changed.\\n        Affected interval: 2022-07-29 to 2023-09-27;\\n        longest consecutive revision run: 6 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p164514","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p164515"},"y_range":{"type":"object","name":"DataRange1d","id":"p164516"},"x_scale":{"type":"object","name":"LinearScale","id":"p164523"},"y_scale":{"type":"object","name":"LinearScale","id":"p164524"},"title":{"type":"object","name":"Title","id":"p164521"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p164564","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p164510","attributes":{"selected":{"type":"object","name":"Selection","id":"p164511","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p164512"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DVVJCAQAAwGc3YhcCYmNhYxd2YreomNz/n92ZDYIgKLHUMsutsNIqq62x1jrrbTBko2GbbLbFVttst8NOu+y2x4i9Ro0Zt8+E/Q446JDDjjhq0jHHnXDSKVNOO+Osc8674KJpl1x2xVXXXHfDTbfcdseMu+6574GHHnnsiaeeee6FWS+98tobb73z3gcfffLZF199M+e7H36a98tvf/z1z38LFgGYdrEmsAEAAA=="},"shape":[108],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLbUiTYRjF8TtCjCIKUlpIEWKby5eZQ1Nb290TwkACP1QgUVJaSsYgVByCeJUl9qZF6VCzoRlJWhlZERU9NCqhotBsUBSZQRSRFYSCZOH/+fTjXOdcSsmiqqSgoZQ++ARV1LZmTtNTgXrBUjv3wB40R4dQcmMd9OEiVDEDKK8Kk8nn/6A5z+/kXtaB+sV3VG7fWnJpdgo71zuU1rRU7jP1qHaPoKTWpJGnE9LZ7wygREzUzmUu+pa9lvbrGeQH0+vYJxZksm/qQv1jEtVWw839dkYW+fAYml8c2dy31KK++dzKnyPr2Q2W57CLv4d6vDiX+4eZPKzO99C/DaHob5ZRt5f9xkaUQJ2PfV6iZh+uQol5irpixSb68lsGuX1gM/nfrGWbP5+/la+Fvwb7IXZfg2gWlDVwv3EXVd2uI9w/DaL45x9lf20bqrg+y/5fjfSLPzbRV2Ye488bRel1HiePrT5B3/0YVaztJPcD+1FG7qPOWXKKPqu/mb7jL4oqbKHf14OqxHuGfvg0SvoE6pT6s/ho+By75IRWfFjaxj7pDuqfO0K4arKdu7zvxOWOLu4Tz1DiIhfItfFhsrG9m+z73cN+Yegi+c2G3jmVp9lyNHqJ/mXlZfpOWx//JUVX2LlmUU95rwaN//MH6BBgAwAA"},"shape":[108],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/13RLXPCQBSF4ZWRSCSyMhK5EpmfEBmZKQOknWm7/Q4tzEQiI5GRK5GVK5GVlZHItnPeNYt55tzLXu4uxvx93N7+Yxq0OMV+p74hO3KFAQec4RX2nzo/xe6DjEOr7N9lheMbGZtX5fZFWqwwo28xbPW9H+a1OMfA3BpL5vhnzmFHfcQaJ2gS/aPOl3jB7En1Lzxj4Hc8e5/wgAs8sneOBR7je/L/eN55oH5O3jEjx/v35CJ5j5gv7HfAuP+C/efcr3K63/eDHO/lBMs75fpWDjfSoG2U87U8rWSJ9VLZXcsOc/qO85Z5YcN55hmcYZHUxziHeog53YN+zvye3KGN/ZX9BW8It95gAwAA"},"shape":[108],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/13RL3MCMRCG8UhkZOXJSmRl5MlIJBKZoUN7MEOb/uWg7Uwk8uTJkycjkciT9xEqkaWzT0wwv3mz7LIJSl0/9Y/5R3ksscD2W+oTck12OGCPtzjF9kv6CzweyNjXkuNOdHj5JKP/kBzexRIdauolDnv53i/zAhocmFvhgjnxjT48cn7BCm9wkhlfpH+B6lWyxjOOOPA7kb1P2KDFjr3vcIZdek/+n8g795yP2Ttqcrp/S55l75Gy4n4Ne6b9Lfsb7uk87/YsKiyeJLut6DdiXIsabSXZPIjnFX3o7yWHpdigoR7ot8wbH+lnnsYpzrNzRQ44prn5HtQN8ztygzbVV+YPSrH3X2ADAAA="},"shape":[108],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEP9mBqlB4Nh9F0QNV8AAAcLYnjYAMAAA=="},"shape":[108],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0WSDSyUcRzHiSLUEKaShOhijpRE62sqhEIZ3YxGF6VaOtGkJOp60SquKMmhUvLS1tviOeeeex7OIe4eVHpbZzGJRTJbrZcjne9+23f//3/77/v7/H668xxTdlkTeFlZsUy0nMCNp5ybTzkE1gfG64aeJOBxRdB27RsB89jaeyb5BKzIE7oTJiIk9gztqGGJcMZ6uGIOTYAK9zz8p1f9LjusLhGKJaYOj/aJsFAwbiUYF0HgTHFG+PVYYj0pMSKLXh4Q3hcj3mblkh53CR5WafF830uQnVwe3W9BInS7hc22JBI5CRF+jm9ItBrMc68tleL5WtWH0+kUnvSf3dwiocAbE+qbFlJYMP/n0KguBQUzKSlm7Swcs/sthnE8oS71v06ZE/f/SLDBQZbn5UXioqVbHH1O7VzzdnkniRrXyjC6lILQuLRvzhYa8s4zX60sabCSjZJGkikU81INGxZRcFhn0rQnj4KMXyA1GqGgNSVa4+fEqSGugibwe9k8/mwZ4pYZcpp9m5BS++GCHrsJWUvLDRDciIG48UKWVyNiPwcFHnGlIVw89l2ZKAXh49BoyJXCxv1RnxVfijXi/MiGVinkx8eSHgxIsFsRz3L2IfHFSRKQsYJESXpXsJaOWDOvHv9R+8x3IrxqH1+l/aMe8uG33JKsGY5+nnfTRh2lmv4z3M5nT1STMI0aNokanuHx/3yZm75aR59GNHuTzopEWpPfLEZlHqNqxJAWw9X2lsGCH2vJj22G5cJJyeF6KCGg7a0czRWqnWlFLTjYddRj0LsV9o/3puT5tuOYyvZ1g33HNDcFOsJOsWsyFOj3KTP30GOmOTDY51RRfecZA4Mq+YuVV7swyll73VbYjfCzlbknL3bjlrGLcq6KgZmoKKtghwIFRxKtP9V0YBVt5LaxTYG87Lag8x+VYNcNlOW4MNCJOXQbZsx0vzP39Xa5Ce3eDHhTC6xE7aBk66UIBuVVrP0thTM5/u2LcnoOSmRO8VP7gRDjU3VK2Pwa8McPpSbXX1hDREFgAwAA"},"shape":[108],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p164565","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p164566"}}},"glyph":{"type":"object","name":"Scatter","id":"p164561","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p164562","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p164563","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p164572","attributes":{"data_source":{"id":"p164510"},"view":{"type":"object","name":"CDSView","id":"p164573","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p164574"}}},"glyph":{"type":"object","name":"Scatter","id":"p164569","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p164570","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p164571","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p164522","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p164549"},{"type":"object","name":"WheelZoomTool","id":"p164550","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p164551","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p164552","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p164558","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p164557","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p164559"},{"type":"object","name":"SaveTool","id":"p164560"},{"type":"object","name":"HoverTool","id":"p164629","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p164544","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p164545","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p164546"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p164547"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p164525","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p164526","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p164527","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p164528","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p164529","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p164530","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p164531","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p164532","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p164533","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p164534","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p164535","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p164536","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p164537","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p164538"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p164541","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p164540","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p164539","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p164542"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p164543","attributes":{"axis":{"id":"p164525"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p164548","attributes":{"dimension":1,"axis":{"id":"p164544"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p164567","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p164568","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p164564"}]}},{"type":"object","name":"LegendItem","id":"p164575","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p164572"}]}}]}}]}},{"type":"object","name":"Figure","id":"p164576","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p164515"},"y_range":{"type":"object","name":"DataRange1d","id":"p164578"},"x_scale":{"type":"object","name":"LinearScale","id":"p164585"},"y_scale":{"type":"object","name":"LinearScale","id":"p164586"},"title":{"type":"object","name":"Title","id":"p164583"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p164626","attributes":{"data_source":{"id":"p164510"},"view":{"type":"object","name":"CDSView","id":"p164627","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p164628"}}},"glyph":{"type":"object","name":"Scatter","id":"p164623","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p164624","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p164625","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p164584","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p164611"},{"type":"object","name":"WheelZoomTool","id":"p164612","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p164613","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p164614","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p164620","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p164619","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p164621"},{"type":"object","name":"SaveTool","id":"p164622"},{"type":"object","name":"HoverTool","id":"p164630","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p164606","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p164607","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p164608"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p164609"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p164587","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p164588","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p164589","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p164590","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p164591","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p164592","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p164593","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p164594","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p164595","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p164596","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p164597","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p164598","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p164599","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p164600"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p164603","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p164602","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p164601","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p164604"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p164605","attributes":{"axis":{"id":"p164587"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p164610","attributes":{"dimension":1,"axis":{"id":"p164606"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"c4d2335f-996c-4871-9644-f38a3bb2a55e","roots":{"p164631":"b316b422-f8bd-487a-a7d4-794bb2048c28"},"root_ids":["p164631"]}];
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