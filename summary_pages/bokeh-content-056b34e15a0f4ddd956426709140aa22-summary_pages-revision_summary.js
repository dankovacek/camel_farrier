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
    
    
    const element = document.getElementById("cf297679-f2e0-4873-8ca8-a5c13c958a0b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cf297679-f2e0-4873-8ca8-a5c13c958a0b' but no matching script tag was found.")
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
                  const docs_json = '{"c63f28ac-a62e-4b6a-9460-8d02be917801":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p790195","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p790196"}}},"roots":[{"type":"object","name":"Figure","id":"p790197","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p790198"},"y_range":{"type":"object","name":"DataRange1d","id":"p790199","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p790207"},"y_scale":{"type":"object","name":"LinearScale","id":"p790208"},"title":{"type":"object","name":"Title","id":"p790200","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p790239","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790233","attributes":{"selected":{"type":"object","name":"Selection","id":"p790234","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790235"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+3Xe1BUdRQHcB1fU4YoomgGgZFiiBMDKiPGVyEfRUrGSIikKRHgi5BxAgYLUqTAIBk0U0SQsS2NRxgChoqgIPKSl6QkIaJLwN4DGBAi1u93Yec2O7MBCU7OeP/5zN7d/e25Z885v3tl9cvn/GUgx3i/eSet3pXDIGm7+z5FAyZvWnEvzL4J51795pUp+5sQTbIc2/kKBCw/v1PXQoG7CS/X7YpW4Oxtbd28OwoMEw8BtY46qSXMX5eO8BlrKMC2YaT5hHkCNKPMjv00X0BbVWWg91IBmWv1F7e4CNitYZcY6SpA18LtdQ9PATbxHtVeIQLCs9qMnMOF3t8XMM4k+QjJBAxfwb8hQL7XSKFxTkDGKC1t5AgoLOCHgEQeViFbN7rwRHGFZPx9562XHgpQ6vVDaJX7MMLasgx2BYRL4aYfmxgQ0hJHsKUJ07f4+B2fTfAMHMnekjQTD+rNh+TG2GvmZEGYYT8qLmIBIbJ99PqDbxEsxYAJtpfHvHZ4NaHc2HVqrSMhtNu1o24DIeqiPss4wdDok73pmyVHB+63Cd1CEMP0JDzrziMiFE1ddWOaP8FhZ8LpjZ8SghpXpekFEXj2mpkHkp9jl0Zw+sDyN7svCXriH0mQ+ebOWhAhKaYxkuDfmvT25kOS68RA2fV3t++oiSKYXfxxzrY4Qgd7NeE44eeZmmNTvpU8EjAja4+MoLRAyMu2jickLLvlp51A2N6p+XtqouTNlN3+V08Rzo/jBUGIdTvV4J1C2JV5JXbJaQLPjk6q5Kz88bln0giCP+auOyOZzKIansHyHBzkVPYPH9rcVzRmEpTyqM9eICjN5mWVRRDLKYfAr8Y3l9DiUvCe7WWCWA55kimTuvIF9vrgNi0WIsGPpzFf0pmXcQFBVStfx+/mFhL0Sz3Xjyki8Ko8UUxgJy1XlkiGhNW1vlhK2Crv+r7lX7RbNHFDdhlBqSlvy3KC0omti4s/rCAobXtzzR6La4T0B8F/VFUSDq8+ejL+F0mxfK4TVLV+/87V6VUEpYbiAqwu1Vi/ybj965sEVa+wKvCoZvX7Aq/E/hu2w2uaRg1B1Y+KPi+tZuffmRnzRdIt9ZoHpC76rJagqs71og772wSlnaZ8ghGqQngjSvbMM+qda317dOHs8kN3CeoU21hOUOoiOFlb1RPUuWQZ7xhCX4ppYJ9T5zOdMayzCKo28XHRSOjLIjY9HZrYvFFjEh+TCsJAjXDmnUlQ1UEc8GyuDVBx22gm9NfnxY2H0JcPpnhXarUS+ivbtFgnE4bKC3w83iP8V+Ne4g1MGKhBbFqvaWP7zAB1q5CzycD2pUHyDXaX0s3We1SNgyezSUAYLDVqTL6K+ZMwVJIFnwSER7VkH288wuOS7+qTughPigf4mGbxPm59oo6xziT833RqS78R0s3uI58wF67kFU54ak8e9GT8AY89Bzx1UPLQ85zb3Pu8O/T+DTU/AtSgDwAA"},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p790240","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790241"}}},"glyph":{"type":"object","name":"Line","id":"p790236","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790237","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p790238","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p790250","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790244","attributes":{"selected":{"type":"object","name":"Selection","id":"p790245","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790246"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+3Xe1BUdRQHcB1fU4YoomgGgZFiiBMDKiPGVyEfRUrGSIikKRHgi5BxAgYLUqTAIBk0U0SQsS2NRxgChoqgIPKSl6QkIaJLwN4DGBAi1u93Yec2O7MBCU7OeP/5zN7d/e25Z885v3tl9cvn/GUgx3i/eSet3pXDIGm7+z5FAyZvWnEvzL4J51795pUp+5sQTbIc2/kKBCw/v1PXQoG7CS/X7YpW4Oxtbd28OwoMEw8BtY46qSXMX5eO8BlrKMC2YaT5hHkCNKPMjv00X0BbVWWg91IBmWv1F7e4CNitYZcY6SpA18LtdQ9PATbxHtVeIQLCs9qMnMOF3t8XMM4k+QjJBAxfwb8hQL7XSKFxTkDGKC1t5AgoLOCHgEQeViFbN7rwRHGFZPx9562XHgpQ6vVDaJX7MMLasgx2BYRL4aYfmxgQ0hJHsKUJ07f4+B2fTfAMHMnekjQTD+rNh+TG2GvmZEGYYT8qLmIBIbJ99PqDbxEsxYAJtpfHvHZ4NaHc2HVqrSMhtNu1o24DIeqiPss4wdDok73pmyVHB+63Cd1CEMP0JDzrziMiFE1ddWOaP8FhZ8LpjZ8SghpXpekFEXj2mpkHkp9jl0Zw+sDyN7svCXriH0mQ+ebOWhAhKaYxkuDfmvT25kOS68RA2fV3t++oiSKYXfxxzrY4Qgd7NeE44eeZmmNTvpU8EjAja4+MoLRAyMu2jickLLvlp51A2N6p+XtqouTNlN3+V08Rzo/jBUGIdTvV4J1C2JV5JXbJaQLPjk6q5Kz88bln0giCP+auOyOZzKIansHyHBzkVPYPH9rcVzRmEpTyqM9eICjN5mWVRRDLKYfAr8Y3l9DiUvCe7WWCWA55kimTuvIF9vrgNi0WIsGPpzFf0pmXcQFBVStfx+/mFhL0Sz3Xjyki8Ko8UUxgJy1XlkiGhNW1vlhK2Crv+r7lX7RbNHFDdhlBqSlvy3KC0omti4s/rCAobXtzzR6La4T0B8F/VFUSDq8+ejL+F0mxfK4TVLV+/87V6VUEpYbiAqwu1Vi/ybj965sEVa+wKvCoZvX7Aq/E/hu2w2uaRg1B1Y+KPi+tZuffmRnzRdIt9ZoHpC76rJagqs71og772wSlnaZ8ghGqQngjSvbMM+qda317dOHs8kN3CeoU21hOUOoiOFlb1RPUuWQZ7xhCX4ppYJ9T5zOdMayzCKo28XHRSOjLIjY9HZrYvFFjEh+TCsJAjXDmnUlQ1UEc8GyuDVBx22gm9NfnxY2H0JcPpnhXarUS+ivbtFgnE4bKC3w83iP8V+Ne4g1MGKhBbFqvaWP7zAB1q5CzycD2pUHyDXaX0s3We1SNgyezSUAYLDVqTL6K+ZMwVJIFnwSER7VkH288wuOS7+qTughPigf4mGbxPm59oo6xziT833RqS78R0s3uI58wF67kFU54ak8e9GT8AY89Bzx1UPLQ85zb3Pu8O/T+DTU/AtSgDwAA"},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3VeYhVZRjH8RAJkYgQsbIyMzNDQiRCJOShbDcrM0REQkJCosWszMwsMTGpMCuX3HLfMhtHc19mc/YZ7zp37ty5c++5527nnk0zK1Oj87597z+izpz7vs/z+/zO9X2XIlNeny3X9Z/z5J8lb57+4PuF/P1z+WTwwWeMRV/w71/Kx9aocQMOfM3/fyuPZV76Zt073/FzP8jJ527pN2bFWn5+vUw40rzg7E8b+L1NcnzYcnvq8S38/lbZ1DC8av7cbTxnu6SuqgPs4Hk75a6x6ZE3L93Fc3fLzDnqG/fw/L2y4Uf12cf37Jdk51/TzF0/830H5M7+0299uPoXvvegzNAH+pXvr5IXxq98fHahinMcEmeqOuEhzlMtX71VurbvUjXnOixjVgwJvuIw5zsibdueOnr5xhHO+Zuo6d3R/yjnPSoDEzvmTRx4jHMfk/1qzLcd5/zH5Xk1riEnuMcJ0eO9+yT3OSnqdKERp7jXKXlo1qq6K6NPc7/T0hJMd+jYM9zzjMxd7S6WR89y37MSPCwY2TnufU5eNXdtbBhew/1rZGdwusSOGuZQI3/ciC20RtUyj1p5Ug+glrnUSnC5YKB1zKdO9OOq6phTnTyiP/XMq16W1bQGE6pnbvUSDW4/Y0ID82uQ+/XCG5hjg7yvL3CeeZ6X+iujgxufZ66NMkg/sJH5Nop62pHmRubcJNWb/T2Nk5uYd5Oo6SY7m5h7s7yiA9jM/Jtlu1pfrJk9tMjvaj0zWthHizyhxp9qYS+tosf7Wiv7aRVjkQLSyp7aRG1v5pw29tUmS9dMCibYxt7aJTxCXbid/bXLfUH6V7vt7LFD3lPrmNfBPjukVo3vcgd77RR93QWd7LdT9PGudrLnC6Ift/gC+74gN+lPiL2HZG/j5CDxIfYfkpcDvYOWhchBSP4O9GxsCJGHkGwdqgCGyUVYntUXDpOPsFwMpj1+ZZichGV98LSa1jB5CUswrKASIuQmIkpTZEqE/EREpXnWqgg5iojmGIqQp4joehkUJVdR0fymRclXVHQ9rImSs6hobokoeYvKZxpkjNzF5EG9oBj5i8kFVRcbY+QwJh8pTukYeYzJvaquhsXJZVya1Phmx8lnXN7VgYyT07jcrgsoTl67RD9uZBe57ZI39KeL/HZJUE5BYrvIcZeoNC60ushzQtT0+o1JkOuEBJcNApUg3wlR7Tz4YIKcJ0S13WY/Qd675V/FeVw3ue+W3Yrr/G7y3y0vakDdOOiWPxW3K914SMoWxWl8EhdJeVofMImPpHiKw8kkTpKyVsX9WhIvPaLjPLEHNz2i47qkBz89ouNX04Ojnv/j0i+Fp5To9U5K4Soleh3LU/hKiR5fYwpnKYmr6w7oxVuvfKqf2Iu7XnlAD7AXf73S0a4+vTjslQ91waXxmJZ79Asnjcu0nFevq9VpfKblbR3oNE7Tol+Xg/vw2if6dTC9D7d9ol9f6/rw2ye6/pN9OO4T/bocmsFzRnTdz8rgOiP6dbY5g++M6HrPZHCeZe9ZvGfZfxb3WXKQxX+WPGTpgSy5yNIHWfKRpRey5CRLP2TJS5aeMMiNQV8Y5MegNwxyZNAfBnky6BGDXBn0iUG+DHrFIGcG/WKQN4OeyZG7HH2TI385eidHDnP0T4485uihHLnM0Uc58pmjl3LkNEc/5cirSU+Z5Nakr0zya9JbJjk26S+TPJv0mEmuTfrMJN8mvWaSc5N+M8l7np7Lk/s8fZcn/3l6L4+DPP2Xx0OeHszjIk8f5vGRpxfzOMnTj3m8FOjJAm4K9GUBPwV6s4CjAv1ZwFOBHi3gqkCfFvBVoFcLOCvQr0W8FenZIu6K9G0Rf0V6t4jDIv1bxGORHi7iskgfF/FZpJeLOC3SzyW8lujpEm5L9HUJvyV6u4TjEv1dwnOJHi/hukSfl/BdotdLOC/jvIzzMs7LOC/jvIzzMs7LOC/jvIzzMs7LOC/jvIzzMs7LOLdwbuHcwrmFcwvnFs4tnFs4t3Bu4dzCuYVzC+cWzi2cWziv4LyC8wrOKziv4LyC8wrOKziv4LyC8wrOKziv4LyC8wrObZzbOLdxbuPcxrmNcxvnNs5tnNs4t3Fu49zGuY1zG+c2zh2cOzh3cO7g3MG5g3MH5w7OHZw7OHdw7uDcwbmDcwfnDs5dnLs4d3Hu4tzFuYtzF+cuzl2cuzh3ce7i3MW5i3MX5x7OPZx7OPdw7uHcw7mHcw/nHs49nHs493Du4dzDuYdzD+c+zn2c+zj3ce7j3Me5j3Mf5z7OfZz7OPdx7uPcx7mP84vyH1os6LSgDwAA"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p790251","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790252"}}},"glyph":{"type":"object","name":"Scatter","id":"p790247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p790248","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p790249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p790259","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790253","attributes":{"selected":{"type":"object","name":"Selection","id":"p790254","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790255"},"data":{"type":"map","entries":[["x",[0.9951749999999999,0.9951749999999999]],["y",[0.01,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p790260","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790261"}}},"glyph":{"type":"object","name":"Line","id":"p790256","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790257","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790268","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790262","attributes":{"selected":{"type":"object","name":"Selection","id":"p790263","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790264"},"data":{"type":"map","entries":[["x",[0.7229,0.9951749999999999]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p790269","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790270"}}},"glyph":{"type":"object","name":"Line","id":"p790265","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790266","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790267","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790277","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790271","attributes":{"selected":{"type":"object","name":"Selection","id":"p790272","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790273"},"data":{"type":"map","entries":[["x",[0.9985,0.9985]],["y",[0.01,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p790278","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790279"}}},"glyph":{"type":"object","name":"Line","id":"p790274","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790275","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790276","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790286","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790280","attributes":{"selected":{"type":"object","name":"Selection","id":"p790281","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790282"},"data":{"type":"map","entries":[["x",[0.7229,0.9985]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p790287","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790288"}}},"glyph":{"type":"object","name":"Line","id":"p790283","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790284","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790285","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790295","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790289","attributes":{"selected":{"type":"object","name":"Selection","id":"p790290","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790291"},"data":{"type":"map","entries":[["x",[0.9996,0.9996]],["y",[0.01,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p790296","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790297"}}},"glyph":{"type":"object","name":"Line","id":"p790292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790293","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790294","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790304","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790298","attributes":{"selected":{"type":"object","name":"Selection","id":"p790299","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790300"},"data":{"type":"map","entries":[["x",[0.7229,0.9996]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p790305","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790306"}}},"glyph":{"type":"object","name":"Line","id":"p790301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p790206","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p790219"},{"type":"object","name":"WheelZoomTool","id":"p790220","attributes":{"renderers":"auto"}},{"type":"object","name":"LassoSelectTool","id":"p790221","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p790222","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p790223","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p790224","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p790230","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p790229","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p790231"},{"type":"object","name":"SaveTool","id":"p790232"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p790214","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p790215","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p790216"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p790217"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p790209","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p790210","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p790211"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p790212"}}}],"center":[{"type":"object","name":"Grid","id":"p790213","attributes":{"axis":{"id":"p790209"}}},{"type":"object","name":"Grid","id":"p790218","attributes":{"dimension":1,"axis":{"id":"p790214"}}},{"type":"object","name":"Legend","id":"p790242","attributes":{"location":"top_left","items":[{"type":"object","name":"LegendItem","id":"p790243","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p790239"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"c63f28ac-a62e-4b6a-9460-8d02be917801","roots":{"p790197":"cf297679-f2e0-4873-8ca8-a5c13c958a0b"},"root_ids":["p790197"]}];
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