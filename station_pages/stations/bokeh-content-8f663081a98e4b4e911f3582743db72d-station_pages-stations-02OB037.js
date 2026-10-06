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
    
    
    const element = document.getElementById("f7368be7-3de2-4fa3-9434-a31bbfb629e2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7368be7-3de2-4fa3-9434-a31bbfb629e2' but no matching script tag was found.")
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
                  const docs_json = '{"52817f87-1b13-4c96-a407-b9b3fa6d6c25":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p45156","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p45157"}}},"roots":[{"type":"object","name":"Column","id":"p45279","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p45161","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02OB037&lt;/strong&gt;:\\n        160 revised days; 0 removed.\\n        1.00% of the earlier published daily record changed.\\n        Affected interval: 2022-11-21 to 2023-09-30;\\n        longest consecutive revision run: 41 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p45162","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p45163"},"y_range":{"type":"object","name":"DataRange1d","id":"p45164"},"x_scale":{"type":"object","name":"LinearScale","id":"p45171"},"y_scale":{"type":"object","name":"LinearScale","id":"p45172"},"title":{"type":"object","name":"Title","id":"p45169"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p45212","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p45158","attributes":{"selected":{"type":"object","name":"Selection","id":"p45159","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p45160"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DBzeQAQAAwC9JJWkIKSUpKUJIRkshKw3KiqwUQjKTkpRkh1Raf9XdexcEQbDDEHca6i7D3O0e9xruPiPcb6QHPOghDxvlEaONMdajxnnM48Z7wpMmeMpET5vkGc+a7DlTPO8FU03zoulmmOkls8w2x8vmesU88y2w0Kte87o3vGmRt7xtsSWWescyy62w0irvWu097/vAh9ZY6yMfW2e9DTba5BObbfGprbbZboedPrPL576w2x57fWmf/Q74ykFfO+SwI4465rhvnPCtk77zvVN+cNqPzvjJz876xTm/Ou+Ciy657IqrfnPNdTf87qY//Okvt/ztH//6z/9uA4PZ40mAAgAA"},"shape":[160],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLeUwPYBzH8YessCyRZSstyyoyNkRbZo/fXIlKq9TcVyahiVRKjw4hpXRIF7XK8SPHcms9sloUzZkm05jGRJnUajLz/v312ud5fx8htD7gFW0QQjk/QXnCfjm7Zrw32ykUxbE7qH+MXkEPWIfy3lUUjsNX0lMCUH2rRLlqAMVtbx+6fQmqxB6UXwy+dJ9cVJaXgnjf+wfFW5/V/Hv3dDd9oeMe9rzeSHbxkn04J3M/98I9ir4tFVVTG8rG/dH0GY2oBsJjeN9Qi6LeOpZ/07aiyryFsm/kQfraNagfXkHlIuLo6f4ofpWjDu432S0PcReYjfL+Z9Puak9g+89U9CTnw+yv0Sh8m1BXT0pkd9oksb23o7p+F6WtZTI9fj3qj9dQLTNLoVcForC5gDpmENWHFUfoi8+iMP5EPXZRKj0qD2X7FxQGz6P08+moxnSgjJx1jN6WjHpBK6ryqcfpo+NQRDxD/doxje4ZibK0HoXFxBP08DBULx6g9LBKp5dsQm1WjWqHeQa9JRiFuxF1wRAq4XeSHlqGornXtIe+ZXLXmJlFz3E/RR9MRVU/PZt3twQUWc9R9znl8F7XiMLVLpcdMi6PXbsV9ZTbqI6POk3vWYMiqMq0Uyvy2d/7Ud0pOsOdQzcq384C9k2PQu7s0lCr96Z941UR29almPv4GBReDiW8V0WgsnmEMnbCWbbR8hzbegPqdrNS3g1BKN94lv9XzM9AXdqBymJ2BX1XCoqXrag9plXSS+JQjmhBETb5PL0lEpV7A8rCiRfow3aiDq1B1Wx1kT5rM4r8atRD5pfoW0JQPjaimPkXdY6fkT5YhnLjbxQNSy/T3QpQZXWh7F9whb4uC3XdJ1Suc6uiDf8Aps3vmwAFAAA="},"shape":[160],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1WUP2xSURTGLypWqX+q1j/EiA9aG10am6umVSm3rUpbWbCJpglGJhYXZiYWNhMGJxZD0sSxCwuL8YX57Y0bLF1wMy62Eb/z3fOMsvz4zj33nHPPOWCMCaPoqjPGuNTBDWFQaV8Twk7tRo2M2ueEw3J/zk0mk69RtOD54ZnYjWk+Fjrbs+6EMdVa7anobqfz0DO95PltXQjPotBZuyoMo5IVVmuHa97ee+HtkVN71iXov6h6Q/0KQpxQg7yPejbFP4y+v1b91tNUhM5+3PHavdTz58JuZ3fDv6u0qf67nsNX/l5vS8l3h9G5OF/e6xLrcfbHjvZnW8n60I8H3i9a0vcs0H/0Kyes9j9leZ5J5vx5j31HP7MSp5B6E/vpPJYDOW/O7t8WdosjnmOetCPfTWHQGl8XDvfqnHczn7oihN8lctSYEQb7Rc/W+LxoxEsJh41ZEnWc+dcea+SfEjvyTEndzXGZfrEdXy+IRhzmbQ5+xnl8fmtpx/6R5mCPdsRjHajzLO33KswDnRTifUnpy7v24KRovG9aGLTes1/Y05z6cR9RL+eHe9w3fLhP6D/7CbJviBP87Tf3+VD9Q51j+pH44SX3hYi76Odl74jGnj4RdjvpLa3jLv3aA+ZB/lXn4/J3gw/vVfsZzr9b/8I6EH9F9zHntVnTeOuiq7XPcT0rovE7WvaMrNYzLxpz9Xnr+Zxo9JHxUfctId8LhpkW9wT9j+fBOaCu//YCmnPBfKZ13twPzI/EfC4KEZf3oOmPvNTYg8tC7Bf3AvVxbtDcm3jO+L85rZrzxp6e0ndx3oibUJ0QjX2bFEDU8VuIPTsmx+XjAvYScY9E451HhT8tUgiUAAUAAA=="},"shape":[160],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1WUP2zTUBDGH1AohKqlEBABKRhTqnYAgVwQpYS64U+gdAmVkCq5wixeWCohlk5ZsiFl9hapEmOWLt2wsrB4YYrY2iWL5w5M4bvvLvx5y6/f+d7dvbtLnXOtonk5dM4d7u1cFXbT9IoQdmqwyu+75VvU/c8k/OaFcTJ8JszyjcfhSdFJoDpfEeLGA9P3hHEyXxd2062XQpynqiu8h7hrZuf3OPkaCr12cVN1ckf9KsyL+Ktmr6t2a+FoNPqWf2mo9t4ps21lGAmRZ1P9Nt6Y/wuLw7io75X5b6l9+FZ19tr4XP0qrBfxavZ+1tNNf22afd3IuGGwvyRE3+4rE/bRi2bYV3znO7tpxae9933cd9q99kc/PEE/2tF3T5nfELb6x776FbQfNg+uC3E4z6za5rzjg+olIfo6S0adC0K3GJGY97SwVSudF3Z3aiUh/M7+a6dGv993+pNix+H38GhXWRrQnh0vMB7IvIjLvDgXhV6vQbsb7JFxp8/v4zrwJ/NjTxkPdZ8Wtso9EvqUEHNgvcivfWwc+dTB/hPlJ84POtA+BndF48wJURfvoU/sH/sN4izpnuQ2x+Ch2JGPew0yDvb/thBz4f5j321f3KLcXy0NxnPm3uOsWB28FwYB87eKH8yPuMtk44MvzPIp27efddF4x7ie5VB/f4+UQ/6eUM+c5B0tRLpHRZNx0Ed9X69BYh9ox5yvCXH4fwD7w3mgLs4Jh3NBXbovzpHIMy3vwPzGe0N/9JHEXtLvjy6aZdOzVt+M+U2ZnXPEvZLt1znT/+0V8p0RO/aEhP+EEPOfsHvcC+Ql8c6//A3s+Mn8AAUAAA=="},"shape":[160],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/51TPU8CQRBdExv/BPITSI5Euy2xM9YWdoTS0pwxUECNhYlcYtQEam2hcQlWhouNBbECBAqh0EJJ5Oucmds5jgViYsNjPt6b2Zm5med5++UHNQG8dCqqD+jZWTnT/hFg0y4p334mbBSrygbMQ34LsO5+KaTdOE8K/+xYLyoqhIhbHTUmf0WBKXbBj5hKDglddxLw0D4HPmIMeOG8GPC4rygErpxXihecnwV+3BqTX4iW2obfVHJGfRScrarv/5SM+N60U5HT6SKyf7QhRBXiZj7HGfF9CvL0O6UHhFuwTR3W4zxGPUep57yEQxg4zJ/2IcvXcgr6LbAZmcdxU4f9A+A37Qv5H/xYwwv769RnVutn5ckf9fx9ru8H1uIdwXtX9zuv48ez8pTmMtcz5xWee3hfZ3pffF+0N6jLc+Q5eyAIdxzci7lHc5/mnXAd3mdwL1qX4+b+OI/7MO8K46vuj++Q74vrmvp43/eJd7rzvXafMF/rafuN8C7RJmwUW4iZwcEyQl9p9G/O4+Lxm/KYJzQv0MsNSDeDuswP6Qf1aqCDccfx+0AezuEw7/dnWR2KR3Idqte2u4hV1+2Svxzx31M67uF3lOb3of0LGqzhSwAFAAA="},"shape":[160],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/z2QfzzTeRzH5UcqZlu5bkrkQn5Nkx+XJu+PbeUkXZLye8qv1hHlmlrFPdqppK67FUUPD1w/Hpnr949LV/f9ogcmaWQbm1+zEZrpx4ZUXPV4nNd/79c/7+frqSW75kWVzMLrNOtON9e+x4IlY6+It+tg4J8PxEfjU9gjyq9OjKZe7DvrU0try41wQ26ODYeixxSb+ac0ZA12ycd3TB4yF09PKmUKHQexSvbo2sLYCSxhLTu1dsAAL6WL633KuzDMiDf1ifwRI1X6uW26R8C9WlgLHo9b4IVvL15e4dGPcT4EWuadfY3F9TvyReJJ7I3QsT21cg4u6V6fxRJoMIrl1PdlxY+gaos+3M3DBJ8Mrltz1pKEnzRlbDxAU2M2YUYHT1eQ8cwRPIZOG8feRtguopsQcevb4pq6YTPcmLB8H9vmFTgECeyDBBpI3aAv64rAgRSecmnHoXoAz6SQyCfPQJt/UXM0TwwKs7bCE1sbweBrXgNr0E5H0uGw5OX5d9MDDTDgPdQqH26G2fqftj970gqXtU8TXt2SwLnXFuyje9vgRrqh1nMeDoOjtx8sW9wASTnxJfFxYrBolJWnkXvgREjyC+akEiqCrNCyNg1w1xNnN76Xw6FsO/Vziy4IKI0Ou8npBK3QeyLxUwdcD+xSFpOlIK/dcqNuWAFWk9lTuRQ5hGRXJyh/7wEjZk30LP92YO/hyWJtFFAUcu9kbEo3JEYdpu56oYCBmI3D51IkMMZirEtTykA09UY6Wy2HP/wPGFje6YSuiDzjxM9c3Iu/TFEye2ANVVHwr7USyFzRYX9zFUQX5FJqy1VQ7J0R2fRBPdP/f2cln/e1K5XM/Fkcox/LIvRDbsqXvv+rRxJZCXP/Hos+L5HDhC/8xaN1gxkrITJQ0An31au0V4VyoIqTXY2pctAVbprX9qR/hsPQbENfhlgFu3fvna8blkDvqeKSfXtkUGJfvcv+rgyIO/c5eAwNgcBAM1Z5tQ9Kj9hvszGTAtWUVTBIV8A6h+j0W/FSmKzgXzixUgRXZFTBhbBe+KZSKIwK74ebDRG8H8uqwKOM4368RAr+V7raHtv3zPgmjHqxiix74f2s0KEGTzGw08ZDi/WdMNHLJ3YnqoDEdM3P/ry3qdVaHUDTgj5jRJd+TAbMTMZIQo4I9BrJEl7zEDglf+HsgPHgRU9Zw21A4t8VPWyUQdvzd36jB7TQwhe5kQe7IMz76f7Ogm6IY7PZtlYdcPSBuD1pUvHVI97aCkGbnunzTVpgDaODTQgSgxe9tImf0wFMWruQs1UOef5mNQnOvWARW+3Ufn0UpsWN28N/k4OzY2CQntwJc8y2xD0M7gHm5nMquxwHFNb6kWKTYY88d9JWL7RbjtY/PmYeMccJlVyxW/yuyAlxQw9yM5ud0X7TS7ta1rqiG0euM8tM3JDKlVP91peKDJuV7vUGK1BU1rVUYpU7So0slX77pwva8DPUKEKc0bbA/B3HI1xR3AVR3UCKC7L3eVEVU++E6n3OnOW8cUHBl8/8wBuiIp9U26Xzk2kI1+vjXzZ7oA6BTsetWIm8HU5H7SzyQvrpO33TPd7ovmpVktBlFbKi05arX65GflzzhQFsP0RwW7CX7YzQNen0VhPjAJSWTtmTQmegXMK1upUjDOQe2kom9jGRdbXe1JzHRP8BU72oUAAFAAA="},"shape":[160],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p45213","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p45214"}}},"glyph":{"type":"object","name":"Scatter","id":"p45209","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p45210","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p45211","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p45220","attributes":{"data_source":{"id":"p45158"},"view":{"type":"object","name":"CDSView","id":"p45221","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p45222"}}},"glyph":{"type":"object","name":"Scatter","id":"p45217","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p45218","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p45219","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p45170","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p45197"},{"type":"object","name":"WheelZoomTool","id":"p45198","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p45199","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p45200","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p45206","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p45205","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p45207"},{"type":"object","name":"SaveTool","id":"p45208"},{"type":"object","name":"HoverTool","id":"p45277","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p45192","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p45193","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p45194"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p45195"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p45173","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p45174","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p45175","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p45176","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p45177","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p45178","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p45179","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p45180","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p45181","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p45182","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p45183","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p45184","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p45185","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p45186"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p45189","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p45188","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p45187","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p45190"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p45191","attributes":{"axis":{"id":"p45173"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p45196","attributes":{"dimension":1,"axis":{"id":"p45192"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p45215","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p45216","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p45212"}]}},{"type":"object","name":"LegendItem","id":"p45223","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p45220"}]}}]}}]}},{"type":"object","name":"Figure","id":"p45224","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p45163"},"y_range":{"type":"object","name":"DataRange1d","id":"p45226"},"x_scale":{"type":"object","name":"LinearScale","id":"p45233"},"y_scale":{"type":"object","name":"LinearScale","id":"p45234"},"title":{"type":"object","name":"Title","id":"p45231"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p45274","attributes":{"data_source":{"id":"p45158"},"view":{"type":"object","name":"CDSView","id":"p45275","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p45276"}}},"glyph":{"type":"object","name":"Scatter","id":"p45271","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p45272","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p45273","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p45232","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p45259"},{"type":"object","name":"WheelZoomTool","id":"p45260","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p45261","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p45262","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p45268","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p45267","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p45269"},{"type":"object","name":"SaveTool","id":"p45270"},{"type":"object","name":"HoverTool","id":"p45278","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p45254","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p45255","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p45256"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p45257"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p45235","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p45236","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p45237","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p45238","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p45239","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p45240","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p45241","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p45242","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p45243","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p45244","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p45245","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p45246","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p45247","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p45248"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p45251","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p45250","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p45249","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p45252"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p45253","attributes":{"axis":{"id":"p45235"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p45258","attributes":{"dimension":1,"axis":{"id":"p45254"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"52817f87-1b13-4c96-a407-b9b3fa6d6c25","roots":{"p45279":"f7368be7-3de2-4fa3-9434-a31bbfb629e2"},"root_ids":["p45279"]}];
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