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
    
    
    const element = document.getElementById("a089764d-0996-4af3-81bb-74d3c0811371");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a089764d-0996-4af3-81bb-74d3c0811371' but no matching script tag was found.")
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
                  const docs_json = '{"51e90d34-8a8b-4ae6-8937-1b1aaad9104d":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p278181","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p278182"}}},"roots":[{"type":"object","name":"Column","id":"p278309","attributes":{"children":[{"type":"object","name":"Figure","id":"p278183","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p278184"},"y_range":{"type":"object","name":"DataRange1d","id":"p278185"},"x_scale":{"type":"object","name":"LinearScale","id":"p278193"},"y_scale":{"type":"object","name":"LinearScale","id":"p278194"},"title":{"type":"object","name":"Title","id":"p278186","attributes":{"text":"08LC022 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p278247","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278241","attributes":{"selected":{"type":"object","name":"Selection","id":"p278242","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278243"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEixXJBziIGhYcaU+SCa4ez7eTmHAOcyMcUYAAAA"},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278248","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278249"}}},"glyph":{"type":"object","name":"VArea","id":"p278244","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278245","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278246","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278258","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278252","attributes":{"selected":{"type":"object","name":"Selection","id":"p278253","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278254"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaIhmtc85xMDAMCHBDkQ3HNltC+b/FAPTDbpFNmB+0llrMH+aBphmON1sBeb/v2cJ5ptYgemGjKkWYP7cD+Zg/kVvMM3AttwMzLdiAtMM+bGmYP7iHSY5hwDuG6JgiAAAAA=="},"shape":[17],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278259","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278260"}}},"glyph":{"type":"object","name":"VArea","id":"p278255","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278256","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278257","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278267","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278261","attributes":{"selected":{"type":"object","name":"Selection","id":"p278262","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278263"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaMhzksk5BAAIT5PFCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278268","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278269"}}},"glyph":{"type":"object","name":"VArea","id":"p278264","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278265","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278266","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278276","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278270","attributes":{"selected":{"type":"object","name":"Selection","id":"p278271","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278272"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYOAJkco5BAAMCy5JCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278277","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278278"}}},"glyph":{"type":"object","name":"VArea","id":"p278273","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278274","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278275","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278285","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278279","attributes":{"selected":{"type":"object","name":"Selection","id":"p278280","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278281"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaOhI4s85xMDAsHcvH4hu+CgBphnUSnjB/KjzPGB+vxaYbjjcyg3m/3jAlXMIAAdFkXVAAAAA"},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278286","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278287"}}},"glyph":{"type":"object","name":"VArea","id":"p278282","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278283","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278284","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278294","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278288","attributes":{"selected":{"type":"object","name":"Selection","id":"p278289","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278290"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEiczplziIGhYeonDhDNcMoXTDf8W8EO5huzgOmG9Hg2MH/OLlYw/4IokAYAWRaxrkAAAAA="},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278295","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278296"}}},"glyph":{"type":"object","name":"VArea","id":"p278291","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278292","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278293","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278297","attributes":{"selected":{"type":"object","name":"Selection","id":"p278298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278299"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[426],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1XMUvDQBROERGLi1gQHSwq1ootVKVupQERF5f+AcnUUTq7tP/ASaRbwd1RuoglcwYnHVzq4FSoikYriPG9l7v0+tJQOsTF3PLle/fue9870rtU03D0qgThYLvU/CiCeK0Q/1TRKJeHxr28xOUb5TNsWda7Lx7TtMb+1bMvLtfLeY5B80PqGqfmq6rvcdN+KXLdUdxxnOTDV7cYhMp6PX/URX1CmQ/+Wna6X1fG5TrOuR/sr1MK9h00D7rO3YV/Hc+XPMhHUJz75P2Muw59nO3Re2E83XZVrJ0fE4cR6vsf6Uf7W43es+h3Nv45495zpt3DcwrO+28P8Vw8ePyhe0egvrMT0/GeQIR8uEcnGE4KTmg0l6ZUbNTr08hHYfskMYN5HPX4/Rzpd0rzhKa9OMBlvBBPDsyLPOhjFeNQP80wixzGphd3+0yJflNifo3mK9crhFIPUeZjXOjDYw7zYL+2EGHkEVvW4a7KoZNtwSkf1pMf0lF04Xtm3YsrefDI6rh6sq6iJ/vMCV3qF8YADtmfvg/ep8uzQs+PIA6+qS5H7msod/UzQj/j8wv39Y1lbWBc2fc/vW8b9YVl4SuUuvB9OhumPmxdKL7/q26jUqD/HaH0/wv8vYANUA0AAA=="},"shape":[426],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278305"}}},"glyph":{"type":"object","name":"Line","id":"p278300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p278302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p278192","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p278219"},{"type":"object","name":"WheelZoomTool","id":"p278220","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p278221","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p278222","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p278228","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278227","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p278229","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p278230","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p278231","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p278232","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p278238","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278237","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p278239"},{"type":"object","name":"SaveTool","id":"p278240"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p278214","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p278215","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p278216"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p278217"}}}],"right":[{"type":"object","name":"Legend","id":"p278250","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p278251","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p278247"},{"id":"p278258"},{"id":"p278267"},{"id":"p278276"},{"id":"p278285"},{"id":"p278294"}]}},{"type":"object","name":"LegendItem","id":"p278306","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p278303"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p278195","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p278196","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p278197","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p278198","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p278199","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p278200","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p278201","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p278202","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p278203","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p278204","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p278205","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p278206","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p278207","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p278208"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p278211","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p278210","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p278209","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p278212"}}}],"center":[{"type":"object","name":"Grid","id":"p278213","attributes":{"axis":{"id":"p278195"}}},{"type":"object","name":"Grid","id":"p278218","attributes":{"dimension":1,"axis":{"id":"p278214"}}}]}},{"type":"object","name":"Div","id":"p278307","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"51e90d34-8a8b-4ae6-8937-1b1aaad9104d","roots":{"p278309":"a089764d-0996-4af3-81bb-74d3c0811371"},"root_ids":["p278309"]}];
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