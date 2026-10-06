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
    
    
    const element = document.getElementById("bdc57097-da6a-4abd-8aff-3d31fffd143a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bdc57097-da6a-4abd-8aff-3d31fffd143a' but no matching script tag was found.")
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
                  const docs_json = '{"2f96162b-2585-4f87-9f36-d73296b49c61":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p37956","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p37957"}}},"roots":[{"type":"object","name":"Column","id":"p38079","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p37961","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02OA057&lt;/strong&gt;:\\n        215 revised days; 0 removed.\\n        1.19% of the earlier published daily record changed.\\n        Affected interval: 2022-03-12 to 2022-10-13;\\n        longest consecutive revision run: 197 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p37962","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p37963"},"y_range":{"type":"object","name":"DataRange1d","id":"p37964"},"x_scale":{"type":"object","name":"LinearScale","id":"p37971"},"y_scale":{"type":"object","name":"LinearScale","id":"p37972"},"title":{"type":"object","name":"Title","id":"p37969"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p38012","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p37958","attributes":{"selected":{"type":"object","name":"Selection","id":"p37959","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p37960"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DB1cOAAAAwM9eZY9sGlb23pktWaFs2ZuSyMwMyd5kr+xNJERI9vw97t67QCAQKGd5K1jRSla2ilWtZnVrGGSwNa1lbetY13rWt4ENbWSIjW1iU5vZ3Ba2tJWtDTXMcCNsY1vb2d4ORtrRTna2i13tZnd72NNe9raPfe1nfwc40EEONsohDnWYwx3hSKONMdY44x1lgqMd41jHOd5EJzjRSSaZ7GSnONVpTneGM51lirOd41znOd8FLnSRi13iUpe53BWuNNU0V5nuajNc41ozXed6N7jRTW42yy1udZvb3eFOs93lbveY415z3ed+D3jQQx72iEc95nFPeNJTnvaMeZ71nOe94EUvedkrXvWa1833hje95W3veNd73veBD33kY5/41GcW+NwXFvrSIl/52jcW+9Z3lvjeD3601E+W+dkvfvWb3/3hT3/52z/+9Z//Aej+GyVcAwAA"},"shape":[215],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Je0wVZBiA8RdFEUFQ9NixoxDEVUEQgkBZfuItLIpF4TBMTRuOpsNF4d1Pk8lk0SgMLUpHo8GkSDKMkvlOJouisrwVDkfDZJKXKB0Egsrz1297HhHT1tBXkCIisZ79I2r5y2iHPkezVv7nt76AOrsKbVkfmoHUAf7qCtQzt9DOWjDIL30fpe8v1OzEe/zT+9GEd6CURA/Rs86jORU6TA/Zgrr/R7T/zLjPz8xDOXkaNdAhm0f+vhw0NxtRMrzdRtRvXkHrfwzN3tGj+D0voT5fjfbrATSutNH83YdRr/WifXaRO7/+AxTnddQd88bwu95Bk9qJUhc7lj+lEO3WS2g6Izz4S7ajHv0Z7aTAcfyCN1A6zqCmOD351blofJpQ8n3H8/9Yg3b+cTRVY734XlmoeUfRXhxCk5zuza+sRPW4i3bD0gn8c4dQkm6gfvKUD9+9FE1uF8rZeF9+fBHaj9rRuEVN5OfsQm37FW1s8CT+wbdQhr9HXevy47duQBOtKAf8JvMH1qFdfQJNi+cUfmQ2aukXaPvEwV+ZgdJchRrej7Zk2VT+nQqUFbdRTy14hB9Shqb4GkpvopOfWYz2ZAeaoJhp/KI9qDfPo80Ie5TfuAUloA11r7+L35OHJr0ZpcExne9aj3b3t2i6vWfw01ah1h9D63T35+/MRLlajZo6iLYuLYDvOIKy7V/UzkWP8ZeUo6m9juKXHMgvKEHb0YlmYVwQv6YQ1ed3tPkzH+e3b0cxv6BWBQbzvfLRbGpBueQM4Se/jrayCc24iaH8ja+injuONskjjH84C2VMLWruMNqz6eH8hE9RKu6iuj0dwc/5EM1PN1Di5s/kHyxFO9yFZl3CLP4PRajRl9EeiIrkD+5CWfMbaktwFD+yAM17rSj9rtn8lRvRNiuaiMnR/HdfQ71zAu2K8TF8zUYJrUMtdpvD781As/wzlKZ+1KBnYvlFH6O5dRvlxZQ4fmMZ2oBuNIVJT/D/LkZNv4K2ISaeP/1tlD0XULvDEvhpW9F81YYyLeBJ/s5NaK82o1k2NZH/5XpUx3dot01I4v+5CmVpPWqt+1y+33I0m2tQrgyiLnxuHr/mCBrf/1DeXJzMby9Ha3oe+gDCN0fLuAYAAA=="},"shape":[215],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/01UTUiTcRx+NbNaaWbD1GQuU3P5hQ4Ry7E3paQUakWgMGqnHTyEYIfYxV2Gp5CQiCHBQOoUHvIyomhI0GV4CRIPgfZhmX3rtG97fs//t/B/eXh+31/vm2tZoXC4084lttmWvGiL4UsdwhPxsm5B6PsMH7ggaFkpRfdFw+2AoO0dPqX+xw0fP2fw2XlBxOs1OH/CyKfbVd5ib25uPk6nm5V7BZG3RbFB9XVGH68RjPochwVt73Sb6P3e4X5jf5f1hcK1p43eaysyH+xbt/aZSqc7TPy+HtHDosugxblAT/9EfIB9QK99lHUJT6X7Oky8cKvwRDzeqPV6hKMP1g2sF8SrFYw6m6oEFyaHKgWtucmD5BFnuSDsK+0cqdd7RHjWHnYVwiE/IJgY8jmp9zn2CaYydYXiF10J5AtfCCTzpZ7LYzPbhePlCUadU+ShpKvY8Ca3oDu4t0owMfSIPFsP6ixV7hJEHSW0i8dN3nR6j9ZboPPwGX2ZX+0a1J9xkZ/+qI9941Xr3LhfPM4h5YqxPuQpEMTjPBGhUxB3d0YQezqm+Y8Kd089PSSYjR+dyZg5Oaf2ixzzbdJ8Zh8+RxXlSZepxxOkHfpk38h/ktxKnRUMhZds9W/QvHVb7xT52WfW3x0cYzzsp0gQe3Mo557wuBfk2ab7y1W01O63H3rU90PQdsxtCOJ9V3mO2MkThP6XyJGPendsJfMfzT3sEDvLEzSofu6pHsbHvmkP/zWiK7YqiDtb9cN/8/nkF9rdmfig8hW1pzx04yPl8H9HXtT/RjBxpfiVoHWv4qWgfenB4lYeeniV+ujNbsbDY9+o5w8xkFz3475RN+vB3pkvMfGE+dyjJcvE+dm3xBfVS9SXNzO/NTL4mrxnkXLcN9GqHyXaixHWC8zOjfPgHNB25f3bn+lX22L6Hi81/YXD7xnHE8zR722XLX6uGPeCOtkHvkvOE/18VW7mGHF+ov/IIOMmSvMYb+HasqlzdoNzSfW2c1729VuUYx/Mg3veKYh+zL24Ytn7WJN5IS/vDa9RsUoQ91aj98v/U2hshv8j3JlT5Jh3oXB8r7sp1zz4nnivuCv2h35yxB5z/cu6A8mfrDdTx76Rh3NEvawri5DzzhDPzCXiXFc/cuT7xngyr38q9/q8uAYAAA=="},"shape":[215],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1WUT0hUURTGn/3xz6CVNkRaTa8i08rEXhFm0zyVGkyhRgkKZjGLmGUI1UZaTAsXoTDrR4QDLtrEELUxiBqGIIiHq0haRDPln2wiTTMty+k7370P7G1+fveee853zz2jYRgZt+eMbZAnhbF4vEVpt9UuFosv3MpO0Snnao/Qtvr6lH6qWXtZrVsRIc6fF2Zct01x+JLWvTpft2hEtAtTjnNKaYN1oZu1toTw1WKXSF3rqN5vEKLOQaE5WNiv1z3/V0Qjk+evS+3X2pqshzrHhfDZKrStJyT+CittddgbpM70CbWe4Xncv1fvd+v7dGjN8/DLvPDXJESdRu2/QfOIOufSfyK7tI8M+vYKzXR4lzAXGasV4uM6vkNCLz7VH9wtOhXO7xCiD9uFuM82xvnTVUJ8pVI3UYiUUjdGNwvha+N6bfsmqkUjP+tB01cmMGgKPT+xscBOxvnTe8hChPWRt1rXqRSNeBLvFtR9PCsafeE7xpJZda/GqHee9zbTrw7oOPbHmBhlH3DfGq6PBap0/9gPzi/ntOcC4xzntBDfYaEZTfIe8Mf8yOcXIh/7he+YEL7qhfDNeJyrE6IfrJtZauC9bevGOVVv+KJo7HAueC/6cOkLmnOayN5i/7y+gawLn1s1KzT5Lug33wVxJN6hRIh+F0N4R9xjNSS6EFkhg75lvb4sGvczGB/0FfX+6vp95F2SdcwZCV0m8Zgbzod3zs4PrIRwn+Lb0R8SB1+LQszbAs/F4wuy/2F8eY762c0C8w4WZhk/Usd1890411PXa2aE9t32SWEi8zovNNbe5LieHyDN5vdkbEvTRzKZZT7U/a3j/uh1dY9o8n8f19qUj8f3WQ8+p3n+3kvWRT8/CeGPNEvvTHG9/KHyNVtPjT7MrO8b5mBF60VhpqvyG/OYj74w/9wD1rFjU5+FmCO+A3yXa6p38af5fuyn6u+85EM99ivVOfSVDOdV3s4h5vN8Jp6PsC/42Kfc7RD9Yp5VHccps5EP59d4Lpr8KUR+vh/qVsi+9/80N9qvfh+Gwd8b+sXfDfoeEGLevHnl/xPk8+l1zg2+TULMEefUuzfy/mX9dPgX/en38+YW+dX8aeL9OWd4H/pEv5W2LGrk+U7/rjsf+genoROZuAYAAA=="},"shape":[215],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/31UPWtUURB9gjYBxUotLCwNNkKEFFH0H0Sx0E7sUlmoWCzERBITG1GwiKsBo5uvTSEsBDUk7I1gYQpRCYKCsoaAWyz4FXU1uj7PmfvO8+4zsTrMvJk5M2fm3TiKopH8jIsT/BnH8a3AXt0QRfOwf8Hf8x9EetSbX3DMd0E+/dGNGSdUPYSBx8eTT7w5+K8Edtaf/d5A/IkHd9P8GA6Hutl+1+PT3IpvID+cM/7t9cjWk53VJ6uj+s1id6K36dI6Z/0OYW7Qxe0t9w0PAuVfL/4H4qq5abcKrAClB/M7oUsbyr/NjbpZq19M8Wti+7xR4xmslVId2dbH3XO2N6L6EY/6ki2+ewlvO/KOg/888Cr20Q1/uO+18jm3+MrW30KTDuxPPNIDYVa3F4mH2hYt3/iAvGva1Fe6ql+6v2Mu5pNHfNSvmntkeZdqD1M9PG/Z/HvB0wMcyb9KbeV73n/rMX+xMN+kZwfmDfXsC+bTnNTxMHQUvrR+i7avm0Dt8Q3sCvbMvGOIV76+Ky+7d583ne5feaq/A/zD4NGdfEb9ZfAIq7A/Nfz9DJ26Y/MN1G67L/DPni1Y3T7Y9J/u+ovUeQl1VHcF9tN6wfp+Agz5Tm6dTOqW3Dd8PxrMp/42o/7Uzim7/zPXJl0d2Hl5wgHiPYPjhts3jptemy6MOf43K+hbfr4zrUEc8ztaJtx7IPciXun4Gv6L24qmA/tj/gHEy2b/y/gfGVfHncn2epTSvan/d4jjXtU/9Tq3xhzqX/rK9vvy7zTfkQ+otwT+rF67UPc6vleMz99vf+256bsPd83vw4k/ip5ZP7Ujj90W+PvxPzBuAMg9vcA9+3spN71ffLe4j/3JO8Y79/v27xP7ytq+bim5l1K67/AeuQfd3R/ys+BruAYAAA=="},"shape":[215],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[215],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p38013","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p38014"}}},"glyph":{"type":"object","name":"Scatter","id":"p38009","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p38010","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p38011","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p38020","attributes":{"data_source":{"id":"p37958"},"view":{"type":"object","name":"CDSView","id":"p38021","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p38022"}}},"glyph":{"type":"object","name":"Scatter","id":"p38017","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p38018","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p38019","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p37970","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p37997"},{"type":"object","name":"WheelZoomTool","id":"p37998","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p37999","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p38000","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p38006","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p38005","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p38007"},{"type":"object","name":"SaveTool","id":"p38008"},{"type":"object","name":"HoverTool","id":"p38077","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p37992","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p37993","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p37994"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p37995"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p37973","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p37974","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p37975","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p37976","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p37977","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p37978","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p37979","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p37980","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p37981","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p37982","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p37983","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p37984","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p37985","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p37986"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p37989","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p37988","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p37987","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p37990"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p37991","attributes":{"axis":{"id":"p37973"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p37996","attributes":{"dimension":1,"axis":{"id":"p37992"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p38015","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p38016","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p38012"}]}},{"type":"object","name":"LegendItem","id":"p38023","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p38020"}]}}]}}]}},{"type":"object","name":"Figure","id":"p38024","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p37963"},"y_range":{"type":"object","name":"DataRange1d","id":"p38026"},"x_scale":{"type":"object","name":"LinearScale","id":"p38033"},"y_scale":{"type":"object","name":"LinearScale","id":"p38034"},"title":{"type":"object","name":"Title","id":"p38031"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p38074","attributes":{"data_source":{"id":"p37958"},"view":{"type":"object","name":"CDSView","id":"p38075","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p38076"}}},"glyph":{"type":"object","name":"Scatter","id":"p38071","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p38072","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p38073","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p38032","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p38059"},{"type":"object","name":"WheelZoomTool","id":"p38060","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p38061","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p38062","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p38068","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p38067","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p38069"},{"type":"object","name":"SaveTool","id":"p38070"},{"type":"object","name":"HoverTool","id":"p38078","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p38054","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p38055","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p38056"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p38057"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p38035","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p38036","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p38037","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p38038","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p38039","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p38040","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p38041","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p38042","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p38043","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p38044","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p38045","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p38046","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p38047","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p38048"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p38051","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p38050","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p38049","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p38052"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p38053","attributes":{"axis":{"id":"p38035"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p38058","attributes":{"dimension":1,"axis":{"id":"p38054"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"2f96162b-2585-4f87-9f36-d73296b49c61","roots":{"p38079":"bdc57097-da6a-4abd-8aff-3d31fffd143a"},"root_ids":["p38079"]}];
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