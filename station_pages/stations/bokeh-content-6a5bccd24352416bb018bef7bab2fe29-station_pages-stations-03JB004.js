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
    
    
    const element = document.getElementById("a5b32f57-0e63-4e8d-966e-ab328dfe6359");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a5b32f57-0e63-4e8d-966e-ab328dfe6359' but no matching script tag was found.")
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
                  const docs_json = '{"394703c9-fb0b-4f24-84fb-c835497952d4":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p167195","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p167196"}}},"roots":[{"type":"object","name":"Column","id":"p167318","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p167200","attributes":{"text":"&lt;p&gt;&lt;strong&gt;03JB004&lt;/strong&gt;:\\n        237 revised days; 0 removed.\\n        4.89% of the earlier published daily record changed.\\n        Affected interval: 2018-08-15 to 2023-09-30;\\n        longest consecutive revision run: 80 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p167201","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p167202"},"y_range":{"type":"object","name":"DataRange1d","id":"p167203"},"x_scale":{"type":"object","name":"LinearScale","id":"p167210"},"y_scale":{"type":"object","name":"LinearScale","id":"p167211"},"title":{"type":"object","name":"Title","id":"p167208"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p167251","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p167197","attributes":{"selected":{"type":"object","name":"Selection","id":"p167198","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p167199"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DA3cWAAAAwC8u21i2uWqtZS3btu3V8rJt27btZbe41X5Ed+9dIBAIJDKxSUxqMpMbZApTmsrUpjGt6UxvBjOaycxmMavZzG4Oc5rL3OYxr8HmM78FLGghC1vEohazuCUsaSlLW8aylrO8FaxoJStbxaqGWM3q1jDUmoZZy3BrW8e61rO+DWxoIxvbxKZG2MzmtrClrWxtG9vazvZ2sKOd7GwXu9rN7vawp73sbR/72s/+DnCggxzsEIc6zOGOcKSjHO0YxzrO8U5wopOc7BSnOs1IpzvDKGc6y9nOca7znG+0C1zoIhe7xKUuc7krXOkqV7vGta5zvRvc6CY3u8WtbnO7O9zpLne7x73uc78HPOghD3vEox7zuCc86SlPe8aznvO8F7zoJS97xate87o3vOktb3vHu97zvg986CMf+8SnPvO5L4zxpa987Rvf+s73fvCjn/zsF7/6zVi/+8Of/vK3f4wz3r/+M8H/sgYc1LQDAAA="},"shape":[237],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXLeUwXZBzH8UdNUfNgaRhLQzONSTpIDkPAx58gN4iSiVGZTIfTeeBFKPaE10jSKEsTIW7kJhBFEf2ipOkor1AcjsIwIGIxTWaKWb7567XP9/08SpmxJQs2WZTSPoM9N/+vKlyMYl2MZtNT1LfDvOiWbJS8HjTD/WfR16egutWF4qU1PfsL1EPvolrrNpvekIhm5m3UGdMsdKtPUFZdR3Nt0hz6jFhUaZdQBozzpq9Yg/pyLSqX0T70Q8vRqBOolz8/l17/HopTGZoD/X3pT8JRReWh/PAPmmlBfvT9aagedaN8MMef/v1XqB3aUSW7B9B7ktBE/oL6rFMg3X4Hymc30Ny3D6JHbEF15keU18YH0z+NQd1dh2rhmBB69Qo0E06h3j0ilN61BGV+BZqqgfPoryxCtaMApaMXTWhoGL0yA9XLf6OYufPpvx9EHdSJqtxzAX3M52ji76D+zTmc7r8bpeQWmtFvvE2P24bq1ysoPhMX0gs39rnzcQo9LP0w/dg9NGN9UvmfcABVewdKsEcavWIvatsWlNad33IPaERdNiWdfzbxKFsuo2mZkEH33YCq+DzKC7aZ9NiVqJtrUPKXZnEfWYl6o1U2/5oiUHQRmtx/UQ8Ly6HHZKHcfIDG0y+X+5AulNWz8rj/nIzavRVVuusR+sBENCubUF+dmk93MyiHr6HpP6mAHr0Z1U8X0XyzupD7U0G1bFQR/y4tQ+NYhfrrocX03kiUD0vRXOhXQp8ajurLXJSHD9G8H1hKr0tFNaUbZZ+ljP5gP+p321DVvvUdfXISmqRm1Pccy+mLtqPUNKCZaF9BT4xD9Vc9SrjdUfrJdajH16HaZVNJ74xGE1aN+vjwY/RxS1ASytG0P3ecHvIOqqP5KLa9aD4OqaLfTUcVeB+lzOcE3eYg6q1/oLrjcZLuuw9NcQvqUc7V9I92oTQ3ovF2OEUviEdlfQVl46s19KYNqGdfQJVne5o+bBWamNOoG63P0L2iULIq0QwZLPQ1i1E1FKG4P0WTHlZLH5SNalUPylW/s3S3FNSpXagG6HNsiXSMfbYnl6Ls6efEDrdMf6axa0PVuceZPq8Z9djtLtwTGlDaXnflfXAc6op6VLZ2bvRt69C0nkMdYDODXhaN8mJ13x7xOIO9PjiTnuOdxb+1HahvzMzm7rEXjdX0HPb1m2jStuaiy/k83qe8dIRdPzKf/eZSlCeDCrhHRaC+WNi3H2UW0h0OFdGT/+zT3rUk1vIfYYfbMmgHAAA="},"shape":[237],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/12VKZScQBCGkUgksiWy5ciWSORI5EiyucjNbrLJ5HgJuUciRyJHIlciI5EjkZFJXn3/vpce872qrqqug65Jkr+/zWX4h8TdN073/pezB+ihgwH7EfsA17tmL0qvuGscnzjSi7d5YN8R18MqkjPk6YJ8YYO+h4v8uLd+aPYjnFvqf2zMnhq7F8a2wx6qfzv6eICSA3IL0yvzFwNyAxP4m/geKk7+0vznV8bm2jjBEeavTZ+/MRbwF/oDbGEFz/if4Ax1XmPXQA+P2Hn5k59TnuSdQNV7o758tjzLn9T3w5jC4ZvJ2VfOsZ++mDyiT7DbI585b6CDR/y3MIWn3uIFuHwyuSKuIz/lKXlLnuG72RdRviX36r44fs59PfcVMERy+pF6Pxh3743tO+MAZdcTN44fiLMhzgm/6q3FqffGBW7gju8o6Pti3hvmfMN8O7iFJcywG2EJj5x7uL+y+/VO9K46vpcBeuwKqHd21HcFc96R4x1Xzy1+88w4Qoe+5927J3Y+PTJW0LEntD+WaH8m7K0KzjDeb432G+yh9qZHVjynPcZ+C8jatw15eO1r9toiKm/qSNhzNfTUO1B/Td/Uz4Q+D9EcJ+Qz5yXcR/vwQLwCNlDz1T0zfpp3ijxjL0qfKW/VQX0edtQ904eV/gzIHXar/hfgDDXf2/8z+q559MxjhR0c7oQ/ksWYVWgHAAA="},"shape":[237],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3WVK5fbMBBGBQsNCw0XBi4UDPRPMDRUu324b3XbbreP06rvQMNAw0DBwMCFgoGGgW3P3K9A5zTknk8zGo1mrIlzf379S/8X7nDPGKB0vm/r/QP80At+PSwXZp8qLmjFner4aK2L//Jg/woud+0cV+nMeoQBtvh5mGDhXPfQ4nUwjKbzI+7zxNi+MPpoHKGjfiuoeko3rHvVueKtS4t3DvfYM/EXzlWcgt/mNfveGCMMsMCbK7Mf4Qb28Bw2cFvFS2jZz6p9C/YBnshrhMdX5An31X2T6vfF/MIv4+mncQX334nzDTv+x6+mb1g/w29GN3CD3xoe2B/hCpZk8QZ4G47EXZOf8pSO5Dn8sP1dlW/gXJ1Xx/ecUz7b/vQfdp+4/0fj/MG4e28sUH474tbxr4kTiXNiX3pncaZrY4se0du3th75Djp9d/TbwUy/E4xwjX2BERbsA8yXdo6HB76TXfV+BuzijL1U767jPSXeU35OvZ5xT3SEy1NbT3r/j03PzIXMnHCwYz42zMeO+TLDVutQOmPXPBI1BxN2xQvML81DzVuPn+Z1Ip/IXPPk6ZU/7LlXhrpvQ10m6qZ6ak5p/mzp3059rPoW6YPmYiJeCwf1Bb8Jag4GtObsHn9R6y19mrmH7ikm7l+oh+b+jE7Uw1G3QJ+K/u+qvh7qPlT/Swk93/G/AT3GZDRoBwAA"},"shape":[237],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2UMQ7CUAxDcwSGDh06VIiJS9Cb0yNxBNQ2ZnhS8BdfSAz8xbLz7aRp1YjtDMsOMazvceysu/zW+glzOO5y9VwVTtlPdfFW/NTHfJcz55xC+an31jkX89mX9yt+WY7v74/HHq7Yh/g5deKculD1ap/Oz7yKT9mXqPvUxV298kkf0bc3j7nMFxdyr/K//qc5n+5LZw51cvpdfuVnX8fde3rcYz/fxlgb+9zy3s/hE8+TjuFoBwAA"},"shape":[237],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/11UCzSUeRTvoffknTK1ogdtbEVJVrnTFEstlZSsijROD0tCb86u2KRU5E22x1I0pfJs9tAlkWNrSIhVSR4xmTHfN69vxLYTM9M53fM75577/77zu/f+7//+FkdMfFQxhQ+siw18c7YMxf5anDuzKFTFScE3jAtypfgp23tQAYyy3hi7KU2KZ6O/mAzhrk/uJnMK9f/duH/p9WE8ovuKpq0vV3u/d33NQ/cpNa+zljs3sEOm5hda95WZlslQda7yqjpMfl2dDi0UMulZa+lZcty1bN5zbosYdUqdPzZ2fo2H9FNoFT8O4rYRkyD79hcbRNrM1RHWHDlKwpPPmlySo53DtH2MRXJ8knjC4ec0Gd5uTQiby5bjK1FSdaC7HCOdHa8GLKHQqejO+ACZFMsk8WOQoLByGU0BEa5tMgvOYEhwi1n3S2e5GOvLbVZd3yrG8Pu/n02YLcZeaUZBSZdIHRvkx/1hwSJwS4fF40VTxOj4/nSa6QGR2rfm+/2T/IMIi+ftX5X7icQ5Tw8rIMIKTm3gxmtiJDxtUuddlaCKR3MqFXfDnUTd6ea99BdC1C+9cjplqxBLGaZV01gkSnaaLsg8TGJK6EGjrrwBlLcdu2HoRqCv/p42E0cCa/ltrGunCfzT75MCAix/bfE26DmBul58HS8+gbn0yOnHmCRaPHQvPvadEP/mlbtc3K7Ip/zO7MleL3QaQPGh7EXXrQawh3FjxspJJBZ1OO8IOE5ijOvklN4oIer6uur5uorUdccc1Q7NHkti2RmSXutPqvv1olJpGvdEyGkyzE314oPDcbe4oRPdcG932UkJrxu8zmi28B/0gD31LlLLvhdG58yDuRXhGjKdfhidMw88k/0U6IMxI9YH6WlfrA+uu6ceh2AeaEw3O+Jt9BHoezi3dJI/Qv+sKs7FLf3AfO5svKSxH1T5zTd0ztfr5cOm/ieu/U8E4OP9xQagNSazJSazF8iReXSr61TFtsZWr9k+PTC6Fx9gRU+s7V7u13ozijwV+KjO9y2/vtPCD346A6CcG0QwbS80vBYr+xGqY7ubcSbjKL66Lu6doGJ/fyEc4s6eE2ArgGYDDleDJgDVf3n9IU4uywTwLf8Kb/a+6HI+yM2KSmq6BkC7fW3YJIIPnlm01W/SByBu4gEFhFCf32mbpC+EKG3mZJMoIUSH3NzVY0CA8XDvTzBIwKkp/IWFKUIwZFiVRG8igCrIKDn3gABrp8gVTpFi8NYZ92BoJgn0NJuDY8xIECStXzwtmAA/Dxf31m0iuBmWdat9LQE1/yVzdnAJcOOFiwrXkJB2YVWAXicJyn0B5V4p70MMlV1TfYMnEBDSbvD+iL0ILhpq+ggmSUG5ZzDNfE3R/QYR1DlVvebFiqFtVrrAByVQwdIcFxguBQ/ozSmfKYNdzx6uOPFUButOTO+2TpSBewVvawVPBHJ298q8sRLg2n64EsKVg5bUK4DmIgPmSMMyOO9hr1PA0WCwrE9dHtg7gTH67sYwlLqlrFMOVxWvpiVmGHx/XxNkOpECgm0Zb5QzBOcidN/u5w1BUHSSzeejFDjwNzTmrR8G8SWt2P7NFCj1FOzjBJbsh8NqvpN1CxQYhEZJ32Bo+CC8vzMUtcr8Myh1F5iWwYdb3GTwy54Q4xdTP8G8q0civyflkLMmb9xpEznYxjY1txtRQJZvK1yeLQO7B3oKyODsshrPfJRC2MiCSGGJ0Vi9daEU9I2/vfdQAKW+T6U+ASvBZWUrqxJH51iJO7fTEoWOlVi47l211aIq1N/dMWN3RxXWGyw5/7m+Gl/pJpQTg9XoEZ4Y9Zleg8uNzMroj2twp4+dX862Gnxkn58DpdW49eTBPdm3qnHDPsvMqtBqLA5oU6AZa451GJ8Me4pLbXa/KKz96lXn482M3ty+9Fz5/rmQlusRrFFZp/ajOlkPVk9oluue1cNmNwNj16AX0K2ZZscS1MOukT2vg7L58fu4dg1wwDz3blZxA3BG9K8BLi9wVqABinuiHWrLX0JETiirjtEIicBToBHco9nxv8U2gdZfxCPm3CYY1e0mpX41w//wTyA9aAcAAA=="},"shape":[237],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p167252","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p167253"}}},"glyph":{"type":"object","name":"Scatter","id":"p167248","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p167249","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p167250","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p167259","attributes":{"data_source":{"id":"p167197"},"view":{"type":"object","name":"CDSView","id":"p167260","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p167261"}}},"glyph":{"type":"object","name":"Scatter","id":"p167256","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p167257","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p167258","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p167209","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p167236"},{"type":"object","name":"WheelZoomTool","id":"p167237","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p167238","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p167239","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p167245","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p167244","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p167246"},{"type":"object","name":"SaveTool","id":"p167247"},{"type":"object","name":"HoverTool","id":"p167316","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p167231","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p167232","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p167233"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p167234"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p167212","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p167213","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p167214","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p167215","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p167216","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p167217","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p167218","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p167219","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p167220","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p167221","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p167222","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p167223","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p167224","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p167225"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p167228","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p167227","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p167226","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p167229"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p167230","attributes":{"axis":{"id":"p167212"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p167235","attributes":{"dimension":1,"axis":{"id":"p167231"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p167254","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p167255","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p167251"}]}},{"type":"object","name":"LegendItem","id":"p167262","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p167259"}]}}]}}]}},{"type":"object","name":"Figure","id":"p167263","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p167202"},"y_range":{"type":"object","name":"DataRange1d","id":"p167265"},"x_scale":{"type":"object","name":"LinearScale","id":"p167272"},"y_scale":{"type":"object","name":"LinearScale","id":"p167273"},"title":{"type":"object","name":"Title","id":"p167270"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p167313","attributes":{"data_source":{"id":"p167197"},"view":{"type":"object","name":"CDSView","id":"p167314","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p167315"}}},"glyph":{"type":"object","name":"Scatter","id":"p167310","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p167311","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p167312","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p167271","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p167298"},{"type":"object","name":"WheelZoomTool","id":"p167299","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p167300","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p167301","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p167307","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p167306","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p167308"},{"type":"object","name":"SaveTool","id":"p167309"},{"type":"object","name":"HoverTool","id":"p167317","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p167293","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p167294","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p167295"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p167296"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p167274","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p167275","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p167276","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p167277","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p167278","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p167279","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p167280","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p167281","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p167282","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p167283","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p167284","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p167285","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p167286","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p167287"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p167290","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p167289","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p167288","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p167291"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p167292","attributes":{"axis":{"id":"p167274"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p167297","attributes":{"dimension":1,"axis":{"id":"p167293"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"394703c9-fb0b-4f24-84fb-c835497952d4","roots":{"p167318":"a5b32f57-0e63-4e8d-966e-ab328dfe6359"},"root_ids":["p167318"]}];
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