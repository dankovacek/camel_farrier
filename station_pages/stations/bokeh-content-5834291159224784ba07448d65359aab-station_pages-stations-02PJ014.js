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
    
    
    const element = document.getElementById("b60b2902-5248-43f7-b86f-48ce32a4eb3b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b60b2902-5248-43f7-b86f-48ce32a4eb3b' but no matching script tag was found.")
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
                  const docs_json = '{"3fd2ece2-e34e-483a-8d22-856ddbc2af6b":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p109087","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p109088"}}},"roots":[{"type":"object","name":"Column","id":"p109210","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p109092","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02PJ014&lt;/strong&gt;:\\n        248 revised days; 0 removed.\\n        1.71% of the earlier published daily record changed.\\n        Affected interval: 2013-09-25 to 2023-09-30;\\n        longest consecutive revision run: 177 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p109093","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p109094"},"y_range":{"type":"object","name":"DataRange1d","id":"p109095"},"x_scale":{"type":"object","name":"LinearScale","id":"p109102"},"y_scale":{"type":"object","name":"LinearScale","id":"p109103"},"title":{"type":"object","name":"Title","id":"p109100"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p109143","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p109089","attributes":{"selected":{"type":"object","name":"Selection","id":"p109090","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p109091"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DU5AVAAAAwBcvd9m2bfOybdu2jcu2bdu2bdv12+7MBgKBQBjDGs7wRjCiQUYyslGMajSjG8OYBhvL2MYxrvGMbwITmsjEJjGpyUxuClOaytSmMa3pTG8GM5rJzGYxq9nMbg5zmsvc5jGv+cxvAQtayMIWsajFLG4JS1rK0paxrOUsb4gVrGglK1vFqlazujWsaS1rW8e61rO+DWxoIxvbxKY2s7ktbGkrW9vGtrazvR3saCc728WudrO7PexpL3vbx772s78DHOggBzvEoQ5zuCMc6ShHO8axjnO8E5zoJCc7xamGOs3pznCms5ztHOc6z/kucKGLXOwSl7rM5a5wpatc7RrXus71bnCjm9zsFre6ze3ucKe73O0e97rP/R7woIc87BGPeszjnvCkpzztGc96zvNe8KKXvOwVr3rN697wpre87R3ves/7PvChj3zsE5/6zOe+8KWvfO0b3/rO937wo5/87Be/+s3v/vCnv/ztH//6z/+xOHoH4AMAAA=="},"shape":[248],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLe1QIdhTA8bt5hBPh1LzGWZhXVqPltF5+pSSSZuth2fKaV2ydpRTST1JbRCm9tFqppGi0jGnTb23RxtaYrYVtprOmYWwmZ5E9vv76nHu/94qY0nE267xE1OwnnGP/Uw6vRGNTh3pj/+f/V/0cjuJbg+ZgTxf64BBUsQdQfryPZkaAK3O0jxvzxRzU6jdU5W7uzC2OHszuyWj62E1n/3o8qgvNKC6jFb1oHepep1FFDPOkn4tAM+0k6oKBXvTHl6KsPIrmS4sZdMeXUeUdRPnnIZplL3jTv9iH6tlOlOxZPvT7+agX30R1evpM+jO7H/nZJV/uJtrP4m6XRnX3PErY037MJ97zp18vn8v+2JwA/p4sRJ14G9U1r3n0gD1o3v8V9TCXQHrCjkd6r3qJu8o6NFYDgriLXoTqUg2KZ69genkIastKVG8+QPk+IITuXox63x1UfWeG0t/IRf1cejT7/Kso4hTD32spqM+0opoyeT09ZzOaB1+jXjImlt4UjWLfhCZzeBz97zWowutRGgdtoE9ahjr9A1SdfTbSF4ah+eQQ6vGyiZ42H+VOKZrQe6hP+sXTxxagpP6O5pbaTA/KRFX3C4qtcwI9ORX1jcuo5jto+vEtaEZeQL113BZ6RyzKvDNoakcm0odHotINKO3WW+lzVqA+8iGqIZZJ9PhX0Vw9jHpWj2306iAU6wo0cV2of/JPpvsUoVT9gWagdwo9JhvV5WsoXq5v0fenoe5/BVXU1LfprUloPFpQl05MpffbhBL5FZpvn9pOd41CVdyIYjF0B33NatTnP0LlbJVGL1yMpkct6lW9d9KbQ1GcqtDkd6OWwF305SUoZ/9CM8U3nZ6Th6r7OspSjwx6Uzpq+zZUWU676V0paMIvom6cnEm3S0DJOIemc0wWfWEMqoYmlAkj9tDT1qK+U49qweBsev0yNGOPoU7tm0O/HYYSXI2mTnLpti+iSilDuXkPzfzZefTjBahG3UJJ8synd2SinteO6qjzXvqI7Wj0D6jbHQro/okoNRfQDBn/Dj0+DlXbGRS/UYX06kjU1p+i2mBTRL+yAo3PCdRVlu/SB4WjrD+C5nKPYrpXMKqKCpQB99FEzS2htxahmv4nSpn3Pnq/HNSRHai+cy2lu+1EU3wFtYVjGX3tNpRvWtA4TyqnF25C1bMZZbXtfnpzFGqnU6j2Dq2gPxaBZvnHqM9aHaBPXYKSW4umu3clfekCVJ9XoTg8RJMVWEXvKkG16C7KKd+DdLt81Bk3UN3zOER/JQNNQxvqCdOqY73+BdU1ik7ABwAA"},"shape":[248],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/01VO0wVQRQdKagoTLShUF9UnhJFxUUFETM8URQeiD/0KeqKuokGExRN/MWsMSEWFLbbvcrahMrCuKXFdlZ2VMTCzlhY4ZlzzyRuc96ZmXvn3jvn3uecaxfFlN/kXFlVs96RnzdsnQvonB/1Hc6l2fqJwH2yOmg8Oxo47Aa0n2if6Fwe8bDOHbF1dzxgu/h8wfDvlYA+SS4Zb5Gn2bL2i+nAcdOk7XcTsT/jNzY2vlYrjNMnS+MBce9pQ+8V50nbT0YU51GtMz7k2x8wzbLdoQ7Ib5fZu16t02+7GJqx9VLxuEm7v6uh9Tk712IeZbXA+BFPMyD8jwVEno2A+O4art03zK8a1h4aps+0L95OA28XL+TXTdi+PyO8IeQ7plld9WtNGV9n3D75rTzSe3a+9lz4RJgZ5rwPH/2mWaf8ftT9fkH784b5TcM18fKp8ZncsBR+e2f8p/ihN8Y/vDT8pHg2P5ad6lPeEr8esF38UL18y9YdsV10Uz+o/8WA0C3zRj2kG0PnanfCOt5H+XrVo7xt6+bXJ98vm/263rF+Vv5GZT8cEO86FLCsmscCQlfqj6Z0b/2Ac1yHhXSbUBfooxHhoO3nEaN/2bmBsA+djpn+Ktrjo/1/97LvwPcTF79Q1/nWAzvFawFd79wOonPbxInln73btd4TEHVkvtBP7EfqAPnE/tP+qvq7m4jzrBc8TmvOXDPupI886l3vUWO9YUl/MR/85Ps5NyM7J72VF60Ozab6UXqvT2g+xDox7rL6RV0grnHVj/FDT6pjfipwnKDuoSPqCb/UN/6V+CPDNfYJ6sBz6E/ppZNzABWnXmEf9bZkPJ03zKXfPPYvz8Mf+7tdtBoBoas4x+LcJcZ5EhH18jpPxMc5B31xzpXVilddpOf1RlhH33C+Y05xfuKc5kcR59esvV8X3w/3KN8W6wJ9cE6irg3fQR7jHTaeUZ/4uI77iIiLfQM9R73WbQ4nPXof6g/3cR4TOferPYGjj/WeS1e0rvdz7B/47Ze/vsCRX7Svm72L/vcZR59a/Ipri+becvx/kg5s3iB+cr4T7bKYr/r1/Vvzu/jaMH2ge6QLL/2uULeoC/WIeRXfkfMDfvl+yP+gsM//A6p30cjABwAA"},"shape":[248],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12Vu09UURDGrxbGGP6BbXBVQDFKgKvgA+GAIg8XX/hanyuam6jEoGhi0JgltnZW2221pSGh0YpbWd3OwtBBQ03iH4DffPOdaLzNL3POnDlz5nWTBF99Juzs7IykP28FSCFdvWKsZdmUMS8qo0Z851wuTrlcHwi7TW/rhPbJvChSY7PRiOyX3klfL51x/fyasZbt4b24edbl7KYxLz5zH/5cNjYb65eMWCFh/6qxlrXoJ+QJcdxZDZKH/f6M/jcbpUGt0z/42ye5g5zYPBR22b1pt8mID+0iDrpvS/6U6Ect6xoz4ntgzIt5vgPn9L5WxWT4d8FZHfP98hNnkhnxjtsuh+fOhbfaf+HMa8aQfpHdrmmXFy/6fv2eEfcznvCXerh3xvVS5hXv5zr8e+oM75y9ryXTH2jyPtxIu4iH7BY635zX/pwzeeiM79p+4/JC3bkhbn9yee+y9j868yXpyZ/wSnblT/LIZfjDek3vuFyv/suQLrJ+mo3v142QVc8t5gv1FOvosZ/LZT/GI9G73S7yS3uwwzgiT5NG1Cf7AnEZCt4Hp03Gx/7A+qDWWff4Yn8MuJyzbmFPddGIdUo7OB85ZDLqlOeQT9qBX6xzaJJ4F+ub94LQ7zdC/7gR/dzBuO37ddDkpPv+AWP560SZ+9/a241hc4nE+n7TXyuKTmdlzNZRN4xnXrQpvqvqv/VRf2921vcL9jniNqXzPIcV5atX9bGheq8zH9C/YURcYnz5Hqwrb3WdC+q3NvYb5kPss5gn9ge+8f/uj3NmUuvTIuOIeXbez3k/4aXMP+aU6n7hve+XX4r0G/WguVXQ/5DOag4k7B98c86VRWdTcnLX5Vx6dcrIp/zPx3w/GTHGOkAe4hzjPvJMhvR3MCJ+JPQ05yqsh7iPOcC5v1ZU+F7YZZ0hjpqf63HOMJ7QYP+jjth3sKO4tDgXm40q+wL7tAd/RoL3BesB9w0b8S4S95Hwj3WCeUU/cf6wryddRtiJPCo58oj0WYe17If6NGU/4Z7Yh/2a5z1iPM97YL9TPOYssb+wLr98niIuymeT74XfrOO/89TzBJlxxMf8QGPZufJB8jOn1wXmOf3HOf1XGuwn2A+KH+cH6rLPiDj1GuFfT/gDGiUzksAHAAA="},"shape":[248],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3VUPUsDQRDdUsTCwlrzDwzEwu7up1iIWvoH/CjE2i4eBPRfxFTaqRBQERGrCIIQtFAUBQ2e83bn3e1O1CLPmZs3M/tmdsuyLA+K8+OvT/mn6GXyCzsbCW6JTSx/4B+3S+fcIXjm+7fP08uIjKPNvEJ321LPYlVX+2FfiGu2rn18LhjyBj78jCNuKH9T4vekDm0i8sDPvuCfn+xmG+L351I+cE7rJnV8XKjv3IuPZxz6Q/46/q6y4Ud8jM3WQ2Lb78x/UNR5Qn/BZvzSyqPWYb57by9q/vE6Lv+rH1t/fSzvhPLIt8jv0xpHnDE2/Yy3aPtz+YkcfHXlw+gV4tbUv9h68987xWsSZ20JMedI53LWf/8zz34x9P410aUhuKz6wIZ/QfSGHwjbuTAHq/9Z/1nzD5N45iGSx3zg5ZL1Uvlx3bge6x7N3mT3oltXEN+nbsN+Luie7j5def+OIuyBxLdl36B3W8+7r3o2VV/uCfRoCJ86EPEdddvCQ56L/kj1sHMOul+q3tSX5+U5nSMvxKMP1MVciTgH6ubyW/PS/NQdcejrVHVkXZ6r7od7ZPsO+7Oke8d94f5JC2gDf4r/3Zt072JdQbZ7QJv9xvsYx3P+xEOdE/SK58p5US/2z3njXsX3jveMe0AedMW8V6N7QTvuy94X7LfQ/L4NFBtC6Oh7F58j9rM/6A6Bcb7/zk9ezOf+Mz/2Le6Xcx3fgzDPWqdhxQO/Vd17+w6m+4C8oZ/0neK7Yt+PUTmo3pNfqEHlXMAHAAA="},"shape":[248],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[248],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p109144","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p109145"}}},"glyph":{"type":"object","name":"Scatter","id":"p109140","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p109141","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p109142","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p109151","attributes":{"data_source":{"id":"p109089"},"view":{"type":"object","name":"CDSView","id":"p109152","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p109153"}}},"glyph":{"type":"object","name":"Scatter","id":"p109148","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p109149","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p109150","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p109101","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p109128"},{"type":"object","name":"WheelZoomTool","id":"p109129","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p109130","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p109131","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p109137","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p109136","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p109138"},{"type":"object","name":"SaveTool","id":"p109139"},{"type":"object","name":"HoverTool","id":"p109208","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p109123","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p109124","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p109125"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p109126"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p109104","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p109105","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p109106","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p109107","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p109108","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p109109","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p109110","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p109111","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p109112","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p109113","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p109114","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p109115","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p109116","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p109117"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p109120","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p109119","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p109118","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p109121"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p109122","attributes":{"axis":{"id":"p109104"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p109127","attributes":{"dimension":1,"axis":{"id":"p109123"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p109146","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p109147","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p109143"}]}},{"type":"object","name":"LegendItem","id":"p109154","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p109151"}]}}]}}]}},{"type":"object","name":"Figure","id":"p109155","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p109094"},"y_range":{"type":"object","name":"DataRange1d","id":"p109157"},"x_scale":{"type":"object","name":"LinearScale","id":"p109164"},"y_scale":{"type":"object","name":"LinearScale","id":"p109165"},"title":{"type":"object","name":"Title","id":"p109162"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p109205","attributes":{"data_source":{"id":"p109089"},"view":{"type":"object","name":"CDSView","id":"p109206","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p109207"}}},"glyph":{"type":"object","name":"Scatter","id":"p109202","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p109203","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p109204","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p109163","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p109190"},{"type":"object","name":"WheelZoomTool","id":"p109191","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p109192","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p109193","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p109199","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p109198","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p109200"},{"type":"object","name":"SaveTool","id":"p109201"},{"type":"object","name":"HoverTool","id":"p109209","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p109185","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p109186","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p109187"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p109188"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p109166","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p109167","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p109168","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p109169","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p109170","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p109171","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p109172","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p109173","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p109174","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p109175","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p109176","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p109177","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p109178","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p109179"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p109182","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p109181","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p109180","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p109183"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p109184","attributes":{"axis":{"id":"p109166"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p109189","attributes":{"dimension":1,"axis":{"id":"p109185"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"3fd2ece2-e34e-483a-8d22-856ddbc2af6b","roots":{"p109210":"b60b2902-5248-43f7-b86f-48ce32a4eb3b"},"root_ids":["p109210"]}];
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