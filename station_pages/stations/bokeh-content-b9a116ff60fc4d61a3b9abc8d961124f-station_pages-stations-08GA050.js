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
    
    
    const element = document.getElementById("c0c6e2db-01ce-4dd2-a445-fa74c16b1f78");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0c6e2db-01ce-4dd2-a445-fa74c16b1f78' but no matching script tag was found.")
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
                  const docs_json = '{"c6675a2c-b61e-4275-be4c-57fd1cbb1b0c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p375173","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p375174"}}},"roots":[{"type":"object","name":"Column","id":"p375274","attributes":{"children":[{"type":"object","name":"Figure","id":"p375175","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p375176"},"y_range":{"type":"object","name":"DataRange1d","id":"p375177"},"x_scale":{"type":"object","name":"LinearScale","id":"p375185"},"y_scale":{"type":"object","name":"LinearScale","id":"p375186"},"title":{"type":"object","name":"Title","id":"p375178","attributes":{"text":"08GA050 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p375239","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375233","attributes":{"selected":{"type":"object","name":"Selection","id":"p375234","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375235"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYLgWYelwCABbQIfDCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375240","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375241"}}},"glyph":{"type":"object","name":"VArea","id":"p375236","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p375237","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p375238","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p375250","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375244","attributes":{"selected":{"type":"object","name":"Selection","id":"p375245","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375246"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPDZvMT+EAMDw4ee+faHABP80bIQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375251","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375252"}}},"glyph":{"type":"object","name":"VArea","id":"p375247","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p375248","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p375249","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p375259","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375253","attributes":{"selected":{"type":"object","name":"Selection","id":"p375254","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375255"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FeSzVAQDA8d/0dOhVmHJUKjk6rJChC0lmjiYdZEiGTG/Vi0UlVLTCDKmQa8JERbLQhPQyOZprQpIJGWovHawpzffzz0cQhPi2TfvqBUHw3qvPRkUbWUF9A3dd1+YC+WoO89Jkh6ZVvMZcjb89UOE65RWcfEXMfuNL2MxtES+WibjPSIEfZc5Zzx+h9JddQv+wzvA0/3T5xQ0vpzh1i5yD7n3lPaIJXi4d48GPI1zm8JmjKwb5mO4Ab0r6wH/+9nBLUDdnve/kc7btbPP0Hatpt/Bo7FuunG7gWD8Ze7a/4m2WtSwUV3OH+gvOi67gC9/L2d67jLWaS3jS/DHX5BVxokoh+0bks+lELi90z+EeWSYXGd/n8KxUPrj0Lq8Pu81Tw4ksO5TAd2viOHDrLd6VeoPFitE8IL3KpQMRfM0xnI9UXmR9vVCeSQrhpn9Szjh9ls/0SNj6QBCrlp3iYW1/fh7nyzdnTrCHvxcbdnjwP0t3bis+yrkahzkkxoXtppxZ44Qjjzfbc7WFHSfk72cf1X1sEmnJosnd3O2+kwvfmPElE1N2yjZmbfF2locZcv3IZk5xNeCAWl22MNRhpbR13K+4lp+c1+KoT+rs6rSSdatU+beeMjcmL+P0OSWWSBazZa8iK9st4KEygQOtZq3mF2tOc+nUdz7SMskz+V84I3KIrY9/5GGTHr4p7mTD0VZuq23kkLTXrBFcw9VOVeyjX84ioYQLex+y07M8lsdnc0pAOltY3+F+zUSO+hHLuq0x3FgQxZKoy6zscYHLd0jZfZmEZ0cDOKfuJNume/JYsBvHO7uykYEzdwn2HNZnY1X/H3VEbw/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvSf///3nyjbZw+jgYYmCETstP/7//9/rfZt9v/+/5ePsNxiD+QC1V0D03PfHwfR9QdOHYTTQHX2nY4H7GH6QfTjpbtB/AOf/4L1/1/5cROchokD7ZW/eW47XB3MXmT11xZvsP8CFFgtswpO/wLab8u13P4rUD9b41J7GB9onv3DqiUg/4DpH2B7F8Hpz0D3F2UsBMmD7YXpg6n7BNTHsWaO/ff//+fPnDnT/sX///f9e6fbvwObNwWDfgo2byJcHMaH0VfB5vXYPwC6Q6u9DScNdMd936QGkHtQ6G1A80smV9hjpzOg4rhohD7izMVlDkIcFn6w8ID5E+Y/VHcSNg+iHlMdOHkDAcxcWDwB6f1l++ZjxAN2/2Gai24fTB8hd2NLx6B0CdMHCw9g+p0vpb/WHhZOMHfD0ilMnFC6wO4uWHwS9hcs/GA0zN/Yw4l4c9HDj1w+AGR/fm/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375260","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375261"}}},"glyph":{"type":"object","name":"Line","id":"p375256","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375257","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p375258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p375269","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p375263","attributes":{"selected":{"type":"object","name":"Selection","id":"p375264","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p375265"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FeSzVAQDA8d/0dOhVmHJUKjk6rJChC0lmjiYdZEiGTG/Vi0UlVLTCDKmQa8JERbLQhPQyOZprQpIJGWovHawpzffzz0cQhPi2TfvqBUHw3qvPRkUbWUF9A3dd1+YC+WoO89Jkh6ZVvMZcjb89UOE65RWcfEXMfuNL2MxtES+WibjPSIEfZc5Zzx+h9JddQv+wzvA0/3T5xQ0vpzh1i5yD7n3lPaIJXi4d48GPI1zm8JmjKwb5mO4Ab0r6wH/+9nBLUDdnve/kc7btbPP0Hatpt/Bo7FuunG7gWD8Ze7a/4m2WtSwUV3OH+gvOi67gC9/L2d67jLWaS3jS/DHX5BVxokoh+0bks+lELi90z+EeWSYXGd/n8KxUPrj0Lq8Pu81Tw4ksO5TAd2viOHDrLd6VeoPFitE8IL3KpQMRfM0xnI9UXmR9vVCeSQrhpn9Szjh9ls/0SNj6QBCrlp3iYW1/fh7nyzdnTrCHvxcbdnjwP0t3bis+yrkahzkkxoXtppxZ44Qjjzfbc7WFHSfk72cf1X1sEmnJosnd3O2+kwvfmPElE1N2yjZmbfF2locZcv3IZk5xNeCAWl22MNRhpbR13K+4lp+c1+KoT+rs6rSSdatU+beeMjcmL+P0OSWWSBazZa8iK9st4KEygQOtZq3mF2tOc+nUdz7SMskz+V84I3KIrY9/5GGTHr4p7mTD0VZuq23kkLTXrBFcw9VOVeyjX84ioYQLex+y07M8lsdnc0pAOltY3+F+zUSO+hHLuq0x3FgQxZKoy6zscYHLd0jZfZmEZ0cDOKfuJNume/JYsBvHO7uykYEzdwn2HNZnY1X/H3VEbw/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvSf///3nyjbZw+jgYYmCETstP/7//9/rfZt9v/+/5ePsNxiD+QC1V0D03PfHwfR9QdOHYTTQHX2nY4H7GH6QfTjpbtB/AOf/4L1/1/5cROchokD7ZW/eW47XB3MXmT11xZvsP8CFFgtswpO/wLab8u13P4rUD9b41J7GB9onv3DqiUg/4DpH2B7F8Hpz0D3F2UsBMmD7YXpg6n7BNTHsWaO/ff//+fPnDnT/sX///f9e6fbvwObNwWDfgo2byJcHMaH0VfB5vXYPwC6Q6u9DScNdMd936QGkHtQ6G1A80smV9hjpzOg4rhohD7izMVlDkIcFn6w8ID5E+Y/VHcSNg+iHlMdOHkDAcxcWDwB6f1l++ZjxAN2/2Gai24fTB8hd2NLx6B0CdMHCw9g+p0vpb/WHhZOMHfD0ilMnFC6wO4uWHwS9hcs/GA0zN/Yw4l4c9HDj1w+AGR/fm/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p375270","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p375271"}}},"glyph":{"type":"object","name":"Line","id":"p375266","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p375267","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p375268","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p375184","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p375211"},{"type":"object","name":"WheelZoomTool","id":"p375212","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p375213","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p375214","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p375220","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p375219","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p375221","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p375222","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p375223","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p375224","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p375230","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p375229","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p375231"},{"type":"object","name":"SaveTool","id":"p375232"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p375206","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p375207","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p375208"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p375209"}}}],"right":[{"type":"object","name":"Legend","id":"p375242","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p375243","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p375239"},{"id":"p375250"}]}},{"type":"object","name":"LegendItem","id":"p375262","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p375259"},{"id":"p375269"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p375187","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p375188","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p375189","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p375190","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p375191","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p375192","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p375193","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p375194","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p375195","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p375196","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p375197","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p375198","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p375199","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p375200"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p375203","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p375202","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p375201","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p375204"}}}],"center":[{"type":"object","name":"Grid","id":"p375205","attributes":{"axis":{"id":"p375187"}}},{"type":"object","name":"Grid","id":"p375210","attributes":{"dimension":1,"axis":{"id":"p375206"}}}]}},{"type":"object","name":"Div","id":"p375272","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"c6675a2c-b61e-4275-be4c-57fd1cbb1b0c","roots":{"p375274":"c0c6e2db-01ce-4dd2-a445-fa74c16b1f78"},"root_ids":["p375274"]}];
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