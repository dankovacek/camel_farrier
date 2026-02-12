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
    
    
    const element = document.getElementById("f322b13c-0f8b-4c06-872c-824b11bd7faa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f322b13c-0f8b-4c06-872c-824b11bd7faa' but no matching script tag was found.")
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
                  const docs_json = '{"fcc1efaf-cdc5-4f14-ad9b-33af182fe5b5":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p431651","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p431652"}}},"roots":[{"type":"object","name":"Column","id":"p431724","attributes":{"children":[{"type":"object","name":"Figure","id":"p431653","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p431654"},"y_range":{"type":"object","name":"DataRange1d","id":"p431655"},"x_scale":{"type":"object","name":"LinearScale","id":"p431663"},"y_scale":{"type":"object","name":"LinearScale","id":"p431664"},"title":{"type":"object","name":"Title","id":"p431656","attributes":{"text":"08LE040 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p431717","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431711","attributes":{"selected":{"type":"object","name":"Selection","id":"p431712","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431713"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3Sd1gIaBzA8Z8L0ZVCIqOzRy57HvLy8Mi47OhCDtkjK+Ph8Z55tuTsvYnOKCWqVyq6EClCEhERJSqZx/evzx/ff78iZsVGJ79oEamtUF18XeOH2mMHmjw3lNWF1en1DqKO6o/G81s1+vsTqNb9gbphGTTRIVXpw0ejKrJD7R/pSG88GSXOEdXIK1XoH2eh2VQbpenNyvT4hahHN0bzJdWBvnU5qhatUF97XIk+dj1KiU6odry0p7feiiaxO8rEdxXpJfeh3u2Opt3nCvTbx1BNGYLashSafWfK0zuORHXHBrXvBTu61QSUQw6oOsfY0u9NRzPzF5Ry18vRj85H3bUhmrQUG/qcJajKN0cdmG5N774GJaM9qvnPf6bb/4MmqCtKzzwreuYu1At7o6lcXJZ+5jCqPoNQZ5VAo/8tQ682HFWIFeq+YZb0bB+UpRVROV0qTQ+bimZAdZTX8aXoK+agrlUPzYWkknQPjSrPBfWqBxb0uitRotqg8nz6E/2dP5q1nVEavi5Bj96OepgbmsICofsfQNW4P+rYr99m/+jeJ1A+eqLaZIm6SchX+tVRKKPtUH2J+ELfMglNc0eUa3Gf6WNnoZbaaLYnfqK3Xogq0Rn1hNSPdIvlKLtbomr3uJietA7N5I4oli8/0PdtQd2hO5qU/CK6715UVu6oD34qpLseQ7nngWpmSdQ2ZwroR7xRutqgSgt/T/cbj8bOASXw8jt69+moHzmhmXctn24/H1VQA9RuKW/pTxajLGyGqnJ6Hv30ajS926NkZeXS9SbUVbuiCc59Q++7C1V2L9RLPrym1ziMEjYQ1YASqHOCcujLh6HUskJ1IfQVfbAPmtwKKKvMS3rdqagjq6EZGp9Nf+eHam1d1A2SXtAvLUIZ5oKq8P5z+oa/0Ti3QYnNzKJ7+6MudkUTkPOM3mQ7qqs9UI8qeEr/vB9lSz9Uzb9m0hMC0fh44vdBUG0PfkJvNQrNDVuUCRGP6RaTUO+qgqZtXAY9aSaqybVQl058RN+7AKWDM6qUu+n0acvQlG2JcjDjId11HerUDmhmZKfRbbagOtINdZf8B/QHe1D8fkdl9+k+/fhRNN08UB5ZoJp3+h69ojeak9YobuGp9CfjUC+ohMbh8l36aV9UvZ1QP0u4Q180D6VqA1TBySl098VoXjRFWfIwmV5jNerQdmj6Z92m5wSgWt4Fdc3cJHr4TpTBvVDlFt2irzyEps5AlEhBNTToJj3fC82asigNQhPpl8ag9qqApiDqBn3DFFTO1VDHXL1OH+GHUlwHVcCta3SXRWiu/Ioy6n4C/fMK1Jtbo2mW+R89YQMqH1fU317F07dtQ2nVA9WN91fp4/ej+akfyq4vV+htA1HfGopmUmmU0sFx9L1/ov7NFk3yxVj6tImoylZBfSA2ht5pJkpqTVQzblymWy9Ac7gRSpe70fQHS1HPboHGNuMS/fhaVN06oE5/YehzN6NU7Ibq5Nsoeo89aB73QVnwMZLucBT1qcFoelmgPDsVQV80ArWjNZqz5y/S3cehemGPenH0BXp1X5TQGqj6J4TTX81Fs6w+Ss3k8/Twv1APaormTVoYfeUqVHXaoY54FkofEoCSr1CteXOOXn8nGtMTxasohF5wEPX6AWgaCUrMyWD6CC/UH8qg2XjuLN1lzHf/Bx0wWkJwCgAA"},"shape":[334],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0v///7/v33vdnoFCc0Zp6tD//v+P7z901B6b+MS3e4ZyPCUIROwcDO5P4NM9ZE+teCFE/wbr22pPL3fS2z4K9FE1nOnofmA6PolNfUPO88v4zDnw+e8bfPIJ/Yee2pMgTsi8B4E7vtljF/+F151yrcwO2MVZHfDoWzBzJjc2+QZbLhF8+hJ2yElgk3cwNpZxwO9OVgcS3A+jFWL6P+H1/5kzX8gJb7i7H1a9sKdOeXnSfrDnH3LLm0///9tzrJlDcTj9/f9/vpT+WnsixInyH7n60NXhchch+7CEC1b70dURG57k6oOVbwBE4NFGcAoAAA=="},"shape":[334],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431718","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431719"}}},"glyph":{"type":"object","name":"Line","id":"p431714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p431716","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p431662","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p431689"},{"type":"object","name":"WheelZoomTool","id":"p431690","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p431691","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p431692","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p431698","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p431697","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p431699","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p431700","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p431701","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p431702","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p431708","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p431707","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p431709"},{"type":"object","name":"SaveTool","id":"p431710"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p431684","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p431685","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p431686"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431687"}}}],"right":[{"type":"object","name":"Legend","id":"p431720","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p431721","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p431717"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p431665","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p431666","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p431667","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p431668","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p431669","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p431670","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p431671","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p431672","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p431673","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p431674","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p431675","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p431676","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p431677","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p431678"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p431681","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p431680","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p431679","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p431682"}}}],"center":[{"type":"object","name":"Grid","id":"p431683","attributes":{"axis":{"id":"p431665"}}},{"type":"object","name":"Grid","id":"p431688","attributes":{"dimension":1,"axis":{"id":"p431684"}}}]}},{"type":"object","name":"Div","id":"p431722","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"fcc1efaf-cdc5-4f14-ad9b-33af182fe5b5","roots":{"p431724":"f322b13c-0f8b-4c06-872c-824b11bd7faa"},"root_ids":["p431724"]}];
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