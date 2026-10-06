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
    
    
    const element = document.getElementById("ceda3e5d-9954-4534-98a8-4aeebd8e6fb2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ceda3e5d-9954-4534-98a8-4aeebd8e6fb2' but no matching script tag was found.")
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
                  const docs_json = '{"7d2ae225-3ccd-4be9-a574-f9115784fd05":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p142377","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p142378"}}},"roots":[{"type":"object","name":"Column","id":"p142500","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p142382","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02RF010&lt;/strong&gt;:\\n        153 revised days; 0 removed.\\n        3.71% of the earlier published daily record changed.\\n        Affected interval: 2015-10-10 to 2023-09-30;\\n        longest consecutive revision run: 60 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p142383","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p142384"},"y_range":{"type":"object","name":"DataRange1d","id":"p142385"},"x_scale":{"type":"object","name":"LinearScale","id":"p142392"},"y_scale":{"type":"object","name":"LinearScale","id":"p142393"},"title":{"type":"object","name":"Title","id":"p142390"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p142433","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p142379","attributes":{"selected":{"type":"object","name":"Selection","id":"p142380","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p142381"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DBzeQAQAAwC+yyyxNe6WiNITI3gpRslVKRmQ0lIxQWiKSn+vuvQuCIDhmiKEeN8xwI4w0ymhjPOFJY40z3gQTTfKUp032jGc953kveNEUU00z3QwzzTLbHHPN85L5XvaKVy2w0Gtet8gb3vSWty32jiWWWuZdy63wnpVWWW2NtdZZb4ONNtlsi622ed8Httthpw/tsttHPrbHJ/baZ78DDjrksCM+9ZnPHfWFLx3zleNOOOmUr512xjfOOue8C771ne/94KIf/eSSn112xVXX/OK6G2761W9u+d0f/vSXv932jzvu+tc99/3ngf899AiT5N6TZAIAAA=="},"shape":[153],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXKfUwNUBjH8WOlpkVYVtMyjSUyTZbdLcuRWkZWy2o1I2Q10dbWkESnd8pNV+ldKaW4arKQt3VkNVbTEC3LNE00WSW0ZZndr78+e37fRwilJ62P+wsh3bfPt6invqAqvJeSbLmfNp+2KI1hqRbFdD3qyJn/TsizlluFF6F89BmFmyGNv5w8VONDKMO8FL09HbVrP6pM93T6WDKKkB7Uba4Z9OWJKFUnilHHTPquOFStD1A62WfRz+xH/ek2qh1W2fSWcBSOTahPzaL6GJxDD6xBYZ5CvTggl36iBOXQVxT+vufojUZUC4dRJnmfpw9mofYbQFW/No9ul4oi8SXqtyvz6b5JKGu7UNg6X6Afi0f1+jFKg4ORXn0QtVUbqiM2BfS+SBQ+ZtQVc6hE6EV6bB2K3p+oNwYV0kvLUc59QxHjZ2LfMIKy2OcS+2wu6uj3qLrWF9E901CYXqH+vaqYvfM5Cg+Xy+zGBFTTHSijlpbQOw6jXn0fVd6CUvrkXhQRLajc9pSx5zag+D6DOmxnOb29CuWKCRRZ2yroY0WoQkZR3jVU0l3yUasPqEa9qujBGSju9KN2WnOFfaQHdUtiNf+Oz1CmLKvhfzgOdeBDVGb7q/Ql0ShOtqIesqql+0egbGpCsegP6qTddfTBGpRbf6BoCLhGtytFlTiG8p1vPX1LAeraYVS2mxroCdko3gygNqy7Tq9ORWndhyLerZHel4TKpxtlpXMTfd5R1LFPUPU63KB7H0JR1oZ6zuYmPSYK5QszCq+/qItDzfTZOpQHfqHoDrpF96xAZRpHOePXTN9nQt05gspjc0uy/z/R96RTyAQAAA=="},"shape":[153],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1VUXUgUYRSdQhYREZGIkNBFJCoDH5YIkZgVH2QRkQgjQnCIkBARkRDxwV0RWUTEhwiRHnZDIgSRCAnpwR1H11ZZ13Fd/9CYVTMz+8FE1hCdvnMcteblcO937r3nu/d+Y5qm2b+rycemGWh4OgqUO4pUWZIkZ8piAujR9g9kQTPeTPyCrTwp3CFuHW4Tu7UfQPtgCe14X/0mUJorW0dcVaFhED+4VoFmrGmZ+TtrFxlfXb0AVPeOYjiXHY458qJlUeY77J+FXVUwpMsXhONG5Qx57/emqberJwKe527KFvPsX4+z/nFsCejfjc6D7x7xRYHmQp8ODIQaI4g3K9Km5SNxv5yVSWCg9M4k/EZ510fGX0maQF3n4/QQ4oxIYgw8oXOM+az++eoyxsi/+mgcaLe1Bv9F+lF36hX9yqausZ4rVYPf93JcBbrVqVFLfwjn5q13vCf1CLNqOCsIFDpnz3Th3ntHrKsm7lPXKS97sIT5lIw2FXx7ZbdGO/0h7+suUoLIf6rf2VGks36ed5363zbEkc+86eWcPD11nIs/M3+a58sR9ukMwUe8JB0Axfy4F2IOa5Zuzt+zfY17orpSvzF+sITnQu8y61WkcW5iLid2rIl7pmy83mC+4k7WcSqbS+AFwuGYdT7HfO07rCP2c548o5xo917mPnF/kD+SIF/Nal+BnZ3/iXn8vb3sb/zeMPdL9OU70eHg/gv7K1By13xmXlvrGtBTu8U8vnE7dRl99awrviUr3zH5ld2/gf66DO5tPNd2Hn/KF/FC54n+5IHz9wFdubZZKy/npT57rmOOgcaRGaDZUhOG35k88B/G/7RMQZdb2w9Bj1IwxL0O+DL5rs506znsi/h07ImvuDNMHt6NcIp57RLb1J/WPTgX0Y9V4sU8vm/Pi2L6lUKDfbMnPfiCuv6JUv4XOG/hF+9sATbngTquVL5X7rk45/1gQyf2Vr7N92s0X4rIfwEnGLOMyAQAAA=="},"shape":[153],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/11UX0hTYRS/vsSQCB9CRMTtSYIK8UGkB/mUERIiMXoJEb1IDOkhfIg9jbYICQkZQ0QuErsSEVZISA8ia17nlHmdpnNqg+buqmU2TFbEMnO37/zuVbP78uOc7/w/v3NLBEFzTIaYIAjenZoZQv4pJv4iFCer9/F+fnwP+uf5r4SKOroDfY9/l9BWm/oC+yuvPxHKlbUZQs3NUpAlKQn78uQG03XdWptKkNxUurkGucMXJ1koJlaAgrDCirrOBoaX6X06FouxQ10PtGRUkgOStECov6hSEXf4zmdC0RdOkd7D6jdIVgo31pCnvxlxmywvY7DbPlhgJag3Snm6fOE5wrSbzcGudHOW3m0dvjDFSz8diaAeMasA+5sV0gcitlNoHW/BHMVzl8PHyO3+11NpFP9o/ryuIPXH6w79W4dYdhN9ppcLs4QeRUV8OR9fAla1Rwi1g7EZ+LV1oz5rX26G7XOHSxNv2B8+v58Xguw3R1do+lR8qvOoH+q3zoL5eBU1Q/mmo64tzKHOkiBs6i4z9lNMRFHPYEXkGKmpQGXanF8BdbkZeMLnrEE/MIy9eHMO8ITXbfBosALv8t4zgx8mHzjvNs044Jlie/XBjLMFefQq7PV4W5yQz3mV6pTnW+HnHbJj/2J2JU59enr8S2QH/lA+SVpFPDH7Dv3VdyIO73uZ7AO9jeCXbeJxDvHKkwb/XaFt5K/u+4g4Ve0a/FobwHPbmfvrJOtjeSOeOroOfYevSCg6nd/hH3WBt7zP9LE/d/M0i/DvCt5F/XJv48l9cH36Se8S9tJ+axF3YX8UQ39D9kWy12rqooibc5wgf+9yOueR98ch+Oy5HQRaHyjGHfX4Uac8EsGeeX8n8agf8974fyFP+YWLD7/B7tpZYy+dU0mqm98L7lvbvwe9dn0A8+P/jSwh5/t75KF9G3nwH2AN/diHvOt+CySeH/XH3z2hgAq+dk7hLrDHv+pPmN3IBAAA"},"shape":[153],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2VTWyuEURQVubz5GcolP8EvwAPvo3nyRDEuTWrCuKSU+jAzbsMYD8qTJ+WyX6XwLIlocit3uY5j7Y91TMf3strn7G/ttffa58GYSMnKjCSMMfXBJovXiI/D0Zo94C2w8cuYgNcsn4hjLX1yCCwbGpQdYKvXLdtASY7Ii/KMxiQP3+D1grwhfsym5RlY2Ltk4w/EJ+G0EPV+I7Qor8Dl+9RvndS/GNeRAfA+AtuaF+QOB1HEyiMhz/KVoP4T6qqO/Zc/3nfkTbak5N7h0fPa4Lz/f+dWUrT/ytVZOQKeLU37Ok6BWi/kxW2fWcTlQ5M2vkHcjnuMy2wmpyzynDz87xw6inon5An569CPGHOa0P6M+sI+odcUI9Z+BLzQGYmhD+2zCjp5rnOsw/yvgIlEwp/7BnjJX4BErcd+L3AfRx71cC70MR/56ovW38uZI3VxTkTq/N0fuxe6N/05+5BBrH0cALu8Yesz94W+qW71uQFYutIjqrdhbc6fj/rKfJ33bo4+ra97Rx4i/ad+7ht53D6VV/frAXgWHpdLYDX2/hZYHxzz56K+/LyL1L89Z13WCeDgJBz19wvvy/rCe/ed8H/3fdB/F6kX/kWaMvM+v86PSN+13w7sOfed8+B7pB7yuTzUT1/IS/3k4d4zH2VNBd5LERpTf1y/2afbF2PqcfEbMEzG58gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0WTfTCUCRzHl9KcnNmT1XmJtmVf7D7Ps3KFy5zIXS+ypxF1HWkuV0dHzemw26nrRrKpaFbkjOllS/GkOo1V2eP5ikLUnqG4vCYVactL2nB3z+mP9PvnO/Ob+f7x+30/3wfu/ES/IU/w99hqMtJNTMDt27wYzwnGOfh7rynVk+Vjt/axG1L7l2/aG2XdEN7CqHS+f7QPDTOcIu/e6pJxppQjVQgL+xl9cMDqFWGTTHvxUn1CkhUMpyIdKlX2+PlVNzcwmY/WKz6xEjNXXAjqVW7Jd8Puq3Tu6Q4hHgRGx8d3iFD+Zm6FTibGkE/mKZqW4ElCYW814Q7es5CyWoMUflOBK+flysDYfFO+RkPg9VmKXsclwQvbGjywhkRe6YmCxAUW6Ft2uOzx5YWITNHGhQiEOLTfQni9R4TY/c2EKd4diz+JX7esVIbO1rJ/Y2NJXDjEnrv+mgQRaRndf1mOL6quZj1UyrFf2XbmWJocvmuCV3ptk+Ozc+VVHjcIpNzX572opSDNfAyapnBVK1UbKkj46yqJiB4K2RkPE4I9KDy71nHj3tgHfb/fcWFi/aMxOcZp1c2clyRGFqedVjeQuCS6WTpmRuJjTtAqf28KLf32OaVdBHr3hv6aEEKi8IymTLGLQiivKO1RqhyrYjO3WtVKMWytDuv5m0JHleU6W50cv5nN6r+YRMGiqaMhW0EhTzLLYBQSMJoLFHaJJLYmnWVlJgJ5R6QdW9w9cNIu0/LiMInyjEte+nQSnQWhNS5ZMmjVpvkxdVz4vhgeidM4Y3NfZUSFRATrk5lL6krdsbDbWjC/hcSG2cknGin5jA7m9xQuvWMHzvSEhT9h+KOckJhXE0xE1tGnSQIHbDzQnTpkcEPyuWiXy8lcmBGt2zbmmhiBsuLu2hgnRB9sjtt50w1GaouvQifGxZqjuwdb+ch70e6tCB1g7gQ5iQMP20LS+VGAhnCB0oM/vp0nxGhBuyXLirFpRGt7xVEC85zjHK/lbujy+91hZFiERfq/tNvixDCv3kdFmaQz/Di2aVWN18TYUW+f1mnjii7Nfz+KjWLEOhyXVgxIUUTnp9JSEhsn40sqXczB3j8ScKPsNfNyserPN30c1GsN9laZNshu3tzy9XpHzH543W7Bl644phuplEGIxL6CibzV4nf/gF7vijkc//PFdC+z6EjxFDd3iFnyVv/dKM8ChWu7xu82O834aZqWdncJYW2MWJZdKYKVwy6ZOv1DP+ZOKkpCbWSYZNlrTU0EsvzCP81vkuEHW1PQvc8J1CTVvX3HZSEvznNnBDWjg/Hf8iefT/P7INw8pVGO9F/qu55zPdATNn+wfkqGAfkhq0gfIbrnqf0bGAlYljWwrAz1FspLq/ZN85x9suBd/zSOyj3kGSPTVtMY4xbyjPHM6a7+R2WHhgya7zckwNs5jYJEBxFyU/pq6/q56GT53dqoUeZA1K2q2d6WGJ5j69pWy5/Je8q5p/l8iQjGQKefnkZM5+dSpJSp3Wc4f3/fdt0K55R7BESarzx9ikkYvOom0qf78z9eRyByyAQAAA=="},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p142434","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p142435"}}},"glyph":{"type":"object","name":"Scatter","id":"p142430","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p142431","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p142432","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p142441","attributes":{"data_source":{"id":"p142379"},"view":{"type":"object","name":"CDSView","id":"p142442","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p142443"}}},"glyph":{"type":"object","name":"Scatter","id":"p142438","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p142439","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p142440","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p142391","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p142418"},{"type":"object","name":"WheelZoomTool","id":"p142419","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p142420","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p142421","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p142427","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p142426","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p142428"},{"type":"object","name":"SaveTool","id":"p142429"},{"type":"object","name":"HoverTool","id":"p142498","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p142413","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p142414","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p142415"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p142416"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p142394","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p142395","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p142396","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p142397","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p142398","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p142399","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p142400","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p142401","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p142402","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p142403","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p142404","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p142405","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p142406","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p142407"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p142410","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p142409","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p142408","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p142411"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p142412","attributes":{"axis":{"id":"p142394"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p142417","attributes":{"dimension":1,"axis":{"id":"p142413"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p142436","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p142437","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p142433"}]}},{"type":"object","name":"LegendItem","id":"p142444","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p142441"}]}}]}}]}},{"type":"object","name":"Figure","id":"p142445","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p142384"},"y_range":{"type":"object","name":"DataRange1d","id":"p142447"},"x_scale":{"type":"object","name":"LinearScale","id":"p142454"},"y_scale":{"type":"object","name":"LinearScale","id":"p142455"},"title":{"type":"object","name":"Title","id":"p142452"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p142495","attributes":{"data_source":{"id":"p142379"},"view":{"type":"object","name":"CDSView","id":"p142496","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p142497"}}},"glyph":{"type":"object","name":"Scatter","id":"p142492","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p142493","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p142494","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p142453","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p142480"},{"type":"object","name":"WheelZoomTool","id":"p142481","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p142482","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p142483","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p142489","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p142488","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p142490"},{"type":"object","name":"SaveTool","id":"p142491"},{"type":"object","name":"HoverTool","id":"p142499","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p142475","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p142476","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p142477"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p142478"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p142456","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p142457","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p142458","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p142459","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p142460","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p142461","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p142462","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p142463","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p142464","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p142465","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p142466","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p142467","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p142468","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p142469"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p142472","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p142471","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p142470","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p142473"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p142474","attributes":{"axis":{"id":"p142456"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p142479","attributes":{"dimension":1,"axis":{"id":"p142475"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"7d2ae225-3ccd-4be9-a574-f9115784fd05","roots":{"p142500":"ceda3e5d-9954-4534-98a8-4aeebd8e6fb2"},"root_ids":["p142500"]}];
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