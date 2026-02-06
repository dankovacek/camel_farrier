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
    
    
    const element = document.getElementById("f3fca659-9b4b-482c-b1ff-daf6321eb74f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3fca659-9b4b-482c-b1ff-daf6321eb74f' but no matching script tag was found.")
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
                  const docs_json = '{"d5402e62-0b43-4351-8e2f-056a15482d57":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p79672","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p79673"}}},"roots":[{"type":"object","name":"Column","id":"p79751","attributes":{"children":[{"type":"object","name":"Figure","id":"p79674","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p79675"},"y_range":{"type":"object","name":"DataRange1d","id":"p79676"},"x_scale":{"type":"object","name":"LinearScale","id":"p79684"},"y_scale":{"type":"object","name":"LinearScale","id":"p79685"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p79732","attributes":{"start":21.698000183105467,"end":22.003999938964842}}]]},"title":{"type":"object","name":"Title","id":"p79677","attributes":{"text":"07SC006 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p79743","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p79737","attributes":{"selected":{"type":"object","name":"Selection","id":"p79738","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p79739"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JZWAIehfA4cPkNNPdNV1j4pjOacN0To7pPJiu6e7YmO72N+a6mqs7ru5m6n3v79Pz4RHRgYO/h/iJyO1T6CpnjvlPC++DmiQKJcTrB3+9C1rFfahrEv3kPdug67MV7UrsX7xvU5SV4ejixaD1rPubv7QMxec9uqVV/vAe81CDnqGcLyf9//uS09AW3UOV4rH+U7qEojt9Fa1Y/tj8/GEov86i65DNgz/ZD7VwNMqctHH470FobQ+iRieNyxdsjy5sB9qXuPH4wACUqA3o8v5Cm+Yfn/+4EqXFJ3SHqyfgcy1EnfwS5V2FhHzTMLQDD1Gzl/LkJ0xA9+oGWiPvRPzekShZLqIbmzMx/3wAqv9JlF0ZkvAZeqHZEdQnKZLydTuh27YbLW3CZPyIViiPNqGrKcn5zY1QvdaiDP2K7l6tFHy1JaiRb1BSVE7JD5yNdvsxqp9PKj5iMrokd9BCinjxN0ajVLqMbk2e1LznENTg0yhXM6fhfYPRVkahxk+dlu/VFd2lfWg+idPxy9qgxNmGLsgjPX++KWqpCJTFMeikXga+y3LUM+9RilfNyM+fh/brGWpH30z839PQFb6PNqd4Zj4mFKXdNXTR+bPwBYejzjyH8jVbVj4wBC0qGjVfumz89O7oPh5Ea5EsO3+kPUrunegmx8vBvwtAbRaJcvAXuuwNcvITVqG+/oTSuEYufu9CtCyvUEMr5uZfhKHzf4S2q1QePuNElNE30T3xzsvXHYW6/SJKulz5+BED0R6dRK2VMT+/pRc6L4c2NGUB/n4nlOp70EUmLMinCEQdtBnljnjzfo3RItaiJv2G0r92If7GErRKb1HXVi7MJ5qDLvgJ2lWfInz5KSir7qCLX7Qo32sM6j+XUcrmLcYvG4IW5wxq9yzF+QvB6EodQ1ucugQfqxtK1/3oziQuyRdvi7pgG8pvj1J8x2Zof0egFvmBMrdeaT5mOVq7D6gnqpbhveejm/kc7auvD996Osqx++jylSjLTx+H+ukaSssC5fgjw9Fyn0edkt2Xfx+CrtkJtIPpyvM5eqBMPITudbIKfOMOqPt2omSNX5EPbYH2IhK1wW+U3Q0q8RlXo43+jPq0hvL1FqHb/gotXaXK/MiZKP8+QlertB+/ZSJq6lsowwpV4e+PQqt+CXVjrqp8ykHoBv2NdidjNb5Kb5T1Dl3SVNX5/p1Rb+5BUc8a/NpAtERbUPvGqslfa4yu/Dq0Vd9QE9Spxfdeiu6ft2hl/Wrzy+egxH2KrnvZOvyFKail76IsKVqXjzUWresV1LN56/ElhqJbcAbtd5b6fKe+KKeOoSuSxp+f2w31x36U9kka8CfaonlvR50VpyH/rRm61uvRjv1AzV+/ET9jBbpPH9BaVmvMu/koeV6gm1K+Cf9+OmrzByiHSjTlc4xHm3gd9U2BZnyTEej2nUfLmqM5P64/yssT6BqkD+B390DNdBhlTPIW/NMOaPV2oe6I35JP3xLdyI1o//5Grd2wFb91NbrUX9CG1QzkHyxCqfEa3cZKrfmUs1AH/4tyt3QbvsoktPW3UJMVbssPMHQ3L6Fp7nb8ukEoiU+h65upPX+tN2qFoyirU3XgE3RB670X9bJnR75ca3TLt6DFjd2J79EE5eI6dKW/oy2p05mPvQyl2zt0Z/268CXmoi58ivKnbFe+01S0U3dRixbrxs8bi+7HFbT2+YL4v4aiFDqLblbW7vy3vqhtjqMcT9ODzx+ENuMA6uckPflW7dC57Wh54vbipzZH+bAeXfOfaIfq9+ZzrkSZ9BHdm2p9+CYLUPe/QMlWIZgfNwPt5QPUhiX78nvGo8t0A21MwX78sxEo9S+g25EjhE8/AHXUXyiP0/fna/dE23oYNU2KAfzwjuge7EKrkWAgv6klSqpN6Ab/QbvbcBBfdQ3Khi/oktUazA9YjHrrNUplHcKvm4WW+DFqvzJD+euT0FW4jba68DA+4WiUPv+gu5x7OF9uMOqKUyjxMo/ge/RBu3gUtYzXSH5pF3Sx96F1SzSKP9capeRWdAtjG/+nCWrncJTT39EVrTuan7cM9ec7lA5VxvB/zUUr9Ax1drmx/Pep6NrcQzteLJQvEIoSdhXd53zj+FbDUI+eRcmbbTw/tR/ah+OoAWkn8IeD0OU8iDYp6UT+bTuUpjvQ7Y87ic8WgDp+A8qrn+ga+k/m96xEzfwJZWz1KfyzBWj1X6LurDCVzxCGbtRDtMclp/F1JqBsu4Eujfd0fvhI1IcXUGrmnMFvGoCW6iTqkAxh/L2e6KoeQduQYiafvBPKwN3obiWYxVduhRq+CSWJzOb7NUK7vga14leUNbXm8AmXoPV5g3pF5/K+s9GteIwWz2ce33MyyqXb6MoUmc8vHY3qcRklKM8C/txgtJKnURdlXshLMLrOUWinvRbxxbqizN+H7meixXyHNqgnt6IU9ljCz26K9j0ctW0MSnTdpXyB5Whh71G/VFnGB85Dd/QZWl7f5fy0aSgf76ELKL6CPxyKmusayuT8K/m3w9CankM9kG0Vnz0E3fhotFdpV/ONuqPsPYguc7I1/Nj2qM93oPjHW8vvDEDLEIlqv1Ce+K/j66xC2/YJNW2NcH7EQnQPX6LVrBjBbw5D8XqEbkip9fy9CajVbqJEem/gk49CG3gR9XbOSN5vILrwk2hJMm7kQ3qh3DiCrmLKTfyaTqiee1CCE27mr7RC892MulK28PEbo+u5Fu3SV1Sf2lv5ZUvQebxFC6q8jT8/G6XUE3SLfLbzMgW1yx2UM0V28MXGoM2/jPorz06+4xB0J0+jFc6yi58TjBITha5t6t18dFfUgvtRZibew39pgxa4DTXKYy+frxm6aRFoH2NQW9Tbxx9Zji7XB7TJVffz7+ahNHuO7oDvAT77dNQJ91FeFz/INxqHtvcaapYCh/jQ4eien0Pzz36Y3xWCkvEEOkt3hH/SHbXuIZTtyRyftgPaiJ2oj+Id5Wu1QLc5Es3rN+rQBlH8/VXoqn1Gi6xxjE+xCGXQK3S3Kx7n/WaiRjxCSVo6mg+ZiHbjJmqlQif4taPQeV76v/8DtYCtVfgTAAA="},"shape":[639],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7VYa2gdVRDeJiJSRCSIBBGzFBFBQYokIiJdEQlSRIQK4g9dihSRIuKPUiSQFZESRERKkSLS+0cEEZGiyW1edxtv0zxu0vRl08bYTVqThpbWtqa1Dc11dx45Mydn00bw/vmYOfM458ycmdnrednvn1bvf8Jqtdqw/lxjUON5wWcXGoOUWeg/3xisSemfkR9umUH+12cBw845wOAZxHj+HGA0N6Pko62zgMl3MwZTu+GZP5002E/3s6ecoJ+6Myg3Nm0wXT/9isBMr3kK/EYvpHqL1eqGxj+Q/8EkoP/UJPiJ3vsd7b4zgfufOoV21xH91iknFnafBPSOjyuMdo7DPqpPHsF7uH4UceMJ1F+L6H18HP08dhjp7xGjdw/DvmJ/DP08dAj5X42inZcrFI9hpee1DuG5fjyIcbqnovbB+2U7Xs2wsZf5G9oP8g3rB1D+0kFjD/KgYuxmduIhtR5u6Yd7bnizDHLeiV8NZudu20/xLBv5jB8ewP1sQvnwiz60+0mMfA/Rv1voZ/57SxSnLsQbvRjHYq/ZB+RDH2Drg/uQfq1IceykPOhBext+wfsYaFd0MNUJeqU9KO/90I33+ng37LfwEsr7O9opj7qUH+Bn9/Z5B+VJ0cixP14XcsHaDrWfJdzYofzlYTKq7bE+2412FtU6yIt9Ay0wvL+okPlgh88l7hlQnLewe59C/w0tl8dnmu/fn7DkMzrNp8LDnQZtPusLOxB/SVtx5ryCOKX3lHzbpfggL+K4lIfr3HI2wjrbFfbDWYFQn7oNQv3qcWJ8VSDUu16D/C4EwntJz/v2cyU33VIy74z5jnV+d057th2B/K6X3nGLQNufy29Lye3PtR+XHdd5VyPv8ue4Z8Asr7YJtOOQp7cKZDtwr9D3YlVHFUI/XYFvo6y/zRqBfwd6XP8Vct8RdT+4dwXkep5HC3uAthz7yUNbjvuSwGgXYvJo//I+6cBoq0bms569zug9ofF264BZfn044JwP/B2/UZwT6vsX8Lwf/U194DrNC1cMH/rGNaqXN6lf3gJ5f+8tyr9FehdVes8a018T5mOK4B+x0LymCeMkEOJVYxDiUdOE8UB+MoYY1tUavliPdtWadWGP/QKK/SQtVbV/b1Otkk9uLDZKudK2Rcpf3C+cH/rAAtX1BarzN6mOL1AfQjp4+irNF/MUl2s0DyIdtON6/M0lXD95UdGF96+g/vnLNC8iBqdxPdj8F82Vlyn+GsFOFufXLxpkPzz3M2Z2ts9Rfum5Heb9rG8tiLlfzu31Z+n9TZu84zke4j1F+ZHQe5tW8z3M4UIuaJvScznN6eHshOHD/DJuMPN7F+Z92H3MvIc0Hv5PR2ieQbnw2WNqXg42j9G9HqLzDpo5mOdLUd+4HsSPHHDOuf5k2VlHwjoxJ0t5qsuF+rKpt6K+JQuDas7z9/Ys7zOi/3O/Db8cobiPUjz73XN6fVnVV+gztpyos3wuqDvifvK+M7le87mhX4m+wfbsfpWM9Sm0+5LdV1R/yesXjr6m7Ak/eQhywr6tD7Q4h00re6vgs1/gi/PAuuyDbVrf7sd5/d2OM9875K/IB8gXEXf+ruP3wPnPyHxGlud3ZPdL1Tf5O1Ug97143sG3Ef7HcNBQ7waXy7NdXod6N6j4NkK9EHJMsz5j9PyQ+h5nLLyo0f90WPV1/h8grujv8iW+9T8BIMvZaOtxnXPYW1Euz/7t/Np2mJb8ioPO7vHVkeXyDrnwvhEjz3XQgd7RO8M8fbb/XzFvn9EDab3+F8xZJTT4EwAA"},"shape":[639],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p79744","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p79745"}}},"glyph":{"type":"object","name":"Line","id":"p79740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p79741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p79742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p79683","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p79710"},{"type":"object","name":"WheelZoomTool","id":"p79711","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p79712","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p79713","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p79719","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p79718","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p79720","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p79721","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p79722","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p79723","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p79729","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p79728","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p79730"},{"type":"object","name":"SaveTool","id":"p79731"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p79705","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p79706","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p79707"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p79708"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p79733","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p79734","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p79735"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p79736"}}},{"type":"object","name":"Legend","id":"p79746","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p79747","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p79743"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p79686","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p79687","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p79688","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p79689","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p79690","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p79691","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p79692","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p79693","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p79694","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p79695","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p79696","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p79697","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p79698","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p79699"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p79702","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p79701","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p79700","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p79703"}}}],"center":[{"type":"object","name":"Grid","id":"p79704","attributes":{"axis":{"id":"p79686"}}},{"type":"object","name":"Grid","id":"p79709","attributes":{"dimension":1,"axis":{"id":"p79705"}}}]}},{"type":"object","name":"Div","id":"p79748","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p79750","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p79749","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"d5402e62-0b43-4351-8e2f-056a15482d57","roots":{"p79751":"f3fca659-9b4b-482c-b1ff-daf6321eb74f"},"root_ids":["p79751"]}];
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