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
    
    
    const element = document.getElementById("b245d9ef-f155-4446-b112-b56a445e787f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b245d9ef-f155-4446-b112-b56a445e787f' but no matching script tag was found.")
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
                  const docs_json = '{"826ad9e6-c542-4214-8029-89146277da88":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p474471","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p474472"}}},"roots":[{"type":"object","name":"Column","id":"p474599","attributes":{"children":[{"type":"object","name":"Figure","id":"p474473","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p474474"},"y_range":{"type":"object","name":"DataRange1d","id":"p474475"},"x_scale":{"type":"object","name":"LinearScale","id":"p474483"},"y_scale":{"type":"object","name":"LinearScale","id":"p474484"},"title":{"type":"object","name":"Title","id":"p474476","attributes":{"text":"08LC022 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p474537","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474531","attributes":{"selected":{"type":"object","name":"Selection","id":"p474532","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474533"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEixXJBziIGhYcaU+SCa4ez7eTmHAOcyMcUYAAAA"},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474538","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474539"}}},"glyph":{"type":"object","name":"VArea","id":"p474534","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p474535","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p474536","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p474548","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474542","attributes":{"selected":{"type":"object","name":"Selection","id":"p474543","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474544"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaIhmtc85xMDAMCHBDkQ3HNltC+b/FAPTDbpFNmB+0llrMH+aBphmON1sBeb/v2cJ5ptYgemGjKkWYP7cD+Zg/kVvMM3AttwMzLdiAtMM+bGmYP7iHSY5hwDuG6JgiAAAAA=="},"shape":[17],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474549","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474550"}}},"glyph":{"type":"object","name":"VArea","id":"p474545","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p474546","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p474547","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p474557","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474551","attributes":{"selected":{"type":"object","name":"Selection","id":"p474552","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474553"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaMhzksk5BAAIT5PFCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474558","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474559"}}},"glyph":{"type":"object","name":"VArea","id":"p474554","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p474555","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p474556","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p474566","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474560","attributes":{"selected":{"type":"object","name":"Selection","id":"p474561","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474562"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYOAJkco5BAAMCy5JCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474567","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474568"}}},"glyph":{"type":"object","name":"VArea","id":"p474563","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p474564","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p474565","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p474575","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474569","attributes":{"selected":{"type":"object","name":"Selection","id":"p474570","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474571"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaOhI4s85xMDAsHcvH4hu+CgBphnUSnjB/KjzPGB+vxaYbjjcyg3m/3jAlXMIAAdFkXVAAAAA"},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474576","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474577"}}},"glyph":{"type":"object","name":"VArea","id":"p474572","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p474573","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p474574","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p474584","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474578","attributes":{"selected":{"type":"object","name":"Selection","id":"p474579","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474580"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEiczplziIGhYeonDhDNcMoXTDf8W8EO5huzgOmG9Hg2MH/OLlYw/4IokAYAWRaxrkAAAAA="},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474585","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474586"}}},"glyph":{"type":"object","name":"VArea","id":"p474581","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p474582","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p474583","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9300200009346009},"y2":{"type":"value","value":22.745999221801757},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p474593","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p474587","attributes":{"selected":{"type":"object","name":"Selection","id":"p474588","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p474589"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[426],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1XMUvDQBROERGLi1gQHSwq1ootVKVupQERF5f+AcnUUTq7tP/ASaRbwd1RuoglcwYnHVzq4FSoikYriPG9l7v0+tJQOsTF3PLle/fue9870rtU03D0qgThYLvU/CiCeK0Q/1TRKJeHxr28xOUb5TNsWda7Lx7TtMb+1bMvLtfLeY5B80PqGqfmq6rvcdN+KXLdUdxxnOTDV7cYhMp6PX/URX1CmQ/+Wna6X1fG5TrOuR/sr1MK9h00D7rO3YV/Hc+XPMhHUJz75P2Muw59nO3Re2E83XZVrJ0fE4cR6vsf6Uf7W43es+h3Nv45495zpt3DcwrO+28P8Vw8ePyhe0egvrMT0/GeQIR8uEcnGE4KTmg0l6ZUbNTr08hHYfskMYN5HPX4/Rzpd0rzhKa9OMBlvBBPDsyLPOhjFeNQP80wixzGphd3+0yJflNifo3mK9crhFIPUeZjXOjDYw7zYL+2EGHkEVvW4a7KoZNtwSkf1pMf0lF04Xtm3YsrefDI6rh6sq6iJ/vMCV3qF8YADtmfvg/ep8uzQs+PIA6+qS5H7msod/UzQj/j8wv39Y1lbWBc2fc/vW8b9YVl4SuUuvB9OhumPmxdKL7/q26jUqD/HaH0/wv8vYANUA0AAA=="},"shape":[426],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p474594","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p474595"}}},"glyph":{"type":"object","name":"Line","id":"p474590","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p474591","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p474592","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p474482","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p474509"},{"type":"object","name":"WheelZoomTool","id":"p474510","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p474511","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p474512","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p474518","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p474517","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p474519","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p474520","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p474521","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p474522","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p474528","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p474527","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p474529"},{"type":"object","name":"SaveTool","id":"p474530"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p474504","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p474505","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p474506"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p474507"}}}],"right":[{"type":"object","name":"Legend","id":"p474540","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p474541","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p474537"},{"id":"p474548"},{"id":"p474557"},{"id":"p474566"},{"id":"p474575"},{"id":"p474584"}]}},{"type":"object","name":"LegendItem","id":"p474596","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p474593"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p474485","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p474486","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p474487","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p474488","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p474489","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p474490","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p474491","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p474492","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p474493","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p474494","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p474495","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p474496","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p474497","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p474498"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p474501","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p474500","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p474499","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p474502"}}}],"center":[{"type":"object","name":"Grid","id":"p474503","attributes":{"axis":{"id":"p474485"}}},{"type":"object","name":"Grid","id":"p474508","attributes":{"dimension":1,"axis":{"id":"p474504"}}}]}},{"type":"object","name":"Div","id":"p474597","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"826ad9e6-c542-4214-8029-89146277da88","roots":{"p474599":"b245d9ef-f155-4446-b112-b56a445e787f"},"root_ids":["p474599"]}];
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