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
    
    
    const element = document.getElementById("cc045cdb-7a21-4fee-ab30-3aeaf7bfb869");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc045cdb-7a21-4fee-ab30-3aeaf7bfb869' but no matching script tag was found.")
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
                  const docs_json = '{"f42bf272-c285-4244-a8da-4cc667f99c71":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p228279","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p228280"}}},"roots":[{"type":"object","name":"Column","id":"p228363","attributes":{"children":[{"type":"object","name":"Figure","id":"p228281","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p228282"},"y_range":{"type":"object","name":"DataRange1d","id":"p228283"},"x_scale":{"type":"object","name":"LinearScale","id":"p228291"},"y_scale":{"type":"object","name":"LinearScale","id":"p228292"},"title":{"type":"object","name":"Title","id":"p228284","attributes":{"text":"08LC048 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p228345","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228339","attributes":{"selected":{"type":"object","name":"Selection","id":"p228340","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228341"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYBB5vCLEiYGBYbXOKjDtVLYaTN/cvwZMF3CuA9PswetDnAAOgcSYMAAAAA=="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228346","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228347"}}},"glyph":{"type":"object","name":"VArea","id":"p228342","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.02450000036507842},"y2":{"type":"value","value":4.94699990272522},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p228343","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.02450000036507842},"y2":{"type":"value","value":4.94699990272522},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p228344","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.02450000036507842},"y2":{"type":"value","value":4.94699990272522},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p228356","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228350","attributes":{"selected":{"type":"object","name":"Selection","id":"p228351","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228352"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3VZ1sIDAOA0aSoKA1RyqaIIrMoUWYp0qCUkPUUJRERSSFCZESUImmR0aCUtkqUhlJEk1KKklLqvd770/kJR0BAYHhtuKmugIBA1PRI1HWJwg8vo3Gv6EMcbBKDQbce4dyGx5g/4ynausbi3/Q4vDQ0AaeYP8OXt5+jeWMitsx6gV5uyaiQnYJPhqXiKos0/HInHQ82Z6DEvCy8556NWrmvsFg6F+2s8nBA2Gu83pqPMzTfYvaJArTOL8QO2SL0sSnGCREl+PxXKa7VKsOvJ8vxWMEHlJWvxOitH1Ev+hNW/K5CJ50vKHKmGm8X1eA8xTp8s70et8U0YE/XV/TTbcSp55owtfQ7rh/bgj92/cCTT1pRsbcNny77hfq+7Vhd3oGHJnTisN1/MCyuC7X7u7FkZQ/a+/Wi4Md/eGNyP850FDD7v6+eDcBNggPxt4EQnrsqjBM/D8LEKSJovE8UvyWJobvwUByxRhwfXJfApTXDsHKaFO47II2iL2UwWEQW568bgW9vjsTt9XLYqzYKLx9SQJV0RUwbMgY3mI3F1qBxeOrbeBw9ayLGHpmEBlmTsUZCGV03TEHJO1Px/ncVXDR3OpYeU8XdOWo4UHomBmxUR/V7szDnx2y00ZiLnR7z8Pzr+ThJVhOTNi3AdeELsfGnFh5fuAhHntTBh28X4zI5Xfy4RQ+do5ai2O9lGLJoBWp4r8SCd6twh4IB/tu2Gq88NMRpXUaYvmQtWvgYY1vJOjw9xhTH7DLDuMfmuLpnPdYutcDDFyxRqnwjho+3Rh37Tfg+1gb39G1GoZVb8eYlW5xVuQ1zJ+3AzQ478U/CLrwwwA4nG9jjiyu70aRqDzYpO6KH016US3LCGCFnXG60Hz/5H8D91S44ZNohvLPfFTVTDmPhYDfcaXwU+wKO4dU6d5yu5oEZB0+gZZon/hQ7id6mp3Bs0GmM/+qNhupnse6wDx7JPIfSEhcwYr0vLg65iGVNl9BhzmUUPnYFb726irOl/DHP8jpuCb2BXS0B6Dv/Fip5BGJyXhCaDg/G79YheOL+HZT/eRcfLbiHK7zCsOrNfTwwMgKHbonEu5FRuKAjGt9pP8Rdp2Owv/ARXhv1BFW3PcXMB7G48U8c/lqcgGfOPsNxJc8xYXQSGu18gfWPktHtbwrKLE3FyPNpuKQsHcvHZaKjXRYOis3GwH+vcM6KXHx9MQ+3VrzG7olv8OKet6icUIApAu/QTL8Imy8Xo+enEhyl/B4f7y3DlYnl+HlgBboYVqK4/0cM/fIJF6p8xiLnL/hfcjUKDK5F/7V1qBZQj1m1DWil+g3bXRrxbGoTjhdrxmcmLbgm8Ac2NLTi0Zk/cfjhXxiV0Y664r/xg3kn7g3+g4ObujBo9l+ce7QH87N70VayD/9a9OOluwLm/N8yAF/OG4jmx4WwJVcYvWQGo4K1CD4JE8VVbWL4RXMoHvQUR4k3EnhvhCRqbZbC4ghptGuXwQHasnj91AicUTgSs+Xl0dp2FHZEK6BPpyJOWDwGn58Zi2uLx+FXxQl4bMdElH00CaO7J6OenjJWnJuCTu+nosi4aXj7v+k476kqvulVw23LZ2KPrzr6fZiFUyfOwdTdc3F9/Dz80T8fT67SRMXLC/Dpx4Wor6SN1Y6L8NBzHRw2cAmGrdZF7Wt6WPJ5KdpPXY6CzivwxouVOHOQPr5aY4CbbqzG3zWGeG76GpzoshYTXxqjsagJfltniu63zHBEgzk+mLEBl7paYGW6Je4baoWi5tYYfHsTzm+0wbeztuB2t63Ym2WLl4dtRxWLHZh2ZyduaN6FrXPt8JS7PY7O3Y2x0g5oYOWINff2omurE0pqOuP9E/txUf4BLJU9iLttDuHACFcM+HUY1bXcMOfkUbQpOIadcsfx/FYPnBR9ApN+e+I6nZPY6H0KjxedxpGKZ/Dh9rO4LMYHP3adQ2fdCyh2zhdDSi+ixlg/LNh1GXc8uYL/eq7ilWX+OM33OqaX30CLCTexzf4Wno4LxDH9QRi3MhhX+4VgbeUdPDw5FKUc72H4szDUEQzH9wYRuOdqJAp9jsKbUx7grH0PMTcpBjcLP8Y/Rk/wwvWnOLkmFl9Mi0eTAwnYlPIMPUQSUW5dEsbcfIHL65Pxk9pL3H8oFYekp+GdIRmoaZaJhUFZuPNbNvap5+DVI7k4PSsPMyTy0XLDG/wZ8ha9vxfg2LnvMP5YERrmFGOdVCke2fgepe+VYcSPclysUYFlHpXo8PojCstW4a1Nn3F2+BfM+1mNWxbWYpdXHfq+rUclua+YvOUbmkY14veOJjyxqBnlvVvw0bsfuEKhDau2/cQDD3/h0K52vLvkNy7w6cR3JX9w15hu7N/5F6897kHVnl7MXNqHGy/0468ygfX8P14Qx9kPxIRYITTqE8b6FYPR7ZIIylSKYuSkIbjEYSiWJ4ij44BhOMhAEgOvSOGcKml8rTwctzrJYnfiCLwoJIfKRvKY4j8KzaoVsFllNHruH4OjUsbi48HjcaXxBPwcMBFd6iahuJoShh5UxoVpU7BITAX/M52GAkHT0f+rKqqpz8CswzPRKlMd28Vn49n1c3B8yFx81jQP18zRwIajmnj01QIcLqWFUZbaqBu6CD+06ODe+UtwsIcuBuXp4dzhyzDfejna3l+Bf9tW4qUF+jjFywBfvlmN5iONsGXzGvSKXIsKHcb4RNsEV502xS+FZnhw1HqU2LYB7z2wQK0/lli82ArtzlrjgJJNeH30ZpyxcwtmP9qK1n9tsUNvO/qc34ETynbi83H/4Vo7O/z61B6P/duNsiscMPqiI+pV7MWKifvQaY8ziiTsx9sCLjhP/yC+uXwIt31yxR6lI+i31w2nJh7F1IHuuN7wOP645oEnv5xARRUvfOp8EvWTT2H1IG88tPYMDgs4i2G1Pqiteh5LXC6gfaovCopdwhsmfjgz8DK+ariCm2Zew9+u/ngu4zpOFA/ARPObaBx8C781BqL77Ns44mgwPsgOwaWSd7HSIhT33b2Hoi1hGDwvHOcfj8C3uZG4XSYae60e4OWwh6jSFoNpmo9xg+cTbM1/iqdGxOHozfEYG5GABu3PsEYrEV1PJaFk4Qu8L5+Ci2xfYml0Ku7uTMOBizMw4EwmqhdnYY7iK7TZkYOdMbl4vjsPJ+nlY9K5N7ju/VtsHFuIx/97hyOfFuHD3mJctrwUP/q+R+cPZSg28QOG7K5AjfhKLOj/iDtWVeE/v8945eMXnKZUg+mOtWjxvA7bBBvw9OqvOObaN4z73Iirp37H2n3NePhFC0oNasXwNW2oc+Mnvq/5hXumd6CQy2+8+bITZ4l2Ye66btx86y/+qe/BCzP+4WTXPnyR3o8mQwds4H8zQfS4PRDlGoUwZtYgXO42GD9lieD+YWI4xGII3rkzFDWbxbFw7jDc6S6JfTlSeFVaBqdbDceMe7Jo2ToCf2rIofcJeRybPwrjZRXR0GY01oWPwSO/xqK01niMODkBFxdMxDK5yeiwVQmFo5Xx1u8pOFtHBfO8p+GWounYpaCGvttnoFLMTEzuUkdT3dn43WcOniidi/Jj5+OjXRq44okmVvUswAPLtHCorzbeLV+ECyYsxnf2S3BXnC729+nhtZXLUNVvOWZWrsCNk1fhLwd9PPPMAMcJGmKCgREaXV2D9VVr0W3KOpTZZ4KRSaa4RNgcy43Wo+P1DTioxgIDp23EOQes8HWKNW4VscFu48148eYWVK7fiilq29Ds0HZsTtuBnkN24Siz//BxkB2u/GaPn9X3oMsRBxTPcsRQCSdcuGEfFoU443/f96PAXBf0P3YQ1XIOYZbUYbTaeATbQ93w7I+jOF7DHZ95HMc1rz2wYbgnHt3khcPDT2LUz1Oou9AbP3idwb1vz+JguXMYtOU8zo26gPkdvmi76BL+Pe2Hl95dxikKV/Hltmto/tAfW/5cR68lAajgcxOflNzCVWOC8MvO23jwcTBK9ITgvaV3UetCKBaX3UO78fdxgH04Xo+NwBl9kZi9IhqtLz3AjoqH6DPpEU5weIzPE57g2gGx+FU/Do9diUfZqgSMVn6Oek6JWJGYhE5CyShilIK3/V/ivOpUfKOSjtv2Z2BPcib6Dc7GqcavMDUgB9fX5eIP1dd48mA+Kqa9wadiBahvWojVge/w0NciHKZegmGHS1E78z2WiJej/foPKBhSgTeaKnHmnE/46mgVbnr1GX9LVuM5yxqcGFqLiS11aDy/Ab8d/4rued9wxPAmfGD9HZfeb8bKthbct6AVRb3aMPjNT5w/sh3fbu7A7ZG/sbe9Ey9rd6HK6W5MK/yLG0b1YqvtPzz1oA9H/+nH2MUDLPj/rCDWFA9E19HCKLlzEN5/NBgX/RXBUj0x3H1+CA4sG4oB4yRQ3W4Y5jyVRJt/Uti5XAbPXxyOkypkMWniSFy3Rw4b4+XxuIACjtRXxIeXR+OyT2Pwo9I4dN47HsUSJ2DIwEmoYTgZC64p4Y4vyvhv6lS84qyC05KnYfogVbRYq4ZtN2bg6dqZOEZ1Fsa5zMbVqXOwVnQeHjaZj1KBGhjeoIk6Mxfie1ct3JOhjULiOnjTfDHOCl6CuY26uHn2UvzjtgwvZC/HyZIr8YXFKjS5q49NzQboMc8Q5Y4bYUzuGlwuY4yfrNbh/jATHNJminc0zVHTcz0W5m/AnSMssc9mI16NsMLp7daYoWWDlqc248+CLegtb4tjbbdhfPR2NOzcgXU6u/DImf9QutgOIxR34+Ide7AsxgEduh1RWM8Jb53bh7PfO2Pe2AO45T8X7HpyEH17D6HS8sOY7HsETT+44fcJx/DEbneUjz+Oj/o9cMUqT6zy88IDH0/iUKXTeNfRGxc8P4PvBH1w1+pz2H/1PF77fAFVp17EzH2XcOMLP/wlfAXPrLmK425cw4QafzSafgPrDwSg28ubKCMaiJHrgnDJrdtYXh+MjjPu4CDXuxiYHopzhobha7P7uPV2OHZ/i8CLs6JQ2S0aU7IeoNmwGGze8Ag97zzGUc1P8PHcWFzpHoefc+LRRfoZils9x9B7ibiwNQmLNJLxvxMpKJD/Ev1l01DNJh2zwjPQ6lcmti/MxrMnX+H4ghx8JpeHa7a+xoaofDz6+w0O1ynAKO9C1C16hx8UinHv9hIcHFOKQV3vca5uOeb7fEDb0gr8O+YjXtr1Cac8qcKXPZ/RfFk1tlyoQa/yWlSYUI9P7BtwVdxX/NL3DQ+ubEIJv+94r7IZtSb/wGKHVrR71oYDBH/hdYN2nHG1A7OrfqP1lD/Y4dSFPkndOEG4B58b9eLa6//wa3UfHpsmYMn/BwZgdIog6okIYYWxMDrdHIQi9YPxtpoozjskhm/ShuC2IeLYYyqBfkHDcOo3SUxVl8b1R2TwR+ZwPCkxAhU3jMSnIXKo/10eq+co4KFjijgsZzSGSY1F7Y3jsCR0PNr/mICCGpPwhsdknPlaCV8Nn4KbNk3F3/dV8NzPaThxoSomeqmh8dsZ+G2kOrpvmYUjombjg445uHTRPKw8PR/3vdNAUYUFGLxtIc5/qIVv/2jj9iU62Ht2MV4uWYIqY/QwbedS3PB4Gbb+XY6nlq7E0RdWYWyZPhqMX401doboGmuEkn1r8P4KY1x0aR2WVpjg7klmONDBHAMS1qP6AAvM0bdEmysbsfOTFZ5X3oSTnGwwKXEzrhPaio2GtnjcfxuOrN6OD1V24rL9u/Bj8n/oPNgexYx3Y0jAHtSoc8AC1b2446AT/kvdh1fE9uM00wOYHuiCFl8PYttMVzx9+DCOyTyCceJHcfX6Y1gb7I6Hm46j1JwTGH7UE3VeeeF7yVO4x/I0CoV6482WMzhrvg/mHj+Hm/PO4x8ZX7xgfREn37+EL9r80GTBFWzyvIoeb66h3MjrGLP5Bi6PDMBP7Tdxv3YgDjkdhHcKb6PmqBAstL2DOx/cxb7OULy6OAynn72PGcXhaDk6En/uiELvR9E49u8DjNeLQcPzj7Du/WM8Mu4pStvFYsTTOFz8Lx7Llj9Dh4vPUbgiEW9NfIGz9yRjXnwKbhFIxa5Vaeh7OR2VPmVgslIWmu7Nxu/PX+GJgbkob5iHj669xhVf8rFq6ls84FyAQ5ML8e6gIlywthjf3SjBXbWl2D+9DK+5lKNq6gfMFK3EjSYf8detT3imoQrHzfyCCa7VaJRRg/VD69DNvB5lghswsvErLpndiOVuTeiY/R0HSbZgoMUPnHO3FV83t+HWeb+w270dL+Z2oLJMJ6ZY/UGzsC5sbu1GT80eHOXZi4/z/+HKEf342UZgI/9HDEDxdkEM1RLChaeEsahgEP4nL4ICtqLoHy2Gap1DMEtHHK3OSGB70TA8qyiF43dI47MYGVzTPRwbdEds1P0fPcRDIfgnAAA="},"shape":[1279],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1279],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228357","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228358"}}},"glyph":{"type":"object","name":"Line","id":"p228353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228354","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p228355","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p228290","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p228317"},{"type":"object","name":"WheelZoomTool","id":"p228318","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p228319","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p228320","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p228326","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p228325","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p228327","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p228328","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p228329","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p228330","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p228336","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p228335","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p228337"},{"type":"object","name":"SaveTool","id":"p228338"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p228312","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p228313","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p228314"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p228315"}}}],"right":[{"type":"object","name":"Legend","id":"p228348","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p228349","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p228345"}]}},{"type":"object","name":"LegendItem","id":"p228359","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p228356"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p228293","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p228294","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p228295","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p228296","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p228297","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p228298","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p228299","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p228300","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p228301","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p228302","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p228303","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p228304","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p228305","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p228306"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p228309","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p228308","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p228307","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p228310"}}}],"center":[{"type":"object","name":"Grid","id":"p228311","attributes":{"axis":{"id":"p228293"}}},{"type":"object","name":"Grid","id":"p228316","attributes":{"dimension":1,"axis":{"id":"p228312"}}}]}},{"type":"object","name":"Div","id":"p228360","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p228362","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p228361","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"f42bf272-c285-4244-a8da-4cc667f99c71","roots":{"p228363":"cc045cdb-7a21-4fee-ab30-3aeaf7bfb869"},"root_ids":["p228363"]}];
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