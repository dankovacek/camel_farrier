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
    
    
    const element = document.getElementById("cedf62e8-3db0-4212-9575-777972bdb2fe");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cedf62e8-3db0-4212-9575-777972bdb2fe' but no matching script tag was found.")
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
                  const docs_json = '{"e1cbdd4a-88dd-4816-bd9d-00e1d7eccb95":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1173","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1174"}}},"roots":[{"type":"object","name":"DataTable","id":"p1205","attributes":{"width":930,"source":{"type":"object","name":"ColumnDataSource","id":"p1175","attributes":{"selected":{"type":"object","name":"Selection","id":"p1176","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1177"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DU5AVAAAAwJdt27bNy7Zt27pcl23btm3btl2f7c5sIBAIhDK0YQxrOMMbwYhGMrJRjGo0oxvDmMYytnGMazzjm8CEJjKxSUxqMpObwpSmMrVpTGs605vBjGYys1nMajazm8Oc5jK3ecxrPvNbwIIWsrBFLGoxi1vCkpaytEGWsazlLG8FK1rJylaxqtWsbg1rWsva1rGu9axvAxvayMY2sanNbG4LW9rK1raxre1sbwc72snOdrGr3exuD3vay972sa/97O8ABzrIwQ5xqMMMdrgjHOkoRzvGsY5zvCFOcKKTnOwUpzrN6c5wprOc7RznOs/5LnChi1zsEpe6zOWucKWrXO0a17rO9W5wo5vc7Ba3us3t7nCnu9ztHve6z/0e8KCHPOwRj3rM457wpKc87RnPes7zXvCil7zsFa96zeve8Ka3vO0d73rP+z7woY987BOf+sznvvClr3ztG9/6zvd+8KOf/OwXv/rN7/7wp7/87R//+s//XHiUpuQDAAA="},"shape":[249],"dtype":"int32","order":"little"}],["station_id",{"type":"ndarray","array":["07AA001","07AA004","07AC003","07AD004","07AF015","07AF016","07AF910","07BA003","07BB009","07BC006","07BC007","07BE003","07BH001","07BJ003","07BK005","07CE005","07DA014","07DB005","07EA002","07FA005","07FB001","07FC005","07FD008","07FD908","07GB002","07GG001","07HA902","07HC002","07MA004","07NB007","07QC008","07SB003","07SB005","07SB020","07SC006","08AA001","08AC002","08CC003","08CD001","08DC002","08EB006","08EE005","08EE010","08EF004","08EG018","08FB005","08FB009","08FC003","08GA016","08GA022","08GA054","08GA056","08GA058","08GA067","08GB005","08GF001","08GF007","08GF008","08HA009","08HB007","08HB008","08HB014","08HB034","08HB063","08HB070","08HB075","08HC002","08HC007","08HD011","08HD012","08HDX03","08JC006","08JE005","08KA007","08KA008","08KA013","08KB006","08KC003","08KE008","08KE014","08KE028","08KE032","08KE033","08KH024","08LA009","08LA012","08LB023","08LB027","08LB039","08LB056","08LB071","08LC020","08LC027","08LC034","08LC038","08LC044","08LC048","08LE006","08LE027","08LE048","08LE079","08LE086","08LE092","08LE102","08LF002","08LF005","08LF009","08LF014","08LF030","08LF042","08LF048","08LF068","08LF079","08LF095","08LF096","08LG005","08LG015","08LG016","08LG020","08LG026","08LG028","08LG044","08LG048","08MA003","08MC025","08MC028","08MD029","08ME005","08ME016","08ME023","08MF001","08MF002","08MF036","08MF067","08MF071","08MG008","08MG017","08MG018","08MG025","08MH026","08MH059","08MH070","08MH077","08MH080","08MH091","08MH093","08MH103","08MH105","08MH123","08MH141","08MH145","08MH148","08NA022","08NA034","08NA037","08NA042","08NA057","08NA067","08NB009","08NB011","08NB013","08NB016","08NC003","08ND004","08NE001","08NE073","08NE076","08NE078","08NE094","08NE106","08NE110","08NE113","08NG002","08NG007","08NG012","08NG030","08NG031","08NG056","08NG059","08NG063","08NG064","08NG079","08NG083","08NH001","08NH002","08NH049","08NH100","08NH102","08NH120","08NH122","08NJ004","08NJ013","08NJ068","08NJ135","08NJ145","08NJ151","08NJ166","08NK017","08NK028","08NK029","08NL018","08NL050","08NL057","08NL060","08NL067","08NL075","08NM023","08NM063","08NM075","08NM131","08NM143","08NM148","08NM171","08NM172","08NM233","08NM238","08NN017","08NN021","08NN023","08NN027","08OB002","08OB003","09AA014","09AA016","09AC001","09AD002","09AE006","09CA004","09DC001","09DC006","09EA005","09EA006","10BA001","10CD001","10CD006","10FA001","10GB006","10GC002","10GC003","10HC008","10LB004","10MD002","10PA001","10PB002","10SA002","10UH007","10VC010","10VC013","10VK001"],"shape":[249],"dtype":"object","order":"little"}],["jaccard_index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3VVbUyOYRRuY2sh+axm8z2TRUa+V06yFkNMy0deNfqRIpW00bKVfryURW1oRPmMojVJYlFeieJtfS1p3oV4K3qPokiK+2mu596e5vlzP/dz3+ec61znOufRZ22tWPiUaUpW6xqXP0y/HaMaxnUx3fc4+r48jenM6qR95j4m/+6iN4n98l5M+ZwVqZVMa13+TO/vYVoUVygsmHKq6rd8mc+UN8x8wqmDyRJLiwMeMFWn6AZW/2Iqrbjkde+bjJO2f1xCSQVTrve7mAm5Mg5Wq8HnqxrXFJmY3CLsHE/X2eyZ0aJ+h//8UZG3kpraqXbD7jHbllsozNx3s7OGqXfBp9xZLUyH0i/PLPot88Cq/8fD/+Ju9Bi/y1Ar7efducBZz5i8vA/02rXJ+7ppqzqDXkq/roOPtAOfOJ+deTzvXZvc57dHFUwU5w1XItxHNDB97JpaEx7IlKqk1yHzhx83HyVzaQ/84AP1mVSyQyCT922b553K/MkUXG8Ode6RefAy5Y1py2glQxkH9sgTuLW60OKx6c0Mzm+XfpAf7iE+8Gjz1PpzaDT+8P0g/UBP8B9/WnmR343ZiiCH1h3xUC8l6ueSoXpHfPAYZPH3XNnK1CpQn30r+UI8+EU8nD+cbTey4Lr0U2HwvB1iGsr/FWGl/87krLcXmQ5dcd/3zPTk6Ejp/6Bgo9Ii98C93aGw2spkUXmdJtRkbZT52QurF4ZWVS/AjTyAsyXh4qvsKvkd9sBz3i8j5/ZrpgjjsRpTM5PS/baPLGodlayahJ6n2Idu+JbMZJfuevnuUovKm7bvwRP4gN5CrMLjh5dJPaIehm4n3cknoi6Nt37pwpj6lXDxTH26sLKBO4KP4s2CMXkf+kY85AV9gAfMKfD6I7o5few1iQ910+oEuP/X55iffqU3rvp4MIkhKIgQ9VHkuLNDjQs79J2iosPlMh7wWwemrZ94wqLu0R/AjfqDN+3czHCbW3fuE1OKXcySnJXSXpmaCReZYrvyNu09J/EgT9ijzuh38Idz8KGwV1zKFLfm8ZHJy8xqHsAHvAHrnlu7n5c44Bd6wz2cwz/6GXgwL9AfuI8V80E7v7R9pP1faP8P2hX/P/AAXSIe9AacWnvUEfbYY77hO/D9BROEQ47IBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["percent_area_diff",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3VVv0tbURR+rpmKCDqldGtnV8N5dLGLg90K/hF1cNElQzK7ZGkHF7O4BApCFYTbRkUjKkpaQgvSiA0O7aKiDoXSvHvOd+B96TtDLufdc8+P73znZLFS6q2/HYSVidbs5XItvH+XybZk2kTrThITvW+4rtIX2A+dDD11w+/5rXL9103Ifue31sLT7CgPTG9ZnEaYjrILO8F35IHTAlURsRQDfZSH5wur7aW5FPfmXzT+VLravh9a/LU6evI6GhxanBrVkSQL8cH1SDzIi2iwI6hL8+8KvuftjuEnWYz4jnmeHF/1ptszHoanx+U8kgLhfsFvXm9RX2qcRyjKU/W98P+4Nce5mdFi/RP1tRHyfVsz3m2M8JB5oHh8kDxO7tfjASe1/ywcF3rk0X1fGC/o3C/1fybov+UtyEvtN4XxUB5c4D6AJ3iHE/7AZ8JfcNq8ed7AD+9RJ/i/m41Dez8oz394XdH+zUxK8+d+8/zYY9z9xHwZ3lbfkxT3sfzKd7P/ElSfTDHPhH+V+wueaN1XXq/tEbP7KXHd1B9F/d75XkLd6J++73j+wJ/65v6Rl+6zr5LnaYfnaqQe5oO++yaa1x/HLeJ4/ixFn5U3J+4H9fOeVDzHU553qyugP5grxhnfFbdrz195g/1z6/xlnti8gc9FPLK5uZJXGS0PXnq+mTp7eeR91TwO+P+B9xndN42HfeH/C5rnkOfV6UjfeR9y/wr66u9sD7md9vEmYI/yfJNUi/Y4eELzF/4BOj8XP8gHAAA="},"shape":[249],"dtype":"float64","order":"little"}],["old_area_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yVVeVjM+R9P1y6VzSpGibZSuq+JDsyr6HRsh46h0bnSduyoaFS0agZpVtF9sJnokXSg0aZE0rZYiq7HLokt2jK0u4kc/X6f7/f71zzPd57P+3hd77aftSx5QiEUX4pXxl3PRqblpqp5ysb4IJu44aCvirQwG3+r7mQE3bG5ZR2RAf79Iw+H5HjwPPmj4c1ZLn5P97i+nxeJ8YJLqv+4CxHJe+ym0JkErRvbdZ0feOLQ7a3t527tRPkt3YaEtAj4GlVkWe07g+ozW9Brnw+ZWptVSflO/HHhQ7BsJheDlfy1JkMSJBkU/U9dWoEGhZdi3cYuHFOeXORRmgAj6y8vBCvkMXPdMYSVSfXCyfvV2BD9w6SrVS4kjavf3xyxhd7n6T3DVrHIn1YOsW+ux0SiVDP1Ygn291zmvk2OQ4kJq2BTUScGAl5Z1hR2QjFgvnmCXCtSNercwwYykP59a5L+4ovYra02LDMuAxaGdfS2WEHieuU/3pUaLPp+83/HIhxBttexf2eDDdmxL8vC2kGeP0vRsMWNV6fWmE2KUJpcLtF30MOvcewfm97xcdZs/dKJZYFYLprwEbjXYiP3kP1AnCdGMk/duxMmQVUZASo1CR2R50O3PlyIebv0YgUpXyHGdLroSSUQrOv8T4TqZlBrNF9LYubqE0FV3vTwQFAuktzypw8FZ2B1lnPoaMp+vOCcedqmtxft5wjgnEgQWHNnl4jQ1r7Y0K/fFhPPV2ndaDHDurFHFz6scaX3+yyOousoX/eCwcoD4ubCBJj1lb7Q+cKM5nOMXYZVNesCt0fzIEg5a9aRdxRv/xw8aJtTiqsxc2cqDqVBoEJeXstD8SZNsVcdF61JeSxF5wTwZtd/kMW4Y7RH78+ZQCGONjz7u8CRR/NUvMEbbIpAr/UY6CSAvWTDw/sTq1ckofWhNluFM/y18wadgBENndujvrshIzD3sWJR5v9zTe08Pp6p5FVnLNBGfOWcViVfU/j8oZ0W5ubNzJsZDiK/htO/1GNbpNPTb7O4UKo84Tjnsw8IC51xGnaIooSkmoUXdStGMndwMVf71A5jBS6yHg4Nq0jjoTZsnlthz8ZaCpBaNiLSH60tudYIU1ZB39xJD3xBZKq+qxDDbfPLbb0CMN/80sk3H0Mh36r0tQZHEU6UgaYjQbao5N+zY+pW74I91Zhvw+D/2B8sQz+lSvNExmfFsbjT4VIbfcAfFVqWTwwMQ0CNvVmoDpfunf1RavmI65y9lHrUDR1vVwbn1CWiy9jxRPazIpBqfYISayx5HrS46XMgKFrEMyZYoXywIHNZKXQoILrlsGbLg+PBXuGwajH6SsUvHR/vvr7dccIJSp051slSL+T4UY58z6Hx+skJ62ujh3ZrCcFd3PRAbsgQQ3mHRdt6WTgddXk8sWAdqL+Pfu2N0bDTA+w3nrg9SoQ4q8vgrqYGYhJiNDm0O+h7pUawUZ//3ZGIy3w8MSCD+QnhQAlA4I1K/eZPh8Xu2O5CFCr2gN2Oq56qN9WRJNX8eNcmGqSbVDPbjskZoQEzh60+JkXkwy5NdPSafrfExYy2iemoEqOrKAfUXQlPf2TWA86vj6XC4VBQ5V4/8mPm79kLA9J2ymUP+sjz8E05TH4Fh9M6jFNaROdD3ogAvyDjeRdLGZk+hKlUPsPX2G7Il36pfWr+ajo3L8YXQYNqFB8BFbcVe+SbJAilDMC1AQW3tGoVfituKczttgWHWvB3CwSds7vntCWA2Vden86vmo4BULbuCV+KJjI+b0aCqdiA/RZumUy9mXccep7sBByZIobM80S4epBD43AcQozvqndpGWPhv87dO6UeTB/F8yDpa8JScgRFy0+EJ1EalSwK2DiuyF7g5gwSrz0bgrRoXXt/GueQNGv+FOIMm2Tzb5b3ueKgIhHIXCGI63w8SwUIfGXZYtRN/LStt/WvffsYf5pkwo8Sjqs3yJmRqR0wgdiLanCfQ+V3j3o03BUEKuyN10HsnjgoO8jUO7kMlH1t9vGwhApoR18mt2Ki8N7vr7NlR+KR9m+Dd8zgAVjkVry3rlrJ5P+lGMRQwTsRinOBhIDNW0GdCxN/Pzg0/rZ3nYEQx2VpHDvyS00RcP4qoz+eAH831SsYSYpB1HtsZLuQuTP9p+m87R8bgiUVLNwshJBgS1vegr3D5Qs0R5vpuzTV1Qu7N/au7vGtNI5ZN6/gAWFlXLsPPf0Br+rniGB766LFa4sKfHTk3/eoOk7fnRNPq+g8dOgvAgXfm7Emut5S30RQclIOL2TySWcPUqgDIidicvvyFmwlMEyRu/V/wAvzSMgHAAA="},"shape":[249],"dtype":"float64","order":"little"}],["new_area_km2",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[249],"dtype":"float64","order":"little"}],["absolute_area_diff_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/z1VeTyUaRxvOzbW2pJOso5sB9nUlnTt9+3DqtWdVTa1NZVdO4kQKiukzZU7xMxHpCajVmNcRcs4+tAmGzqUQmg77WY66GLf532feeevmWfe93d8r2fF0+Fz9Yr1mIaIprYOnQLoi6qbLd0ikdey1X/NlzIce/Pp1uMr3XA5bnaAlWkFSr//fKhluD9EP6yflhnZge6xRlceogYWcv3r9i2D2GyytHdHvS4zx9maPYpH2KyVss8cXkJfvfTvn2+WoMvGQOVq0gVThY97Qs8gFhTW+ZefyMVcPZvFf65vQNH8/qqduXU4ePTiLu23KpjF+nkb6tZhUfuamFTPQ3BKMWVPevGV39B0rVYDxspu8rNOGwtsH+3ClurE/Mil2x5efwnpNycL59vqMTX5X3tmP7BiqiZMdRqRrcW4cA3jMMUxkB2tCRfOD3t0dHojnkydrXXO3JEx+/jGr0PqjZEvxi9f+yGC7ivDLM/sTy6NSIT5xQ/hr1p78eMR21uXdxfSuVMwTDvKeMe/pXg+q2zaKJ3TaPOOiu1Wx2Hef7bfLfO5An7OKASOzVv24MBhpJWlxI86IEPw+4V7GiIS6b4KpFlMTL6hfQEiDkAnDLj1dYuyZJSPIxQfBUhT09gi9OiWW6dZRKBpSNtQ7ahgxDntNU8dDMFMt0mdLhNKMO6oI8twKG5YkoMzIIeNQzKQnkY+kQKuPL9edE4DaBtm/DTjajxa3x4UX9obRt8PwAd5b9Oq7WuRcJAMXgfnypxTq5kwbNl9eUAZqKT7nBTmfEdeT1LBkcA4Pg0cjGMO0z5icLJ5cQr20R6P3suzUFt6IebTF/64PYYIJhmhyXbsP9XgtmlUYa8Dp0hUv56+Oa6qCAWBasXaXeng6PfPQ868a4tWN4Yi8Wrw8oqgGFgTOoqKce4PAmAGnV+B4/eTwn/flAS+XAt9fjevK8NY8PAlUBxCBHxVzzMWz7yRi7hutXGT13ke59ThzAGbs99udM2ifKiF/Va9jGUZCcemnQTpcNQdJ8RXoZ60M8pBe4dOkvxQJWKmkzcjYc0ZKQd8vSt4LLZ8k3o/DP6sCzqsMpFXvD34zhI53TsKWbfmsgprpril8Lrvr4Ku97noVncF+p26TktqFBg0JcKuAUeXfj4Wr25M2DxQDW690V1gm7CApGPryIZJ6+5KYNLkxX7dL/CiyQEepyA8FJHOOVSndpTnCHBy05NhwO5dzzPVcEajG3b4+Mz+LAEHU+NXHhuCylEk2187Y2Ei9a8M6+4a/iaak0x1HA/WhBN9b/sAG13zK57HCnPyOVBGcycTi/aQBFPwPp5cBSJilasCbOg8ElvK6PPRVEcKvs41htH446a2u5nHvlxhT6LKV45yrOQCpQ/7ucIeGMEZPhH1W1bUjVwiEfTK1w8EYdX2lxpax4/iEybsYUtssa0eYi4glAgpYQ511rZQfqTg4O59DeZUe/kX0myaPyk4zbImqi4QcoOLTYNahHANS6iO8mm+7IQm5/h+NYL/NgQRBcnBuVx1VvALr6dcIY+kNSZsQoeiuY0UVuJ16+1QX4fDcOAMIhH2cflrDhux5Si9G/XRre8e1X8OzasUcHFsVg32x3jxqmyIOUMU4h4pd6yY5pM30gOkJ6dEWtN7qBl3GvpY5UYLeaLRjSYX7Ym8FhTgnsOwfTrmKmEe3idqAX8DTlBKsCAT54FMNzG5ENzYngXQWiJxPqFjzfD+joN7wVPfonFlNA/PI58NlwCpEiyp9r96PaZ5qaT57iX4QEGukR41yivJRdOOSb4kwYwZXkcPeF5nGzHLfN6OelLyDJzMnbsxmjO6BJr+lQvIzVRBfehKeWgU7l0erx6Kgy8k/xideby8G/8DGdVyvsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}],["page_link",{"type":"ndarray","array":["07AA001","07AA004","07AC003","07AD004","07AF015","07AF016","07AF910","07BA003","07BB009","07BC006","07BC007","07BE003","07BH001","07BJ003","07BK005","07CE005","07DA014","07DB005","07EA002","07FA005","07FB001","07FC005","07FD008","07FD908","07GB002","07GG001","07HA902","07HC002","07MA004","07NB007","07QC008","07SB003","07SB005","07SB020","07SC006","08AA001","08AC002","08CC003","08CD001","08DC002","08EB006","08EE005","08EE010","08EF004","08EG018","08FB005","08FB009","08FC003","08GA016","08GA022","08GA054","08GA056","08GA058","08GA067","08GB005","08GF001","08GF007","08GF008","08HA009","08HB007","08HB008","08HB014","08HB034","08HB063","08HB070","08HB075","08HC002","08HC007","08HD011","08HD012","08HDX03","08JC006","08JE005","08KA007","08KA008","08KA013","08KB006","08KC003","08KE008","08KE014","08KE028","08KE032","08KE033","08KH024","08LA009","08LA012","08LB023","08LB027","08LB039","08LB056","08LB071","08LC020","08LC027","08LC034","08LC038","08LC044","08LC048","08LE006","08LE027","08LE048","08LE079","08LE086","08LE092","08LE102","08LF002","08LF005","08LF009","08LF014","08LF030","08LF042","08LF048","08LF068","08LF079","08LF095","08LF096","08LG005","08LG015","08LG016","08LG020","08LG026","08LG028","08LG044","08LG048","08MA003","08MC025","08MC028","08MD029","08ME005","08ME016","08ME023","08MF001","08MF002","08MF036","08MF067","08MF071","08MG008","08MG017","08MG018","08MG025","08MH026","08MH059","08MH070","08MH077","08MH080","08MH091","08MH093","08MH103","08MH105","08MH123","08MH141","08MH145","08MH148","08NA022","08NA034","08NA037","08NA042","08NA057","08NA067","08NB009","08NB011","08NB013","08NB016","08NC003","08ND004","08NE001","08NE073","08NE076","08NE078","08NE094","08NE106","08NE110","08NE113","08NG002","08NG007","08NG012","08NG030","08NG031","08NG056","08NG059","08NG063","08NG064","08NG079","08NG083","08NH001","08NH002","08NH049","08NH100","08NH102","08NH120","08NH122","08NJ004","08NJ013","08NJ068","08NJ135","08NJ145","08NJ151","08NJ166","08NK017","08NK028","08NK029","08NL018","08NL050","08NL057","08NL060","08NL067","08NL075","08NM023","08NM063","08NM075","08NM131","08NM143","08NM148","08NM171","08NM172","08NM233","08NM238","08NN017","08NN021","08NN023","08NN027","08OB002","08OB003","09AA014","09AA016","09AC001","09AD002","09AE006","09CA004","09DC001","09DC006","09EA005","09EA006","10BA001","10CD001","10CD006","10FA001","10GB006","10GC002","10GC003","10HC008","10LB004","10MD002","10PA001","10PB002","10SA002","10UH007","10VC010","10VC013","10VK001"],"shape":[249],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1209","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1210"}}},"columns":[{"type":"object","name":"TableColumn","id":"p1178","attributes":{"field":"station_id","title":"Station ID","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p1179"},"editor":{"type":"object","name":"StringEditor","id":"p1180"}}},{"type":"object","name":"TableColumn","id":"p1182","attributes":{"field":"jaccard_index","title":"Jaccard Index","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p1181","attributes":{"format":"0.0000"}},"editor":{"type":"object","name":"StringEditor","id":"p1184"}}},{"type":"object","name":"TableColumn","id":"p1186","attributes":{"field":"percent_area_diff","title":"Area Change (%)","width":130,"formatter":{"type":"object","name":"NumberFormatter","id":"p1185","attributes":{"format":"0.00"}},"editor":{"type":"object","name":"StringEditor","id":"p1188"}}},{"type":"object","name":"TableColumn","id":"p1190","attributes":{"field":"old_area_km2","title":"Old Area (km\\u00b2)","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p1189","attributes":{"format":"0.0"}},"editor":{"type":"object","name":"StringEditor","id":"p1192"}}},{"type":"object","name":"TableColumn","id":"p1194","attributes":{"field":"new_area_km2","title":"New Area (km\\u00b2)","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p1193","attributes":{"format":"0.0"}},"editor":{"type":"object","name":"StringEditor","id":"p1196"}}},{"type":"object","name":"TableColumn","id":"p1198","attributes":{"field":"absolute_area_diff_km2","title":"|\\u0394Area| (km\\u00b2)","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p1197","attributes":{"format":"0.00"}},"editor":{"type":"object","name":"StringEditor","id":"p1200"}}},{"type":"object","name":"TableColumn","id":"p1202","attributes":{"field":"page_link","title":"Go to Page","width":100,"formatter":{"type":"object","name":"HTMLTemplateFormatter","id":"p1201","attributes":{"template":"&lt;a href=\\"../station_pages/stations/&lt;%= value %&gt;.html\\" target=\\"_blank\\" style=\\"color: #2563eb;\\"&gt;View \\u2192&lt;/a&gt;"}},"editor":{"type":"object","name":"StringEditor","id":"p1204"}}}]}}]}}';
                  const render_items = [{"docid":"e1cbdd4a-88dd-4816-bd9d-00e1d7eccb95","roots":{"p1205":"cedf62e8-3db0-4212-9575-777972bdb2fe"},"root_ids":["p1205"]}];
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