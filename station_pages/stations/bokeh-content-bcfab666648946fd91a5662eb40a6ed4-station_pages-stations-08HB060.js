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
    
    
    const element = document.getElementById("adcc61d0-db62-4619-8497-ddfa9f78bd40");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'adcc61d0-db62-4619-8497-ddfa9f78bd40' but no matching script tag was found.")
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
                  const docs_json = '{"3ce07001-111f-4927-94ae-ab4f8d232b24":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p215482","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p215483"}}},"roots":[{"type":"object","name":"Column","id":"p215580","attributes":{"children":[{"type":"object","name":"Figure","id":"p215484","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p215485"},"y_range":{"type":"object","name":"DataRange1d","id":"p215486"},"x_scale":{"type":"object","name":"LinearScale","id":"p215494"},"y_scale":{"type":"object","name":"LinearScale","id":"p215495"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p215542","attributes":{"start":0.880999972820282,"end":4.878999938964844}}]]},"title":{"type":"object","name":"Title","id":"p215487","attributes":{"text":"08HB060 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p215553","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p215547","attributes":{"selected":{"type":"object","name":"Selection","id":"p215548","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215549"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1612],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1bYUiVVxj++nLOhZRzIjE2+xCJbRIjJCJC7jckJCJChJAIdxkxIkIkRohE3giREBcxREbEvSIxGhIRESLhPiIiRIaEW0iEV0QkmrmbmdpN757zPN+XCWM/+rUf5/55POc75z3ved/3POf8eHQc81tqI7wfpg91ZWKYnNp3OxPL4TfWwrZ3vZYYJD8lOr9m/jbo33pADLwbxKjfcSs5zm8cJKZbnr40mPhp6xLx5Mwi+w91Eb2OUuGNU6/C7wsGg8V6YnzPLc5Pb9/5MrYBf+y4Oc/+Y3uJfnz6Bb8vnyWmmquJwcIXL94d71dV0R780TrB8DLnTxxyfWw3efneBh/txPFLjsH4nR9yHF83kG/a2M8HPtb3bl5xTds7epHjEtWbOC4198tqbCWXi+2+sEK7mx5lTRwnDn73mnZGy5fpT/9nikN3Ddd32k58SDtDyY8MeuO/f2AwGBlxDTqP+rhO6rMjq8zLw4NvOM9x6C/iTf9SW/M43/mjpcDsJ1c/lWfaiLtrEHl0fPiX+6pj1cxHHuinszpGe+lf7mfDeK2Ydb4d3M9xiDPHBfsLOS5+aZb7gV1ifOoq9xEvaiCmZs8IMw/Xod95UuOmR7n/1D1vifsZa2H+YZd58fIOC8d/Z74wb8H4la7IV12MjLAe4tOjROZVdaHx8WnO93dfoN23WFXFdirzUP0mP8bO4H7tq6iBbdQN94W4yt/i8/QX+xeWtS+G/tAO6l/1NJTUumZ948+XR7WvmWxU57SHOn0dfud6iAPXT5y4IxxKKr9tJ+TX1NVczOV5YL5TP//sGvS/K2LdfnvxrmNwoiKfdch8mbjWT2k/IyPK00yW9Yf6pR+IizDMS+LpdvlXN8B9+pOtwl2NROSFiHgRcY70/fY85yXC8wT/2Ia/RO98oHGNg4rHsb1EnBvlofOk+jfv0LiCfiLqn4hx3Af4hvugfbO/P/v4HT8i6k72Cl0iztWrMA4LBrcdOab6KHSJqdpJ1U9B/xrKrtqTrcIL3xDxU3vTI/IOzoswe40Iv9a1cS7YDsra12E0bl2/6kXzR8uJ4FPyWOLuwgvjf/L+AfFRX/NG39g1/IC6QD3znHtPKojOue4NvuzluP8/+1RHe26Jh87ElK+Qj3F+VJ8h/4K3FCdzrt6JB84F958oua793j+w5qdZr7KD/sY37yDvpssfZ8J64z2Q+Caue6GqShif5r0BftV9MtlKRH0RwS9/m/nxvRNzjMe5biLqe45+Xcs85zp1A8/Z//33z03/ticVxNjt+dnQDyLujVkzzmt/Nmu+tw0lOQ91TESd0h7qgvOj74meJvYnYrs0Lpz/23Av7eH+0DoV+WwjL3/Rn+LzxKiNOlbcmqvfGHuIu85z7STzhrrYaM5xW3eNa9q4B3gvIJ4FBnEeNa6mk/nFfNYD+sUbPU06H7WTOp/Za4tmH8h/dN/pPh0o0z24fJb5jM9k19dp8lO2ce/qHu3dJ7wyx3xGeUbcVQ/dNbSH+Gmd8Fwjjmo/qyOms9d0Dh8vc17w4DQR+VDd9zUTGSf5vXafm3b9lOro+CW+T3Ce2cb74V8x3des98f2nbTjff2EGL0Xgh9+ol+4V3m/+oWu7v9gmHEH3xURO0oLDaaaitkfnDq+0aB/e94xeUAceE/6uxrfhH6Lby/eFQ+WtYtnJw6pPb8ifuvdR/Tyz+n8hfFLt5aIt8ZaGFecf/FOyEfoYps8gvW9nQURL4n/qqrEux2lWjfkcZwj1gPixrpBfWm/peN6XzQVs//te6Dlqfiir1n2GvaorlpLxMtDSe3D8LTJz1gLx4GHaTeYX5HdzEOt17BH7xfDR2Z8+I5BPli/wekh3Ye1k7wfkS/1D/ey7sH/4rn8c65pJ57VbSaWXGee4hfvbmG7p2lLeC/yPYTvfE/5XT0u28Ew/QqGe4k4p+ovHec7CrzNdVCv7EcdcxzeVcL3fF/DwlKbsWPRxsHWgT0HlgcsD1gesDxgecDygOUBywOWBywPWB6wPGB5wPKA5QHLA5YHLA9YHrA8YHnA8oDlAcsDlgcsD1gesDxgecDywH/wAHTV1Lt4N05RpwQdXaTHoU4pVdMZ6ZWoZ3IOb95kEPru/FAH7bK/skP6nebqVaPHgX6IOmDoVPkd+iHqZaCTEY6WS6fT1UN9GsbnYhups9G8kzPScU62vjZ2oOOTXqi5mvoh6JLW62oX66WLCvXh0F2xDR017UAXRb2Pc/jHTwxCP8S293hZOmi38kP6MT3KeEDPy/1CTyzs6pGeKO+w/G4cdM146N9dMw66wEiXzfhAPy2ddU0n4wrdHOMKna/jY5/Q8TJO0HdLb1l8nvvEPO4z0s1CfySd1q0H0k+VtTNe3s3PPzb2oP+i3gy6Pvm5+wL9Q56kS6obkN/Xa+kH9rXBrB8fKKPOCnpD6abmV7g+8kPdb/rqZelkQ/0z9Kf0A3onYur+ASLWISKeUT4i/Zryt6tRermCfumnZrJcF3WmejE6MqwXHNi9Qh3XzSucBz2u8h7qxaGrWtOTRfnHsEhHCL0/ddSYLx3c0+3S7V6+p/8DqOwgYl/Uv0G3Jj1jUYP0q42DxODKnPTj5Y/VPj0kO/c86v8wT7rtSDf8a0a6xVDPDV3/2nfp3BSvUG+MOl5Xt35BP8dH+kLoKBX3rXnc/1vddahzhm6f3/H7//LaPwxwSpBgMgAA"},"shape":[1612],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215554","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215555"}}},"glyph":{"type":"object","name":"Line","id":"p215550","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p215551","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p215552","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p215564","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p215558","attributes":{"selected":{"type":"object","name":"Selection","id":"p215559","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215560"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215565","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215566"}}},"glyph":{"type":"object","name":"Scatter","id":"p215561","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p215562","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p215563","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p215574","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p215568","attributes":{"selected":{"type":"object","name":"Selection","id":"p215569","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215570"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215575","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215576"}}},"glyph":{"type":"object","name":"Scatter","id":"p215571","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p215572","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p215573","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p215493","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p215520"},{"type":"object","name":"WheelZoomTool","id":"p215521","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p215522","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p215523","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p215529","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p215528","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p215530","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p215531","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p215532","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p215533","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p215539","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p215538","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p215540"},{"type":"object","name":"SaveTool","id":"p215541"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p215515","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p215516","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p215517"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p215518"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p215543","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p215544","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p215545"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p215546"}}},{"type":"object","name":"Legend","id":"p215556","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p215557","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p215553"}]}},{"type":"object","name":"LegendItem","id":"p215567","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p215564"}]}},{"type":"object","name":"LegendItem","id":"p215577","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p215574"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p215496","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p215497","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p215498","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p215499","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p215500","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p215501","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p215502","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p215503","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p215504","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p215505","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p215506","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p215507","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p215508","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p215509"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p215512","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p215511","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p215510","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p215513"}}}],"center":[{"type":"object","name":"Grid","id":"p215514","attributes":{"axis":{"id":"p215496"}}},{"type":"object","name":"Grid","id":"p215519","attributes":{"dimension":1,"axis":{"id":"p215515"}}}]}},{"type":"object","name":"Div","id":"p215578","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"3ce07001-111f-4927-94ae-ab4f8d232b24","roots":{"p215580":"adcc61d0-db62-4619-8497-ddfa9f78bd40"},"root_ids":["p215580"]}];
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