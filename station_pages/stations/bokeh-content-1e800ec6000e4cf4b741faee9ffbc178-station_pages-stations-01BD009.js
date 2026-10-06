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
    
    
    const element = document.getElementById("fbe59701-e6e9-46cd-a0b7-74df20be16a1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fbe59701-e6e9-46cd-a0b7-74df20be16a1' but no matching script tag was found.")
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
                  const docs_json = '{"1a30e37c-a76c-409a-840c-9fd90fefa5ee":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p3712","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p3713"}}},"roots":[{"type":"object","name":"Column","id":"p3835","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p3717","attributes":{"text":"&lt;p&gt;&lt;strong&gt;01BD009&lt;/strong&gt;:\\n        163 revised days; 0 removed.\\n        1.75% of the earlier published daily record changed.\\n        Affected interval: 2018-05-08 to 2023-09-30;\\n        longest consecutive revision run: 56 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p3718","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p3719"},"y_range":{"type":"object","name":"DataRange1d","id":"p3720"},"x_scale":{"type":"object","name":"LinearScale","id":"p3727"},"y_scale":{"type":"object","name":"LinearScale","id":"p3728"},"title":{"type":"object","name":"Title","id":"p3725"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p3768","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p3714","attributes":{"selected":{"type":"object","name":"Selection","id":"p3715","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p3716"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DB1cOAAAAwK89JS0UQqSShqiMdkYoVGRGaVFoUmQ1tJOVjCK/tLv3LhAIBIIMNsRQwww3wkijjDbGWLcZ53bj3WGCiSaZbIo73eVuU01zj3vdZ7r7PeBBMzzkYTM9YpbZ5njUXI+ZZ74FFnrcIk940mJLLPWUpz3jWcsst8JKq6y2xlrPed4LXrTOS172ivU2eNVrXrfRJpu94U1bvOVt73jXe9631Qc+tM12H9lhp1122+Njn9hrn0995nP7HXDQIYcd8YUvHXXMV7523De+9Z3v/eCEk0457UdnnHXOeRdcdMllP7niZ7/41W9+d9UfrvnTX/72j+tu+Nd/bvrfLessCU+MAgAA"},"shape":[163],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLd0gVUBiG8Q/FyIyiYQsrSZQkwdAcZdpJLfPqTTO3aWrDaNiuG0adIqFdYkmGYNhUUwtDUhRPRkVGYiQINm1HcUFBBKPBffrrx3mf74ioh92B+yJFxNdrAZqtQQ6NdzvqUxOCHaqBdShpTWhaR4fQ52ShOl6HYv/7f2++Fso+exh1on0h7ya1iDuPUjRHPqP+GhJGt55EaXyNZpr/YvqhI6g+vUSx+ITTG2yo3Z+hKpoZQe/fjmZ5B+rbk5fQJxag2JrRvHFT9KgcVNV3UMY7L6XvSUHddxOVGkG5ER9Jd6tEvXMAVW9UFD28DE3VN9Sjw6LphWdQet6hWRiwjF55DJVLL8oW3+X07iLUwV2oKjxj6E670RQ8Qv186gp64GaU8lY0f8bF0tfnoepsRJk/ykK/mI76Vw2qvN8oTxLi6H5VqH0jrPRz51GGPqDJDFrJ7tOHctovgX3gEOq0F6javBLpXvtQ22esYk/ehtLSjrp4fRL7jyaUVa6rHZqmLNQe9aiOSjL9WxIa63XUjcOopltS6Icr0Hyyo7YsTaXfKUWZ8gVNUWgavf8kqpg3KHX+6fSJR1HbelC99cmgRx9AU/0M9fhZmfS9O1BedaBR7ln0GwWoxrag7Bq7ht6bgzr8Lqqrztl011Q0hbdQ94ygWmTNoV+pROMyiHpL9Fr6izKUkO9oKsJy6U5nUW16j9IVkEcPLEZd3ovqr28+fcPB/2Z5x9ocd2Y/ap9OVKc9LA5lsBBN2gPUbZPi6F4bUU7cR2MfE09PzkbV0oDi6WSlFyejCsivZr90D83vUTX8W5eB6mktiv8fNBcSa+kjVahyh1Aex9ymz7uMuuQnquGIOnp2CZqOj6jnBtfbIv8BnRzpxhgFAAA="},"shape":[163],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12UPYgTURSFn4IWaY0/8SfEdY1ZWTEy/qC4+syuZl3DYhSVYJBRcEAQiWwjqaaxE7awSjewYJnGZjuHraexCtslzTYpZet477lnBHeaj3Pvufe9N/PuOKdP3wO9L8bKhtF/No57xjrpP9H3kfxgdKQn48ji6Xv63tH3lpqMQ9PxG7JL0u9zMu9fW9532OeVMhl0XirTrPVC6YPvz00vPjP956kyjI6CPthY97PZ7FeWtVQng901iwePmUc8jKqody5uM79u2j2x/N6q9Wk1GX+kTAalh6bTZct/azAP+iB4oEyzzBtbYDIY3FPKeneVPvh55x8P6372blPfMp+7aTq4QV5nPFCK/5pS9gNKvzp9dX8I+7hK/39a9nGF+UWrFy31YRShjzCvy30L7FNj3aUDukaNuPTPNeqk32Uy13l9ld9pnvXz7H/B+pTmlPG0Dcp5zysrX6cVZVo+AsY7+2Wln/SNhdE55LPsrDLc3DmjTJoT0C10jc6BcXEISn0eP6260t08pZQHlD4lZbpfA8dbPTBeKsA/7hfNP9o6oTrcLh9HvL0NVoZN+MSPOul3Ero4RF7eW1HpC6Nj4KSPPlJvvmkblL5g0lvK18c55T2hv5wbeam380dRVXX+HWSdi+b/Pcf7zfscr/B7LGte7hUo89Qwvct73QJlrnCvZWVQ7hu1y3Xua5jPYZ2DcyCh+4yD0oe6g7mTOcU8yn9gjfvlHAer9MMn+8V8ip/n8SumI5wjjH40/F+dvJrRGAUAAA=="},"shape":[163],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12TO2wTQRCGD8rIEgXmYR7hSEhiowCGAyEExhsTMI8gHF7iYaQLEpaQEDJKA6muSYeU2p0lS5RpaNxxSn29RWc3NDSRohTQmH/+mZWAaT7/s//M7Pp2gwCx/ckJgvijsryqbHxQbreVzhi/N/3O+FYZGmNjt6X54Rtl8FqZxqZXrN50+kp18lIZmz/0dbbuXrjxeFyNomfW56nQRdETYbdTeKx8/lD5q6HsPJC6b1l2X7m0pPXpXWVwR+ii1bqReRftsN5Fjxpal2Nd3JqlHyt163tT818WTd8Q3e10asI0+7ygzJFxq+WECBL7rrq9zFc0n1wVpll25W/CR424bP5Lol309aIxEmLuBWEQJOctXxaif9n2d854VvLw/6PhOyN5xLzbI/0jr9kP4f3zouEvma9oeu4/XTQ9Z3O9Lokf808bvfb1s5JHzFj9KfrqK9NkuzIldKM1MqlMkGFz30lhMJgOhfCdEA6X+5PkWp5EHDceE8b9SRL7OSrEuclw/SeZ5DfJdLd4RIh+h4XwkcnWbkEYlJrKQY/EfPpB+vBdDwrDzfoB5usjEufwPtZh7iHmJwZcjze28kLM2S8MBj32QT196eQ6ib7ksNf283musLnB/qjX9eW+Py//Z34HfSczot3o95TmC7zfyCwqE7vf32uWJ3EPeb/xy+57xvuNd+XvubFTlTzu84LNq6lvx/e/7vQ9XFP+8Jp1CCPeHwT63NP6iO+W75PnyN020oe4ZeR5UGfzHM+DfdbcH6IScNYYBQAA"},"shape":[163],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/62Tv0oDQRDGT1EIQSHqA+gbRDwLu/UNfAQr1zxDICSdZex0DzEWaWwEQdBr3GsDhwipUhkQBNEioKJGzTkzu3O5rKIIpvn4zX7zZ/cmnoe/niYZqrD832r7eNFoP+acjRecc56PfYWoAAXimH2z5JfS6JI/Rxwoo8ybcJ7DA8/osj8TvSRJsiFNnUBNU57nTVk1ccwfg2gcD/PQxX4p89Zv5g/UJM13EU9QXMrxqAt94KexTkkO6B321CvprtVB8qx7YPL9h5HvcRnfE6MukP+WuCRvNNb1/Wvr76aKzXZUR7uKeSt+W89brYAeqJb1tTTzGyQ2VGg51OdUj31cl/2hLsN5XYXC5Ifir2z7CVe53heFfsX8qXgHrd4diz7oVfmEuA7M8QGwODsi3oI48how6yNwQx2m/AG8/sM5+02/pu3bFBx/wv5Qz2WOu3kus+83v7nXftqf67jzuXPwvdnP7L47fz9+1xrdq5PuVwRczOwdILyjOV+E/aL3h/3BuhqU2fhG96gBe9WHP0aU8fH+JTAg7iFrhfqY/Kxyfdxv7F+l+dq6BryaUe7Pvu90G+7xCSUP97EYBQAA"},"shape":[163],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/z1TCVCTZxCNHCICVSMQSSKIAqL1AMdAwpFFKdZaxKtY5BSMNRFtIeAFrYooSHHARqyBioQqWlG0dDyKRr6PKUgVESFBwiFgTvIn4RBoQLQ26pSdndnZmTe78/a93aCvDdPXPkXtigDLtbHPUAEQppQC34Cj/b3aYFW6tcH9VhvE5jZzum/LoPQr4UHgdwC9PtmUXRBvn8Rlt/UA6UP0wrnU3c7KGz3A/wB4CeIgjzobjhy+p8ZXXZmlRiez34cR0RdR5flRGsQe682cwR5DDzYkP5p53Ry71PxgYZxli19t8xXOL1Ghm7EP0kYJFfq49zW61+p0VRhlh4mEnWM+v87Eke9h+2ZjBYmhURfYY4JnGWSW44gPpiRql0xzwj7eXj0GLhV7eGPi8AIavjm4O6fWno7hnTXhy6bjqLVOWvlBOr57r7TicD4Nf+58bQe9nobPxERYCp3p+EJ5fUcgn4oFbl8I9nRSsbBqvj85jY5ZeQpmKJeG50X/lPhjBhV/cjwlbg12ws0hlJiLuXNwXQL1F7OyOfh63Xph9joK3ltcutr3tANWMfMUfLoD/pYtpT0pImO78Cei5bazcYFTvODyLjKuKEi5sj1uxuQdKLmvX8Qbp+P/6+jjvJ6u29Mwi5YhHBZZYVZqc8i+ZkssoStXeXWb4fHQ/VlhjeaY9jjR80wbCbsFeK482TsF1ygC0y/eMcN2z7Ly6dVv0AR/WZVP6VuUMEKErs8cQSbx8L/vhid7EWPLxELT/cWygLThSjXasEvIci0ZRYOMq2XTOWb4wh9DEdL4EbTauiGwwqRrsvSbh6d2aqEzPDy8spwAmwN+QVY/6yZ7i3N/HWHwCaBnLeFkSHQQuqa/zcWCgKOmxaJCLQgiQwod2H0w+/IJeuIKLVybu/qQeJsOpraEUNZTDHA/aoA8UtsPG014C9IgzLAh7el/Z4DehibeFtwHrfdZDgWvdNBRvlnGsNJCCsuxgJlGgPu0FxFrxjSQN+VkY+OgHpzcHwbsMM33W+zSdF+sBfGyzR5aphq66cjIK9fBjTrt8Te5OhC1djFHZ+nhxD/kjk9vaSAs82tXebUOju7vili6TgPtOcUyVqUCLgV6ZTfKlGCi/YH33ANJIT6yPiBzea2vvtPCom7HAR9PLUQJkk61nOmDWPtdC5cHq+Cs7JCMU6yG7aXPB+xMvH97nWAoFmiAEjuViI7sgwXBAQpKvhbWkbiMw6dU0EmuXYiLNXD9dNXWOx0m/LFObkOkAsz2pKcXPlRD5YAfbjirAg1jd0ZNsg6yzh2TrHBXA5V8dzwsSgtbNvkzbCVqaGK/7FAvNUD1/pd/MzNVUO9aERxjJICyPWzTRoF+UoeIEnKwW6kB7NoXS46s1MHMypDz4zb9KHPYm+mSOYzE1owcG9PfCijyslVDI4htWDx9XsQQWmSrdbBQEkhfEu3udaQFeVuF2rW+bUGOManNdRwJ8jY6ezRhxaTfzF+YWzQVyVG7alz3ZvwZMr2Z26NDT5HxS2rDZ4QU/dmY4NeQ+hwlqs+nLCuToku8vCRpkBJNDL/3rRLpSf6ie9xO5MibeJItqEdn528tjvGVo7HcGJFmTI72Bdo/ErcqUFwh723R70oUt9e4qWi0CylCixwJk69rJBXjrrc0iEPCy6dU96EdHqk9BzyH0H/R2bubGAUAAA=="},"shape":[163],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p3769","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p3770"}}},"glyph":{"type":"object","name":"Scatter","id":"p3765","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p3766","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p3767","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p3776","attributes":{"data_source":{"id":"p3714"},"view":{"type":"object","name":"CDSView","id":"p3777","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p3778"}}},"glyph":{"type":"object","name":"Scatter","id":"p3773","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p3774","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p3775","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p3726","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p3753"},{"type":"object","name":"WheelZoomTool","id":"p3754","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p3755","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p3756","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p3762","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p3761","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p3763"},{"type":"object","name":"SaveTool","id":"p3764"},{"type":"object","name":"HoverTool","id":"p3833","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p3748","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p3749","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p3750"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p3751"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p3729","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p3730","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p3731","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p3732","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p3733","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p3734","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p3735","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p3736","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p3737","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p3738","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p3739","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p3740","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p3741","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p3742"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p3745","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p3744","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p3743","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p3746"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p3747","attributes":{"axis":{"id":"p3729"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p3752","attributes":{"dimension":1,"axis":{"id":"p3748"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p3771","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p3772","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p3768"}]}},{"type":"object","name":"LegendItem","id":"p3779","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p3776"}]}}]}}]}},{"type":"object","name":"Figure","id":"p3780","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p3719"},"y_range":{"type":"object","name":"DataRange1d","id":"p3782"},"x_scale":{"type":"object","name":"LinearScale","id":"p3789"},"y_scale":{"type":"object","name":"LinearScale","id":"p3790"},"title":{"type":"object","name":"Title","id":"p3787"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p3830","attributes":{"data_source":{"id":"p3714"},"view":{"type":"object","name":"CDSView","id":"p3831","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p3832"}}},"glyph":{"type":"object","name":"Scatter","id":"p3827","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p3828","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p3829","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p3788","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p3815"},{"type":"object","name":"WheelZoomTool","id":"p3816","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p3817","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p3818","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p3824","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p3823","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p3825"},{"type":"object","name":"SaveTool","id":"p3826"},{"type":"object","name":"HoverTool","id":"p3834","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p3810","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p3811","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p3812"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p3813"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p3791","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p3792","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p3793","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p3794","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p3795","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p3796","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p3797","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p3798","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p3799","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p3800","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p3801","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p3802","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p3803","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p3804"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p3807","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p3806","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p3805","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p3808"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p3809","attributes":{"axis":{"id":"p3791"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p3814","attributes":{"dimension":1,"axis":{"id":"p3810"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"1a30e37c-a76c-409a-840c-9fd90fefa5ee","roots":{"p3835":"fbe59701-e6e9-46cd-a0b7-74df20be16a1"},"root_ids":["p3835"]}];
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