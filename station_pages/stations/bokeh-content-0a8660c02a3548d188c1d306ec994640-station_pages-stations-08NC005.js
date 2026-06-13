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
    
    
    const element = document.getElementById("aed3111b-c0e6-4d4c-800c-90fa0c654417");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aed3111b-c0e6-4d4c-800c-90fa0c654417' but no matching script tag was found.")
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
                  const docs_json = '{"283f2508-f6d3-4a32-9b2f-b1f626f8d3de":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p488302","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p488303"}}},"roots":[{"type":"object","name":"Column","id":"p488466","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p488463","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p488462","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p488455","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p488326"},{"type":"object","name":"PanTool","id":"p488402"}]}},{"type":"object","name":"ToolProxy","id":"p488456","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p488327","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p488403","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p488457","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p488328","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p488329","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p488335","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p488334","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p488404","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p488405","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p488411","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p488410","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p488458","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p488336"},{"type":"object","name":"ResetTool","id":"p488412"}]}},{"type":"object","name":"SaveTool","id":"p488459"},{"type":"object","name":"ToolProxy","id":"p488460","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p488378","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p488461","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p488454","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p488304","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p488305"},"y_range":{"type":"object","name":"DataRange1d","id":"p488306"},"x_scale":{"type":"object","name":"LinearScale","id":"p488314"},"y_scale":{"type":"object","name":"LogScale","id":"p488315"},"title":{"type":"object","name":"Title","id":"p488307","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p488344","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488338","attributes":{"selected":{"type":"object","name":"Selection","id":"p488339","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488340"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VSS0xTQRR9GCWkGOTzykdLKR+hfoDCA0KUMtcaxIURixqjqVo3VReaEpRFw4KIJXGBFTCSGmOQCsRYGhaidYGWqpHEF9BgaJBAAREiBUHCox+KdWYwcTYnZ2bunXPumS0Mo9XNctDkFAa8w/mgMTlPN7YqQOSy3FusVQDDMA7+mAJ0Ot2sgaVcq9PlQoNHXTyekUv2MyOsORDGMMBxOfDQbH4tNWbDeZOz8MXAPpgysNdj6/fCNMaDbjmwtvLUMX8W6dNmNmdBpMvy+UlZFoRCobc8nwketf3xUlcm1fG9YzfkcxwncmUQPdG9nelQgHl7QTqpn5ybl4GtfOqATyUjHK9kGOR5vuaNBGvhTkZlS4i+Tsm5XbCA+66F7yT7cVZJEtHRf6o/kbx3IZiYSOrrnEICiHHDizUJ5F5102I8VNqlHXd64kl9qbsiHlKMnrySPjHR0XJIK6b+8yLEpM9E722W6Ow5Diy8E+SaB6ks6au1S1kyl6TRwThQilyH3RVx9N259Vhy71HJ/lhQ26XGsSsx5L7M6Ikm6JAad4BPrhn6cC0KCjWmW7aX2+EE1nN1YhtcxnlsfGXInG5GZjDgsuiVzZ9C6JtFPz5q/YOwv7AflzbQpq8gOjpluP+8O4iqlKIzqtIgkho9MVXWdYTtBorL1hHW53/2O4CcgjzY3hwgdTjnANqjMU2vpATQXfw/VN1+hP0ecVf46bld6kdP9UrRqy8+wh0870M4x9CIhXK8KNaxNi+qZW0fG7q8hOPZemld2sYa4TKN6T9iH8kz9ZS36ZUUJw3sGsJ5DKeNCWgzDwHhcu/WAoH2dwqrFD3qVVSEc29sXflXRxGfLxMfqrMNy4Q7BPkywv+qmrUtIZyXoq/yF5mLK9y8gEYs+r6fQ/PovSCXGIrm6P0bLTPoL3RzCIsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p488345","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488346"}}},"glyph":{"type":"object","name":"Line","id":"p488341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p488343","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p488353","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488347","attributes":{"selected":{"type":"object","name":"Selection","id":"p488348","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488349"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VSS0xTQRR9GCWkGOTzykdLKR+hfoDCA0KUMtcaxIURixqjqVo3VReaEpRFw4KIJXGBFTCSGmOQCsRYGhaidYGWqpHEF9BgaJBAAREiBUHCox+KdWYwcTYnZ2bunXPumS0Mo9XNctDkFAa8w/mgMTlPN7YqQOSy3FusVQDDMA7+mAJ0Ot2sgaVcq9PlQoNHXTyekUv2MyOsORDGMMBxOfDQbH4tNWbDeZOz8MXAPpgysNdj6/fCNMaDbjmwtvLUMX8W6dNmNmdBpMvy+UlZFoRCobc8nwketf3xUlcm1fG9YzfkcxwncmUQPdG9nelQgHl7QTqpn5ybl4GtfOqATyUjHK9kGOR5vuaNBGvhTkZlS4i+Tsm5XbCA+66F7yT7cVZJEtHRf6o/kbx3IZiYSOrrnEICiHHDizUJ5F5102I8VNqlHXd64kl9qbsiHlKMnrySPjHR0XJIK6b+8yLEpM9E722W6Ow5Diy8E+SaB6ks6au1S1kyl6TRwThQilyH3RVx9N259Vhy71HJ/lhQ26XGsSsx5L7M6Ikm6JAad4BPrhn6cC0KCjWmW7aX2+EE1nN1YhtcxnlsfGXInG5GZjDgsuiVzZ9C6JtFPz5q/YOwv7AflzbQpq8gOjpluP+8O4iqlKIzqtIgkho9MVXWdYTtBorL1hHW53/2O4CcgjzY3hwgdTjnANqjMU2vpATQXfw/VN1+hP0ecVf46bld6kdP9UrRqy8+wh0870M4x9CIhXK8KNaxNi+qZW0fG7q8hOPZemld2sYa4TKN6T9iH8kz9ZS36ZUUJw3sGsJ5DKeNCWgzDwHhcu/WAoH2dwqrFD3qVVSEc29sXflXRxGfLxMfqrMNy4Q7BPkywv+qmrUtIZyXoq/yF5mLK9y8gEYs+r6fQ/PovSCXGIrm6P0bLTPoL3RzCIsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p488354","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488355"}}},"glyph":{"type":"object","name":"Line","id":"p488350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p488352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p488364","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488358","attributes":{"selected":{"type":"object","name":"Selection","id":"p488359","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488360"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UaYhNYRzG1SQiTUKahGFmmBlmvbNv97n7fu+5595zziU1iWSJDygUig98wAc++EIyySSTTDLJJJElSyQSiQZZsjWUJUs47/t/fl9u93bOuzy/5397exUjXv3RO+rdrfnB7/+8hw8piiC/j8PGDYqJkOeL0X9cMRny3BQc2K+YxuenY5umhO/NwOpVipl8fzZOakq5zhz0HVXM5XplOKgp57oV2LdXMY/rz8dOTSX3qcKWzYpq7rcA6zQLuW8NlmtquX8dajT1PEc9KjUNPE8DyjSNPFcjZmk8PJ8HJZomnrMJUzXNPG8zijUtPHcLJmhaef5WjNW08R5tGKNp533a8eeXop336sD3b4oO3q8TXz4rOnnPLnz6oOjifbvx9o2im/fuwcsXih7e34unGi9zAD6q19eAeUDWeQfm4pP1VviYj0/WfeVjTn5Zf6mfefllnxE/cwvgmdpuSYD5BbBY8STAHIN4/MjFCTLPIGzL5WGQuYbw4L6LGWK+IRiKeyHmHMbdOy6pMPMOI6G4HWbuEdy84RKNMP8IworrEXqI4uoVl0CUPqLw+1wuR+klhouKnhj9xNCluBCjpxiGz7u0x+krjlbFuTi9xXFW0ZSgvwQ8jS5nEvSYwOBpl7okfSbFy6kkvSYxoMalOkW/KfFyIkXPKehxrEjTdxrlqr7H0vSeFi+lGfrPiJcjGfYgI/lNMtgHQ3JMGuyFIXnuMdgPQ3K9ZbAnhuQ7Psu+ZCXnSJa9yUreu7LsT1Zyv5Zlj7KSf5HJPpniwW+yV6b42GGyX6Z4uWSyZ6b4+WuybzlsV38/3Tn2Lie+tubYvxx+q/EazrGHOfH3M8c+5sVjW569zIvPTXn2My9eh/LsaR5Dyu/XPPtqQf9deiz21oLS3bjeYn8t8T5osceW+B+12GdbelBrs9e2eFlrs9+2eBmw2XNbvLy32XdHvFQ57L0jXlY67L8jXvodzoEjXl47nIeCeCkvcC4K4mVZgfNREC99Bc5JQbw8L3BeFuE/KaGs9WAGAAA="},"shape":[204],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/43TPWxSURQH8CuDA4nf+FE/XklrpVRtVWbCi8awuLAzMDF3cGJiYdEYBgfzhiYYdgbjwFbyFh3e4GRXSExNxEhjfVqt+Pyf/z20PMvgW36cc8+9795zHwljKtXtnJug91xjTMubu2v17ojG1GNWqlXGveBRTMzTOkNRt3bgMWPcXI4xnjU3iqLNIFjV8VXXjh+Kopbn3dbxibd0/k2dv6LzViSP+qzGywfa92R0PCb2l9G6jK5344h23Ul+SdeheJa0/rrE6cZwUcdpPf9kUdbvhcuMkVkQ0503aRH9o5XmfVr3Q0fEc010k1tXxUrTpyZbpq31PO2316+IOAfFQ+v55GXqh3NipevQfi1FW8XBJRHrUYxTzLP64UXGas9pMEa9zeeTFPu6MC36z3gifk7Gz0u+X+pSjFN8DzZfS1E8tBcEKcbZckzUM0Y/KfY9UwzZfNM/J3XuoEbTnSLFfIrznaXDEkWemq32GRF9pchT3O9pja1O4xRjFe85KTHu7YTmrUFwnPPLTYr7S9DiwIh4H8V7KO6JYp2oAOupTlTAd4T6PxJjPsX9jwv4vuc7xTHr/PD3TIclm1fxHsZYf1/E/vdlffSbMfpM8T1QvPfXtOgL43/FvpjH/in69ZPzPI9ivxT3QHF/MbH/Pcnj/o+Kc0bv23tyXoo63BvFExP9+sHxae35mMf5YuKcjPF9fuf+ys3/EudnHc4dE+dnPBF9CCXG/yUm+sIY/bD5rkPRh28xhyUbi/Ycu7r+11li/o7O39F+Mcb3SXH/h6KdmxujkdTNv9oYse7Ziy+se/nQujv+LHHrwVPaf7cwZN3rt59Y5zQ+Ms7lKPqyzfzj5x8KfwEIIj+2YAYAAA=="},"shape":[204],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p488365","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488366"}}},"glyph":{"type":"object","name":"Line","id":"p488361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p488363","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p488374","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488368","attributes":{"selected":{"type":"object","name":"Selection","id":"p488369","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488370"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p488375","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488376"}}},"glyph":{"type":"object","name":"Line","id":"p488371","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p488373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p488313","attributes":{"tools":[{"id":"p488326"},{"id":"p488327"},{"id":"p488328"},{"id":"p488336"},{"type":"object","name":"SaveTool","id":"p488337"},{"id":"p488378"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p488321","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p488322","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p488323"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p488324"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p488316","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p488317","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p488318"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p488319"}}}],"center":[{"type":"object","name":"Grid","id":"p488320","attributes":{"axis":{"id":"p488316"}}},{"type":"object","name":"Grid","id":"p488325","attributes":{"dimension":1,"axis":{"id":"p488321"}}},{"type":"object","name":"Legend","id":"p488356","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p488357","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p488353"}]}},{"type":"object","name":"LegendItem","id":"p488367","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p488364"}]}},{"type":"object","name":"LegendItem","id":"p488377","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p488374"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p488379","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p488389","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p488381"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p488390"},"y_scale":{"type":"object","name":"LinearScale","id":"p488391"},"title":{"type":"object","name":"Title","id":"p488382","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p488420","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488414","attributes":{"selected":{"type":"object","name":"Selection","id":"p488415","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488416"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKQjtsOfHKftbMmZa8rG/tn88p1urrEHUIDQ1NTUvTdVi79dopa1kFB+Fb3idq7go7wPSpek7yCTv90x7INzjY/NPeTTzWRMLpuz0AYPjm3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p488421","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488422"}}},"glyph":{"type":"object","name":"Line","id":"p488417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488418","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p488419","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p488429","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488423","attributes":{"selected":{"type":"object","name":"Selection","id":"p488424","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488425"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKQjtsOfHKftbMmZa8rG/tn88p1urrEHUIDQ1NTUvTdVi79dopa1kFB+Fb3idq7go7wPSpek7yCTv90x7INzjY/NPeTTzWRMLpuz0AYPjm3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p488430","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488431"}}},"glyph":{"type":"object","name":"Line","id":"p488426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p488428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p488440","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488434","attributes":{"selected":{"type":"object","name":"Selection","id":"p488435","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488436"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKQjtsOfHKftbMmZa8rG/tn88p1urrEHUIDQ1NTUvTdVi79dopa1kFB+Fb3idq7go7wPSpek7yCTv90x7INzjY/NPeTTzWRMLpuz0AYPjm3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p488441","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488442"}}},"glyph":{"type":"object","name":"Line","id":"p488437","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488438","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p488439","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p488450","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p488444","attributes":{"selected":{"type":"object","name":"Selection","id":"p488445","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p488446"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p488451","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p488452"}}},"glyph":{"type":"object","name":"Line","id":"p488447","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p488448","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p488449","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p488388","attributes":{"tools":[{"id":"p488402"},{"id":"p488403"},{"id":"p488404"},{"id":"p488412"},{"type":"object","name":"SaveTool","id":"p488413"},{"id":"p488454"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p488397","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p488398","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p488399"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p488400"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p488392","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p488393"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p488394"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p488395"}}}],"center":[{"type":"object","name":"Grid","id":"p488396","attributes":{"axis":{"id":"p488392"}}},{"type":"object","name":"Grid","id":"p488401","attributes":{"dimension":1,"axis":{"id":"p488397"}}},{"type":"object","name":"Legend","id":"p488432","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p488433","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p488429"}]}},{"type":"object","name":"LegendItem","id":"p488443","attributes":{"label":{"type":"value","value":"Median Year (1995)"},"renderers":[{"id":"p488440"}]}},{"type":"object","name":"LegendItem","id":"p488453","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p488450"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p488465","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"283f2508-f6d3-4a32-9b2f-b1f626f8d3de","roots":{"p488466":"aed3111b-c0e6-4d4c-800c-90fa0c654417"},"root_ids":["p488466"]}];
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