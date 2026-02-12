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
    
    
    const element = document.getElementById("eb2d423c-b3b9-419d-b010-582976d75ef9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'eb2d423c-b3b9-419d-b010-582976d75ef9' but no matching script tag was found.")
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
                  const docs_json = '{"d6b29076-7e97-4341-9cb1-b0e994a1e1e3":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p875217","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p875218"}}},"roots":[{"type":"object","name":"Column","id":"p875295","attributes":{"children":[{"type":"object","name":"Figure","id":"p875219","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p875220"},"y_range":{"type":"object","name":"DataRange1d","id":"p875221"},"x_scale":{"type":"object","name":"LinearScale","id":"p875229"},"y_scale":{"type":"object","name":"LinearScale","id":"p875230"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p875277","attributes":{"start":0.1059999966621398,"end":1.498999943733215}}]]},"title":{"type":"object","name":"Title","id":"p875222","attributes":{"text":"08NL065 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p875288","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p875282","attributes":{"selected":{"type":"object","name":"Selection","id":"p875283","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p875284"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXWYTMQDLdGYUmSJEmSJEmSJEkeSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSTrzrvPp+gF71txbQEBAP75xgaGAgIDbjI8YW/QJS1a1YndrGyr5f0PLEZ0YkNSF6f/9wrrS3yhq34c63/vROWiA0f+MGi2EhanC2DF3CMo/H4pmTuLo+0sCU0JHYvU4aRS6LoOaRmPR4dU4DHdVwLy/itgaMQlllFTQ+JYqeplOw8S307HCQxP7B85CtVP/oa2qLobc1cNsi3nY9GE+Su4yQgPRReh+djHGaZhh6QNz7LFejsqtK9BqrzUGSqzGjAtrsF7bHsVKHVB37QZ06diI0QdcsEh6C3Ze3ooKcz3QvMIT/TbsxNTuXVhz2BeFx+1FrYx96LggECOqgzB/8yFs6zuMshFhaDLxGHpnH8ekxVFYWReNAh6nUX1gHNpFx2PolPOYk3cBm5clo9SHFDT0voIeQ9IxPi4Dy6bfwN7Cm6hinYPWn3MxyO8uZg4vwIbEQhTXfoh6jx+hq10pxnwrw+LAZ9g1qhIVL1ehhd4r9H/2GtMc67D2Zz2KHH6P2nJN6HStGSMNP2PByy/Y7tKOcn0daHrsB/oodmPyzR6sMvmDgnV/UWObwML/aS84EMNODsJcFRFsuSOK0suGoVHjcPTcKYkJIqOw/Mxo7FOXRdVCObRZOR6DWyZg1h4lbBSfjBKJU1B/lhq6lahj7JoZWNI+E7v3a6PSqNlomTIHA+boY3q5AdatX4CiPxeiTogJOo9dglHpS7FwvgV2VFmivMtKNPuzCn3DbTFlwlqszlqHQiaOqPnGCR3cN2H4AFfMi3LD1snbUObOdjQ290Kv996Y6LUbKwb7YX+sP6qp70fb+wcwxCoYsz+FYJPvEZQUD0eD8xHornUC4x6dxFLbGOz5GovK+8+ilVQCBl5KxAzdi1j/9BKKrU9F3a40dDl0DaNlM7HoahZ2GtxCharbaL4pD/168zH16H2sUShC4axi1Fr0GB1rn2DE1nLMF3iObSdeoOzkajTJrUHvpW8wqeEtVu5oQIHBH1A99iPaTWvB0IJWzFnxFZubv6GUbycaDvuJHgm/MH5mL5YV92Hv6n+o8nWAMf0HCGHQyMGYmTwEG2aLofhTcdRzGIGuP0ZiTLA0Fo8Zg11pY1HRQB4tXiigv/NETPs9CWvDVFBEYSpq35iGTsYaGPlaEwvcZmH7v/9Q7oQumirPRZ/b8zDZzBCr3hmh4I5FqCFsivanzTBMbRnm3luOLZZWKN1sjUa7V6OnmB0mnLPHcs312PdwA6qudkabNhcM3rcFsyTdsfGiB0rM3oH6ZTvRbZ0Pxnb6YsnBvdgtE4BKaYFoOe8gBlQewvSNoVjXE4aiYcdQZ3wkOmdGYdTCU1hYcxo7tsSh/L94NIs8j76TkjAlJxmrl1xGoXdXUNMzHR0GXcfwmBuYNzUbW/NzUMbyDhp/vItePgWYOPQBVsQ/xP4ZJaj2sBRtbZ5iyJdnmO1fiU0jXqLkxVdooFOL7k/qMM7+HZZ+f489QU2oLPMJra58xkD9Nsx43o71Tt9RrOcH6h7pRhf53xh9/Q8WGfVj5yuBRfS/ZSCa9w9Cv+MimKo0FGtuDUPhJRKoVS+JjttHYYSQDOafksU21XEomz8eTZYroneTEibtmoyVoqooEK+G6jOmo13RDAxdpYU5rdrYvHc2So3QQ8MkffT4bz7Gly7AsrXG2NthgipBS9B6tDkGpVpg5twV2FCxEsWdbFDvly26hq7FmHEOWJzhiF0LNqLiq01o4eqK/n/dMC1iG9ZO9ESRW16obboLnd7uxkgPPywYuA/bo/ejnGoQmt4NRh+Lw5j84QhWeYejoOhx1Dh7Au01ojHsQQzmWp/Bls9nUXpvAhpJXEDPCxcxQTsFyx+nYp/dVVTtuIY2BzIxWPomZl2+hY16uShRkYf6G+6hW/d9jD1chCVyj7D72mNUWlCGltXlGLD5Oab3vcC6Y9UoOvE16mS/QefF9RhV14CF2z5gh2Azyke3oNmUL+ib9xVTlnVgdWMnCnn/RM0hPegQ14vh0/9iXuE/bF0paEL/n4XQ2G8weg0XxcREMayYNRz7S0agmp0U2n6TxpDAMZg9Sg6bUuRRUm8CGjybiO6Oyhj3UwVLQ6Ziz1h1VL6mgVaGMzHw5SzMcNHB+j+6KHZsLuoqGqDLTUOMNlmIRW8WYae7KSoILkXzk8vQT8USU+9YYY35KhRuXI1aO+3QUWQdRpxZj/nqTth23xllV25Gk5Yt6L3HHZPEt2Pl+R0oMMsb1Ut80G7NHgxt34s5+wOwWeoASqUcRMM5IehRHorx649iWdcx7D0UiSpjT6J1+ikMmh+LmVVx2LDpHIr/OY964UnoOuESxmRdxuJFadhVm46K7tfRYkAW+kdlY9rk21ibewdFzPNR+30BOnk9wMjBxVgQW4Lt056g3P2naGpVgT6fKjHZ9yVWDatBwfO1qKH1Fu0fvcMw20bM/dqELQGfUFqqFY0utaGn7jdMePodyx26sO9HN6oe+o02sn0YfLUfswwGLKb/FwNRYpMw6veKoNvRoRirII4lNySw23gkKtWOQsutMhggMBbTT4zDOmUFFM1VRJ2lk9C5YTJG7VDFQuFp2HF6OspP00SzAi30XfEfpjTPxurdeig0bB5qJsxHh5lGGF5sjHmrF2Nr2xKUCTBH45HL0St5BSbOtsaKMhvsX7cG1X6sRdtgBwwZswGz0zZi0zwXlHzhigbOW9H99zaMC/PE0vE7sSdzFyob+6LVaz8MdNuHGf/2Y31kEIopH0Ld24fRxSwMo9+FY5HncewcFIUKp6PRXO00+t07g6mW8VjzMQGFd19ALbFkdDyXghGaVzD/4VVss8lA2bZMNNl3E70lczDpYi5W6txFgbJ7qL6uEO06izD04CPMkSnF5itlKDXvGRpWPkePjVUY31ONZUdeY698Hapk1qP1wvcYVPMBM7c0Y0N/C4pHfkG9Se3omtOBMUt+YHH9T+za3oOKg/6gRcxf9J8qYEr/+YJYu3wQinwcjNo+oug0dBhGxg/HghmS2F4khXI2o9H0yxj08ZfD5BHjsSppAgrqKKHGE2W0t5+CYd+nYm6QOraMnoHSV2aikb42ej7XwQSnOVj+ay72hRqgqvwCtLm+EIONTDDrlSk2ui5Fif5lqH/cEt2UVmLsrVVYYmqL3W/tUGn7OrQUcsSAU06YrroJ6+5uRtHlbqjT5I7Ou7ZjlKgXFp71xg6N3ShftAfNVvmjb2sApuw9gNUSwSiUFIKa/x1Bh9KjGL42AvM6IrH1wEmUGR2Dxqmx6DX3LCZWnMOKDYnY352EaqGX0HZcKoZkpGH2gmvYVH0dJV2z0OBvNrpH3Ma4iXlYmp2PPYvvo/LbB2jlUYyBAx9jRvQTrJ9SjmJ3K1DX4gW6fHiJ0d41WDTkDXbGvUUFjQY0f9CIftYfMfXzJ6zxa0Vhia+odeEbOmp3YsTjLsy3+4Vt336j7IE+NJH+h96XByyhfz0hrHwmjAIbhqB691C0OyyOoXIjMOfaSGw2lEapahk03DwWPfrGYfwxBSxTnIi9NyehymIVtK5TxaBt0zBTUAMbTmqi+JRZqJf3H7ou08WYRj0s3jkPu0QMUTHOCC2mL0L/wsWYttIMa1vMUcRvOWoPt0KnRGuMnLUaC0rWYPsae5T75oCmgRvQZ5QzJqe4YNWcLSj4bCtqOHqg/U9PDAvZibljfbAl3RelDfei0ct96OkSiAl/grA8/BD2TQhF1ZthaGNyDIPfHMcs9yhsHHAKJU6eRn2VOHS7E4+x5uex5P0F7PZKRiWRy2h55goGqKdj+v0MrLO6gaItN1FnTw46i9/BqPN3sVCrADseFaL8modo1v4IffeXYorUU6y+9AyF5lSiZnkVOqx/heFdrzHvUB22yr5DmfT3aDy/Cb2qmjFx02es6P2C/UfbUW3Cd7TN+oEhi7oxu7YHm7b+QckB/WgQJWBG/5MHYlzuICxdKoI9DaKo7DUMrQZLYGCsJGZMG4X1BaNRzEoWdT/JoYvveIwepohFCUrYOXMyKjyagua2auj3VR1TA2ZgzUgtFL6kjVq6s9Hx6RyMcNDH/B8G2Ba8AGVljdHkqgl6GyzBpBdLsdLZAgV6LVH96Eq0U7DB0Bu2mGO8Fptfr0OprY5oKLARPU5swnhlVyy77Ya9ZttQpWE7Wu/wwiDhXZh5ejc2qPmheIE/6q3Yj67NBzBmdzAWix3GrnNHUHFmOFoUR6D/6hOY1nYSa/fFoMjIM6idfBadZidgZFkiFqy7iO2dl1AuOBVNx1xFn7RrmDwvE6sqs1DQ+RZq/L6N9mF5GDb+HuZm3seWhUUo/boYjdweo+e/J5gQWY7lk55jX84LVDWrRpt3NRjs+QazBtVjY0wDSqh9QP17H9HNsgVjP7Ziic9X7B7agUrnOtFS8ycGPPyF6Ta9WPelD0X3/UMdScGl9H9RCKN0BmPhkyHYYS+G8p3iaHZwBPrKSGHKFWms1h+DQpVjUXOjPDr0KGD4kYmYJ6+MrddVUGbhVDSumYZeWzQwsV8TK47Pwn4lHVTL0UXbJXMxpH4eZm83xCahhSgZswgNppqie74Zxi1fhqVNy7FnlxUqD12FVvGrMXCGHWYU2WP9qvUo9mUD6vo7o8uIzRidtAWL/nPHzlIPVLDfgebfd6JfkA+mjt6DNal7UVg/ALWeB6Kj00GM+HUI80NDsW3cUZS9fgxNjCLR+1UUJrmewsq/p1HgeByqK51Du1vnMdQ0CXPeJmOzx2WUEkpDw1Pp6KF6HePv3sAyi2zs/ZCDKrvuoLVoPgadLcBMjQfY8OAhiq8qQb3WUnTd+xRjJCqw+EIldmm/RMXSV2ixthb9O+ow7cA7rJVuRJHUJtSe+wmdKj5j5IY2LOhux/bD31FuXBeaZnSjz4LfmFz9B6s296PgXwFz+o8YiPYThTEsWwRzFw/FlrphKO0hgUYDR6Jn9ChMmCKD5Xmy2LdsHKp+GI823ooYPGQSZsVNxsbpqijxQA31raej2+cZGOunhSXD/8PuxNmopK2Hlo/1McBuPqZ/W4B1gcYoKr0YdS4vQWc9c4x6ZoGFjiuw4+dKlD9sg2Zya9D32lpMMXTA6peOKLR5I2r2bUKHY64YrrgV825uw1YTT5Sp80LjbbvQS9AXE0/6YYXKPuy/sx/VlgWhbWMwhuw8jNkiYdh0Jhwlpx9Hg8IT6L4yGuNaYrB0zxnsEY9H5cQEtJp1AQNLLmLGmhSsb09FscCrqDsqA11SMjF6zk0sKr+FnetzUeFnHpqH3EO/sYWYml6ENfMfofDLx6jlUoaOf8oxIvw55k+owrasapQ1eY0mb96gt3s9Jg14j5VRH1BApRnV77SgnfkXDH3/FXO8OrB58A+UOvMTDdV70ON+L8Zb/cWyT/+w11dwGf2LD0Lr84MxSEsUMx+JYYPtcBRvH4F6+6XQVWo0xlwag8W6ctj1VB4V109Ai66J6H9IGdNkp2Dt1akoMl8dtas00GnTTIzsnYUFR3WwXWEOymXNRdNFBuhTa4jJWxdilYAJCkaZosbkpWifuwzDllpiboMVtuxYhdKDbdEo1g49p63DhIL1WL7CCfuanVHVdzPaDHPD4AR3zJq5HRuLd6CErTfqf/VBt4A9GDvSH0uSA7B79gFUenoQLR1CMOBHKKYHH8W6MREoejUSdQxOovOLUxjlHIuFv+OwI+wcyiskotmNJPQ1voQpry9jtVsaCglcQ80T19FBOQvDb2djntltbH13B2V25KOx8H30Ov0AE9WKseJeCfZbPkG15qdou7sCQ8ReYPa5l9ikWYOSxbVosPoture9w7h9jVgq+RF7Ln5C5dmtaFXWhoHrvmFG53esP9iFYmN+oW7ab3SZ14fRlf3/f7dMAYv/ubtvAEoYD8RLx4RQ//UgfKk4GN3cRHBg9hCM/SeKMxaLYUnkMFxXJ47dkyTw6LYRqHRbEu8ISqGl2Sj8fFIaA96NxtFTxmC6pywuzBuLdYPG4Y5l8ih6ejyeb1RAHTVFfLZzIjrfU8K/IsoYZTkZp8apYOHHKbh6+lTs8FHDQ4XTUF5sOt5cqYFm52bghxZN9NXUwhF+szDloTbOG66D1TazcWuiLgq1zcEzs+ai5j59fFwyDx0k5+OvNYYYfnEBTvpmhHk6xrgicBG2PjHB/aNMUWbdEryWYobGnUvx7Zxl6HXQAoc+W46JMitwtqMVVlxZiZt+WmO/vg2eDFmNapW2+GCsHdpuXIvf0+0xpGcdjjdcj9lHHHHpyw3YJL8R97g4o2TmJrz8xwUNFrriq/At6F7jhoMU3TFuyzacedMDS/u343qTHdhz3AuPvdmJypN24V13H7TK2Y1fBuzBwCV+OObkXsyo98dFKgFYv30/7rwTiGKDgvCC+UHUjQnG5+8PocvUw/jPKxSj84/gNJGjWLQ8HNecOYadTRF4WD0SFXxO4K37UWg+NBo/Wp1Cv/gYHNlyGlNnnMH5e+KwpugsbhM/h8I2CXj2/HnU+pKIT7SS0NH/Iv5+lIwRI1Jw8prLmJ+Uiivbr2Dbf1fxwP50lH1yDa9LXUcT+0x8d+kGen/PwmFzsjEp6BbOKc/BytG5uHn9HRS4koenuu6iuv49fHioAO2e38cfsg8w1KkIJ6Q/xJxfxbhsfgk2hz7GvVWlKCVfhlc2PUXD6+X4uvcZehg9x8HhlRj/6gXOmvASy1yrcUPWK+z9W4PHF9WiyvE3eK+2Dq2V6vHr1ncYdKsBxw5oxEzTD7g4qgkb3n7EXZM/ofj2FryY+xn1hL7gi6Vt6HrqKw54344xqh043es7Ft/txLWDu7DL4iceie1GxaZfeHvab7TY1YufCv6gv+hfHGXVj2ln/+GCTwLL+Ws0BHG770AUKRLCc8OEUXvVYHyaIIJOrUPwz8yhGLlXDKc8GoYFEsNxla0Etl8YgQe/SqLcf1J4I2AUmpZK4/uRMuizdgwOvySLyR1jca7uOKw6II9bno5HwdET8LSDImqkTsRHP5TQfq4y/gyejGEVKjhRVhVzN0zF5VfVsKV7Gu4zmI7SoRp49cUMNBo3E984a6Fnxiwc0quNCQt08L+js7G8Whc3Kuhh3+a5eOKGPqr+nYf3jeejTYQhfnu9AIMnLsRxW40xK3sRLhFYjI2LTXH3iSUo8dYMLymbo77HMnx52wLdBlriwKUrMDbaCmc0rMSSKatw3Q4b7M5bjUeF16CShR3eOb0WLT/Y42c1BwzwXo+jCxwxfYgTLlyxEevinHFH8yYU1diM53e7os6DLfhMbCs6W7vj33PbMOqzB06d6YmFfjtwdbEXdgz3xkOrd6H8BR+82bYbzbT34Id9fuj7eC+OGLkPU+wCcF7yfqz+FohbZweh0IGDeKYsGDWlQ/DxusPocDkUf3UewXC9ozgpOBzznh3DFWOOY6tjJO5PO4Ey3VF4bV40Gh8+hW8rY9BLLhaHOp/BxGtxOPv3WawwPIebwhKw/+V5PDn+AqptTsIHmRfRti8Zvy9MwZBjl3H861TMVkzDpW5XselmOu75dw0lF1/Hy5GZaFB3A19Nuonu27Jx0O1bGCd4G2ea5WLpyTu4/l0e9qjk4zHPe6icV4B3BxWi1bIH+CWmCAMbH+IYtUeYsbMEF917jPUiT3CnZRmKxT3FCx/LUXd6BT73eY4uhZX4b2gVRq98idPOVWNRyytco/kaO/fU4uGHb1Bh+Fu8ZVOP5onv8OOXBvSb1Ygj933A1JImnC/ZjDVrPuG2iy0o/O0zntX5glqBbfjkyVd0HPUNf9t3YETKd5zc2Yn5c7pw5cGf2FbejQdkelDW8Tdev9KLJj//4Dv9v+gd0o/DKv9h0tgBluz/RkGsTB+Im3uEUMBQGE8dGYzqL0Xwobwo2rkMxR/XxTD0zzBLw/8DDO08tXAyAAA="},"shape":[1614],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDhz5Qtu+r/WB1HyOQ1G7/Rg/3OTys+oJszwP/3s/2DMMvvnHRD5RuvxzO/nWI23VzJMXnKD1Kj9Kj9Cg9So/So/QoPUqP0qP0KD1Kj9Kj9CiNNj607TNF46ALCmy/kKNfga2RpHHGhskSXyhxZ8IuT7z6H6gZYsr/////vm8S6fZCxm9J10eufZB4JCk8SQ3/oUIPV3/hGb9/MZz9q9D6+uLo+DUO+iewwNDZtHc0fEbTyyg9So/SozTOduXigrfDvlwEtbs1Y74ORX+S249iILCeA6MfdeDU0G0fA9Ox/O2fH0ZS/d6Q8/y5Pf5+39PhHB4JAhEn6ek/h7hdQ6f9+O////gU6/2j7d1RepQepUfpod9OB7ZvvozQ8nzk+BsUz3dVftDCvw1TncHtexg91Nu3gz0e/4fyXbXH0x9NSLE+P9o+Q9AH5FovEwwPAIJ6TkpwMgAA"},"shape":[1614],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p875289","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p875290"}}},"glyph":{"type":"object","name":"Line","id":"p875285","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p875286","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p875287","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p875228","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p875255"},{"type":"object","name":"WheelZoomTool","id":"p875256","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p875257","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p875258","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p875264","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p875263","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p875265","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p875266","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p875267","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p875268","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p875274","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p875273","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p875275"},{"type":"object","name":"SaveTool","id":"p875276"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p875250","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p875251","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p875252"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p875253"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p875278","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p875279","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p875280"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p875281"}}},{"type":"object","name":"Legend","id":"p875291","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p875292","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p875288"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p875231","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p875232","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p875233","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p875234","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p875235","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p875236","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p875237","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p875238","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p875239","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p875240","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p875241","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p875242","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p875243","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p875244"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p875247","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p875246","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p875245","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p875248"}}}],"center":[{"type":"object","name":"Grid","id":"p875249","attributes":{"axis":{"id":"p875231"}}},{"type":"object","name":"Grid","id":"p875254","attributes":{"dimension":1,"axis":{"id":"p875250"}}}]}},{"type":"object","name":"Div","id":"p875293","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"d6b29076-7e97-4341-9cb1-b0e994a1e1e3","roots":{"p875295":"eb2d423c-b3b9-419d-b010-582976d75ef9"},"root_ids":["p875295"]}];
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