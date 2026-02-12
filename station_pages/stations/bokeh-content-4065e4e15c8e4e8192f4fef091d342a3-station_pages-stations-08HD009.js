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
    
    
    const element = document.getElementById("c979ecd8-c238-4901-a0d9-06fb0040f4de");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c979ecd8-c238-4901-a0d9-06fb0040f4de' but no matching script tag was found.")
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
                  const docs_json = '{"cd6fb6c8-8641-401c-9128-48cb9436caf1":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p316817","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p316818"}}},"roots":[{"type":"object","name":"Column","id":"p316909","attributes":{"children":[{"type":"object","name":"Figure","id":"p316819","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p316820"},"y_range":{"type":"object","name":"DataRange1d","id":"p316821"},"x_scale":{"type":"object","name":"LinearScale","id":"p316829"},"y_scale":{"type":"object","name":"LinearScale","id":"p316830"},"title":{"type":"object","name":"Title","id":"p316822","attributes":{"text":"08HD009 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p316883","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316877","attributes":{"selected":{"type":"object","name":"Selection","id":"p316878","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316879"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDBYpSx4CAC75m36CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316884","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316885"}}},"glyph":{"type":"object","name":"VArea","id":"p316880","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p316881","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p316882","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p316894","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316888","attributes":{"selected":{"type":"object","name":"Selection","id":"p316889","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316890"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGAomMlyCAASmtntCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316895","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316896"}}},"glyph":{"type":"object","name":"VArea","id":"p316891","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p316892","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p316893","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p316903","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316897","attributes":{"selected":{"type":"object","name":"Selection","id":"p316898","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316899"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3UfWhNcRjA8d+959692LjXvEbqlJJlcU00xpwxlMhtpbw1Z1mWMa63oRZHrdRqud4j2THGWOmKVmrlbFqW1zvGDOOUSCldeZmmjfnu+evzz+/p+ef3fZRS4ef62FallDs3HSN275j/quQPGC1/gnrnHYzNq0fjYhTjyZVobi/FRGchWrl5GKzLRDtlDIZ2KHRefBn93/D8LnTrWjGSegNV5CxGX1ahviCCsUvr0Ri2DOORbDS7JmFiQSpal3+MYn+ai/bOhxh61YROXh2G62vQTTuAkV0lqLpXYXRhLupXpmAsPQON3f0Z7O/+jKbRiYkrd9Ea3ojBPafRfn0YQ/nl6Fxdg+ERBejumYGRNxNQLUrCaMO3kewP9GBsbzsab29hfFEtmteqMRGoQKuiGIM9K9BenIOh65PRCQYwvK8vyP6ejxgp6EDV2IzRkQ2o7z+BsXcH0VhShvHG1Whm5GNifxZa78dhcKk29H5tT4B3U26j9b0abacYnZocdNcFUE39NIK9P5vRaD2B5tEytDbko505Hp1fX4czf68N1bHzqBftRmPacjR/62i19aYzf/wJOhvr0c2qRNVXiPr9TDROKjSLu9KYn34D7T9V6LSvR/dUNqpNqaiH3GHM9zeh+aAGrTMlaJfkojMzA92Bz6nMP7qL+tnTaGwuR3NWAVpqItqPv6Uwf64d3dJaVLMrUPeuROPpZDTP9yUzv6UD7TkN6GiH0I2vRnUhC/WtGho5r5OY999E69kRtGuL0Nk2O0nuSJLcD7/cDb/cC7/cCb/cB7/cBb/cA5/cAZ/075PufdK7Tzr3Sd+adK1Jz5p0rEm/mnSrSa9e6dQrfXqlS6/06JUOvdKfV7rzSG8e6cwjfXmkK4/05JGOlPSjpBslvSjpREkfSrr42zLUAw52gIP/f6Bl6N/j4H/HwX/e3/IP72l2K7gFAAA="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/21UPWgUURB+t3p6SkSDh1gcuoiNKFhcEVLIPhEJYhEOLCQEsoWkkpAqhDRZEQuRcFVIJSqWhhSSIliY8zziGX84MfGMGm/PEGJYNWoQjXpZ38y9ec79bPMxs/PzzTfvPSGE3FmMSCGEO3Vgw1Eok8kA0B+Kt4BfHOneDqji/oD/Zkf5O6B9JfjGbUI3nf3hsHh7omOLrPo3nAjWW8f/5aFf+L87bZn/Ftat1NTtP7Ff80Oeih/WJb5uby/GeRdXAl33q677W/vX6jDgc2YG7q8AivnB1WbxNL/q1wrop6biMoL5u8D24hNRyeZU/bdqvSLa/mv4qjwvSAmeV48qb4epz/ooPVp1HPaBjyPl096MXrq/yrdkGIY96WxUzxHjqPhHeX3aCyHpQHE0L/WnfdNem2J1/z/5HvzB1S98D/blzAeMO7f0GXmfuvYR44OUb1DNMZ0feG/iOW67VK5B8h9fxDwnmXxbg21XFxoQhtqce23iyGYoY+NzyOP6WhHtFusl2MOZ2Rccp8+2/Ufgv2/heQNWVMCxu8903ad4Xvacf8xRzZ13NsOw1DnyCPVar+TADr3Rh4DDY31Z1CvRldP9HxgE3tbRotED/Cfdec4L+8L5aJ8smHloTuh36/SrZnnIX9mlwqEngDdydsHEszpiPIF78Mb63hg+TJ+ee2feYZ3OkZK+j8v8HNDeKc7orveAetfzIf2Yvmgr8+Di4ZkGvZiuqLPyh3cSs0Z/OA+T+RkTx+ZT79ReuK/qXuyWVTvG7490lz/xd8u/3R8x94e9e/R+0r2wuy4smXtAevwDaBiTDLgFAAA="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316904","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316905"}}},"glyph":{"type":"object","name":"Line","id":"p316900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p316902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p316828","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p316855"},{"type":"object","name":"WheelZoomTool","id":"p316856","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p316857","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p316858","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p316864","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p316863","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p316865","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p316866","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p316867","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p316868","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p316874","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p316873","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p316875"},{"type":"object","name":"SaveTool","id":"p316876"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p316850","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p316851","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p316852"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p316853"}}}],"right":[{"type":"object","name":"Legend","id":"p316886","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p316887","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p316883"},{"id":"p316894"}]}},{"type":"object","name":"LegendItem","id":"p316906","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p316903"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p316831","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p316832","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p316833","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p316834","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p316835","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p316836","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p316837","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p316838","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p316839","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p316840","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p316841","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p316842","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p316843","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p316844"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p316847","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p316846","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p316845","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p316848"}}}],"center":[{"type":"object","name":"Grid","id":"p316849","attributes":{"axis":{"id":"p316831"}}},{"type":"object","name":"Grid","id":"p316854","attributes":{"dimension":1,"axis":{"id":"p316850"}}}]}},{"type":"object","name":"Div","id":"p316907","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"cd6fb6c8-8641-401c-9128-48cb9436caf1","roots":{"p316909":"c979ecd8-c238-4901-a0d9-06fb0040f4de"},"root_ids":["p316909"]}];
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