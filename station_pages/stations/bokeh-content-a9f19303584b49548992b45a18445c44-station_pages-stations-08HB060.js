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
    
    
    const element = document.getElementById("e75cf95e-befa-471a-af92-f864b0c780a4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e75cf95e-befa-471a-af92-f864b0c780a4' but no matching script tag was found.")
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
                  const docs_json = '{"1e21023d-663f-45d2-8b18-30d168258329":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p304977","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p304978"}}},"roots":[{"type":"object","name":"Column","id":"p305075","attributes":{"children":[{"type":"object","name":"Figure","id":"p304979","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p304980"},"y_range":{"type":"object","name":"DataRange1d","id":"p304981"},"x_scale":{"type":"object","name":"LinearScale","id":"p304989"},"y_scale":{"type":"object","name":"LinearScale","id":"p304990"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p305037","attributes":{"start":0.880999972820282,"end":4.878999938964844}}]]},"title":{"type":"object","name":"Title","id":"p304982","attributes":{"text":"08HB060 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p305048","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p305042","attributes":{"selected":{"type":"object","name":"Selection","id":"p305043","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305044"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3VZzsQDAOAUUVRkhBJES2iRFIpKUolJWVHQlTSUDxUUikJZUXIjKSMiIZCKDRRlNCiUloqokLlvd770/kJR0BAoPb1UVMDAQGBzWpB2O8ZjNElx3CaSAhWrA5F2/gw7GwNxyD1E6i4OxILbkahiWg0vjOPwX1JsSj14RRmasajvk8CNlYk4o7hyTjY+jQmpqTgzM+p+GBmGjrtP4s9d9IxXOI8KttmYElaJlp8zcIvsy/gYb8clHuQi3kj83CZfT42n7uEXh2XUWzeVUzzL8B5NdewblQhujoWoUBWMcZ03UB1vVKsPFqGdrU38YdcOQY7V6BSTiVe+3UbV+nfxffB99D3yX0cqVCFWZuq0SCvBpt6H6L74loUDq3DpIbHqK1Uj1VbnuKGyw3Y+7cRI5Y+Q5WI51j67AVaTnyF7dua0b+gBccMeIP5y9+iUVQrtrx8h97KbTh85wc8W/gRdYU+4+OVX3BLTDsOeP0VY1W/43TPDrx9oxPXCXdhl2k3Hov7ieNbf+H1aT1o6t2LbWV9uH/oX5Q2/4fZif24qE1g9f99pjEQd+4VRJEKIUwWG4yzrISx+rQIOn8agn1aonjCdxhOuSOGZSPE0WrtCPx6RgKPtEvi2Nkj8dJBaVx+XwZfS8ni7nWjUfycHKZ/H4Pz58rjk8MK6FY9DgeOUsJTDuNRI3MC3vkxEe3nT8buAGU8/kgFJ8ipYuEGNVx9YSp++DkNDyycjjLBGnjhsSYultfC5xtn4q6L2jikdxaeXjQHZ4foYM3TueiiqIt/XOdj5CU9VP27AG8u0UfrcAP81rQIAyYYovy2JXj56lI0FjDCN0bLcU+kMY54uQLPTTZBPfdVWH/dFLcKrkHBlWYYF22Omi0WeHeKFa73sMafxTYYMtgWJ5raYdGpdbjmrT1+nOqAB70ccVSZE+YMcUZDMxd8kbARPd5vwqEarpiyZwvOKXfDh8O24UbL7fg3eQdGfXRHNa1deGufB9rc9sTv4l541MYbFc7sxitf9uCKWT749sA+3HvPFyWkDuB5u4O4IN0Pn347hNt0/FHo8BGMrwrAGTKBeG99EDpkBOOvzmMYqhuCkwJCsfhhGJqNjsBPTifQLzsSZX9GYe6CaFwSFIMv62LRc2wcim6Mx9TcBNTpScRHBsm46fhp/FefgifHncGprmlYnn8W1/5Jxw7D8xgYloHjmjLx6vhsXLn1ArZeyUGf/lyUNMrDjBP5uPDFJWyYdAW377iKg64XYMLA66i1ohDvnyxCx+Zi/K1SgmG7SnFycRneGHQLzVeV4+fYCjz0phJHT72DF/+7i0tL7+ErkQf435oqHJZQjWfe1eDc6Y+wdnctbr5Vh/2iTzDaoh6nJT/Fig8NaDujCTt9nmFQ5XNUFH+JBdav0CS1Gd99bsF92m9Q6sBbzLzbivqS77HRtg13nP2Ag799xMQ5n3HmoS/44EE7Okl/wx777xh+vgOVOzuxZF4XWhzpxi81P/Gw7G+Uc+rBvKxeXNbdh816f9Er8B+K1fVj2pgBa/jfZSDW5Qii628hFDAYjDHHhFG9XgQrFYai3WZR/JE3DIP7xFDJUByvhY7AVY0S+F5JCn3dRuLIK9KY9U8GDZbJYlPEaHR/LofCk8Zi0nZ51L6mgFUDFHGDsRL2Ro3HiFcTUEVlEpbunIyWRcrYLjQF/U1UcUysGua/nopGaurY4jkdvUs0cLjIDDy7Wgt142fi41Zt3KI+GwfsnoOxN3Vwuug8vG2ui+uS5mNXmx4e01yI43308XqFAZoOX4xtVoa4P2UJSn9eitkzjXDR/uX47I4x7pRYiSK2JpictgpnfTXF6tlr0NnPDPvum+OJkZY4xd4Ky85Zo1WHDX6da4tH/O1wbM06vDRqPS53dMDXmY64u8sJxfWcMf2oC86v3YhP5Dajm7MrDszZgqd+uaGG/ja8E7wd7Z/swG75nXh80y6ckOeBhb2euHqxF34I8cYDDbtRRmkvXtjig4sv78Pnf31x19IDOCTiIJ5+5oezJx7Gmm3+6FJwBP8IHMXI5YGoGhWEN18Go7XycfzmHoIBhaEoLxSOl1dGoHHMCXzTEol7VE/iCM9oPHcjBvWET2G9aRxujYtHwdYEjJuWhJreyXi37DSuH5qKP83OYEhiGk5sO4tFGudwzd7z+LE8Aw+KZeEoq2zMOX0BDT/l4Auti+jhm4dD7+RjyojLOGftFXx45ipubC/Av7OuY9TBQlS7X4S3pG6gzboS/J5eike/l6HC3Ft45XA5rqiuwLcyt3Gvwx2UyLyL53/cwwXzH+DTgCrc9qgaheQeYvyGRzjjQi3e+1mHDguf4K+gegx9/BQnyTdi8cYmNLv4DD/1PEe/RS9RNuQV5j5txiWKr/Gl6xv0vPQWRf+2YuqS96gT3oaPmj7gpgmf8N/Wz3jy6hecKvAVy42+4drI79jxogMDJ//Ace5dePV6N64U/IWtK36jT3QPSrb0YsaUP7jQ4y82FP/D7YMFzPjfdAAmnBqIWm8F8f7UQejoNRh/lwpj2JAhONlsKN5IEEXz98Pw8/TheGiPOI4uH4EXh0niUkspfJU8Ev/7KI3DtEbhmX2yOPf2aKwVH4ObbcZif6o8Rn9RwGmzFLHigBLa3huPnZITMchuEiqmT8aCb8poojMF3x1SxX1VaiglMw0z16ujfsZ0bOzUwB26M3BwgBYmPpyJM0fPwgdOs9Epew72dOtg+IJ5qBykiyV189Fi7AL84rIQD+fqo1yPAeYZLMZlxw2xuX4Jeo1bhmKuRpiWvxzn/THGOsOV6BpmggJNqzBm/GpU37oGK6+YoV2/Of5YZonBJ6xQ6YU1Xpu0FlftsMX31+zQd6A9jlyxHrNOOqBBsyM2qWxA913OKFzsgkmDNqH2qs1YFeuKG95swV61rRjx3zZUKd2OpSLuaLlmJ7bH70L/dx44Zvp/mL/bC41ueWOL6B70ttiLw5N98OyHfag7Yz8+9jmAWyoP4gDxQxhrfRinp/rj7c9HcJ32UezaH4jH7gbheMljeN32OJqeDcG2r6G4f044Sh+KwOwHJ3CRdBQ+sz+JO89Ho0hnDCbPO4WzjsRhdU08OssmYp9jEp7ISsYp3aexTC8VrQLP4NfaNDwyJh3HupzDSznncfnvDHytn4W7j2WjeP0FTFfIxfmbL+KTvDx068vHgYaX8VToFdRovIp3lK6hvdt17L5ciMf/FeGEZTewMKIEVz8vxQ8Tb+KB7bdQ5lo5XhhQiYuNb+PzqDu469VdHKJyH0/vfICzi6qwRqgGXUwe4p+YRxj5uhZV1R7jTc8naF1Sj9+EGzBgdSPKxzfh5dZnaKz+At94v8Q9N1/hCNEWPGf+GvWS3mB921vcqvkOBX3eY1xFG2oO/4h3rT7h+pTP+PPTFwyZ+RUn7v+GRXe+4xqJTvy49gceTOvCUV+7MWf2LzT0+40v7vegx8g+HGr/B1PO/cU5Hf/w4VwBc/73H4B/qwdi1CghVHMchLcyB6NNlzB+nz8Ejx4digq1onhFTgxXOA/HtxfEce+vESihL4nng6VwwZOR+FReBrdtGoVCebIY3zsaZyweg/dCxqJDgzz+UhyHoVsUcdJlJSz+Ox7Nlk7ET+GT0O/ZZJSdqIK526bgkgJVfCkwFT2XT0PRKHVMfTkddZQ18ZH7DNxUqIX/BLXx5MpZODVmNpa3zMG1qnOxw2MeBt7QxXHCenjVdAGujFuIrW/10WfaIpT0XowZZYa4cOhSbDBbhtsTjXBQ23JM0FiBWntX4v1yE3QUM8Xflqsx7PQanPzJDG9oWaC5ryV+vm2Fh0bY4Oi1a/HiGVtc2m6Hr2bZ438H1+Ow+w54RsoJ567bgLXpzrj5uwv262zC6MObcVq1K1bIuKGtw1bszNiGQT+2o+J8dywI2Ikmj3bhu9GeuG/Dfyh1wQszf3qj/sI92Bi0F3c89sHB8r6YuHE/zrx4AB/0HESnRYew5/hhDH/qj8qKAVjiehQtLgXilz9BeHjJMZQLP455TSG4bEIYNm8NR6+rESgmEIlpRlE4L/Ik1r2IRtfJsSjgfgpjrsehumACVq5IRLvoJPzRnIzBU1JQySMVrxWfwVWDz+L7Venoe+ocjnx7HrOmZqKBVxY2lWaj+5AcFDbLxaSEi6j9Pg+rpl/CDXsuY++tKxgxrABVLK9hafJ1tPxYiO0zitF/3w0cc7sE88XL0MjmJrak3kLvL+U4fFYlnj1wG3Xv3cHHkvdwi919HJD+AGO/VeF0nRq8feghrqt6hF3SdXhs/WMcn/EEr3fWo6luA7YdacT9D5tQevRzzHZ6gYuyX+Kz7le4c0ELigS9xuS6NzhrbCtWu7xD59z32Pe7DU8YfMQpxz9hWf1ntBrXjl83f8Uj+d9w7J/veMmwE5eH/cDXjV24e/xPFN/6C9Ov/Mb5/T34ZFkfup34gwNf/MVTk/pRY4eABf9fG4D2AwWx21gIj58chBOaB2Ohigiu3jUEPxQNxQODhqHMKjG8EDscF78Rx+dqErjrP0kcUiqFp0WkcfYaGayJH4Uu72Txj7ocRu4eg6q3xuJNUQW0thiH35IUMeCDEsrPmICXfSaiceUkfDNcGfdYq+CI1Cl47rMq6mlPxfr903DrXXUUlNTAOFtN1Dw7A+9+1cL1c7Txp98sDHkwGydK62CR/Vxcc34efuzQxYPz9HDUkQWYU7MQDWUN8IXjIvTIWoxDuw0xRW8pzglchg9rjXDjGGP867wCo3JWotpvE7ylb4o2x1bj9ydr8KiCOSpstsAreZa4os8K3y62wb2ha1Gi0RbPK63DBW72+PTyetz2zwGFljlhfMQGnPHcGe9N3IgO2zfhr4LNGDpgC04ydsPiqK1o9mobflLegX473VG2aCfmCnngEhNPfBnzH3q+9kJRtd2Y6rkHdUr24iPhfbhptS/+i9uPJ1sP4FR1Pyz3PoRrbx7GjqFHMNA8AMclHcWrbYG4UjMYW/ceQ5+K4yg5PBQzrMJwYUo4NnyKwO0zI3HQ/ihMuHMStSRi8P7aWHRMO4W/2+MwbHYCTvZLxBv3k9B85Gn8vC4FD51LxdEdZ/Di3LO41D8dX1Wfw/9GZeAwx0w8k5mFc7uysXZ+Dm4+mov9jy5itFw+TnO+hBUXLqPtryvYubAAg4KvoeKT61ggX4Qmm4rx3cUbuK+3BKUWl2FmyE3Ub7iFjYoVuGNLJQ6+fBsT/97BmUvv4YPw++j07AH2TKjG8G01qFzwEEsEatFieR1+iXyMh18+QTnlp5jn3oDLChuxWfAZeq18jmIxLzCt5SXOU23GOo8WdL3xGgWE32KMaSuqx73Dyrfv0W7aB/zh9RGDyz6h0tAveM2sHVclfsX377+hr0YHjtzbiVnlP9BArBubLH+i++lfKPzpNyZp9aK2bx9W3f6DG0b8w16bfow4I2DJ/+0DsHSWIFoeFML2e4PQX0oYx6wTwfz0IWj0fSi26AxD78NiOLx6OJ6VGYG6DhL4OEMSt/yQwgHzpTE2QAanPxqFt0ePxnUb5LArewwe+zkWxy9UwOtB49D0sSK2jR2P+zdOQOmLEzG7ZxIuWqSMz46r4M6nU1BEUQ2TXafirEvTsPqPOjov0cC+ME080TQDp0yYiWVbtdHq6iz82j8bjxjp4NjIuXjpxTxcPnk+vt6hh7uvL0BxQX1MX2GA86MX4ZPmxeg2ZQkO9FiKp4qXocbg5XhnlTHan1qB3W9W4vGpq3CClykWlq7G1UPM8MMaczyQYIEy7y3xwnRrXLzHBp/fWou7htnhEMt1eDrZHmd/XI81MxzRZZ8T/qncgJHiLqhqsxFvpm5C6y+b8Zv2Fgw44Iby97biZcntaGy3A9+cdcc933biCB0PPHfIE/Wq/sN6aW/cun43CmbswbjOvaipuw/vHvHF9Q/340/Zgxji5IcTsw9hUfdhXLPgCH4MDMCDdUdx1NggzHEJRsPcY/ji93H0MAjFocfDMKU+HOeMO4EPN0fixvwo/Nt3EqMMY1AtLBZvNZ5Cm/Hx+N0tAY9eSUSF/iS8suw0rjiRgm+fp+LeSWkoseMsnr+WjgsGnsenxhm47WQmCjVnYbzKBZyxKwfvFeWiw6A8/GWSj6Gxl3DSm8tYrHYVzf4rwE8l19BPpBBl1xRhbnwxLnl3A1+ql6Ln7jIUvXUTU0XLUceiAh8lVeKmD7fxn+ZdPOlzD6dW3sfy4VW41roaO1JqMPDzQxynXYtX99fhyruPsVWiHn1sn6Lk2QbM+NqIC+c8wwa/57j9wQscJP0KE+ybUet8C97veI2O897ib/9WDKt5h5Nl2/CG4wc0z/qIn7s+4SG9Lzg6sB0v1n7FpWO+4yvnDvwvpxOH/f6BZ/S7ce6xn1j75BduVujB/k29GJ3Xh9P6/mDF4n9oG9qPnQ0CVvyvNBAV3QSx4LIQmvwbhO+WCuO+CBGUej4EMyeKov72YdhYIIY7BojjYOMRmBglgTNfSeID5ZHotFMaewplMFxIFpVNRmNJjBxavB6DX1Tl8bCnAsqVjMM8YSVctno8NsdNQK/WiSimPhnTvJVx3k0VrBuqiq7maiiQNBVj2qahuuZ0rNyrgXYVmvhDTAuDrWaiUoo2Xvs0C1fNnIPvfXXQ985cHCmhi1lr56NBmh42tS9A99n6KOxngEn3F6H2SEOsWrcEN5xbir3fl2HE3OWo4m+MpdUr0HKUCbY7rEL/TFMc07Ua8+ebodFRc2x5ZIHeclY43Nkaz16wQd1fa/HxQjvcErwOBzyxx1h5B5y+yRFvX3TCdb0bsGuRCx4L2YjjGzbhdUVXNN2yBdsuueH+v1tReul2zA7fgYueueOzCbtw5zYPFCnwxGQBL5y13BurI3ej88s92DfZB0+478Mphb5YJngArVYexK/Rfnik5RCOVfXHSx5HcPmNAHw9OBB3mwaheFwwpr89hvOnheATr1B0KwvDgUMj8JTZCdRIjMQ776PQXiMau/fE4PHyWJwgFoeFlvG4+nQCfviYiAe0klHG9zReuJ2Ci0ecwec2abjrzFkc0p6Op2edx9kHM7DmXia6SGXjH7sLGJmeg6rfc/GmTh5aH87Hb1WXMEDmCso7XMXLGQVo/OMavtEtxD0BRTjiUTGeG12CehtKsT67DLf+vImCC8sxLqgCNR9X4t2xd3D9xrv4M/cehvTcx4mLqrDoeDWueVqDH8c9woOutTjqUh3m/HmMhkvq8UXYU/RoasChE5owZesznHP1OT7sf4EbjV7h3xPNGPWiBdUmv8FbO96izfVW/D7wPR5d0YYK0R/wSvNHXDHlM77d9QX3FrejxOBveH7Vd1xwqgOfvunEbVO7UMirG+NLf+KMIb/x3poedEjoxV/v+jB0+l+ctOcfFt/qR7NhA6z532Ig+iULouxHIcydMRiX7BPGl5Ui6Ck+FEVtRDE1dRjqfBHDR9riuOnACPx3VwJPSkrhVLuRWH5WGtd+k8GOObIYeGg0jquSw6vSY3HlenlsPa+APp3jUFJXCTOOjMeFDydgg+wk3O40GQdlK2NCtwpqLVDF+4Fq6Fg3FX+PUccwl+k4OVcDb/zWRHMDLfx8bCYeqtfG0eNm48XNc3Bpvg6+6puL/xnq4rCw+XimUQ/njl+ItW76uPmKAfb/W4TRywxx2oklWPF8KdpOMsLO7csx6JoxKg5ciQXGJmhychW+e2WK+1TWoNQuM8wsMkf9QZbYaGKFO2KtcfAbG0xUs8WZ/9nhg5J16CSyHntWO2B4vCMqv3PCEnVntNjtgl9ubsTDoptRzsIV85K24LIPbtisuQ29fLajWOUOTBu+E+dZ78K6FA90/eyJAtpeGLPfG9Xv7sZKib1oZ+uDP9L2YfBXX1SacwCv+R3EVQ/88P3Iw+hr748jzx/BrI4ANJgXiE3+QeheE4zCsscxyTEEtbNCsaorDDfoRWDv0RMYURuJKmNOYqlzNFrmxGD7r1j014/DMcfiMf9JAhopJGHLpmT0zjuNw/tSrA3+B2DyNClgMgAA"},"shape":[1612],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1612],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305049","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305050"}}},"glyph":{"type":"object","name":"Line","id":"p305045","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p305047","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p305059","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305053","attributes":{"selected":{"type":"object","name":"Selection","id":"p305054","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305055"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305060","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305061"}}},"glyph":{"type":"object","name":"Scatter","id":"p305056","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p305057","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p305058","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p305069","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305063","attributes":{"selected":{"type":"object","name":"Selection","id":"p305064","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305065"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305070","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305071"}}},"glyph":{"type":"object","name":"Scatter","id":"p305066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p305067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p305068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p304988","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p305015"},{"type":"object","name":"WheelZoomTool","id":"p305016","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p305017","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p305018","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p305024","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p305023","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p305025","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p305026","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p305027","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p305028","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p305034","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p305033","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p305035"},{"type":"object","name":"SaveTool","id":"p305036"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p305010","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p305011","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p305012"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p305013"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p305038","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p305039","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p305040"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p305041"}}},{"type":"object","name":"Legend","id":"p305051","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p305052","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p305048"}]}},{"type":"object","name":"LegendItem","id":"p305062","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p305059"}]}},{"type":"object","name":"LegendItem","id":"p305072","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p305069"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p304991","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p304992","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p304993","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p304994","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p304995","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p304996","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p304997","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p304998","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p304999","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p305000","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p305001","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p305002","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p305003","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p305004"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p305007","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p305006","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p305005","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p305008"}}}],"center":[{"type":"object","name":"Grid","id":"p305009","attributes":{"axis":{"id":"p304991"}}},{"type":"object","name":"Grid","id":"p305014","attributes":{"dimension":1,"axis":{"id":"p305010"}}}]}},{"type":"object","name":"Div","id":"p305073","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"1e21023d-663f-45d2-8b18-30d168258329","roots":{"p305075":"e75cf95e-befa-471a-af92-f864b0c780a4"},"root_ids":["p305075"]}];
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