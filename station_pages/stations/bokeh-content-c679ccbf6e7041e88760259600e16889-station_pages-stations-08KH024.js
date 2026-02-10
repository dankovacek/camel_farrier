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
    
    
    const element = document.getElementById("aa1e470a-a7d9-4393-bee5-27d88cfdb7b3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aa1e470a-a7d9-4393-bee5-27d88cfdb7b3' but no matching script tag was found.")
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
                  const docs_json = '{"1878db48-2447-40a7-8170-f4aa2a78102a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p212330","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p212331"}}},"roots":[{"type":"object","name":"Column","id":"p212423","attributes":{"children":[{"type":"object","name":"Figure","id":"p212332","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p212333"},"y_range":{"type":"object","name":"DataRange1d","id":"p212334"},"x_scale":{"type":"object","name":"LinearScale","id":"p212342"},"y_scale":{"type":"object","name":"LinearScale","id":"p212343"},"title":{"type":"object","name":"Title","id":"p212335","attributes":{"text":"08KH024 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p212396","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212390","attributes":{"selected":{"type":"object","name":"Selection","id":"p212391","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212392"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGhZFeDuBACU58RICAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212397","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212398"}}},"glyph":{"type":"object","name":"VArea","id":"p212393","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p212394","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p212395","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p212407","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212401","attributes":{"selected":{"type":"object","name":"Selection","id":"p212402","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212403"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FWSjDAQDA4b+w5EqWcoQlpmSpUY7kSmvLUUwaEhGWHDWkSTnSUMiVGkLUWq7WHEVCQpIHtRISEh60B1EyCfl9L58gCFG9DmWGIAiawG82rPzwepqT6v8HmzP71Ig45cuN6wY9eFLizSdrPvyhEHP4tR/n1/tzpxDEq2PBfCOVsPt2GCfkRHD1fSSPN0XxgUjGr8YYDpHJOXs/jtvU8Wx+TuQLfTK7eKWyfC6dy2MzeehYwTtFKn6xZ7F/Zy4rxHncbFLzfGIhn59p+KeshKPfS7nYUM59AZW8uVzFj6la9rXVclp1PTc4Gnl6QMenoS38aW1lqaKNC67aubuugy2/XXw72sOe0l5O2upnbfYAT9wN8aFuhN9cx1linODcaCO3703xYv4MXz7NsUi/wHGeJq6YNfOwfIl3j1bYrrFwoN3Kyo4NVcYf9wydP1ACAAA="},"shape":[74],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212408","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212409"}}},"glyph":{"type":"object","name":"VArea","id":"p212404","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p212405","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p212406","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.06664000362157815},"y2":{"type":"value","value":2.284800009727478},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p212416","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p212410","attributes":{"selected":{"type":"object","name":"Selection","id":"p212411","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p212412"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3T+TsXBgDA4W8ymUlWMqEmmswkj5BM5ZoryVyTVJKQCZOElCNzNCHJXMnRJHPN0JIJmWQyi0ySTCaZZCWTpD37/PT+Ba9AIPDfaGhmJBAIctqMsX23Kc5OmqNK9DZ0/MAao4ttsHKzHQ52OqCEuxPq/+uM3qd2Y/pKV2ypcMMp4wOo+Icn2nh744k3PliS7Id9SgEoeiUQdSyPovuDEEzxD8OGheE4kRaJ8qrRaPlzDAbbxGPho2+wOygRhcTOoMb5s7hHIw0TbqRjrWMWjj45j9LHc9FEsgADCr7DXJ0i7LhVjHMupag6WY5OJysxRroaqy5fwSH9WpTsrMMt+6+jz3QjZsY3Y6v8TZwuv4VrjNvRtqcDIw7+jmVzXdif1INiSvdQt+Y+elgMYGr/IDb5PcJJoRFclTaKVh//jaF1T7FoxyT2DD1H4aCXqPnuDLpmz2Li+jdY1/QWxxyEzP9X5okwmoYtwsAlYpifL46d2ktwvvV9VHORQudn0hgXtQJrlsvjcNEqXKq/Gg1+U0JfN2XMfqmCbXGf4IycOiqXa6C90QaMuquNFV66OPBaD8WTNqOeogF6VRthmvln2HzfDJ/7WqKC0Ha0PrcDw1RssfiaPfZaf4EiQztR64gLuonuxeSsfViv7o7jjR4o63AQzUe/xKBjvnhR4iu8k3cYBdpBqN4ajC67juGpieP4U2QEjkidRKmir9Ho0zj07ziFOftOY/tUEs7GpqCK3Dl0LPsWow0zsbI7Gwc9L6DE6zzUT7yI3qsvYXrVZWwxK8GpvjJU9P0BbRZU4YnUGixZexX7aq+hqHU96vzZgO6BNzBlUQs2ZLbixLpfUb7xNlrad2Lw4ztYGHoXuxf3olBeH2poPcA9Nx9igvMQ1j4dxtGIxygtNYYml8YxQO8Z5t7+Bztcp3DuxTSqxr5CJ9k5jCmdxyqDBRb871qIkp4iuGVWFH1Ov4eZChLY+qMkTpsuwzV9y9H2kAxGCOSw7OxK7FdWQLFaRdTd/hF6DK7F1MOq2CSyDicz1uOqdZpo1aCFoXYbsWhkE/aE6KPw4q2omWuIrhtMMLHFFOt2WuDY+DaUibBG02WfY2ChHeZvcsTOdiec37sL1V7sRucYV4xbsR9rSg7g8FYvXNrljQYeh9D3lR9mJwRg24dHcKbyKCqbhqL9vTCM8gnHireROJASjeLKsah3NR69rBIw7WEiNgecwefvpKJCRhpaq2Vg2PUsLLbNwd6/clEkpAC1xAvR7UIRJmt+j/W/lOK4UwXKjleieXi1hdF/MSn1lKgHAAA="},"shape":[245],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE0w8WF/y1ZyBdH1E0I5DUjPmOZv4ffPYptL5mdKCC/Qc+/32Dz56EtLRPNPP3cKCZtN8Px/ABxvs3uvnr////8db379PCvgc/6y7ZU1EdRfQ/oEcbph4G2bNAJuqIPZB7/9x3MB+YD4/YA+Xrp+cdsgeWBw9U2A7a//n/f/+Jsn0g8fiJb/eA1CU8Xrrb/u////PdH+6y/w00YLXMLhDf3tgYYQ7EvgMg8XrHhKMge+oPfT0BMue+f+9xsL1LZx9B1rdASv+qPVI4HJBrPY2iHuROJPeCzYe5B0QLROwEyc8/5r0dZO5/rfZtcD5MHuYPIG3f6QjRz6d7CCzef+goVN1JEP9/KN9ZEL/hdeAFaHhcBJm339v8IpyPJJ+QYn0ebK/OprMgdfG7PM+AaGD4nALrm/v+ONRdx5DDGxwfMBopPBKeXjgEp2HySP4Hxx9yPILCE0ajxy9SvMPNhfp7f1HGQbA7ry0+AA9X9HgH8b9q4I5/kDklk3dghP9vcLhuJZlGjz+g/fI3zyFomH0wGha/6DRMHqYPn/v2lGwGicfz6W4C8YHhstEeAI3SDiGoBwAA"},"shape":[245],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p212417","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p212418"}}},"glyph":{"type":"object","name":"Line","id":"p212413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p212414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p212415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p212341","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p212368"},{"type":"object","name":"WheelZoomTool","id":"p212369","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p212370","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p212371","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p212377","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p212376","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p212378","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p212379","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p212380","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p212381","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p212387","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p212386","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p212388"},{"type":"object","name":"SaveTool","id":"p212389"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p212363","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p212364","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p212365"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p212366"}}}],"right":[{"type":"object","name":"Legend","id":"p212399","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p212400","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p212396"},{"id":"p212407"}]}},{"type":"object","name":"LegendItem","id":"p212419","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p212416"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p212344","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p212345","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p212346","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p212347","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p212348","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p212349","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p212350","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p212351","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p212352","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p212353","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p212354","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p212355","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p212356","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p212357"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p212360","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p212359","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p212358","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p212361"}}}],"center":[{"type":"object","name":"Grid","id":"p212362","attributes":{"axis":{"id":"p212344"}}},{"type":"object","name":"Grid","id":"p212367","attributes":{"dimension":1,"axis":{"id":"p212363"}}}]}},{"type":"object","name":"Div","id":"p212420","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p212422","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p212421","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"1878db48-2447-40a7-8170-f4aa2a78102a","roots":{"p212423":"aa1e470a-a7d9-4393-bee5-27d88cfdb7b3"},"root_ids":["p212423"]}];
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