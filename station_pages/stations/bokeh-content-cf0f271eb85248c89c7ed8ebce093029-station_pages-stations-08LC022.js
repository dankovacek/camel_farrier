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
    
    
    const element = document.getElementById("acda9708-32b9-48ba-b196-d60db7eadc2a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'acda9708-32b9-48ba-b196-d60db7eadc2a' but no matching script tag was found.")
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
                  const docs_json = '{"3ee34da4-1e67-465c-9a39-ed3faa912567":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p400101","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p400102"}}},"roots":[{"type":"object","name":"Column","id":"p400229","attributes":{"children":[{"type":"object","name":"Figure","id":"p400103","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p400104"},"y_range":{"type":"object","name":"DataRange1d","id":"p400105"},"x_scale":{"type":"object","name":"LinearScale","id":"p400113"},"y_scale":{"type":"object","name":"LinearScale","id":"p400114"},"title":{"type":"object","name":"Title","id":"p400106","attributes":{"text":"08LC022 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p400167","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400161","attributes":{"selected":{"type":"object","name":"Selection","id":"p400162","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400163"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEixXJBziIGhYcaU+SCa4ez7eTmHAOcyMcUYAAAA"},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400168","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400169"}}},"glyph":{"type":"object","name":"VArea","id":"p400164","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p400165","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p400166","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400178","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400172","attributes":{"selected":{"type":"object","name":"Selection","id":"p400173","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400174"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaIhmtc85xMDAMCHBDkQ3HNltC+b/FAPTDbpFNmB+0llrMH+aBphmON1sBeb/v2cJ5ptYgemGjKkWYP7cD+Zg/kVvMM3AttwMzLdiAtMM+bGmYP7iHSY5hwDuG6JgiAAAAA=="},"shape":[17],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400179","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400180"}}},"glyph":{"type":"object","name":"VArea","id":"p400175","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p400176","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p400177","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400187","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400181","attributes":{"selected":{"type":"object","name":"Selection","id":"p400182","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400183"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaMhzksk5BAAIT5PFCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400188","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400189"}}},"glyph":{"type":"object","name":"VArea","id":"p400184","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p400185","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p400186","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400196","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400190","attributes":{"selected":{"type":"object","name":"Selection","id":"p400191","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400192"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYOAJkco5BAAMCy5JCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400197","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400198"}}},"glyph":{"type":"object","name":"VArea","id":"p400193","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p400194","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p400195","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400205","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400199","attributes":{"selected":{"type":"object","name":"Selection","id":"p400200","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400201"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaOhI4s85xMDAsHcvH4hu+CgBphnUSnjB/KjzPGB+vxaYbjjcyg3m/3jAlXMIAAdFkXVAAAAA"},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400206","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400207"}}},"glyph":{"type":"object","name":"VArea","id":"p400202","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p400203","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p400204","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400214","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400208","attributes":{"selected":{"type":"object","name":"Selection","id":"p400209","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400210"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEiczplziIGhYeonDhDNcMoXTDf8W8EO5huzgOmG9Hg2MH/OLlYw/4IokAYAWRaxrkAAAAA="},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400215","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400216"}}},"glyph":{"type":"object","name":"VArea","id":"p400211","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p400212","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p400213","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400223","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p400217","attributes":{"selected":{"type":"object","name":"Selection","id":"p400218","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400219"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[426],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy0ox8E7vhmD6QbbLm+I9MJaWlYxeG0yLrP2OgDZ858wRBnZGBY4LrtPU59MHl0Gpc8FnMS+g99xMo/9PUDTvNx0f///5e//fMdThpJvYNp3Ds4DZMHhcNXjQ8Y5uHiY/Pf68APJMsDzf1/bfEHguphfFzuIOQ+QuFFrD6QO6Y6g+mEpxfeIdMN0/PANK3T/yg9So/SozQZ9Bdo/fIDWt7/gdOg8s394T9k2sHYmNEBRkPqUWY0mhWZTtghx45ML5g5k5MY+kGVCA822oHrurADpNwXd4C4WwqFD6NtueRR5KE00B/KUHs00GhdB0h4aMPFIf5Ug9MQeVWwfMFeJRTzQDSSOpi5QGAAdrexsSGUb+oAbl/4mCHzgS40QlYPcw+KOyDtGXUc7kazB2IejI9kHkI9xFxtZH+j+B+dxhIeSOK6OGmIu7HS6O7CSkPM0YHT6O4F1tf7z5zRRAt3uuajBTMlFWlpL7A9KOgwWl4NGXpBge03mrX7APy9gA1QDQAA"},"shape":[426],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p400224","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400225"}}},"glyph":{"type":"object","name":"Line","id":"p400220","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p400221","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p400222","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p400112","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p400139"},{"type":"object","name":"WheelZoomTool","id":"p400140","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p400141","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p400142","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p400148","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p400147","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p400149","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p400150","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p400151","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p400152","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p400158","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p400157","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p400159"},{"type":"object","name":"SaveTool","id":"p400160"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p400134","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p400135","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p400136"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p400137"}}}],"right":[{"type":"object","name":"Legend","id":"p400170","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p400171","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p400167"},{"id":"p400178"},{"id":"p400187"},{"id":"p400196"},{"id":"p400205"},{"id":"p400214"}]}},{"type":"object","name":"LegendItem","id":"p400226","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p400223"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p400115","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p400116","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p400117","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p400118","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p400119","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p400120","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p400121","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p400122","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p400123","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p400124","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p400125","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p400126","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p400127","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p400128"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p400131","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p400130","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p400129","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p400132"}}}],"center":[{"type":"object","name":"Grid","id":"p400133","attributes":{"axis":{"id":"p400115"}}},{"type":"object","name":"Grid","id":"p400138","attributes":{"dimension":1,"axis":{"id":"p400134"}}}]}},{"type":"object","name":"Div","id":"p400227","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"3ee34da4-1e67-465c-9a39-ed3faa912567","roots":{"p400229":"acda9708-32b9-48ba-b196-d60db7eadc2a"},"root_ids":["p400229"]}];
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