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
    
    
    const element = document.getElementById("ef0355de-6ed1-44df-9843-6dced6001211");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ef0355de-6ed1-44df-9843-6dced6001211' but no matching script tag was found.")
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
                  const docs_json = '{"d3ea7aa1-471d-436e-88a6-a58ffb3ce650":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p521043","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p521044"}}},"roots":[{"type":"object","name":"Column","id":"p521121","attributes":{"children":[{"type":"object","name":"Figure","id":"p521045","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p521046"},"y_range":{"type":"object","name":"DataRange1d","id":"p521047"},"x_scale":{"type":"object","name":"LinearScale","id":"p521055"},"y_scale":{"type":"object","name":"LinearScale","id":"p521056"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p521103","attributes":{"start":0.017000000700354498,"end":1.2669999504089355}}]]},"title":{"type":"object","name":"Title","id":"p521048","attributes":{"text":"08MC016 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p521114","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p521108","attributes":{"selected":{"type":"object","name":"Selection","id":"p521109","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p521110"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3XVzwQDheH8UMlLRLak4aWtLQ0taShRYuWBlpatHRU2lNLe2rS0tLU0tTSpIEyIhqkIvX+3+fq+Xxvz9X5ieiBbxaTrotIfE+qpofMcedCVP09yuDwSDOcaEGl7JTSuMd9Uzy/NtWIQBOc9qYUrtySSt/1JXFQVgl8wYlq1v7i2Fqoug0thleeNcZRZlR+TCiK694xwh7WVIMDiuDbrwvj/GZU7NYWwp4ZhnhLV6oxewywYYFg+0FUfCL+Tfy/d5lQeeb1FxvfKsBtq1P1nfMHH3iRj+MaUzFdlYcd035jf0eqYTt/4cTfP7HlQCo9TuTigBJUIsb+wKnXcnDlKlRd/LNxUOx3HGlLJWvZN2yV/BW7daC6YtsXHJWbhXP6UqkbnondjakEj/6Mo69k4PwKVBvNSMeejz/hkPpUYhanYYOkVGzflqp3SArelZ2MY3tTMT7yETsUoeI74gMOvZiE48pSNZmaiB1jErCfDZWwhe9xwrt32LI1VaeNb3HA1zf4lDOV1APxuJIhFRf3OLzo/GscaU41c9IrbHXvJXatRWWFvsBX45/jHHuqNsHPsHtmLF7XnUr0vqc47+8T3GgI1dFnHuOQ0lQf+DzCBrcf4uZWVLznxeCdrx7g2KZUi665jx3S7+EpXaiE7r6LX+ffwSZuVDuduo39SlE9Oj4aJ9y4hS2qUXGafRPPe34Dn7KjmrLiOq6Ueg336URl0Y4ofP7XVZzZn2qN41ewa3Gqy8dcxlejLuHsSlRs/C7iYU8v4HUNqd5aGonzPpzHtu2pjN56Dm/+cRY/cKEqYWdw86JUvUadxjsvR+Cn5akUnX4Kt3l0Ek+pR3V/0An8OuE4LuVApdPmY3jm93B8tBfV94fCsEVhqt2HH8XzLhzBJy2ppEw5jCs+OIT71KG6cMFBfP7tAfy5JZUaG0LxwC/78fIeVK+E7sPZQrXOsL142Lk9eG0ZKrcm7sa/7+zCtjWpjpq/E2+O24HvN6f/HXw7bvZ5G/bqRnXH3q34acEWbDSYSpvTIXiyKZX93pvxq1ubcKkaVDvO3YhnvtyAjzSh8n7Vemz+KRh370x17q51+GTeWpw8kErFk2tw75JUFo5bjc9dX4U/V6FafdZKPPDZCrysEZUry5fj78nLcJ2OVIduX4rX/lyCb/aj8jt8MW5YjMoozyC86eoifL8i1X8zFuJmTxbg8Q2o7FgSiJ8kKTZqR7X1lvl4ck4A3teHyqsj83BJIyodR87FMy7NwUfKUX03dTY2fzgLd6tLZe4if3zivR9Obk21wqaZuPe3GXhBTyrnDk7HGYZUqntMwwMip+JlFlQvT/bF3+9NwbVrUxkaOBmveTMJ32xB9VfwRNwwawIe6URl034ffO+fN/43hGrTs154vBnV7RPG4ye3x+Ei1lRaB4zFk16PwfuaUX25xhOXzBiNO3SlMmPPKHz4z0j8zo1qmYgRuJsJ1Tlew/GJmx74YzUqFea4414vhuEFjameXTkUZ6QOwdUcqQzYORgv/T0IXx5A9dtxN1y7BNUhY13xmmsD8Y3KVH75DcANYvvjkbZUNy7rh+997Iv/tqfSdJsLHpfbB2/vS/VxWG9cxJhqq9G98KQrPfHeClReTnfGJR73wB3qU52+2AkfTuyO3zpQKRPSDXfN7orn9KZ6/HAX/LEw1fIjOuNeFx1xYFkqZ3074fQHHXE1G6r9F3bAS9+1x5daUfm2oR2u9bUtHuJMdfUBB3zDgOrPYW1wg/Ot8QhzKhsntcJ377bEf2tSbaIt8Lh4e7zNnsrjdc1x4cxmuFV3qhP3NcV7/zbBLwZTKXGmMW5fmsp0Hzt8KLoRfluDqtk8W9z1VUM8uymV46sb4A+f6uPyXaj23F0PB+bXxWdcqaSftMFVS1HpP74OXnKjNr5UlerXWbVwrec18WA7KqtXWOPrKVb4Z0eq9XfUwCN+Vccb+lO5e6waLihGpcmYqnhsVBW8rRLVRzMr48JPK+GWDalMXFoR7/lQAb9oR7X41vK4/Y9yeJoLlUNHy+I3RlTMRlniLpct8OzyVI9NM8cfHpbB5epR6RlkhjWhND7ThuqnTaa46ncT3K8XlSWHSuGLhah89SiJa14ogQdbUl01pTi+fr8Yzq1Npf4CYzz8bVG8oSXVO+uNcEFWEdy4B5WxoYXxVqHyaGghXOicIW5ZhuqEiQZ4zx3Bz62pFJ//b8L/3S7u7/8r05pTPbi2AL/J+INLd6PSZW8+nlWQh48NopoU8RuXM6Xq7P0L662f+HR1Kp/m5OIqL3/gfk2oLl6Vgy+mZeMvjlRq7vqOB+V9w6sGUr124ivOLUG13rgvePj1LLy+CpU7/pn4T+xn3LgR1THLM/DW5HT8sAOVQts/4RY/0/CEflR3h6fi58ZUi3mm4HZXk/HUilQOzviI4x9/wKUbUO28JAnPSkrE4W2pJIUk4LI577FzH6rzj7zDp4tQTRvxFle59Ab3LUdl8dR4fCEmDn+xoWq96DUe9P4VXtmayrWNL/GPry9wvZ5UPQ4+x+sNqd52f4b/nI/FdhZUxkx+irfce4If1qJqGPgYt3jzCPu0oLI7+CF+lhmDizlRbbv/AZ767z4+MIRK/Jl72NSMSucJd7H/7Ts43Ipq4rzbuOzraNyjGZX5a27hiPSbOK0L1cp7buC+f67jIDcqF05dw1mlqFh7RWG3m1fxympUo2ZfwT+eX8Z1G1PxWHkJB6dexLc7Uc3fcQHb/Y7EngOobDl+HscUp2I49hy2v3YW+1SmusvvDH729DQ2tqXSdlkE9v14Ch9oTzVu60lsmnsCO/al4h92HIcVpZI46hi2vBKOe1SgGjA9DEc8OopT61GpvPgIdkk8jIMcqEZuPoSzvh/EVr2puB0+gFcUphI1PBTnXNiP65al6u67Dwc/2Iuj61DJX7AHN3q3G3u2ohqyYReO+bITGzhTsT+wA3sbUNk1bDuOPbcNG5tTdZi0Ffve3YJDa1KJmx+CTeI3Y0d7qn7rNuGwzxtxQjcqlvs2YKe/63HAYKqnTgfjVFOqlXzWYZfotXhRDSqRc9fgzJersVVTqq6rV+EVn1biq52p5OxagW3yl2N3V6rrTi7D0SWp5o1bihvdWIJHV6USMmsxfvAsCBvYUW2+YhH2TlmId3akErt9AS76KxA79Kc65Zji0GJUX3vOxyZRAbhTJSp+M+fho0/m4oQGVC2WzsFOH2bjee2onNoyC6fk+ONKLlT7HPXDi4yonh85E2demoFrlKfiOm06Xv5wGr5al2r2oqnYJsEXD2tDZd2mKfjWt8k4rydV20OT8OhCVDd7TMQPIidgsaTSfIoP9rrvjXfWpvo00AsXfTset2lJZcr6cXh/1lj82olqqdAxuJNQnTnUEx89Oxq/N6NiMXEU7n5nJJ5nTfVkwAic8no4rticSp+1Hnhhhjs+35Xq5z3DcI2CoXjgICrLI4bgKyZUsr0G4zq3BuFh1amuneOGb71wxb8bU7FdNRCPShuANztSvb+zP5a8frjZQCpeJ/riHSWoPB3rgo2u98FtqlCd7N8b74/thV/ZUim1vCfumOyMZ3agemRbD/w+1wmb96PSPbw7nmtM5eTobjj5SldcsSLV3jO64IWPO+Nz9al8XuyIqyd1wgPbUl0W0hFfye6Av/emUudIezy0CJW1I9rhmxfb4t9lqTac6oBHxbTBm2yo3F/YGv971wo3a011/MaWeMfXFviJMxWjg/a4tSGVye7N8b7zzfArc6olJzfFHe81wTNqUTmijfG7eDts3oJqt+BGeG6mLT7RnUryvoa4wr8GuPcQqgvO1MfnSlPN8KmHq9+uiwdYUVk2zwZfflUHf29Ktfaa2nhoei28pguVm7tr4l/51rihG9WRp6zwplJU742vgf/dqI6bVqMyfnY1vP15VfzEjmqRlVVw69TKeFInKvt2VMIvf1XEJQdQ7XC8Ap5RnOrhMeXxu6hyuExlKt38yuI5Ty3xiYZUPy61wBU+muNe7aks2FoGn/1hhjNcqFYLK40HFKW6dJQpvnzZBH8rT6X29FJ4yKOSeE09qjeCSuBfCcVxAwcqIzcXwxu/G+N7vaj+PVQUNy1MddxwI7z9QhH82JJKEd/CuNWDQnhSHap7Fxjil28NcIlWVDpsEDz9yz8f9n8Pqm9D/+IyBlS7DivAc879wcfLUPk4MR+Xv5uHe9WkGjj/Nz4b9wunN6dSbd1P3P9zLl7ajeqlvT/wt4IcXGswlSGns/FqUyo3vL/jn7e+4QY1qI6Y+xVvfPkF321C5e+qLNzkUyYe15nqtl2f8eO8DFzYlUqrk+l4Ykkqe8d9wi+up+ESVam2n5WKpz9LwYcaUXm7PBmbpXzEXTtSnb39Az7+Mwl/6Eel/LFE3LMYlUDPBHzm6nucXpFq1ZnvcP8nb/GSBlQuLXmDvybF41rtqA7eEodX57zG1/tQ+XnkFa5vRGXEyJd4w6UX+G45qgVTn+MmD5/hsXWpbFsUix+9f4oLt6HactMTPPHbY7ynJ5UXBx/h4oWotPd4iKdFxuBDFlTfTH6Aze7fx11qU5kdeA8fe3MXf2hBtdz6O7hn1m2sTlTO7I/Gn/7dwlWHUu139iZeYkb14oQb+Ovt67imNZXBAdfwqtdR+HozqrlrruL6GVfw8K5UNuy5jO/8uYQL3Kg2jriIx5pQ3ep1AT+6GYkLVafScs55POHFObynMdXnK8/i4mlncDtHKtN2nsYHf0fgNwOolj5xCncpQXXW2JP42LUTOKkylXL+x7Fz7DGstlRPLwvHnz6G4SodqPTbdhQvzj2CL/al+iXsMK5pTHXQ6EN41ZWD+FoFKrnTD+B6j0Px8PpU1y/ej+8k7sN/HKg0DtmLx2TvwVt7U314eDcuVIRqixG78ISLO/HuslSe++7AxWK243Y2VKcu3IYPvtuK41tRKb1xC+78NQTPcqYafmAzTjKgWtZ9E3Y+vxHPN6dyetIGnHZ3Pa5Si2pfDcaL49fhC/ZUvqxbi60z1+BB3amu3LcaX/u7Cv8YTKXemZXYozSV9T4r8O3o5fhPDap285bhMa+W4i1NqTxcvQQbpi/GLbpQ9dkdhHfnL8LPXKkUO7UQty1FZer4BfjAjUAcX5Wq6WzFnZ/Px/52VMJXBODElHm4bCeqPXbMxfN/zcER/amkHZuNKxen0nfMLBwU5Y8vVKKaNdMPWz+did0aUlm5dAaO+jAd/2hHte7Wadjjx1Qc7ELl9lFfnG9ExW7UFOx5eTLeUp5qzLRJ2PDRRGxfj4pP0AS8K8EHP2tD1XizN2773Qv79qJy4NB4HFeIiunwcdjxwljsb0k1bMoYnHjfE1vWodJjwWgc8HYUjmhJNXX9SFz5ywjs0oNKUOhwHClUsoZ6YKtz7titDNUVE4fhqDtDcY41lbrzh2D3uME4uDnV6LWDcH6GG27UjYrnXlccUjAQxwyianB6ALY3pert3R/vutUPx1anYjy3L3Z46YJ9m1ANXdUHx6X1xiadqTju6oX98nrisIFUE044Y8uSVJ3G9cAB153wqSpUUv2740rPumGXRlQXLe+KI5O74MwOVKy2d8auPx3xin5Ur4Z3wjnGVG08O2L3qx3wuopUome0x3mP2+FGDaiOXtIWhyQ54AdtqRhsaYOb57TG3n2o7jzSCscWoVp0ZEvscKkFnlKOSuhUe/w6pjk2qUu106Jm2O99U3y0NZWEjU2wxbfG2Kkn1XkH7fApQ6op7o1wpUhb3MeCyqLJDfH5ew1wZi2qNQLrY9c39fDyFlSuBtfF2Zk22MaJ6rD9dfC6f7XxrSFU8s7UwrZmVEZPqIk337bGD6yoSoAVbv66BvZqRmXnmur4aXo1XLQr1TZ7quIpf6rg/W5UXp+qjEuZUOnkVQnPvFkRH61G9f3sCtjiRXncvTGVeSvL4ZOpZXFKJ6oVd1riPr8t8MIBVM4fN8efi1OpMbYMHnjNDC+vTPWKX2mc/dQU17GlMmyZCV77sRS+1Z7q760lsW1uCTyqL5XNYcXx/aL0v4MWw82uGGOvClR3TC+Knz4ywkb1qbRZXARPTiyM9ztQfbW5EC6VbYg79qYy87ABPlKYyvvhgs0v/vNm/5elOtf3Lz75oAAn16FSceEf3PtdPl7Yiuq5DXn485ffuLozlYEHfuFlBlSuDPuJv5/LxXXMqQ6d9AOvvZuDb9ak8nt+Nm4Y/x2Psqe6ad03fP/zV/yvG5Vm+77g8X+z8I7BVJ+czsRGpam29vmMJ0dn4H01qLyam45LvvqEOzalOmN1Gj7yKRW/60zFfHcK7pafjOe6Uj1x8iNOLkm1wvgPuPeNJLygKpVzsxJxxrMEXN2O6oAV7/GylHf4ckcq37e/xbV/vcFD+1Ndcywe3yxG9ZdnHG4Y9RqPrERl08xX+N6Tl/hfA6pNl77A4z88x9vbUXmy5Rku8iMWt3ahOunoU7zPiOrLkU9wycuPcYfyVGZMe4QPP3yI39WlWiYoBndLeIDntKFyYtN9/PHbPVyhF9Veh+7iBYWonvW4gzMib+NqllQGTInGS+/fwpdrU/0WeBPXfnsDD2lJZc366/hG1jX8y4lqg9AoPFKobhx6Fd87ewX/NaPSdOJlPO7OJbzdmurjgIu4SNwF3Ko5lUlrI/HejPP4ZVeqJfaewx0KzuLpg6gcjjiD35pQKeN9Gne9FYHnVKd6fM4p/PHFSVy+CZVeq07gwLTj+Kwj1fSdx3C1vHDcfyCVpSfC8KUSVL6NPYprXT+Ch1Shutr/ML4Rewj/tKXSYPlBPCL5AN7YgerdbaH4b+5+3KQflXHh+/A2YyqPR+/Fha/uwa0qUp04Yzfe+3gXflGfSoklO3H7pB14eluqh0K247fZ27BZHypdj2zFs4tQOT5iC/5wMQSXL0e159TNODBmEz5jQyV94UZc9f0G3L811SUb1+NLX4PxV2cqtQ6uw4MNqax2X4uvn1+Df5pTrT95NR5xbxXeUIvKXV2JC+JX4CYtqI4NXo63ZS7Dj7pTKbx/KW75bwmeOITqnjOL8YvSVItPCMLtby/C06yoHJq3EL95tQCbNaPaZU0gnp2u+FgXKh92z8fl/gTgnm5U9dQ8fKYU1U/j5+KqN+fgftWoLJk9G198Pgt/taNac6U/Hpzqh1d1onJ9x0yc+2sGrj+A6vDj0/GG4lTvjJmGC6Km4saVqYz188Vbn07BjxpSLbRsMm75cRKe0J7Knq0T8fMfE3DxvlTbhfngaUWpHhzljd9c9sKlK1DpMn08nvVoHD5Wj2pS0FhcLnEMdnag/z1Snvj099H4Uy+qVQ6Pwv0KU108fCS+eGEE/mJJpabvcDzogQdeVYfqtQXuOPftMFyvFZXhG4bi9V+G4Ds9qP4JHYwbG1AdM2wQ3nrODT8sQ6XQJFfc4u5APKEm1d3zB+Dncf1xMXsq7db1w1M/98UHu1GN3+uCS//tgzsPpjLrdG8cbkolybsXLhvdEzvXoDp/rjM+/bIHTmtCpcpqJ9z3U3e8uDPVC7u64S95XbG1K5VBJ7vglSWpXBvXGf+47ojrVaXqMasTXv+sI77diMqf5R2wXUp7PKYj1S3b2+GHP9tiw/5UWhxzwD7FqOz2bIOfXW2Ni1Wi2nZmKzz1SUt8oAGV+CUtsOkHe9y5HVX/Lc1xeE4znNiHStmjTXEPIyrzRzbBEZca47RyVCtPs8N9HzbCQXWpXFhki7PeN8TWbai6bWqAV36rj6N6UvlxsB6uW4iKh0ddHBxpg29bUM2fXAfb3a+NPWtT2RJYC8e8qYkNW1K1X2+NfbKs8C4nKs/218DGQqXt0OrY92w1fMCMatyEqtj0ThXsaE3FP6AyDntdCSc2o2q5tiLukVEBB3SlErGnPE79Uw5XHkTVJaIsDjKhGullibNuWmCr6lTc5pjjFS/K4KjGVHNWmuG6aaWxuyOV4J2mOPq3Cc4fQLXRiVLYswTVkLElccy1EtigChV7/+LYO7YY3mVLNXaZMTZOLoodOlDx3WaEQ3OL4Li+VE3CC2NHY6p+owvhsCuGOKECFcsZBtjpseCA+lRPLf7nxf5P/OvF/m9LxSWkAC/K/oMje1PNPJyPrYpQdR2Rh1dc/I2vlqWS4/sL28T8xO42VNctzMXR737gvFZUGm3MwaO/ZuMQZ6oPDnzHBoZUm7t/w97nv+Kd5lRiJ33BRe9lYYdaVKdoJg6N/4xf21MxCc7AnTLTsV93qkf3fcIJf9OwxRAqTmdS8bzSVE75pOCU6GRcyYpqn3kf8aJXH/D5plQyVyfhGumJ2LUL1eW7E/DV/Pc42/W//g/u+QGXWDQAAA=="},"shape":[1675],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+3ZLw7CMBTH8SeQaDIHN0ChN4vCoUi4AOEKa4JEICYQGAyCW+wEiBkyksEIDscfQYJ4BI3BrGuTb83HNi/t7+W1It/1isV9TRKUofiz37pc37KCOiHaNZpP9tw7RET0zc4szehfiIiOe1UdXzYr8hoREU0rP9IP0Nn5slvwf2OjzvmOd+iqVdX2aHGgzoiI9Vm+t2dy+Lc/xWGPeQAR8Q+j0+BBXiIiipjl9EkeVm/ab1Jn9C8fkuDOufXoX6AxtJczH0wcxgdYNAAA"},"shape":[1675],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p521115","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p521116"}}},"glyph":{"type":"object","name":"Line","id":"p521111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p521112","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p521113","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p521054","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p521081"},{"type":"object","name":"WheelZoomTool","id":"p521082","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p521083","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p521084","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p521090","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p521089","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p521091","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p521092","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p521093","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p521094","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p521100","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p521099","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p521101"},{"type":"object","name":"SaveTool","id":"p521102"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p521076","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p521077","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p521078"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p521079"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p521104","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p521105","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p521106"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p521107"}}},{"type":"object","name":"Legend","id":"p521117","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p521118","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p521114"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p521057","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p521058","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p521059","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p521060","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p521061","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p521062","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p521063","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p521064","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p521065","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p521066","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p521067","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p521068","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p521069","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p521070"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p521073","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p521072","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p521071","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p521074"}}}],"center":[{"type":"object","name":"Grid","id":"p521075","attributes":{"axis":{"id":"p521057"}}},{"type":"object","name":"Grid","id":"p521080","attributes":{"dimension":1,"axis":{"id":"p521076"}}}]}},{"type":"object","name":"Div","id":"p521119","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"d3ea7aa1-471d-436e-88a6-a58ffb3ce650","roots":{"p521121":"ef0355de-6ed1-44df-9843-6dced6001211"},"root_ids":["p521121"]}];
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