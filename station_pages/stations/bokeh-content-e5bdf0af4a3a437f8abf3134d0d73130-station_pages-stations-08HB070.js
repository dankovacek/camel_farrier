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
    
    
    const element = document.getElementById("cd810544-fc7b-4e70-8b70-52f93188dea5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd810544-fc7b-4e70-8b70-52f93188dea5' but no matching script tag was found.")
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
                  const docs_json = '{"597cdc59-2429-42d1-a6ee-cdc504e6a035":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p168665","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p168666"}}},"roots":[{"type":"object","name":"Column","id":"p168744","attributes":{"children":[{"type":"object","name":"Figure","id":"p168667","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p168668"},"y_range":{"type":"object","name":"DataRange1d","id":"p168669"},"x_scale":{"type":"object","name":"LinearScale","id":"p168677"},"y_scale":{"type":"object","name":"LinearScale","id":"p168678"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p168725","attributes":{"start":2.052999963760376,"end":3.2100000286102293}}]]},"title":{"type":"object","name":"Title","id":"p168670","attributes":{"text":"08HB070 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p168736","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p168730","attributes":{"selected":{"type":"object","name":"Selection","id":"p168731","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p168732"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3VZ1sIDAOA0ZKoiIiMIkqIpFBJEUVKSKRERJFRJCPliRBFRUsaKkWDRDRUVCoqqUSRFg2VUEJGFL3Xe386P+EICAiU/D5hqisgIGCtdwp/+7ijX9VpnDbJA3N2e+L6lLPY0XcO3fW9cbyfD96tOY8G8r7YYO+HTvf8UVwgEGMML6JWYBBW1F/C3VNDUGB/KAZnhqGyUDgWrIxAy0uR2N1wBb0Uo3HywauYkXUNjQfFYptxHB4LjcdR767jTaUE1HW6iTUPE3G/6G0cvC4JI8PvoFrbXSydnYI2Lqn4Jz8N/Yem43SzDHx4JRPNPtzHzjlZeNo1G6ULczB5eC4aWuRh49V8PNLxCIepF2CsWyFqFxdh5chi3GP5FAXjSjCkqxRnaz7DwlPluLn0OX4fXYHeVpUod+MlZn57hWu0X+P7M9V4vLwGR4+rw0TretRLfIO1P96io04jipxrwisVzagu04JlO1pxe1Ib9va8xwDdD6jo8xFzX31Cc9lO/LzrM55J7kKZvi+YsuwbrvDtxqbq7+gs9xOH2//CuLQeXNj/G18a9KJdQB8OqP+LoQr9qOIgsP7/FmUI4pYBQvjDaCD6BAmjfMMgvD9dBE0OiGL7AzF0Ex6KUsbieCtkGC5tHo51M0fggcMjUfShJEaJjEaNtVL47PIY3NE6FvuUx2OgszTOyJfBvCETccN6WeyKnIQe7ZNxwhx5TP1vChoVKGDzsGnosmE6SlxVxPhPM3CRmhK+Oj4L7Z8oo9BIFQzbpIqqsXPwyee5aDVfDX+eVMfzJRo4ZbQmPtiyANde18IPX7XxhNYiHHNGB28/W4zLxupi/TY9PHhzKYr9WIbRi5bj/LMGWP7CEG2ljfDv9pV48fYqnNmzGvOXrEELbxP88nItek40xYm71mPaXTNc2WuO75Za4NELG3FE9Sa8Pnkz6thtwapUK9z7bysONLDGy/42OKduOxZPscWt+3bir/RdeEFwDyoY2WHWRXtc93YvfpzmgCcd9+PYB46YNPAg6q8+hG+CD+OhJiccMtMZrx5yQc2co/h8sCvuNDmG/8KOY1CLGyopn8RHR07hxjx3/Cp2Bs+aeqBspCfee38WV6l6YctRb/zvsQ+OHHYBb5j74uJoP3z90R/3zQtE4eMXMbwoCOeOCManG0NwW0wo9nSGoa9GOE49GYHZTyPRdFQUftocjafir+K4r9fwzoJYXH46Dt+WxePhMTdw6LYEvJZwExd8T8QXC2/jLs8k7H9+By+NT8ZZ21Pw8a1U3PQrDb8tTsdzXhk46WUmpk94gKt3ZmHrnWx0/ZODkktzMeF8Hi55nY/Vkx6jw54CHJRaiBF/i3De8mIs8XuK1rUl+Fu+DP32PsNp6eWYI/AC16+owI7ASnR/8xLHT6vCu/tfo8H9amwQqkWnVXUoHlyPMY1vUGtGA1YcbMTd2U0oMPgdBq9pQeWwVix414aWs9qx2+kDeuV+xMliHZixrhONIz5jW1sXHlP5iqOOfsObj7pRV/wH1pj9xP1Rv3Dwxx6MnPsH1Y71YmlhH9pI/MM/Fv3of03AjP87BfGhuhCanRiIncXCeFpyMEpvFsHkOFE0/CKGjZpD8Yi7OA4rG4axUhKovXUEVt4YiXu6JVFw4WgM8ZDC2c/HYOG4cbjZZjx+T5RG758yKLd4Imaek8U1lZPwvYwcHreVx9F3pmDibwXU05uGtT7T0bFKEUUmzcQru5VQPWUWlvUp43Z9Fez1VcWAmjmoKD8Pc+3V0PyeOn7u18AzhpooE7gAU+q1cMXUhdjksAidM3VwuNASjFupiwsv6eHLhqVop6iPAw4ux9AsA1QZtAKLjI1wS+hK/NG8Cn2UjFHeaQ3ef2iCJqLrsH2tKbqFr0epNjO8NXsDLnWxwLr8jXhgqCWKmm3GqCtbUOODFT6bsw13uFpjX4ENBg7fgTMsbDHv6k7c0LELu9T2oIebHU4otsfUkfvQyNIBm2P3o0uXI0poHsT4U4dwUelhfDX6CNpbOaPQDRcM+3YUVbVd8cmZY2hVfhx/jj2B561P4pTEU/jghzuu1TmDH8564IkKTxwjcw5v7/DCZUneWN/jgwd1L6CYjy9Gv/LD+bIBWL4rEG2TL+Lf3iC8uCwYZ/qGYH51KFrIXcYvduHomRaBE/sjMc0gClcGROO7uqt4VCEGRzjE4vWMONQZcB2rjG7g3qAEHNhwEy9Pv4VzDtzG4gdJuFX4Lv5anYwXQlJQoTkVs2bew3WH0/FjTgaeFLmPY9c+wKTLWajfmo1vlB/iIedcHJKfh1eHPELN9Y/xeWQB7mwvxH+qTzDov2JUKniKj4aV4sYNZfg1+hme/VSOsmov8N7xClz1pBJbRrzC/zZV4cjY13jjczUunl+Lr0/W4b6SehQe/RbDtzTg3OuN+PRrE27Teoc9p1vQ91krTh37HrO3taPpzQ/46ftHPLWoA8ed7cQ7Lz7jcukv+Hb7Vzx8+xsO7enGa0t+4ALvn/ji5S/cNfE39u/8g5fu9uKs3j58vPQfbrrQj99eC5jz/+QBOMlOCNNTB+Lqf8LYunwwuvqLoGSdKCZMGYJL9g3F6nRxdBAcjoOMJDDi4gic93YklkwbhdaOo/H3fSn0GzgWp60ehznB43F9kzR2zJiA7ocm4vgcWbw7eDIamMhhQ5g8OrVMQXHlqRhzZBpq5U3HCrEZuNt0JgpEKmHw+1morDobC46qoOVjVewWn4te5vNwcrQaZnxUR+N587HtmCYeK1qAo0Zo482NC1E3ZhHWdOrgfo0lOPikLkY+1UO1UcuwdLM+2sQvxz9fDNB/wQqcftoIH5atRLMxq7FzqzGeTliD0t9NMHnhOjT0NMXG5+vxyHhzHLZ9A8beskDtXxuxcrEl7vHajIIvt2DIhK04e+c2LLxjjZv/2OB3vR3ofd4W5V7vxMxJu3HNnj34PsUOj/+1x9HL92GinwPq1e7HWvkD6Lj3IIqkH8IrAk6ovuIIlgU64/Y3Ltg79T8M2O+KivePYa6QG5qvOoGfL53EM42nUGbGaUw5eAZXZHtg06Cz6LzmHA4P88K4d964cNZ5fOl0Ae1yfXGAmD+GrgtAlYhALGq7iFtULuEPl2D0eRSC8uJheN/sMppEhWP7hwh0m3sFpY5F4a3CaFwqcQ3rLGLwwLVYFO2Mwyj166hx4gY+K07AHZKJ2Gd5CwPjbuOML0mYp3kXN7gnY1dpCnpIpeGErfcw9UY6GnVnYLP2fXTxeIASz7MwflwOLrJ5iK8Sc9H+Zx4KLX6EYeceo2plAT6RKUIr2yf4M6kYz/9+ilP0SvGBTxmurXqGH2Sf44ndL3BMSgXe7qvEZfqvsN63Cg/WvEYx+RqMtq/F+ffqsLy/Hm0N3+LfgAa8WN+IM6c2Y77DO7TIbMEvA9rQc+V7nHipHdMaPuBKxU/47kAHHs3qxBGDuvC68RfUCf2KVc3fcK/Sdxzo9AMvP/yJc0R7sHjtb9wa/gd/tfbihdl/UcHlH2bl9+O6oYIb+H/9ADx5RQjHfhiISXMGob7rYHxTIIKHhovhEIshePXqUNTsEMfnasNxp5sE/nsyAoNGSqKS5Sh8FDsaN3ZJ4df5Y/HsqXEoWzoe742WwVVWE7Dl+kT875ssjtSejDfOyOHicnl8PVYB91lPReHEaRj+YzrO1ZmBT8/OxG0VStgjrYy+O2bj1CQVzO5RRVPdufjJex6eeqWG42Q18M6u+bg8WRPf9i7Aw8u0cajvQrxWvQgXyC3GF3ZLcFeaLvb/08NLBstwVoA+Pq5bjpsUDPHbvhV4LsMIJw1YhelGq3F1kDG2vl2DrtPXouSBdZjwwBSXCJth9WpzdAjZgIOaLTBi5iacd9gSS3I2o7WIFf422Yp+l7fhtFZrzFHejuudd2BHni26D9mF49fvxruRe9Cg3Q4bVPei03/7ULzAAWOGOaLWhgNYEX0Qd386hAJqThh8/AgqP3HGghFH0XLTf9gd44pen4/h5PlumHHyBBqXnMS2Ue54bMtpHHX9DN786oG6Wmex5vQ53P/MCweP9cHIbedR7eYFLP3uizaL/PGPZwD6vwjE6dJB+HD7JTS7HYydv0Lw9JIwlPa+jMkvw9FwYiQ27ryCR+5G4bDeaIxdeg21L8Rg5etY3DM5HgXtrmNI6g2c/S8BC5cn4mb/W/i99jZ6T7mDcvvuYmZ6Mq4RTMX3K9Lw+MV7OPptOiZOy0Q9x/tYe/8BOg7MRpHVOXgl+CGqN+Vi2Yx83H7oEfZmP8aAwYWoaFKEuWFP0LylGD/PKsEzR0pRJq8MU8TKcYXpc2yKeIHO7ytwuOpLjDv6Chc+rsKX4tVoZ16DA6JrMfRjHarMe4NFx97ilqIG/CHRhD4bm1E+5h3e72xBE402bD/xHt2etqPUqI94a/MnXBrfgXVfOvHAgi4UPf0Fo8q+osaYbny29TvuSPiBfd0/MXBhD87w/I15z//ghvF92GXzFz1u/cMJv/oxdbGgBf97DcDmSiF0mSCMEjsHYfydwbjojwi+0hND+/NDUOj1UAybNAxV9wzHJykSaPV3BP7Ul8TzfqNwSu1ofCA/BtfuHYsf7o3DEwLSOGaFDN4OnIDL3kzE+qmT8OD+ySh2Xw6jhabg/FUKWH5pKto2TsO/iop48eAMnJk9E/MHzUKLNcr4JXQ2er5TwYmz5mCa01xcmTsP34mq49F1GjgiYj5eb9NEHRUtrHLRxr2PFuJAcR28bLYY50QtweIPurh17lL85boMLxTqo4KEAWZZGOK6ayvwY4cRnlRfhWNPrMakYmPUlzTBN5Zr8VDcOhzyxRSvapqhprs5Pi/dgDulNuI/q00YdMMSlbo34yNtK9zosRW/lm/Ds+NsUNZmO95L3IGrftpii84u/O/cbhxZuQdvyNjjYtu9+DppH+777YDCeo4Y7nMA51YdxKeyh3HbbifsST6Cvn3OOFX/KGb7/oemNa74Se44nrJ3w3H3TuCd/pO43NAd3wacxsP1Z3DoVE+85nAWF2SewxcDvHHXSh/sDzqPlxou4CxFP3x8wB83ZQXgN+GLeM44CCeFXsL05mBcrRSKrYfD0PXhZZQUjcCEtZG4JPwKVrdGocPsqzjI5RpG5MfgvKFxWLI+Hq2vXMff7TfQb85NnOaaiDkFt3D98CTs2HAH3a/exfEdyXhXLRUN3NKw4ck9dBqZgeKWmRgTex+1uh5gxfxs3H0qBwVKH2Lw6DxUtsrHguuP0PLbY+zWKkSvM0U4ufwJZox9isbWJdh2sxSP/SjDUTrlePPsc9SteIE10pW4f8dLHJz0CiN7qlBNtxpLvWvQ5lUt/plYj/673uD05Lf4sLcBzZY1YeeFZjxd/Q6l5Vox2a4NDdPeY+O/djxi8BGHBXzC2LoO1Fb4jJX7unBPxhcUHPANQ4y6cXbQdyx8+wM3T/+F3x170PvBb5QT7sXM1X24JuQvvm/6h8dnCmzk/8OCmJgzAPVEBmKtiTA6Xh6EIq2D8YqyKKo7i2FZ3hDcPkQce02HYUDkcFRsl8Bc1ZFo/p8kfn48Cs8Mk0KZDWMwJXosrvg0DpvmSaPzcRkc/mQCxo2QxYWbJuHLmMlo91kOB8yfgqEnFVClZCoWjZqOW7Yo4o/4GejzdSbKa83C+6eV0eTZbGwfo4pu2+ag1M25eOv7PFy6SB3rPDXwwIv5KCq9AKO2a6HGbW189msh7liig31eizHw5RKcMVEP83YuxQ13l2HXH330WGqAEy4YYurrFWg0eSU271mFLqmrUeKfMcYvN8FF/mvxVe06tJ+yHoX2mWFYujmqClrgkxUb0eriJvz5xhLPT9uCUxyt8MH9rbh2oDV+WGWDJ4K345imHXh7xk5cdmgX1mfvxoOD7VDMxB6jw/bi/JZ9WD5rP9oeccS/uQfwotghnGl6GPMjnNDi/RH8ouKCnkeP4sTH/2Ga+DFcaX4c30W54dGPJ3DEvFN4/Zg76hSdxioJD9y70RMHxpzFy53ncI6GNxaf8MGtT8/jL0lfvLDZDxXi/THrSwCuW3ARP7oH4cmySzh2TAgmbQ1F/YQwfNN9GQ8tjMAhnpF49fkV1Bwfjc9truLOW9fw388YDFoch0pe8fio8jpunJCAX21v4tk7iSj75xbe00vCVefvYEvVXfxvUgqO3JOKN1LScPHfe/haPwP3+WWicO19DJfPwrl7s/HpvRzcJpCLPYZ56BuYj1PfPMLsqQVour8QP2UW4SmhYhy36ineuVSCyxtL8a3iMzx8sByHZj/Ha4MqcMGaSnwR+hJ3vXuF/Uqv8ZJTNc7KrcHHonW4aV09fgt/g+fa3uIklUZMd2nC1Y+asXVoC7qataJkVBsmfHiPS+Z+wGrXj+hQ+AkHSXRihMVnnHetC0s6vqC1+jf87daNfsXfcZrkT8yx/IXr43qwo+s3umv24nj3Prxb+hcNpPqxwUpgE//fEETx7gEYoz0QtTyEsaJ8EO4eJ4ICNqIYnCiGyj+HYIGOOFqeG4bdFcPRS2YETrYdiRlJkmj8exS26UrhMZ8xOKpqLN6UHY+6u6WxJlkG9/dNwMH6shjpOwnVaiZjqZw82thPwT9pCujfPxWnG07HhwGKaFY/AzsVlPC0wyyUzlTG5AEqaLhSFRuD5uCRhrk4TFENYw+oo3aWBlYKa+Ie4wUoGKqFIc3aOFtpERYe1sHNDxfjdxFd9F6rh3LhSzGzdRmumb0c3zsb4PF8Qxw91AgT169EvSursLZ9NTrOWYMiriZ4pWAtqg83xbIN63H7VTPs/WSOAWoWqOi2EXOfbELzkZvx86YteCbWCmW6tmLKfGtcccoGm0q2o/NoWxxutRPjru/Chd9240stO7Q7Y48Dyvdi6FgHVLHej0U3HXHLjwP4Y9Eh9Dl7GOUrnPC+tDOa7HDB9ttH0a3nP5TSPYa3vI/j0lduWDfxJB7YdQpFk90xqvc0aizzwGcXPHFH9Vnsm+yFgXbeOCPNB/P+nccNBr7Y5e+HHnX+OEEhEFP3XUSjjCBsFgxGF6MQlAgKxfi3Ybhoeji+coxA+weRKCQchWGro1E15Co+abqGVjNj8eehODyfE49TRG7gA5MEXHv5Jn5oScQTyrdxjHMS3s67g8uGJGO9aQoejExFsfY0jFZNx/n/ZWD540y0HfYA/5pn4cXobJz5KQfz5+WixfE8/FKUj54jHuPETQWYFlOIKz8X4TuNYjx68imOKCnB66PKUGfLM6yKL8e9X5/jQK0KvHy6Euc8e4nFY6pw67bX+CuhGi98r0GFRXWY5VmP6168wY/jG/Dk9kYce7sJk341o/6SFnzj1YqHXrbhkInteHXnB9S8+xGf//mEO5d24r/znzHodRcqTf6Kj/Z8w42p3fj173c8u/wnyvr/wnu1Pbhqyh9s2duL/6X34UjBf3hjRT8uvihgyf9vBHHfNCEUdhyI4feFce7Awfh0lQhuCxbFnkYx9J0xFKceEsfs7GFoOlgCP60ZgafCRuK4Fkm8M2s0Lj8ihW9zx+BhsXE41HQ8XouQxgXvZfCFykTcdVQW+x9NwkvicjjLXB4fR03BTR8V8NvcaXju2HScVKSI6RIzcfVGJWy9NgtdO5VRUkMFE06o4pKnc7Bach46bFbDQfHqGPFFA+ct0MQS9wVoXaaFv6UWot/WRTgtQQdzuhfj+oW62OGhh+7Pl+L48fp412Y5GtwywIafhui02AjFvVZiTOUq1JpgjBW2a3D3HRMU+LMWg/VMUfn8eiyoMkPLSRuwe7cFeqVsxMl/N2GG/mY09tuCbTVWeEx+G47aa40379mgrsAOrDG0xf2BO3Hwm10YOXUPqu23w9JMe7QR2od/Vjqg/6X9OL3RER8qHkSzg4ewM+swnh50BKXXOGNyqAsavjuKjUqueMTpGA7LPY6xoidQe91JrAw/hXva3FFQ5QyGuHjg7EeeWDj0HG4288LvV7zR+4MPys29gJmuvrim0A/fDw/A4xaBOPraRUzsCEI99WCsdQtBx+JQFJG8jFcsw1E9LgLLuiJxu2YU9p6KxoDSq6goFYO5VrFofiMOP3+LxzPaN1DGIwFTym/iinG3sMn6NjonJuHwn3cwTicZF55LwZcVqWgncw8H2KZjaFIGqvzOxCLdB7jFJwt/vMpGH9mHKL87F+8n56FJXz62L3uMbr4FKFVTiLfknuBS+2KsS3uKB/pLUNSwDKMCnqFGfTk+U3iBOxwqsC+jEgMHvMIZK6swL+g1bmioxq7ptehxoA4nZNVjqvBbNDJuwOaQRnRpbkIJpXcYf7gFFz1sxVci79F+bTsKhX/AsNaPqDq7w1L3f/52LuNYNAAA"},"shape":[1675],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2aL0wcURDGd4/jdiGVaHqpajWyabJJBanEkxTRIKpQFYhyTYNGVeAuQdShERUXVMV5RA1oRBVJq+jc2/n23gzzdheu0ALvzC+7+/7Ovr33zbxJksnv105y9zx99mO+SP5d/y2YF5eXl2/3jrMiTZJiZSWbjHc0Hvcm14PztZ64//2D4+D9t6xAfe/54PiiN+HG5qbj6OK5Y7F44uww3N8v7fFiXVyPlnfneRyw17R/ox3x3Cs33Hol+gdx39XT/RL7h6uOg1eL0/GV83LXpwdb4hr1MB6Mr797Pp2HX3487vqkcTmerh11/fYGS4dmf8PVM1euv77nWJxtd3leZTvbS122gyhXta/6d/P02nfzx7V3f+NoudU86NdlO0zpjQflMK7k5EAQ7WGerl/dvzEOlAdp/dVSj7+xPq8HjAfX4n7IbtrO2t4e8T1oNj3X5cR71HY0qOej5w+7NNkN97HeQLxvvW5Bty6wTrz1gnVN8zGf63ZAvb5C/WM9htrB86bxYd3T/8Ccfw267xLlvfqwj/4Oq//H/3e/iIyMjLxVQrfdm3GfHPR4nxF08/D0Ke0HQoeClT5mnUr7UM/X0/Q8430t5303535y7idn3ZX75Wk/yXgfzbie0NPYb0DoTxC6FHS6dAaiHfSHeYNOP3uEfarxsn3wXLRn6MNqn+f9meqZxPMm6np6v9f7vmaofFO7Tf0JHVL6H1OW71OQ7DbHdhP3cT0r0T5I71+QdKsgrc/2LN9zmKW+NUl6y7y+wuOLDn8vHV5PHdZtHf4OO/ydCtJ6m7L87ju8bgVpPXd4XQjSe075Pab8XgTJvoJk35TtKkh2TdlegjTvlOeZ8jwTnmcSdWdkZGRk5Mz6/d3LW4lj0P61wPtWzvty7uti2ieFzoUfUenKQJwM8S8d59Lxyab7oXiiGc809LHWsTpOWMXtAnFN0V9NXNLkDeKTreKRIbv/bd5g3Nr+ofshP6YtUU+8x5pxm/4SzhW8c5Imvwn+Jgj/ydE4P6nawzhUHNeMjzZRx09r4qkgzhHa+lHaT9P+Tsj/cf6H4T80+QMhv0ATz3U9MOh/TNjk5xjj1v4S/C3t77X120L+W4jar6v4SPfB4c+vvSLqgcjIx6V/j5YfxHevdYvWoVqP4rmL13p5IdDn9HyB9Yup40lf5KwDRBwbup72o4z3FVPnQ+eIPIpr6Gh97t90Ph4qX6uvDd0q9J0fF+dzAMT1Xb6NZw/YAfF96l/k4ZAOMc8fEH+/Yg8ef+W/qPlofQo7Q3eifZ3vAx0b8g9C+lyfQ4hzCkMPi/ybmnOM6+ZDhPIcavMHDJ0r8mNonDtfXt/ofKD2HKNF/F/H+5v0noi718TVQzq3SSeTfyFYG1c3qOProI6v67g7rkFRH/F7Ta9fPU6T9B6efh6J+eH8AGzrP8AP0ecYIHR/3IcjIyMjZ+PozZM70fG0z2aFR63rHD09Tf/3QueB0MNO93n6UeSheHoQuhnlNHUeNe6L/BYv/wV0+ePQo964xXy8eej5VHkq3A7mg37dOIy8b+SJhKjjoSHqema81LCjaWc9TuP+6e+PZr6QiNfWzEfHf53+1vrY0MU6/0fr9bZ5P63ykWvOIa6bf6zzjEGd92vqcSPeDP0t8nw8/QydLOLFnu6CPtP6TeeJhPJDtC4N5YEg74PaSx+izuv3Pt2fPJQ/viXbg1g0AAA="},"shape":[1675],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p168737","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p168738"}}},"glyph":{"type":"object","name":"Line","id":"p168733","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p168734","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p168735","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p168676","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p168703"},{"type":"object","name":"WheelZoomTool","id":"p168704","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p168705","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p168706","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p168712","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p168711","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p168713","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p168714","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p168715","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p168716","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p168722","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p168721","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p168723"},{"type":"object","name":"SaveTool","id":"p168724"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p168698","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p168699","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p168700"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p168701"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p168726","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p168727","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p168728"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p168729"}}},{"type":"object","name":"Legend","id":"p168739","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p168740","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p168736"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p168679","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p168680","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p168681","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p168682","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p168683","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p168684","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p168685","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p168686","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p168687","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p168688","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p168689","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p168690","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p168691","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p168692"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p168695","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p168694","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p168693","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p168696"}}}],"center":[{"type":"object","name":"Grid","id":"p168697","attributes":{"axis":{"id":"p168679"}}},{"type":"object","name":"Grid","id":"p168702","attributes":{"dimension":1,"axis":{"id":"p168698"}}}]}},{"type":"object","name":"Div","id":"p168741","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p168743","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p168742","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"597cdc59-2429-42d1-a6ee-cdc504e6a035","roots":{"p168744":"cd810544-fc7b-4e70-8b70-52f93188dea5"},"root_ids":["p168744"]}];
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