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
    
    
    const element = document.getElementById("d355ef4e-7d04-4fe3-8d1e-00bf575ca16e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd355ef4e-7d04-4fe3-8d1e-00bf575ca16e' but no matching script tag was found.")
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
                  const docs_json = '{"c3553bd3-252f-415b-b05c-16038b0c54a4":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p213553","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p213554"}}},"roots":[{"type":"object","name":"Column","id":"p213645","attributes":{"children":[{"type":"object","name":"Figure","id":"p213555","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p213556"},"y_range":{"type":"object","name":"DataRange1d","id":"p213557"},"x_scale":{"type":"object","name":"LinearScale","id":"p213565"},"y_scale":{"type":"object","name":"LinearScale","id":"p213566"},"title":{"type":"object","name":"Title","id":"p213558","attributes":{"text":"08KH024 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p213619","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p213613","attributes":{"selected":{"type":"object","name":"Selection","id":"p213614","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p213615"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGhZFeDuBACU58RICAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p213620","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p213621"}}},"glyph":{"type":"object","name":"VArea","id":"p213616","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p213617","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p213618","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p213630","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p213624","attributes":{"selected":{"type":"object","name":"Selection","id":"p213625","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p213626"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FWSjDAQDA4b+w5EqWcoQlpmSpUY7kSmvLUUwaEhGWHDWkSTnSUMiVGkLUWq7WHEVCQpIHtRISEh60B1EyCfl9L58gCFG9DmWGIAiawG82rPzwepqT6v8HmzP71Ig45cuN6wY9eFLizSdrPvyhEHP4tR/n1/tzpxDEq2PBfCOVsPt2GCfkRHD1fSSPN0XxgUjGr8YYDpHJOXs/jtvU8Wx+TuQLfTK7eKWyfC6dy2MzeehYwTtFKn6xZ7F/Zy4rxHncbFLzfGIhn59p+KeshKPfS7nYUM59AZW8uVzFj6la9rXVclp1PTc4Gnl6QMenoS38aW1lqaKNC67aubuugy2/XXw72sOe0l5O2upnbfYAT9wN8aFuhN9cx1linODcaCO3703xYv4MXz7NsUi/wHGeJq6YNfOwfIl3j1bYrrFwoN3Kyo4NVcYf9wydP1ACAAA="},"shape":[74],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p213631","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p213632"}}},"glyph":{"type":"object","name":"VArea","id":"p213627","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p213628","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p213629","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p213639","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p213633","attributes":{"selected":{"type":"object","name":"Selection","id":"p213634","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p213635"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3T+TsXBgDA4W8ymUlWMqEmmswkj5BM5ZoryVyTVJKQCZOElCNzNCHJXMnRJHPN0JIJmWQyi0ySTCaZZCWTpD37/PT+Ba9AIPDfaGhmJBAIctqMsX23Kc5OmqNK9DZ0/MAao4ttsHKzHQ52OqCEuxPq/+uM3qd2Y/pKV2ypcMMp4wOo+Icn2nh744k3PliS7Id9SgEoeiUQdSyPovuDEEzxD8OGheE4kRaJ8qrRaPlzDAbbxGPho2+wOygRhcTOoMb5s7hHIw0TbqRjrWMWjj45j9LHc9FEsgADCr7DXJ0i7LhVjHMupag6WY5OJysxRroaqy5fwSH9WpTsrMMt+6+jz3QjZsY3Y6v8TZwuv4VrjNvRtqcDIw7+jmVzXdif1INiSvdQt+Y+elgMYGr/IDb5PcJJoRFclTaKVh//jaF1T7FoxyT2DD1H4aCXqPnuDLpmz2Li+jdY1/QWxxyEzP9X5okwmoYtwsAlYpifL46d2ktwvvV9VHORQudn0hgXtQJrlsvjcNEqXKq/Gg1+U0JfN2XMfqmCbXGf4IycOiqXa6C90QaMuquNFV66OPBaD8WTNqOeogF6VRthmvln2HzfDJ/7WqKC0Ha0PrcDw1RssfiaPfZaf4EiQztR64gLuonuxeSsfViv7o7jjR4o63AQzUe/xKBjvnhR4iu8k3cYBdpBqN4ajC67juGpieP4U2QEjkidRKmir9Ho0zj07ziFOftOY/tUEs7GpqCK3Dl0LPsWow0zsbI7Gwc9L6DE6zzUT7yI3qsvYXrVZWwxK8GpvjJU9P0BbRZU4YnUGixZexX7aq+hqHU96vzZgO6BNzBlUQs2ZLbixLpfUb7xNlrad2Lw4ztYGHoXuxf3olBeH2poPcA9Nx9igvMQ1j4dxtGIxygtNYYml8YxQO8Z5t7+Bztcp3DuxTSqxr5CJ9k5jCmdxyqDBRb871qIkp4iuGVWFH1Ov4eZChLY+qMkTpsuwzV9y9H2kAxGCOSw7OxK7FdWQLFaRdTd/hF6DK7F1MOq2CSyDicz1uOqdZpo1aCFoXYbsWhkE/aE6KPw4q2omWuIrhtMMLHFFOt2WuDY+DaUibBG02WfY2ChHeZvcsTOdiec37sL1V7sRucYV4xbsR9rSg7g8FYvXNrljQYeh9D3lR9mJwRg24dHcKbyKCqbhqL9vTCM8gnHireROJASjeLKsah3NR69rBIw7WEiNgecwefvpKJCRhpaq2Vg2PUsLLbNwd6/clEkpAC1xAvR7UIRJmt+j/W/lOK4UwXKjleieXi1hdF/MSn1lKgHAAA="},"shape":[245],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE0w8WF/y1ZyBdH1E0I5DUjPmOZv4ffPYptL5mdKCC/Qc+/32Dz56EtLRPNPP3cKCZtN8Px/ABxvs3uvnr////8db379PCvgc/6y7ZU1EdRfQ/oEcbph4G2bNAJuqIPZB7/9x3MB+YD4/YA+Xrp+cdsgeWBw9U2A7a//n/f/+Jsn0g8fiJb/eA1CU8Xrrb/u////PdH+6y/w00YLXMLhDf3tgYYQ7EvgMg8XrHhKMge+oPfT0BMue+f+9xsL1LZx9B1rdASv+qPVI4HJBrPY2iHuROJPeCzYe5B0QLROwEyc8/5r0dZO5/rfZtcD5MHuYPIG3f6QjRz6d7CCzef+goVN1JEP9/KN9ZEL/hdeAFaHhcBJm339v8IpyPJJ+QYn0ebK/OprMgdfG7PM+AaGD4nALrm/v+ONRdx5DDGxwfMBopPBKeXjgEp2HySP4Hxx9yPILCE0ajxy9SvMPNhfp7f1HGQbA7ry0+AA9X9HgH8b9q4I5/kDklk3dghP9vcLhuJZlGjz+g/fI3zyFomH0wGha/6DRMHqYPn/v2lGwGicfz6W4C8YHhstEeAI3SDiGoBwAA"},"shape":[245],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p213640","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p213641"}}},"glyph":{"type":"object","name":"Line","id":"p213636","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p213637","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p213638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p213564","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p213591"},{"type":"object","name":"WheelZoomTool","id":"p213592","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p213593","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p213594","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p213600","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p213599","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p213601","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p213602","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p213603","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p213604","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p213610","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p213609","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p213611"},{"type":"object","name":"SaveTool","id":"p213612"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p213586","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p213587","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p213588"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p213589"}}}],"right":[{"type":"object","name":"Legend","id":"p213622","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p213623","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p213619"},{"id":"p213630"}]}},{"type":"object","name":"LegendItem","id":"p213642","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p213639"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p213567","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p213568","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p213569","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p213570","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p213571","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p213572","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p213573","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p213574","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p213575","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p213576","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p213577","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p213578","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p213579","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p213580"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p213583","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p213582","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p213581","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p213584"}}}],"center":[{"type":"object","name":"Grid","id":"p213585","attributes":{"axis":{"id":"p213567"}}},{"type":"object","name":"Grid","id":"p213590","attributes":{"dimension":1,"axis":{"id":"p213586"}}}]}},{"type":"object","name":"Div","id":"p213643","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"c3553bd3-252f-415b-b05c-16038b0c54a4","roots":{"p213645":"d355ef4e-7d04-4fe3-8d1e-00bf575ca16e"},"root_ids":["p213645"]}];
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