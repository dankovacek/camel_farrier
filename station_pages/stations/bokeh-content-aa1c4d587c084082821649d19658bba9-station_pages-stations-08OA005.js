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
    
    
    const element = document.getElementById("cf39ab20-661a-462d-a351-dc8f565aafa9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cf39ab20-661a-462d-a351-dc8f565aafa9' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.6.0.min.js"];
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
                  const docs_json = '{"ca2afca6-226b-4a47-9480-47688915de3c":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1329684","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1329685"},"y_range":{"type":"object","name":"DataRange1d","id":"p1329686"},"x_scale":{"type":"object","name":"LinearScale","id":"p1329693"},"y_scale":{"type":"object","name":"LinearScale","id":"p1329694"},"title":{"type":"object","name":"Title","id":"p1329691"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1329718","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1329717","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1329726","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1329720","attributes":{"selected":{"type":"object","name":"Selection","id":"p1329721","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1329722"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"GCNxrazPWkF30cxft89aQf7Fae7Dz1pBQ6XNoM7PWkEt7C816M9aQej9FJr9z1pBwIb5HATQWkHEAXTPDtBaQTY7XFIV0FpBexbK5mrQWkHfA7TycNBaQe1s+VeG0FpBIkj72ozQWkENW1RAotBaQVUyXMOo0FpBYK4QdrPQWkHKiwbzrNBaQWSBvKW30FpBS+/IKL7QWkEb9YTbyNBaQROYgefO0FpBLoRDmtnQWkE7Olcd4NBaQZo2H9Dq0FpBh502U/HQWkE3qgQG/NBaQW7hJ5UI0VpBUyPY+h3RWkERwcvuF9FaQRRop6Ei0VpBGm6FHhzRWkG5jmLRJtFaQeiuP04g0VpBIkkeASvRWkF1g/p9JNFaQU+X2jAv0VpBmsfKJCnRWkEHf6zXM9FaQRnUhlQt0VpBJgVqBzjRWkEiSR4BK9FaQWWoALQ10VpBrIzvpy/RWkFlV7sNRdFaQQy20BlL0VpBsszmZkDRWkFktjttTdFaQcZVDDl40VpBUexiyITRWkGRQHThpNFaQa6Ps2Sr0VpBRCzDF7bRWkF8LAabvNFaQU5DmBry0VpBSxnQJvjRWkHwG8umLdJaQX3BJyo00lpBj3/yQ1TSWkGmbVfHWtJaQY+6o5SF0lpB6vD4oIvSWkFz+7kHodJaQWBhL4un0lpBh3ZfDN3SWkEbRfz4ydJaQcPgcKzU0lpBP8zxKM7SWkG54Wfc2NJaQWCahEzM0lpB7Qf6/9bSWkGmc3p80NJaQQVb8S/b0lpBw+BwrNTSWkH3Qelf39JaQWCahEzM0lpB7Qf6/9bSWkEbRfz4ydJaQcPgcKzU0lpBBVvxL9vSWkGZc3yxENNaQZV+8C0K01pB+4adSCrTWkFMtSg8JNNaQY5TVaM501pBn5XAHzPTWkFyQVrTPdNaQYOdxE8301pBN8NfA0LTWkFBOcl/O9NaQRw+BudQ01pBurqJ2krTWkFAHOUAoNNaQdc2kYSm01pB849TOLHTWkF4KaW0qtNaQYT8aGi101pBGdh9VKLTWkFGtz4IrdNaQbfYr/um01pB01tyr7HTWkGVwRaopNNaQbty2Fuv01pBcBvxR5zTWkHyIzaUkdNaQUaDYYB+01pBKQuxzHPTWkGK0g9JbdNaQQJsZZVi01pBwtp8ekLTWkE4y77hV9NaQdzjQNVR01pBfqeNPGfTWkHwIO+4YNNaQdFjRiB201pBZauknG/TWkGcqVNQetNaQSkLscxz01pBz8TN55PTWkHXRndrmtNaQUw399Kv01pBUZNlO5bTWkG2LiLvoNNaQddGd2ua01pBKlw1H6XTWkEVEagSn9NaQYAdSU+p01pB0vy6QqPTWkH3KEGquNNaQYUpkSay01pBcZxX2rzTWkHxtqZWttNaQYBWOr7L01pBDD+GOsXTWkEzXiSi2tNaQZVpjJXU01pBXlw1/enTWkFmx3p549NaQbKdUi3u01pBqSKXqefTWkHpcnBd8tNaQfOuGM3l01pBOVfxgPDTWkFeXDX96dNaQZt+D7H001pBsp1SLe7TWkHkOS7h+NNaQb3D01Ds01pB87euBPfTWkE5V/GA8NNaQYD5regF1FpBwWbtZP/TWkHSFM8YCtRaQYTzkZwQ1FpBM5dHbDvUWkG7CxXwQdRaQZ7D6eBW1FpBiBy9ZF3UWkG+CN80iNRaQcH3vLiO1FpBgCrpIKTUWkGYF82kqtRaQZWvZbLf1FpB0LSZpdnUWkE3VshZ5NRaQRZzlmbq1FpB7Cv3vErVWkGb2/5AUdVaQQMCL+Sm1VpBsHlKaK3VWkGvulaVAtZaQSfFUIj81VpBn0O8WifWWkE0nobWINZaQRNh6CEW1lpBJ262nQ/WWkH0Qx7pBNZaQb/j6lf41VpBxe5ao+3VWkGyXOMW2tVaQTQTXmLP1VpBZlJiVcnVWkGt8eKgvtVaQaTHwxy41VpBLfLUs6LVWkH3rp4aidVaQej0NWZ+1VpBp0Q61XHVWkF0v9kgZ9VaQcRdzZxg1VpB4T4cNEvVWkGr2xWwRNVaQe1Bxfs51VpBB+Tlai3VWkH1fp22ItVaQZ7MnzIc1VpBpe0eygbVWkGkOSdGANVaQa2/7pH11FpBxj1/7NXUWkEYj6yg4NRaQYDyGQjH1FpBnKf1U7zUWkGqRmU/qdRaQfMVYHyz1FpBzuqcb63UWkF69bsjuNRaQY+vC5ik1FpBH5wnTK/UWkGqRmU/qdRaQUjXgvOz1FpBzuqcb63UWkF69bsjuNRaQeAi1Z+x1FpBnKf1U7zUWkHj7g3QtdRaQa3tL4TA1FpBP9+aRofUWkF9daz6kdRaQYDTzXaL1FpBUYm+woDUWkFWmeM+etRaQXmX8PKE1FpBX8EUb37UWkGMOSMjidRaQRgPjZJ81FpBP9+aRofUWkFWmeM+etRaQXmX8PKE1FpBLkerWmvUWkE3BbMOdtRaQWjAJH5p1FpBbNYrMnTUWkF3y8gdYdRaQXLtzNFr1FpBcHAhyl7UWkFowCR+adRaQcPOTvpi1FpBv5hTrm3UWkHXVp6hZ9RaQdnEpFVy1FpBcu3M0WvUWkF71dSFdtRaQfkX/AFw1FpBCHoFtnrUWkFs1isydNRaQYKyNuZ+1FpByyhcYnjUWkHrfmgWg9RaQe34rgl91FpBFvO8vYfUWkEIegW2etRaQSuiEmqF1FpBgrI25n7UWkFs1isydNRaQdyuJvU61FpB+sYzQTDUWkHoHWq9KdRaQf9HfQkf1FpBzlC3hRjUWkGsVg5q+NNaQelycF3y01pBqSKXqefTWkF/Dd0l4dNaQYBWOr7L01pBDD+GOsXTWkFB2LyGutNaQfwvfPat01pB0vy6QqPTWkEllQ+/nNNaQatzVAuS01pBJYh/937TWkEJ5s5DdNNaQduTLcBt01pBWAODDGPTWkEhjmZ8VtNaQQMxxMhL01pBXY4rRUXTWkHDQo+ROtNaQbVR+g0001pBkhdkWinTWkEdgl/KHNNaQTh70RYS01pBijlFkwvTWkEKRL3fANNaQeWzNFz60lpBws+yqO/SWkEg8S0l6dJaQZVzAxu00lpBwVuLl63SWkFydsEwmNJaQbam3imL0lpB+wUtw3XSWkG3Kty2b9JaQS8kiwNl0lpBAQQkgF7SWkGFDtnMU9JaQa2fdUlN0lpBG5zv4jfSWkFY7k5TK9JaQdgBFqAg0lpBTI29HBrSWkGwsYppD9JaQWLuNeYI0lpBqyMJM/7RWkFLGdAm+NFaQXopS1rN0VpBiK17ZtPRWkFht2J3vtFaQftQH/S30VpBLdP52pfRWkHktL5XkdFaQfMHwj5x0VpB0kP2wXfRWkGIohSpV9FaQZ9hQyxe0VpByOu1rSjRWkFPl9owL9FaQXWD+n0k0VpBBGYJiirRWkGs2WSbFdFaQcjrta0o0VpBUyPY+h3RWkG1dy4NMdFaQQa8TVom0VpBLj77ckbRWkFr+BLAO9FaQXCLUE9I0VpB2Z1nnD3RWkGqxpAfRNFaQbRSqWw50VpBqZXR7z/RWkFTm+s8NdFaQWv4EsA70VpBtXcuDTHRWkGW2j8ZN9FaQXH9XGYs0VpBqZXR7z/RWkEPVbuiStFaQbRnNtqD0VpBLH84J3nRWkHtwKUthtFaQZQGp3p70VpBsPAEucHRWkH4OvEFt9FaQUhuNIm90VpBQjIi1rLRWkHFB5Flv9FaQeIjfrK00VpBeNfANbvRWkFu6Jccm9FaQWq7EyOo0VpBxQkJcJ3RWkF3TB0SvdFaQb0jM8XH0VpBpu55SM7RWkHby2GVw9FaQd6wpxjK0VpBxQeRZb/RWkHhBtboxdFaQXjXwDW70VpBsPAEucHRWkH4OvEFt9FaQXdMHRK90VpBaDoLX7LRWkFHbk3iuNFaQebVPC+u0VpBeNfANbvRWkFEba+CsNFaQbQy2o620VpBKGzK26vRWkFoOgtfstFaQYzt/Kun0VpB5tU8L67RWkG4AjB8o9FaQYx+mAuw0VpBggOLWKXRWkEobMrbq9FaQchqviih0VpBKIti0c3RWkFSkkoew9FaQZKlIMfv0VpBQVtIevrRWkFNjkEEDtJaQe31ElED0lpB+1j5YxbSWkEozcewC9JaQe3mDEcl0lpBCxzWkxrSWkEiqi4XIdJaQftY+WMW0lpBSWk4cBzSWkHWuwS9EdJaQdGQZ90+0lpBfcEnKjTSWkEOwGw2OtJaQXWULoMv0lpBMqCLBjbSWkFY7k5TK9JaQaWfCFo40lpB8BvLpi3SWkFgzg6zM9JaQWLu0v8o0lpBdZQugy/SWkGwsYppD9JaQafa4OwV0lpBzHivOQvSWkHp3kLJF9JaQSvVEBYN0lpBZX5mmRPSWkFi7jXmCNJaQbCximkP0lpBaJtbtgTSWkHMeK85C9JaQfYEWNP10VpBupiQ3/vRWkEiZWgs8dFaQZQRuK/30VpBtVeR/OzRWkE9HuB/89FaQRXeuszo0VpBtL4IUO/RWkFC+OSc5NFaQVYeGqnq0VpBlPv39d/RWkHS9kN55tFaQVtL7V/G0VpBtDKo3L/RWkEx3IV2qtFaQdFdxvmw0VpB1464RqbRWkG3WHrDn9FaQUKhbl2K0VpBGqlMUYTRWkE6SVTrbtFaQV7+cfd00VpBnFR5RGrRWkGZuxXOfdFaQZH0GRtz0VpBLH84J3nRWkHBWz50btFaQV7+cfd00VpB9G+EkV/RWkEcuOaXbNFaQaUB8eRh0VpBtx4M8WfRWkHbCxg+XdFaQZxUeURq0VpB9G+EkV/RWkE/4bQUZtFaQTl2wWFb0VpBQkfbbWHRWkE/QBFVQdFaQWQ1O9hH0VpBwXFSJT3RWkEIgXuoQ9FaQQc3lPU40VpBc2C8eD/RWkFsCZJH/9BaQdWCmVMF0VpBPaD67e/QWkESIBNx9tBaQdcKR77r0FpB2aReQfLQWkE1CZSO59BaQWC9qhHu0FpBU5vhXuPQWkHqheNq6dBaQdVNWAXU0FpBcdFqiNrQWkFwkajVz9BaQTkvuljW0FpB47LNjavQWkFmQsUKpdBaQRY4aqWP0FpB+RFuKJbQWkHI6MN1i9BaQdzcxviR0FpBXBzY4HHQWkFjbcPsd9BaQRgtiIdi0FpBrx6he1zQWkHr5epjPNBaQeBL+uA10FpBHZTteyDQWkH1WSrtE9BaQZMRrjoJ0FpB6G/ItwLQWkE3FHGg4s9aQd7E7I7Pz1pBuJGI3MTPWkHEmLFZvs9aQVV1U6ezz1pBKCMoKrrPWkEqect3r89aQT5Bn/q1z1pBrhBESKvPWkH/1gdUsc9aQc9JrqGmz1pBVXVTp7PPWkEefKJCns9aQebJ07+Xz1pBHTqo9mzPWkH7v215c89aQS78Kcdoz1pBV8Jt2HvPWkG5Cycmcc9aQaP2prR9z1pBSJhfAnPPWkEYI3GtrM9aQQ=="},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1329727","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1329728"}}},"glyph":{"type":"object","name":"Patch","id":"p1329723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1329724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1329725","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1329738","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1329732","attributes":{"selected":{"type":"object","name":"Selection","id":"p1329733","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1329734"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1329739","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1329740"}}},"glyph":{"type":"object","name":"Scatter","id":"p1329735","attributes":{"x":{"type":"value","value":-14710636.937400436},"y":{"type":"value","value":7028257.60852658},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1329736","attributes":{"x":{"type":"value","value":-14710636.937400436},"y":{"type":"value","value":7028257.60852658},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1329737","attributes":{"x":{"type":"value","value":-14710636.937400436},"y":{"type":"value","value":7028257.60852658},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1329748","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1329742","attributes":{"selected":{"type":"object","name":"Selection","id":"p1329743","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1329744"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1329749","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1329750"}}},"glyph":{"type":"object","name":"Scatter","id":"p1329745","attributes":{"x":{"type":"value","value":-14710595.749188842},"y":{"type":"value","value":7028257.60852658},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1329746","attributes":{"x":{"type":"value","value":-14710595.749188842},"y":{"type":"value","value":7028257.60852658},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1329747","attributes":{"x":{"type":"value","value":-14710595.749188842},"y":{"type":"value","value":7028257.60852658},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1329692","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1329705"},{"type":"object","name":"WheelZoomTool","id":"p1329706","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1329707","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1329708","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1329714","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1329713","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1329715"},{"type":"object","name":"SaveTool","id":"p1329716"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1329700","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1329701","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1329702","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1329703"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1329695","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1329696","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1329697","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1329698"}}}],"center":[{"type":"object","name":"Grid","id":"p1329699","attributes":{"axis":{"id":"p1329695"}}},{"type":"object","name":"Grid","id":"p1329704","attributes":{"dimension":1,"axis":{"id":"p1329700"}}},{"type":"object","name":"Legend","id":"p1329729","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1329730","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1329726"}]}},{"type":"object","name":"LegendItem","id":"p1329741","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1329738"}]}},{"type":"object","name":"LegendItem","id":"p1329751","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1329748"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"ca2afca6-226b-4a47-9480-47688915de3c","roots":{"p1329684":"cf39ab20-661a-462d-a351-dc8f565aafa9"},"root_ids":["p1329684"]}];
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