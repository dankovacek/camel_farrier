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
    
    
    const element = document.getElementById("f7047568-8ce2-4099-a9cb-da8411e28560");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7047568-8ce2-4099-a9cb-da8411e28560' but no matching script tag was found.")
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
                  const docs_json = '{"75d3462f-6131-45a2-964f-97cb66481e14":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p512263","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p512264"}}},"roots":[{"type":"object","name":"Column","id":"p512341","attributes":{"children":[{"type":"object","name":"Figure","id":"p512265","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p512266"},"y_range":{"type":"object","name":"DataRange1d","id":"p512267"},"x_scale":{"type":"object","name":"LinearScale","id":"p512275"},"y_scale":{"type":"object","name":"LinearScale","id":"p512276"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p512323","attributes":{"start":0.2639999890327453,"end":1.611999979019165}}]]},"title":{"type":"object","name":"Title","id":"p512268","attributes":{"text":"08NN017 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p512334","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p512328","attributes":{"selected":{"type":"object","name":"Selection","id":"p512329","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p512330"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JZWAIehfA4aO7e2pqunvqjOnuGGO6YwxjOLqbMd0xxnTz53J17Oru7m57X79Pz4dHxMJ77Qo+IuJ8M6LcPbHzrxo8EC1VTnQRUTv4GiNQHxRAC7mxnU87AWVLSdTaD7fxj2egG1ERxePVVn57GFq96uiefdrCj16BmrkB2q7fkXzDDSivWqCOi4vmuX0zvzcApWky1Lf7N/ETu6PLkR7l4LEIvkV/tA+e6Kac28jnDkE9nBfN7+oG/vMYlBnFUPPdC+ePTkXnXw7l+7P1/OxQtIK+6I6/X8e3X4r6qw5a6I+1fJF1KKebonaKhRYduYYP80cpkRj13J7VfNcu6GKmQVl8ZBVfui9aVGZ0PU6v5OMGoy7zQvO+tIK/NBKlT2HUBLeX8ysnoatQBuXa42V84Gy0xD7o1rxZyvssQr1ZEy3o6xI+2WqU8EaovoJ2J2IxP9gPJVUC1Iidi/jqHdHdT4EScmghn7YXWqQHulonFvCPg1BH5EDLEBXGbxuOUq8A6rPr8/lR49FlKomy68E8vuEMtJcV0I19Gcp7hqHurYbW5NNc/s1ylIn1UXP8nsMfCEfXvAXKhzioU7bN5r0C0LmkKH77Z/Gfu6FNT4cu77GZ/NFAVH9PtG9nZ/CzhqIUzIt6/Mp0PmAMup9FUULvTuOLTEU75Y2u47OpfPRc1LAqaMXfT+HPLkHpWgc15o/J/KK16Eo1RYmKidojchIfxx/d0kQo3nsm8pc6o/VOjS7+kQn8yj6oFTKjXT01nu83GCWxF+qai+N4HYnuRiGUoFtj+WST0NaXRlfl8Rj+zizUwYqW8s1ofuNClOo1Ue9/GcUPXYUuTSOUyOiRfK0ItEet0A2Pj5Jhp/HbOqDVTYHu6cER/KieqJk80HYeH843CEJ5mR117IVhfNbh6PbkR2lyPYR/Mw5tQgl02R8M5Q9MR21eAe39iyH85PkoXtVQ3cdgvtVydJ/qoUz/NZjPG472T3N0beKgfNs6iJ/VDq1AUnT/7hvIB3RD/ZkWbe7RIL5wIMqprKgdzw7g/wxBNz8PSvEr/fmzo9G6FEUX424gv2gKailvtAtP+/Hd56LEqYK69F1fvuwSdBdro/T+3oePvxZtRRN05WOiXN3cm+/XBi1RInSrd/fitTPqjVRoAw735JP2QVmfCbXKqR787UHoBuVCSXmxO7/R0KoVQnfvZjd+6ETUNKXRNj/qytechfKoEurw11349AvRba2BUvdLZ/7pSrSRDdFljO7E79yI2qAV2ot46Mbs6Mhn7YC6Jzla44Md+Nc9UCZkQM1+vD2/fwC6ZtlR3p8P4CcPQ8uVH92ha+34VuNQPxVHm3a/LZ9nOso/5VHbvPDnv85DN7MqSoGPbfh/l6G1q4fux8/W/Nz1qIWbo52Mja7DVj/+T1vU+UnQiu1rxZ/pitIlLWqMoy35hf3QlcyKcuFMC777ELTYedAtudycLzsa9WIRtF53mvHxpqCsKIta/mlT/socdH0royR614RfvRitUm1017815gesQU3aBG1dDHSVNzfib7dGHZQQLcXuhvyGTijVUqHecw34Ib3Rpc6Esvlkfb7mILSHOdEN+68en95QtxZEq3OzLv9kAsrIUqgZH9Xhd8xEV78SyotXtfkxC9Cy1EC3+3MtvvFK1NcN0Mb/qcln24iyvyVqs3ho77bX4Ce1R8mVHPXQgep8yx7oPqZHmfZvNT7PALQj2dC1Pl+V/xqCOjMfWv5rvvyxsSjtiqP+uFeFnzMNXaHyKCefV+Y7zEP77Ytu3gcfvtgy1DN10Tr/VF7WoyxshloyNtr5LZX4bm1RYidBXbK3Il+mK7r/0qD0+qcCH68f2vIs6MqdKc9fCUbtmxst4eVy/KpRKJWKoF6/7c33n4wuSVmUdU/K8pXnoN3yQTfwbRk+xWLUDbXQqn4rzd9djTKkMWrqGGibNpXia7RGeZgAddiukny6Tui2pESp40rwT3qhWUZ0HieL8zsGotbPifY8qhg/egRKloKou28U5RtNQPeqJMr4h0X4bDPR9lVE1/RVYf5dGOqk6mg5PxfiD65AadkA9ePvgvzUDehyt0Q5Ehe19fYC/JcAdDOSoeQ/kJ8/1h2tbXp034/l4+f0Ry2UDe3Eubx8+xCU33lR513Nwxcdi+50MZTO93LzMg1tQTl0JZ578edDUbv5osX6kItfvBSlTF3U/37k5HuuQxe3GcryWKjltuTgL/uj65MYJeHe7PyqLmgV06C7diQb378vapIsaGtPe/I+wSi3vFAHXsrKJx+FLrwwStXbWfi7k9CCy6BL9SQzv2k2ag0ftAdvMvEhi1DS1ULd8jUjX3s1useNUExQPTZ58Nv90NVLgPJ8ZwZ+dEe0zCnR7TqUnm/UC/WVB9q4E+l4z4Eo+3KgNo1Ky78djm5iAZScN9LwB8ejtSiJ7sOD1PzUGai5K6IdfpmK9wtD+VINdcanlHy+FeiO1kdp+zsF/z0cbXYLdAXjopzYlpxvH4D2Kym60P3J+KLdUU+nQ+t0LCkfHYiywBO1xLkk/Lmh6LrmRYl1NTG/eAxa6WLoou4m4ntORY1bDm3Zs4S8dyjK5Sqofd4n4BMsRbeyDkrFH/H5a2vRApuiSxwLZW1kPN7HH+1mInRBe+LyybughqdG8z0Sh7/TByU4M2qq07H5iMHoqnuhPLgYiw8ZiZa2MLrIWzH52pNQH5dGG/E4Bp9hNsp2Ra33RvhnC9GNqomS+Wv04L+/axVaw0boXkb/+auMi0D19EPbGx9dk52/+bcdUCemQMtx6Bd/oCdKCw/UD8d/8lOC0HnlQDl84QfvNxztc350069/5/ONRz1aAs3/wTf+23SU2RVQC778yh+fjy6gGsqvj1/40OVoReqjO/XrM98pHDW6OVpYHHTFt33iz7VD7ZoULeb+j/yibiil06FGHf3A9whEF8cTZdnZ97z3ULRLedD1vvKOTzAGdWVRtAp33/JXp6AEeqMmfvaGXzMXnVZBufnuNR+0BC1ZHXTrv7/ifdei3mmCNjgmupSRL/mINqjVE6Hd3/2CH9r5//4PsPtri/ATAAA="},"shape":[638],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2YTUhUURTHnxHSQiJcRLTQISQIFxJDuIiYgYgQEYlAIqREXLgQkRCRCJwWEREhIhES4oREBK1ciEjYQyLCRZRfOdk4z8zGr9H5eo5D0HTveee+OfeNb2ZQwkXO5sd97557z733nHP/bxRFURPX512KDVOp1O3Rqu85yfpr91x+3u5yXVgwyZ43NF0McHp6T2mUDaNVQLW9F6jUHV+k9DT3SFSrin7shcKe/Xa6DnngzDdOvM/fa7udv1L+EOguOrIEz0seAN2Ld39C/3EdqMx0LlO6h2MSPWMDv4AtwSDEb03jCvDM/Cqnw/dpHfzqHg+5Cpid07kF4/2ZDuP7CLDwfgz6vW3XgT2hbfDrTnMCxwc6Kvw7fL2l88kdPp5yrj5pS77+vj6gWl2ZNO0Nv2GcQE1jmuI5IfMnietN5jOfmKdhpESaT5Dtb9p/0c9qT95LfuL5g93SywSl2CflSHnC3L8COOdtPHegVvtEN/fZmFfHeXWcN25Lvp9XF+NYb+LoVxz3OYZ+xNDvKNYnicwPieL82ToiaA/0thZHaJwIep61hjG+w9x/x80miCetc3UT7NoubWIdDXH/XMOxkNk29m+DxqUdvR+qjbhd/ryGebKOebSK57lC490x1A/xrw6cDqKfkBfa79dS/oi8EhT5xn5G2+lconkp8tSObL1Z67VZty33grgvgPx8h/oDJkUdYfurDbb5aX2BukPqT173GrnfrPej+9aoD+Y7ccOH9WoO42oO3j9u+WqSPX/3sWM2g9wuMjkDdoNtWSn6s3o3Beut756EOKl89OVfUIwvUcy/B+a6F1g8TbsIWd2c2s98uWidT2Ie5yGR+3vSN5vz/Mg5irgw44XHE2unJmu+ZegvEr/CT4hzEvfi3rTqKWs+7VdPWcnux6zz2NGa1/lSyv88aNWd+6XQKVZ6t14tZOgaUn8O9d8hD0xvs/tQnXjhp3FqVzesulvkt1V3W/W3qQNsdLjQ26beaO9dwXHXKEHH8LwZ1zdQj2yifgPd5Q7URkz9xdfhL4tiHY1S/cbWEQUdUFYYM2noVkPnPb0stcX4pj1vW+3JOMJeol3/LOOAn7tQGo98Z6gdYzE8tzjuN1C7NiLr3dZiHfdLp/pZ6Gm2r5LOFt8tVjJ/pH7a2fOGvTqh0+8eSYcb+jOtt4mf7BdH/Z7ed3p+LcEI+huh582+DyLoF+ho97E3YRzf+B47WrervmZxupWhr411baC+l3T1Yd34P/+PAJ3F4sZ7ZVj6/wv0GNFlQu8DhX6z0/259D9hvnqztMI/TSn0p52elXTvXyGlu7XwEwAA"},"shape":[638],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p512335","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p512336"}}},"glyph":{"type":"object","name":"Line","id":"p512331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p512332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p512333","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p512274","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p512301"},{"type":"object","name":"WheelZoomTool","id":"p512302","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p512303","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p512304","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p512310","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p512309","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p512311","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p512312","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p512313","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p512314","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p512320","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p512319","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p512321"},{"type":"object","name":"SaveTool","id":"p512322"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p512296","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p512297","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p512298"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p512299"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p512324","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p512325","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p512326"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p512327"}}},{"type":"object","name":"Legend","id":"p512337","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p512338","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p512334"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p512277","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p512278","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p512279","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p512280","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p512281","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p512282","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p512283","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p512284","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p512285","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p512286","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p512287","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p512288","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p512289","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p512290"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p512293","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p512292","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p512291","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p512294"}}}],"center":[{"type":"object","name":"Grid","id":"p512295","attributes":{"axis":{"id":"p512277"}}},{"type":"object","name":"Grid","id":"p512300","attributes":{"dimension":1,"axis":{"id":"p512296"}}}]}},{"type":"object","name":"Div","id":"p512339","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"75d3462f-6131-45a2-964f-97cb66481e14","roots":{"p512341":"f7047568-8ce2-4099-a9cb-da8411e28560"},"root_ids":["p512341"]}];
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