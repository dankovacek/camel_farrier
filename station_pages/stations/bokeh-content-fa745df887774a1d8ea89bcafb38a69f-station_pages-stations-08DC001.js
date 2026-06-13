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
    
    
    const element = document.getElementById("ee307186-c616-483a-aaf5-3ef139b60c75");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee307186-c616-483a-aaf5-3ef139b60c75' but no matching script tag was found.")
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
                  const docs_json = '{"57131799-3ea8-41b1-98e3-7a1ca61bac4e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p133294","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p133295"}}},"roots":[{"type":"object","name":"Column","id":"p133432","attributes":{"children":[{"type":"object","name":"Figure","id":"p133296","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p133297"},"y_range":{"type":"object","name":"DataRange1d","id":"p133298"},"x_scale":{"type":"object","name":"LinearScale","id":"p133306"},"y_scale":{"type":"object","name":"LinearScale","id":"p133307"},"title":{"type":"object","name":"Title","id":"p133299","attributes":{"text":"08DC001 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p133360","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133354","attributes":{"selected":{"type":"object","name":"Selection","id":"p133355","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133356"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaAjQjC06xMBw4NW1GBDN0NoCph3kjYA0AMi4M70gAAAA"},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133361","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133362"}}},"glyph":{"type":"object","name":"VArea","id":"p133357","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133358","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133359","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133371","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133365","attributes":{"selected":{"type":"object","name":"Selection","id":"p133366","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133367"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPgqW1h0iIHBof90QdEhAA8qrIMQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133372","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133373"}}},"glyph":{"type":"object","name":"VArea","id":"p133368","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133369","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133370","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133381","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133375","attributes":{"selected":{"type":"object","name":"Selection","id":"p133376","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133377"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHhQol90CABIltnyCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133382","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133383"}}},"glyph":{"type":"object","name":"VArea","id":"p133378","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133379","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133380","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133390","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133384","attributes":{"selected":{"type":"object","name":"Selection","id":"p133385","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133386"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYNC7ylF0CAD37ilsCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133391","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133392"}}},"glyph":{"type":"object","name":"VArea","id":"p133387","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133388","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133389","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133399","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133393","attributes":{"selected":{"type":"object","name":"Selection","id":"p133394","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133395"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaEgy4Cg6BABt/jsOCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133400","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133401"}}},"glyph":{"type":"object","name":"VArea","id":"p133396","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133397","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133398","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133408","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133402","attributes":{"selected":{"type":"object","name":"Selection","id":"p133403","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133404"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYJjezV50CAA+u3BRCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133409","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133410"}}},"glyph":{"type":"object","name":"VArea","id":"p133405","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133406","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133407","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133417","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133411","attributes":{"selected":{"type":"object","name":"Selection","id":"p133412","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133413"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaDj9jK3oEADFyK16CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133418","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133419"}}},"glyph":{"type":"object","name":"VArea","id":"p133414","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p133415","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p133416","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p133426","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p133420","attributes":{"selected":{"type":"object","name":"Selection","id":"p133421","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p133422"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[457],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9VXPU9UURB9aGFhTNSgZmPE9TPGGPxYVERxn1rQ2NhbbLU19TbS0JnQ2GxHQmNF4w9wY70/YmloaCUhMXE9c+49vLmXXTYYQnSbw9z5OjPvvnlDUdhv7xPh/8Cy8e1ZCbK9/uc3huvd7lx5qiha7e35Axjqkt1rs4f/04CNl4atdrsMcWpvg397Mdo1w3mXfvgxTq///pVHnYMH7aSnLF44X+/WFrwePGL8cC696gMmfHr9/nPzr/SBP2WXp2yEc/GQfVGsNMwf9T4yBL/7Gc4FfiFPlU95gMyj/rj8iCd79VN9Vl7xUp9kl9tDvhd53Y5YN1zZ+XAtyrUMqUdcnud5cS694qnuB2Y/6Hy56f1H5MnzUxZP5YN8N+QPfeG9dHYurvInvPVcUME783P3iHHQgScxHvOIt4ub9MvVzb64OmdM7s2sXjKsr+5cDPrpy4aKN+gEWXpndz7aC+mX63MZ+c6YXY7IE+JsLJ9N4kRZz1X9hTxrdpAfR2Q/xvHej5/lEQ/wPG3+g43lqYgJD1c/7eTn7OU3HqdwP5e2fjePG63u6c1fzRPAcquzZ3n+NWyt/dg1XieNeR8m5Zf9JLvj0qMlP60vf4tHrW8cb8bBvcf7WZQgk7w3+fsAve5znv+o8jg+Ole8Q9+fnJ+rw80NzgvUdYEY56ZQ82sSIt656J/MQ8RV/ICaY9k805zTvMJ8vGrx6h/Xbhjm34P65tJ1r5esOSr/HHM9vvtXYvxaif70dr/eMlnfR/wZv1vb3Dvc3Ob85ndtOBx+7/cfmpzMd3fu/BgHftxnsFdwH8T+pO9kvufM+vjYEyOPFPV9zfcr1Mc9UfsL7F6YjO8z9zHuPdyLtH+2571e/GQvWfwRgnzxY59Uh/aHg+ehTvHU3lXxCnzFO8lLnik/+oXzRb/f0d/ZizdR9YJclSfkxRH3YOQpox335Wr/Tfupc9S7MMo+OQ95GQ/1N1N7+OM8f15Vn8Lz0j2CKfvtUPcm3st9Pc/BU/838L65e6L7Rz1+h8bJn3v1vNP7qzhC3Qc9b7fnxjrC+6B7jDpH7vnKLz2Q+5PmQz4HJLv5cSfac4/l+/QHuvvO+0gOAAA="},"shape":[457],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p133427","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p133428"}}},"glyph":{"type":"object","name":"Line","id":"p133423","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p133424","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p133425","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p133305","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p133332"},{"type":"object","name":"WheelZoomTool","id":"p133333","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p133334","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p133335","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p133341","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p133340","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p133342","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p133343","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p133344","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p133345","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p133351","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p133350","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p133352"},{"type":"object","name":"SaveTool","id":"p133353"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p133327","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p133328","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p133329"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p133330"}}}],"right":[{"type":"object","name":"Legend","id":"p133363","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p133364","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p133360"}]}},{"type":"object","name":"LegendItem","id":"p133374","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p133371"},{"id":"p133381"},{"id":"p133390"},{"id":"p133399"},{"id":"p133408"},{"id":"p133417"}]}},{"type":"object","name":"LegendItem","id":"p133429","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p133426"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p133308","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p133309","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p133310","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p133311","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p133312","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p133313","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p133314","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p133315","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p133316","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p133317","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p133318","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p133319","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p133320","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p133321"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p133324","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p133323","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p133322","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p133325"}}}],"center":[{"type":"object","name":"Grid","id":"p133326","attributes":{"axis":{"id":"p133308"}}},{"type":"object","name":"Grid","id":"p133331","attributes":{"dimension":1,"axis":{"id":"p133327"}}}]}},{"type":"object","name":"Div","id":"p133430","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"57131799-3ea8-41b1-98e3-7a1ca61bac4e","roots":{"p133432":"ee307186-c616-483a-aaf5-3ef139b60c75"},"root_ids":["p133432"]}];
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