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
    
    
    const element = document.getElementById("f6429cb1-14f6-4507-b5b4-f1006f4d8b8e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f6429cb1-14f6-4507-b5b4-f1006f4d8b8e' but no matching script tag was found.")
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
                  const docs_json = '{"62c69bde-07c7-40e5-8e06-0f6682721b73":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p395332","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p395333"}}},"roots":[{"type":"object","name":"Column","id":"p395415","attributes":{"children":[{"type":"object","name":"Figure","id":"p395334","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p395335"},"y_range":{"type":"object","name":"DataRange1d","id":"p395336"},"x_scale":{"type":"object","name":"LinearScale","id":"p395344"},"y_scale":{"type":"object","name":"LinearScale","id":"p395345"},"title":{"type":"object","name":"Title","id":"p395337","attributes":{"text":"08LB079 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p395398","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395392","attributes":{"selected":{"type":"object","name":"Selection","id":"p395393","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395394"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJinluXjBAC52BMPCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395399","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395400"}}},"glyph":{"type":"object","name":"VArea","id":"p395395","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.007840000372380009},"y2":{"type":"value","value":0.05508000142872328},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p395396","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.007840000372380009},"y2":{"type":"value","value":0.05508000142872328},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p395397","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.007840000372380009},"y2":{"type":"value","value":0.05508000142872328},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p395409","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395403","attributes":{"selected":{"type":"object","name":"Selection","id":"p395404","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395405"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3T/zvUBwDA8U+muiQzySSPZCaryyR5RMMu38Yx7Cpf2iUreQoru5bMkNqlkpVUl0yyhZUuSSVZXR5hKjWZIY9kspvKTDKTR3v2/un1F7wEQVD1LPeXCIJQt80dh0UStMrzxKD3fTCl5iMsXSnFDm0gipKD0elNGa4vXIXZS8NQ0xCBAxFyNP8rEv3SP8PEWdFYVBKDLa6bUedeHNpHbUH5ywTMzNiGVXMSUatOQhPJ1+j5ayomxKRjwavd2JS1B8fn7cMFlzIx1PdbVD48hBXxOdgz6RgaHjmObrZ5GHstH3MDT2HD4+9xRFGE1qIfMeTEWUyzU6P6Zhl2yi6invYSOn9VidEG1zDn1E9Y46jBwfoatIi4hdKBekza2Yglxnextfge6ro2o0NTC0au+w2zhtuxek8n9ps9QlP1Y/T+sBcVLX1YuPFPvD/2FCcODKB43t8YXvECM3xG8HLHKPbGvUKjSRPokSNI/zd+/huYVzUZGwNEONqthzaKGSibaojpuUZYtmgWdmneRn2ZGbr8YY4xSXPx6AwrrC2wxqEl89Gy/j0MDBdj8nM7PJO2GNtmOuKUYid0dFmGUXdd8WCkG15/4YHPlCvQzMwbfc/54pce/vjDgwBsjg5CYSwE7Q6sxDWWobjvYjhWen+Kfe1r0TguCiXCBtxyeCPm22zCO1djcUz6Odp2b8VVXyhw95TtWH58B3aLk9FAk4LLP9mJm/p2oWqHEuv09+Lwyf1otSQLg+oOYkrYYSx9dgQ7UlUomnkCnYq+w/XLCjD7TiFq1p7GgaFiNFeeQb/Z5zCx9DwWuZdjS3MF6kRfQft/r6I8sxoz597AqvKbqPWqRZP2OvSM/RkTXt/GguwmbHr3FxyvfIALpK0Y+qgNlQkPsWJyF/aoutFQ/Du63XiCsSFazH3Sjw2Jz3Fk+iBanxzCEIeXmHbrH1SHjmHn03HUS32NzkY6Afw/rYs5zlOx5vY0HJTro8WQAUq/eQuTTI2x5KwJtrrNRt3mOeiwwQIjRy0xa/87WG1hg/0XbNHUayF6ty1CxWZ7LJxwwPuHluKEtTOKK10w3P8DzOhyx8tbJdir64VGKh/0WOiH8delmBf8MTb2BuPodhnaTF+NsvwwTF+8Bstq5di1el2A5D8Hhxb5sAYAAA=="},"shape":[214],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDhH7x//99/97p9rjkn/7/v78oY6L9s///4/eUTLaH8WH09///58+cORMuj67uF9B836QJcPrv////tdqnwemv///LszVOxdAPcxe6OnQal7tg9NX//+051vRg0DD5H0D9j5eutgdaU79v/iwM+34DxafnTcLwB7p5EP1dRNMfgPaXTO7AoB+A7W8jSF8E2vuwqgVDP8wfMPfD3ItuP65wgsmj+w9mHixeYDQs/HHFD650gB6OqO6cBTcfPR5wxTOu+CY1XsiNN1JpYuMXRkP83wSnIeHVAKcZhlm5NFJoWPzSynwAumxNrbAGAAA="},"shape":[214],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395410","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395411"}}},"glyph":{"type":"object","name":"Line","id":"p395406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p395408","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p395343","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p395370"},{"type":"object","name":"WheelZoomTool","id":"p395371","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p395372","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p395373","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p395379","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p395378","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p395380","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p395381","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p395382","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p395383","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p395389","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p395388","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p395390"},{"type":"object","name":"SaveTool","id":"p395391"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p395365","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p395366","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p395367"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p395368"}}}],"right":[{"type":"object","name":"Legend","id":"p395401","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p395402","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p395398"}]}},{"type":"object","name":"LegendItem","id":"p395412","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p395409"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p395346","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p395347","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p395348","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p395349","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p395350","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p395351","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p395352","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p395353","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p395354","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p395355","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p395356","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p395357","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p395358","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p395359"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p395362","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p395361","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p395360","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p395363"}}}],"center":[{"type":"object","name":"Grid","id":"p395364","attributes":{"axis":{"id":"p395346"}}},{"type":"object","name":"Grid","id":"p395369","attributes":{"dimension":1,"axis":{"id":"p395365"}}}]}},{"type":"object","name":"Div","id":"p395413","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"62c69bde-07c7-40e5-8e06-0f6682721b73","roots":{"p395415":"f6429cb1-14f6-4507-b5b4-f1006f4d8b8e"},"root_ids":["p395415"]}];
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