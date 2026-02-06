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
    
    
    const element = document.getElementById("a1cd129c-91ce-4a84-97a5-f5f29631e7ec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a1cd129c-91ce-4a84-97a5-f5f29631e7ec' but no matching script tag was found.")
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
                  const docs_json = '{"7d0fd02d-1539-43d3-b6fb-6d55d30a7e28":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p104142","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p104143"}}},"roots":[{"type":"object","name":"Column","id":"p104226","attributes":{"children":[{"type":"object","name":"Figure","id":"p104144","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p104145"},"y_range":{"type":"object","name":"DataRange1d","id":"p104146"},"x_scale":{"type":"object","name":"LinearScale","id":"p104154"},"y_scale":{"type":"object","name":"LinearScale","id":"p104155"},"title":{"type":"object","name":"Title","id":"p104147","attributes":{"text":"08GA016 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p104208","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p104202","attributes":{"selected":{"type":"object","name":"Selection","id":"p104203","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p104204"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JT0SDcRjA8ceuY5cOMZs6lBKLEbHTj46jw2yMmWZsdBpddujyMGI0InXo0LVjxtgY83vnXa39qVZ06dApiVF2iBFtfU+fw0fEVDNPxbaIRn1o35ujf0X30fgXUWvuI797gPK5hKY0fOCDh2jr6yixl3t+XEI9CqNdfhvyzWM0iQjq18eAL5+hrOygaX33+eQl2kkUpTLt8WtXqE4cbcqD8nN9x5+kUTe8aN1Gl9/Lo5kuoJ46t3yogNINoMn2bvjfItrzVZTwc4fvK2puE+3fq8tflNFsbc+dAfwi5kJoAQAA"},"shape":[45],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p104209","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p104210"}}},"glyph":{"type":"object","name":"VArea","id":"p104205","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.5546799850463867},"y2":{"type":"value","value":51.408001556396485},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p104206","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.5546799850463867},"y2":{"type":"value","value":51.408001556396485},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p104207","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.5546799850463867},"y2":{"type":"value","value":51.408001556396485},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p104219","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p104213","attributes":{"selected":{"type":"object","name":"Selection","id":"p104214","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p104215"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3ZQ7QYig5G4dS2bdtuU9u2bZ3iFKlt27bdprZt89R237t79A32NIN/rYj402oJ+hwSERPU+Ovj/6dtrY9eKRzKy+3x6ENaoCWKjr7jQFx6tY6or+OjDT8Rh540AGVPCtSaF2PT3w1AH5URJeWtWPT9I9Dq5EL/+CgmfdxE1DSF0Q4GxaDXn4XytRTqxM/R6ekXox+pjNL4TzT6j9VoU+qgZwqNcmJLVHqzpmi/I6NP3xuFnq0d6uk4aC2PRqb/64YyOylqznOR6OcC0dukQwlxPSJ93lC0PNnRL96PQO8wDjV0AbSFL8LT809HuVoctfOHcPRwC9CXVEAp/DMs/cYKtG410SOGQFmxMQy9aCO02xHQe+4KTY/aGnV1TLQSh0LR73VG6ZMINcbpkPR1vdFLp0Z5dDkEvd8gtNhZ0DfeCU4vPxr1aR60gU+D0eNNQdmqqJXeCv3FHPTBZVESffvX+7++Yyla1WroQf/+/qcMX4eatD7a7rDoNbb/ob9rjjoqGlqKA7/p+zqg1ImP+vH4L/rYnuipU6AcvPCTXn8A2pcM6BNu/qCnH4F6JCdao0ff6d8noEwphJop6Bv9+Ez0pqVQfn/6Sp++CC1rZfRTv7/QW65G/VcbbVYo9BxbPtPPNUFtExkt+N5P9LltUfLEQb145CO9fTf0UElRFp79QM8fiHYlLXqna+/p4YaiLsmGVuj+O/r1sSjd8qNGfPGWvnwauhZHuf3+Db3nfLQoFdBX/XhNL7EC9V4NtN7B0aNvDKKva4haOgLaw52v6IGtUGLHRN148CW9XGf0JwlRBp56QY/XG21LKvSKl5/TXxjq4MxoCe88o28fhVI1D2rQk6f0YZPRkyjK7jdP6DXmoL0tgz7y62N6iqWo+6qi1f73iP5hLcrYeqipw6L5tof0es1RvkRFnbD/AT1dB/TD8VAaHb9P/94DbXJy9IwX7tGP90dtmgHt14279GnDUbLmRD318A69xQT0vwVRZr26Tc8xE+1sSfTWn27Rgy9CnVsJLffvm/QLq1Da10YNFQptweYb9HxNUK5EQu205zo9bFv0xbFRCh25Rr/eFa1rEvQIZ6/Sl/dF1bRot65eofcYghIlG+qqe5fpxcei382H0vv5JXr0aWhri6GXen+R/nAeamB5tFg/LtA3LEcpVwP1STC0ARvO0+M2RNkSHrXiznP05y3RB8VASXjwLH17J7QqCdFfnTxDH9YLNUkqtF2XTtOrG8rbTKgjb5+iJx+Fvjc3Su0nJ+kfJqGNKYKe6s0Jus9GrVcG7fOX4/TxS1DSVUU9/PcYveFa9G91USaHQc247Sj9WDP0JlFRfu07Qp/WHi1LPPSTxw7TW/RA/ZsMbeb5Q/Ts/VHOpkdtfeMgPdhw9Dk5UHI/dPqF8WjtCqKHfHWAvmAGar6SaJc/7qd3XIgSthLq4l/76AVXoV+rhdI1JGqEzXvpyxqjF4mEcmv3HnqPNmiRY6OvPLybXrwr6t3EaL3O7KJH64uyNg1qqas76Q8Go/fNihLr3g76hjFoZfOhP362nT5gKmrcYmib322jV5iH8rwc6qDvW+kJlqNvq45SJRjqq/Vb6EMboCcOj7Jrx2Z69ZZob6Kjj/BN9OSdUPcmQKt1ciP9fQDKmJSoqS5toB8YiF43E8rnW+vp40eipc2NfujxOnrDSajfCqNNer2WnmE2yrHSqE2+rKH/XIw+tQpKlr+r6SfXoDWvi/4nNMrMravo2ZuhnYmC3mrfSnqw9qhz4qLlOraCfr47SrtkqCHPL6fP74eeNz3K5evL6B2HoYXJgb7owVJ6wfGo1wqgdXm5hB5+BsqyEqhFPi6m31yA3r0iSuRfi+grV6IVq4V+JwRKr00L6dEao62JiF5y9wL6g9aofWOhxTw8n76+C0rZxKiPT8+j9++DHicNyuYrc+kVBqM9y4Jud+fQE4xB3ZYXrfKz2fSXU1CGFkVN/G4Wfedc9GrlUN58m0kfsQwtWXX0PYJSa/0M+vv6aKPDoafcMZ1+oAVq3ehonw5Mo4/riJI2AeqhE1PpDQLQv6ZAmXRxCj3DQLSjGdEb35pM/zkCdWoutMyPJ9FPTERpXhj1T9BE+oxZ6NlKo5z5PIHeajGaVEGf/Wc8Pdca1PN10NqGRg+xdRx9flPUvFHQLu0dS+/QDiVMXNRFR8fQC3RHv5oUpcu50fTw/dCWpkMvfH0U/eZQ1O7Z0SI9GElfMQ6lWAHUOy9G0AOmo0ctgbLmw3B6yQVo9yug9/k5jB5zJer6mmhlQqA/2jiU3r8RapyIaJt2DaGXb43yLCaqHRpMj98FfWsilMqnB9Ff9kYbkho90RWj7xyEWi0L2us7A+nDR6Mky4u65+kAes0p6O8UZfTb/vSUc9H2l0Wv860f/dNS1HHV0NII+sF1gfQG9VG/hkWbuL0vPX0LlKPRUBsf6EP/0QF9SnyUzCd600/0RGuWAv33hV70GQNQs2VEO30zgN5yBP7/wFBnP+pJzzkR/VwhlLZBPeghZqHNK4We53N3+qVFqB0qo4X+042+cDVKgTqoV0Ohdd7SlR6uKcrSyKiF93ah32iL3i0OSqSjnekruqEVTYp++2wnekAgatR0aKuvdaSXGIpyPxtqn/sd6DHGoa/Lj1LmRXv6o2lo/Yqjx/7Qjr5pPmr5CmhPf7SlD1yBEr8m6tbgaJU2tqG/aIgyJAJqol2t6TtaoVeNifL6YCv68M5oSROh7z7Vkl6zN+q7VGijLregpxiEsj8zap07zekfR6GPzYOS5mkz+sHJaPUV/cubpvSJc1DTl0U78rUJvdFSlB9VUaf8a0zPtA79eD2UZmFRf29rRJ/eHD1rNJTT+xvSW3ZA+xcPfdbxBvScPVHPJUdrc6E+PfgAlHkZUPPcrEe/OBy9fU6U0I/q0hdOQMtfCP3Kqzr0zjNRw5VCW/KpNr3QIpQblVC7/a5Fj7gafXltlKKhUG9vrknv2QQ9SmSU1Xtq0Eu0RbsXG733ker0GN1Q1yVBK322Gv1hX5R+aVFjX6tK3zgEvVw2lKf3qtAHjkWLlx99y/PK9ErTUF8UQxv8vhI94XyUHeVRq/6oSA9ajj6sBkrS4Ki7N1Sg12iI/jY8yqid5ekpWqHti4Fe+2A5+sdOqGMToqU+VZbuvVDqp0L9cqkMfYKhp8uMcuR2aXqjUWjfc6NPflKKnmky6vEiaE3flKT/mo0yvQxq1q8l6KeWoLeoivLvb3H6rLVoOeqhnw2D0mZbMXrw5mhzo6Ln3l+UfrE9avt4aKGOK31BD5T8yVGvnC9C79QfPWwGlCU3CtMLDUe7ngO968NC9IgTUJcXRNNXBem3ZqD0LIka5VMB+qqF6MUrodz7lZ/eexVa9Nroa0OilN6cj/6wMVpgJPRYe/LSN7ZBLRcb7cnhPPQBXVHiJUHdciY3vWJf9OdpUAZfzUVPOARte1b0Kvdy0oPGoA7Lh5bkeQ76rqkoNYqhvn2XnT5yHnry8ij7vmej116O9qE6+phgKKk3ZKV7A7R64dE/78hCn9ASNV0MtMOemd6wE8r3BKiTT2aiZ+yFfiwlStNLGem/BqJNy4Se5XYG+qmRqC1yo/19nJ4+cxJKjiKoZ1+no7eejR6sDMrcL2npuZegXaiC3u5vGnqotagL6qLlC4N+eWtqeqdmqGGjoi3el4pesD3K9bioXY+lpEfogb4sGf5/WKag3+qH1iM9euQbyemrhqEWz4F290Eyeq/xKNELoq59mZReagb6gxIogR+T0GMtRNtQEb3sr8T0JytRB9RCixsSffOmRPSKjVGfR0QbtDshPUEblO2xUKscTkB/1QV9aGKUJGfi03f1QaueBv3NlXj0kYNRk2dF23s3Lr3WGJQPeVHHPItDTzUV/UBRlHrvYtM/z0UbXw497fdY9MPLUBtWR/sm6JPWx6RnbIB6LBxakx0x6D9boEyLjprFo9NPdkRvngDl74lo9JkBaNlTop+5GJXeeiBqsExoc25FoecaiXIhF2q7x5HpISehzy+Mku91JPrlWWgdS6OH+RKRvngxasEqaNf+RKB3WYMSoS7qstBoRbaGp99sitIjCmrkfeHoK9uhF4uLcvdoWHqv7mjRkqGvOReGXqof6oN0aH2vh6bHHIayITtq2Qeh6I/HofcvgBL3ZUj65uloFUqgP/sQgj5oAWqCimjbfganV16J8qom6tAQaIk3BaPvbIRSPSLqm11CH9EaPVkslL2H/vX6r9fqgvY+Efro03//U1L1QT2QGq3ulT/0T4NQxmdBTXv3N/3QaPQGeVG+Pf1FnzQFLUNR9KNvf9KbzEX9WRZt6rcf9MzLUE5WQ20uaH/WfafPqI+SPRzqme3f6K1aoEt0lDkHvtJzdUQ7Hx+97Ykv9JABqPNToOW9+Jl+aQBKx4yoYW59oi8agV4gF8q1Rx/pXSaihS+MvjToA73ILNSbpdC6f35Pj7QYZWVl1GJ/3tHvrEYPqIMSLTTqmi1v6SWbot+PjNJ37xt6zHZo6+Oglzn6mv64G2r/pGhxzgXRNwWiVEiH+uzaK7oNRY+fHWXb/Zf0yuPQXuZHH/LiBT3xdNSdxdGqfXhOfz0fZUQF1GQ/n9H3rECvWRPlfXDU0Ruf0lM2Qt8fAaXurif0T63QxsVET3PoMf1QZ9QGidC+nnpEn9gbJUNq1KOXH9IbD0L/kRll6p0H9Myj0U7kQW/29D79z2TUGYqW7e09+uk5KK3Kosq3u/TZS9FzVkM5/+8Ove06tBD10eeFRcm7/Tb9UnO0DtHQQx+4RV/UAbVAfLSrx2/SO/dECZ8CdemFG/TCA9BvZEDpfvM6PdIItBU50Ys+uka/MwE1oBBa1KCr9NUzUUqWQr3/6Qq9zyL0GJVR1v++TC+zGu1RbfR+oVDibLlE39QErXxk9Kd7LtKtLWr8OGhbj1ygV+qG8jIJ6pCz5+mJAtF3pEWpdu0c/fUQtOHZ0JPeP0vfMxa1Zn60d8/P0EdNQ0lZHHX/+9P0OvPRP5ZHGffjFD3NCrSDNdDrB0f5uuEkfWJDtPQR0I/sPEFv3Ar1Rwy0KQeP0zN1RjmRELXZqWP0373Qp6dCyXb5KP20obXMjP7v9hH67FGoOfOgnXtymN5mMkoIRZ335hA9zxz0i2VQOnw9SA+9FG1hVfT8/5x+dS1q53po4cKiL9l2gF64OeqNqGjd9u+nR+yAsiIeatHj++i3e6D3TI4S9cJe+ur+aCUyoN+7sYfeZzhqjJxo6x7uppeegPKoIGq/V7vosWeibyyJUv7TTvrThWgDK6HH+72DvnUVaqXaaC9Cog/evJ2eqAnqjkhoVfdsowe1QRkeGzXpka303V3RayRBeXdmC31UX7QUadH3Xd1MrzME9WNWtLH3NtFTj0U5mA+1/vON9C9T0ScUQ0n/fgP9yDy0RuXRv39fT5+yHDVTDbTjwdCbblhH/90AdXp4tKw719JPtURpGQP1n6+hz+qEniMhyrmTq+lteqEFT4U+99Iqeh5DvZgJrf3tlfRQo1AW5kbN/2QF/cok9E5FUMK9WU5fMhutUBn061+W0bstQY1YFW3536V0XYtyuy5qzzBoUbYtoa9qhlIiKuq9fYvpvdujR4+Hsu7YInrpHmgPk6EHnl9Ij90fdWN6tHI3FtCfDEMZmAM13sP59C3j0SsWRHnxch598Ay0hCXRt3+cS6+6EDWoItqwX3PoSVah7K6FWiMk2ttNs+kjG6OkiIS6b/cseu026B9ioYw9PJOeuiuaJ0avd2YG/Usf1Alp0NJdnU4/PBilUVbU73en0SePQc+YD+X4s6n0plPRfhVFn/ZuCj3rPNRT5dBafJ9M/7sMZVZ11BzB0M6un0Rv3QAleHjUuTsm0nO3RL8QHaW9T6CH6oS2IAF6vpPj6VcCUDulRAt7aRx98UCUQplQr98aS+86Ej1CbpTlj8fQdRLarcLoPV6PpkeZjbqqNFrxL6Podxej9K6CGv3vSPraNeil6qI8DI0auHUEPVYz9A1RUMrtG05/0g5tQFz0uMeG0bd0R62YDO35uaH0Qf1QEqZH3X59CL3KMPRX2VGGPRhMTzIebVcB9OovB9HfTkcdWQIt+Uej712AUrsi6oefA+ljVqKnqoXiIVDrbRpA/9wIfXxElHS7+9MPt0ZrGAv926F+9MldUDMmRjt2OpDepA/Kr9So0670pWcZjH4yC0qLu33of0ejzcyLnv1Zb/rZKaiti6IFe9eLPmcuSu5yqBe+BdDbLUMPWR1lgaDmW9+Tfrk+esdwKGF39KAvboFWMDr6tQPd6V07okZIgLbsRDd6kQCUWylQe1zsSo88EH1lRpTit7rQ745A65ULPdrjzvS1E1FLFUZ7ENSJ3ncWSqzSqBs+d6SXXYz+uDLKgD8d6HHXoG2ug14hNMrzLe3pg5qiJYiCvm1vO3qVdqiv4qANPdqWnrg7yq6kqNXPtaG/CUQfkQ4l+fXW9L1D0WplR39/vxV9zDjUVAXQDrxoSa87HeVzcdTxH1rQ0y5AP1QBpeHP5vRvK9Am1UTPEALl2MZm9CaN0H5GQJ+6qyk9S2vUkzHRmh9qQv/TGWVmItTspxvTz/RGb5UaJdiVRvQ5g9ByZUE/f6chvd1o1JB50eY/bUDPOwXlsqJ2fFufHmYu+qKyKAW/1aNfW4rWpRp6eEFZtq4uvUh9tJth0btvr0OP3AJ1ZTS0Ygdq0+90QOkVHzXaiVr0NT3RS6ZAeXChJr3vALSYGdHX36xBLzsC9XFOtP6PqtPjTETZXAi1QlA1+rOZ6FYKJcHnqvRti9AqV0Z/+bsKfehq1MR10HaGQq+2pTL9TRPUEZHRku2tRN/TFqVWHNT3RyrSR3dDT5kU5cDZCvS6gWif0qKPu1aennYo6qFsaA3ul6N/HYsyKT9qhhdl6UenoTcujvLzfRn61PlomSugn/hRmt58BeqfGmgzgqNn21iKfqYhaqsIaLKrJH12K5RcMVHPHyxBb9sZPUQilPmnitPz9ka7lAq9w+Vi9DCDUBdlRitwpyj96iiULnlQwz9V+tLJ6IUV5eabIvTuc9AilUVf8bUwvdhS1DtV0QL+FaJHXYeyph5qybBo97cVpPdpjhIzGur6/QXoZTqgP4qH0v94fnqcnmibkqOXv5CP/qw/qmVAi38zL33rcJTKOVFfPsxDHzIBPVEhlJ2vctOrzUR7XRJ9+Kdc9GSLUPdUQqv5Oyf93SqU0bVRU4ZC2785B71OE5RPkVDH7clOT9MW/WBslAZHstG/dkWbmAQ9/dms9KN9URunRftxNQt9yhCUzNlQT9zLTG82Fv13PpQZzzPRs01DO10MveX7jHSZjzq7PFrOHxno55ajtK2BGiI42rwN6el5GqJcCo/aYWc6euhW6AtjoBQ4mJZ+tRNa54To4U6loS/thVo4FdqNS6np3QwlUmbUFbdT0YuOQr+dGyXgSUp61Mloq4ugl3iTgn5/NmqfMmgxvianr1uCUqYq6qO/yej91qLHroeyKQxq+W1J6U+boQ+MihJ/fxL61vZoleKhvziWmD6kB2qi5Gg7zieiV+2P8jo96vAbCelJh6PvzoFS82EC+rvxaKMKoqd4FZ++fwZqnZJoHz/Go49diJKmEurBX3Hp9Vehf6mFMjEkavrNcehHGqM3ioTyY3ds+pQ2aJliox8/HIverCvq78Ro08/EpGfti3I6DWrLqzHo/wajz8qKkvNedPq5MWht8qEHfx6NPm8qap5iaBffRaW3n4cSujzqwu9R6PmXo1+pjtI5GGq4DZHpSxqgFwqPcmNHJHq3lmgRY6Av94j0op1QbydA63kyAj1KL5TVKVFLXApPvzcQvXcmlBi3w9HXjUQrnRv94eOw9H6TUGMXQdv4Ogy93GyUp6VRB34JTY+3BH1LFZRKf0PRX6xBG1wXPWEYlB1bQ9KrNkMLioI+bF8IetL2qLvjotU4Fpz+tjvKqGSoKc4Ho+/rh147PcrH60IfOwwtdQ50f/AvgP//eNQvBdAmvPwbwP9/BsqREqiNPv6hf1+APrkiSqZfv+nHV6I1rYX+KwTK9E2/6Fkbo52KiN5i90/6v9aos2Kh5Tj8g362C0qbxKjBz3ynz+2DnjsNysUr3+jtB6OFyoq+4O5Xev4xqFfyonV69oUedirKkqKohd59pl+fi961HErE75/oy5ehaXX0W4LSc/1HepQGaKvCoRff8YF+rwVq7+ho0f09fW1HlNIJUB+eeEcPDECPlRJl48W39HID0Z5kRB9w6w093kjULbnQKj5+TX8+EWVwYdSEr4Po22ehVymNEvT5FX3YYrQkVdB3/XlJr7EG9W0dtJGh0ZNvfUHf1xS1dhS0D3uf08e0Q0kdF9WPPqPX647+OSnKhHNP6en6oR1Oh97w+hP696Gok7OjZXzwmH5sHErTAqi/XjyiT5uOnqUEyqkPD+ktFqD9rYA+8+cDeo6VqGdrorUOgR5s03363EaouSOiXdh1j96uNUqoWKgLDt2l5+uCfjkRSqfTd+hh+6AtTo1e8Mpt+vVBqF2zoEW4e4u+bDT+fzii3np6k95jCnrkoiir3t6gF5+Ldrcseq9v1+nRl6GurYZWStAfrLtGD6yPGisc2obtV+llW6A8iYY64MAVetyO6Jvjo1Q8cZn+vCfaoBToCS5eom8fgFolI9qrmxfpQ0egJMmFuuvRBXr1iehvCqGMDDpPTz4LbW8p9Fqfz9E/LEIdUxkt1Z+z9AOrUerVQf0cCm38ljP0tE1RDkdGbbj3NP1bW/RJcVAyHj1FP9YNrUlS9J9nT9KnBaJmSYd28toJevOhKH+zoc68f5yefRz6mfworV8cowebjjanOHquD0fpF+ajtquAFvLnEfr8FSj5aqJeDo7WceNhephGKIsjoBbcdYh+rRV6l5goEQ4dpC/rjFYkEfrNU07v0Rs1cmq0lZcP0IsNQrmbGbXXnf30aKPR1+RBKfV0H/3BZLS+ih7z7V76hjmoZcuiPf66h95/KUrcaqib/+2mV1iH/qweyqCwqAm276Jva45eORrKq/076UM7oCWOj77z+A569Z6ob5KjjbiwnZ5sAMreDKi1bm6jvx+OPjonSqpHW+kHJqDVLYT+6dUW+viZqGlLoR36tJneYBHKt0qok35vomdYjX60NkqTUKg/N2+kT22Cnjkyysk9G+jN26L9iY0+48h6evZuqGeSoLU6u44ugShz0qLmuraWfn4IettsKCHvr6HPH4uWNz/6peer6R2noYYpjrbo/Sp6gfko18qjdvmxkh5+BfrSGihFgqPe3LCC3r0heqQIKCt3LqcXa4V2JwZ6wMFl9GidUdckRCt5ain9fi+UvqlQY15eQl9v6GUyozy+vZjefxRanDzom54soleYjPqsCJq9WUiPPwdlWxnUyl8X0F8uQR9SFSXxv/n0nWvRqtVDfx0GZcS2efRkzdH2REWvuX8u/X171NHx0FIen0Pf3wOlbnLUT+dn08f1R0+TAeXQjVn0BsPRvuZAn/hwJj3DBNSjBdEav5pB/zEDZWpJ1MyfptNPLERvVgnlz69p9Bmr0LLVRj8dEqXV5ql0aYI2OxJ6zj1T6OfboLaNjRbiyGT6vK4oeZOgXjozid6hL3rotCiLrk6kFxiCdjUreud7E+jhx6IuzYdW+Pl4+o2pKN2LoUZ6P46+Yh560fIod76PpQcsR4taA311MJSSG8bQ7zdA6xMePcbO0fT1LVHLxEB75KPo/TqhxEmIuunkSHr5XuhPU6LYpRH0+Ia2NRN6pdvD6S9Hog7JjZboyTD6jkko1Yqgvn49lD58NnrSMih7vgyh11yC9q4K+qi/g+kp16Lur4tWJwz6x62D6OOaoaaJinZwn9Hrt0f5Ghd14rGB9PQ90I8kQ2l8fgD9Rz+0KenRM93oTz8xDLVZDrTfD/rRp49HyVYQ9fTLQHrLGej/SqDM/tiXnnMh2rmK6G1+9aGHWIU6rxZanpDoFzf1pndojBo6EtrC3b3o+dugXI2F2vlwAD1cV/QliVEKn+lJv9EHrVsa9IhXe9BXDEYtmhXt9t3u9J5jUKLmQ139rBu9xFT0e0VR+rzrSo8xD21dOfTS37vQHy1D7VcdLXYw9I3rO9PLN0B9Gg5t4I5O9HgtUbZGR63kHekvOqIPToCS6GQH+o4AtKop0YMutqcPH4iaNBPa7lvt6DVGorzLhTrqcVt6ikno+wqj1Hndhv5xFtrY0uipv7SmH1yMWr8K2pc/regT1qCkr4t6JDRao60t6d+bokyJgpppXwv68XboTeOi/D7anD69O1rWZOinzjWjt+yH+i8d2qzrTek5hqGcy47a5kETevDx6HMLoOR52Zh+cTpa+xLooT42oi9cgJq/ItqVnw3pnVaihKuFuiQEWqFNDejXG6F0i4gacXd9+vLW6BoL5fahevSeXdCiJEZfdbouvUQf1Hup0XpfqUOPPhhlXRbU0ndr0x+ORg/MixL7WS36xilo5YqiP3lbkz5wLmq8cmhbvtWgV1yG8qIa6mBBS7i+On17fZSq4VCDtlejD2uBniQ6yu4DVek1OqK9jY8+8kQVeooA1H0p0GpfrEz/MABlbEbU1Lcq0X0Eer1cKF8eVaRPmIiWrjD64aAK9EazUL+XQpv8uTw942KU45VRm/4pR/+1Gn1aHZSsoVFPbSlLb9EU/W9klFl7y9BztEM7Gwe99dHS9ODdUecmRct9rhT9QiBK+3Sooa6XpC8Yip4vO8qV+yXoncahhS2AvvhFcXqh6ajXi6N1/VCMHmEByvIKqPqzKP3WCvQeNVGihEBdtVHpxRuh342A0ntXEXr01mhrY6KXOlSY/rAzamAitFinC9E39EYplxr1yeWC9AGD0ONmQdlypwC94mi053nQBz3NT084BXW7olV5m4/+ag7KsLKoSb7lpe9ail69Gsrbf3noI9ehJa+PvjcsSu3tuekfmqONiYae6kAuundArRcf7fPxnPTxPVHSpUA9fCEHveEA9G8ZUCbfzE7POALtWE70Jo+y0X9NQJ1WCC1LUFb6yZkoLUqh/v2UhT5zEXr2yihnf2emt16NFqwO+pxQKLm3ZKJfaILWLjJ6yL0Z6QvaouaLg3b5SAZ6x24oYZOiLj6bnl4wEP1aWpSu19LRIwxFW5YNvcj9tAGH/gdVFws6SEkAAA=="},"shape":[2345],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[2345],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p104220","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p104221"}}},"glyph":{"type":"object","name":"Line","id":"p104216","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p104217","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p104218","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p104153","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p104180"},{"type":"object","name":"WheelZoomTool","id":"p104181","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p104182","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p104183","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p104189","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p104188","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p104190","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p104191","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p104192","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p104193","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p104199","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p104198","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p104200"},{"type":"object","name":"SaveTool","id":"p104201"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p104175","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p104176","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p104177"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p104178"}}}],"right":[{"type":"object","name":"Legend","id":"p104211","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p104212","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p104208"}]}},{"type":"object","name":"LegendItem","id":"p104222","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p104219"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p104156","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p104157","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p104158","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p104159","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p104160","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p104161","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p104162","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p104163","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p104164","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p104165","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p104166","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p104167","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p104168","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p104169"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p104172","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p104171","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p104170","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p104173"}}}],"center":[{"type":"object","name":"Grid","id":"p104174","attributes":{"axis":{"id":"p104156"}}},{"type":"object","name":"Grid","id":"p104179","attributes":{"dimension":1,"axis":{"id":"p104175"}}}]}},{"type":"object","name":"Div","id":"p104223","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p104225","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p104224","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"7d0fd02d-1539-43d3-b6fb-6d55d30a7e28","roots":{"p104226":"a1cd129c-91ce-4a84-97a5-f5f29631e7ec"},"root_ids":["p104226"]}];
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