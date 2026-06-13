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
    
    
    const element = document.getElementById("a4a2bd5d-2fae-4623-9fc9-01e6ef2a146c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a4a2bd5d-2fae-4623-9fc9-01e6ef2a146c' but no matching script tag was found.")
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
                  const docs_json = '{"81305535-86ae-44b0-901a-5946e30f97a1":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p181241","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p181242"}}},"roots":[{"type":"object","name":"Column","id":"p181342","attributes":{"children":[{"type":"object","name":"Figure","id":"p181243","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p181244"},"y_range":{"type":"object","name":"DataRange1d","id":"p181245"},"x_scale":{"type":"object","name":"LinearScale","id":"p181253"},"y_scale":{"type":"object","name":"LinearScale","id":"p181254"},"title":{"type":"object","name":"Title","id":"p181246","attributes":{"text":"08GA050 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p181307","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p181301","attributes":{"selected":{"type":"object","name":"Selection","id":"p181302","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p181303"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYLgWYelwCABbQIfDCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p181308","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181309"}}},"glyph":{"type":"object","name":"VArea","id":"p181304","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p181305","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p181306","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p181318","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p181312","attributes":{"selected":{"type":"object","name":"Selection","id":"p181313","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p181314"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPDZvMT+EAMDw4ee+faHABP80bIQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p181319","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181320"}}},"glyph":{"type":"object","name":"VArea","id":"p181315","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p181316","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p181317","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p181327","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p181321","attributes":{"selected":{"type":"object","name":"Selection","id":"p181322","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p181323"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FeSzVAQDA8d/0dOhVmHJUKjk6rJChC0lmjiYdZEiGTG/Vi0UlVLTCDKmQa8JERbLQhPQyOZprQpIJGWovHawpzffzz0cQhPi2TfvqBUHw3qvPRkUbWUF9A3dd1+YC+WoO89Jkh6ZVvMZcjb89UOE65RWcfEXMfuNL2MxtES+WibjPSIEfZc5Zzx+h9JddQv+wzvA0/3T5xQ0vpzh1i5yD7n3lPaIJXi4d48GPI1zm8JmjKwb5mO4Ab0r6wH/+9nBLUDdnve/kc7btbPP0Hatpt/Bo7FuunG7gWD8Ze7a/4m2WtSwUV3OH+gvOi67gC9/L2d67jLWaS3jS/DHX5BVxokoh+0bks+lELi90z+EeWSYXGd/n8KxUPrj0Lq8Pu81Tw4ksO5TAd2viOHDrLd6VeoPFitE8IL3KpQMRfM0xnI9UXmR9vVCeSQrhpn9Szjh9ls/0SNj6QBCrlp3iYW1/fh7nyzdnTrCHvxcbdnjwP0t3bis+yrkahzkkxoXtppxZ44Qjjzfbc7WFHSfk72cf1X1sEmnJosnd3O2+kwvfmPElE1N2yjZmbfF2locZcv3IZk5xNeCAWl22MNRhpbR13K+4lp+c1+KoT+rs6rSSdatU+beeMjcmL+P0OSWWSBazZa8iK9st4KEygQOtZq3mF2tOc+nUdz7SMskz+V84I3KIrY9/5GGTHr4p7mTD0VZuq23kkLTXrBFcw9VOVeyjX84ioYQLex+y07M8lsdnc0pAOltY3+F+zUSO+hHLuq0x3FgQxZKoy6zscYHLd0jZfZmEZ0cDOKfuJNume/JYsBvHO7uykYEzdwn2HNZnY1X/H3VEbw/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvSf///3nyjbZw+jgYYmCETstP/7//9/rfZt9v/+/5ePsNxiD+QC1V0D03PfHwfR9QdOHYTTQHX2nY4H7GH6QfTjpbtB/AOf/4L1/1/5cROchokD7ZW/eW47XB3MXmT11xZvsP8CFFgtswpO/wLab8u13P4rUD9b41J7GB9onv3DqiUg/4DpH2B7F8Hpz0D3F2UsBMmD7YXpg6n7BNTHsWaO/ff//+fPnDnT/sX///f9e6fbvwObNwWDfgo2byJcHMaH0VfB5vXYPwC6Q6u9DScNdMd936QGkHtQ6G1A80smV9hjpzOg4rhohD7izMVlDkIcFn6w8ID5E+Y/VHcSNg+iHlMdOHkDAcxcWDwB6f1l++ZjxAN2/2Gai24fTB8hd2NLx6B0CdMHCw9g+p0vpb/WHhZOMHfD0ilMnFC6wO4uWHwS9hcs/GA0zN/Yw4l4c9HDj1w+AGR/fm/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p181328","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181329"}}},"glyph":{"type":"object","name":"Line","id":"p181324","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p181325","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p181326","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p181337","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p181331","attributes":{"selected":{"type":"object","name":"Selection","id":"p181332","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p181333"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FeSzVAQDA8d/0dOhVmHJUKjk6rJChC0lmjiYdZEiGTG/Vi0UlVLTCDKmQa8JERbLQhPQyOZprQpIJGWovHawpzffzz0cQhPi2TfvqBUHw3qvPRkUbWUF9A3dd1+YC+WoO89Jkh6ZVvMZcjb89UOE65RWcfEXMfuNL2MxtES+WibjPSIEfZc5Zzx+h9JddQv+wzvA0/3T5xQ0vpzh1i5yD7n3lPaIJXi4d48GPI1zm8JmjKwb5mO4Ab0r6wH/+9nBLUDdnve/kc7btbPP0Hatpt/Bo7FuunG7gWD8Ze7a/4m2WtSwUV3OH+gvOi67gC9/L2d67jLWaS3jS/DHX5BVxokoh+0bks+lELi90z+EeWSYXGd/n8KxUPrj0Lq8Pu81Tw4ksO5TAd2viOHDrLd6VeoPFitE8IL3KpQMRfM0xnI9UXmR9vVCeSQrhpn9Szjh9ls/0SNj6QBCrlp3iYW1/fh7nyzdnTrCHvxcbdnjwP0t3bis+yrkahzkkxoXtppxZ44Qjjzfbc7WFHSfk72cf1X1sEmnJosnd3O2+kwvfmPElE1N2yjZmbfF2locZcv3IZk5xNeCAWl22MNRhpbR13K+4lp+c1+KoT+rs6rSSdatU+beeMjcmL+P0OSWWSBazZa8iK9st4KEygQOtZq3mF2tOc+nUdz7SMskz+V84I3KIrY9/5GGTHr4p7mTD0VZuq23kkLTXrBFcw9VOVeyjX84ioYQLex+y07M8lsdnc0pAOltY3+F+zUSO+hHLuq0x3FgQxZKoy6zscYHLd0jZfZmEZ0cDOKfuJNume/JYsBvHO7uykYEzdwn2HNZnY1X/H3VEbw/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvSf///3nyjbZw+jgYYmCETstP/7//9/rfZt9v/+/5ePsNxiD+QC1V0D03PfHwfR9QdOHYTTQHX2nY4H7GH6QfTjpbtB/AOf/4L1/1/5cROchokD7ZW/eW47XB3MXmT11xZvsP8CFFgtswpO/wLab8u13P4rUD9b41J7GB9onv3DqiUg/4DpH2B7F8Hpz0D3F2UsBMmD7YXpg6n7BNTHsWaO/ff//+fPnDnT/sX///f9e6fbvwObNwWDfgo2byJcHMaH0VfB5vXYPwC6Q6u9DScNdMd936QGkHtQ6G1A80smV9hjpzOg4rhohD7izMVlDkIcFn6w8ID5E+Y/VHcSNg+iHlMdOHkDAcxcWDwB6f1l++ZjxAN2/2Gai24fTB8hd2NLx6B0CdMHCw9g+p0vpb/WHhZOMHfD0ilMnFC6wO4uWHwS9hcs/GA0zN/Yw4l4c9HDj1w+AGR/fm/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p181338","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181339"}}},"glyph":{"type":"object","name":"Line","id":"p181334","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p181335","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p181336","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p181252","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p181279"},{"type":"object","name":"WheelZoomTool","id":"p181280","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p181281","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p181282","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p181288","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p181287","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p181289","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p181290","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p181291","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p181292","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p181298","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p181297","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p181299"},{"type":"object","name":"SaveTool","id":"p181300"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p181274","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p181275","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p181276"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p181277"}}}],"right":[{"type":"object","name":"Legend","id":"p181310","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p181311","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p181307"},{"id":"p181318"}]}},{"type":"object","name":"LegendItem","id":"p181330","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p181327"},{"id":"p181337"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p181255","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p181256","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p181257","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p181258","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p181259","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p181260","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p181261","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p181262","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p181263","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p181264","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p181265","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p181266","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p181267","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p181268"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p181271","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p181270","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p181269","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p181272"}}}],"center":[{"type":"object","name":"Grid","id":"p181273","attributes":{"axis":{"id":"p181255"}}},{"type":"object","name":"Grid","id":"p181278","attributes":{"dimension":1,"axis":{"id":"p181274"}}}]}},{"type":"object","name":"Div","id":"p181340","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"81305535-86ae-44b0-901a-5946e30f97a1","roots":{"p181342":"a4a2bd5d-2fae-4623-9fc9-01e6ef2a146c"},"root_ids":["p181342"]}];
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