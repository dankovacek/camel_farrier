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
    
    
    const element = document.getElementById("cc41c7c9-7ba6-4dab-90bf-3138cfdc853f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc41c7c9-7ba6-4dab-90bf-3138cfdc853f' but no matching script tag was found.")
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
                  const docs_json = '{"6895d906-5fd4-4195-85df-d3d1bf800773":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p487767","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p487768"}}},"roots":[{"type":"object","name":"Column","id":"p487931","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p487928","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p487927","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p487920","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p487791"},{"type":"object","name":"PanTool","id":"p487867"}]}},{"type":"object","name":"ToolProxy","id":"p487921","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p487792","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p487868","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p487922","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p487793","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p487794","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p487800","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p487799","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p487869","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p487870","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p487876","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p487875","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p487923","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p487801"},{"type":"object","name":"ResetTool","id":"p487877"}]}},{"type":"object","name":"SaveTool","id":"p487924"},{"type":"object","name":"ToolProxy","id":"p487925","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p487843","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p487926","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p487919","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p487769","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p487770"},"y_range":{"type":"object","name":"DataRange1d","id":"p487771"},"x_scale":{"type":"object","name":"LinearScale","id":"p487779"},"y_scale":{"type":"object","name":"LogScale","id":"p487780"},"title":{"type":"object","name":"Title","id":"p487772","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p487809","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487803","attributes":{"selected":{"type":"object","name":"Selection","id":"p487804","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487805"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VSS0xTQRR9GCWkGOTzykdLKR+hfoDCA0KUMtcaxIURixqjqVo3VReaEpRFw4KIJXGBFTCSGmOQCsRYGhaidYGWqpHEF9BgaJBAAREiBUHCox+KdWYwcTYnZ2bunXPumS0Mo9XNctDkFAa8w/mgMTlPN7YqQOSy3FusVQDDMA7+mAJ0Ot2sgaVcq9PlQoNHXTyekUv2MyOsORDGMMBxOfDQbH4tNWbDeZOz8MXAPpgysNdj6/fCNMaDbjmwtvLUMX8W6dNmNmdBpMvy+UlZFoRCobc8nwketf3xUlcm1fG9YzfkcxwncmUQPdG9nelQgHl7QTqpn5ybl4GtfOqATyUjHK9kGOR5vuaNBGvhTkZlS4i+Tsm5XbCA+66F7yT7cVZJEtHRf6o/kbx3IZiYSOrrnEICiHHDizUJ5F5102I8VNqlHXd64kl9qbsiHlKMnrySPjHR0XJIK6b+8yLEpM9E722W6Ow5Diy8E+SaB6ks6au1S1kyl6TRwThQilyH3RVx9N259Vhy71HJ/lhQ26XGsSsx5L7M6Ikm6JAad4BPrhn6cC0KCjWmW7aX2+EE1nN1YhtcxnlsfGXInG5GZjDgsuiVzZ9C6JtFPz5q/YOwv7AflzbQpq8gOjpluP+8O4iqlKIzqtIgkho9MVXWdYTtBorL1hHW53/2O4CcgjzY3hwgdTjnANqjMU2vpATQXfw/VN1+hP0ecVf46bld6kdP9UrRqy8+wh0870M4x9CIhXK8KNaxNi+qZW0fG7q8hOPZemld2sYa4TKN6T9iH8kz9ZS36ZUUJw3sGsJ5DKeNCWgzDwHhcu/WAoH2dwqrFD3qVVSEc29sXflXRxGfLxMfqrMNy4Q7BPkywv+qmrUtIZyXoq/yF5mLK9y8gEYs+r6fQ/PovSCXGIrm6P0bLTPoL3RzCIsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487810","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487811"}}},"glyph":{"type":"object","name":"Line","id":"p487806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p487808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p487818","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487812","attributes":{"selected":{"type":"object","name":"Selection","id":"p487813","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487814"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VSS0xTQRR9GCWkGOTzykdLKR+hfoDCA0KUMtcaxIURixqjqVo3VReaEpRFw4KIJXGBFTCSGmOQCsRYGhaidYGWqpHEF9BgaJBAAREiBUHCox+KdWYwcTYnZ2bunXPumS0Mo9XNctDkFAa8w/mgMTlPN7YqQOSy3FusVQDDMA7+mAJ0Ot2sgaVcq9PlQoNHXTyekUv2MyOsORDGMMBxOfDQbH4tNWbDeZOz8MXAPpgysNdj6/fCNMaDbjmwtvLUMX8W6dNmNmdBpMvy+UlZFoRCobc8nwketf3xUlcm1fG9YzfkcxwncmUQPdG9nelQgHl7QTqpn5ybl4GtfOqATyUjHK9kGOR5vuaNBGvhTkZlS4i+Tsm5XbCA+66F7yT7cVZJEtHRf6o/kbx3IZiYSOrrnEICiHHDizUJ5F5102I8VNqlHXd64kl9qbsiHlKMnrySPjHR0XJIK6b+8yLEpM9E722W6Ow5Diy8E+SaB6ks6au1S1kyl6TRwThQilyH3RVx9N259Vhy71HJ/lhQ26XGsSsx5L7M6Ikm6JAad4BPrhn6cC0KCjWmW7aX2+EE1nN1YhtcxnlsfGXInG5GZjDgsuiVzZ9C6JtFPz5q/YOwv7AflzbQpq8gOjpluP+8O4iqlKIzqtIgkho9MVXWdYTtBorL1hHW53/2O4CcgjzY3hwgdTjnANqjMU2vpATQXfw/VN1+hP0ecVf46bld6kdP9UrRqy8+wh0870M4x9CIhXK8KNaxNi+qZW0fG7q8hOPZemld2sYa4TKN6T9iH8kz9ZS36ZUUJw3sGsJ5DKeNCWgzDwHhcu/WAoH2dwqrFD3qVVSEc29sXflXRxGfLxMfqrMNy4Q7BPkywv+qmrUtIZyXoq/yF5mLK9y8gEYs+r6fQ/PovSCXGIrm6P0bLTPoL3RzCIsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487819","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487820"}}},"glyph":{"type":"object","name":"Line","id":"p487815","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487816","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p487817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p487829","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487823","attributes":{"selected":{"type":"object","name":"Selection","id":"p487824","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487825"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UaYhNYRzG1SQiTUKahGFmmBlmvbNv97n7fu+5595zziU1iWSJDygUig98wAc++EIyySSTTDLJJJElSyQSiQZZsjWUJUs47/t/fl9u93bOuzy/5397exUjXv3RO+rdrfnB7/+8hw8piiC/j8PGDYqJkOeL0X9cMRny3BQc2K+YxuenY5umhO/NwOpVipl8fzZOakq5zhz0HVXM5XplOKgp57oV2LdXMY/rz8dOTSX3qcKWzYpq7rcA6zQLuW8NlmtquX8dajT1PEc9KjUNPE8DyjSNPFcjZmk8PJ8HJZomnrMJUzXNPG8zijUtPHcLJmhaef5WjNW08R5tGKNp533a8eeXop336sD3b4oO3q8TXz4rOnnPLnz6oOjifbvx9o2im/fuwcsXih7e34unGi9zAD6q19eAeUDWeQfm4pP1VviYj0/WfeVjTn5Zf6mfefllnxE/cwvgmdpuSYD5BbBY8STAHIN4/MjFCTLPIGzL5WGQuYbw4L6LGWK+IRiKeyHmHMbdOy6pMPMOI6G4HWbuEdy84RKNMP8IworrEXqI4uoVl0CUPqLw+1wuR+klhouKnhj9xNCluBCjpxiGz7u0x+krjlbFuTi9xXFW0ZSgvwQ8jS5nEvSYwOBpl7okfSbFy6kkvSYxoMalOkW/KfFyIkXPKehxrEjTdxrlqr7H0vSeFi+lGfrPiJcjGfYgI/lNMtgHQ3JMGuyFIXnuMdgPQ3K9ZbAnhuQ7Psu+ZCXnSJa9yUreu7LsT1Zyv5Zlj7KSf5HJPpniwW+yV6b42GGyX6Z4uWSyZ6b4+WuybzlsV38/3Tn2Lie+tubYvxx+q/EazrGHOfH3M8c+5sVjW569zIvPTXn2My9eh/LsaR5Dyu/XPPtqQf9deiz21oLS3bjeYn8t8T5osceW+B+12GdbelBrs9e2eFlrs9+2eBmw2XNbvLy32XdHvFQ57L0jXlY67L8jXvodzoEjXl47nIeCeCkvcC4K4mVZgfNREC99Bc5JQbw8L3BeFuE/KaGs9WAGAAA="},"shape":[204],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/43TPWxSURQH8CuDA4nf+FE/XklrpVRtVWbCi8awuLAzMDF3cGJiYdEYBgfzhiYYdgbjwFbyFh3e4GRXSExNxEhjfVqt+Pyf/z20PMvgW36cc8+9795zHwljKtXtnJug91xjTMubu2v17ojG1GNWqlXGveBRTMzTOkNRt3bgMWPcXI4xnjU3iqLNIFjV8VXXjh+Kopbn3dbxibd0/k2dv6LzViSP+qzGywfa92R0PCb2l9G6jK5344h23Ul+SdeheJa0/rrE6cZwUcdpPf9kUdbvhcuMkVkQ0503aRH9o5XmfVr3Q0fEc010k1tXxUrTpyZbpq31PO2316+IOAfFQ+v55GXqh3NipevQfi1FW8XBJRHrUYxTzLP64UXGas9pMEa9zeeTFPu6MC36z3gifk7Gz0u+X+pSjFN8DzZfS1E8tBcEKcbZckzUM0Y/KfY9UwzZfNM/J3XuoEbTnSLFfIrznaXDEkWemq32GRF9pchT3O9pja1O4xRjFe85KTHu7YTmrUFwnPPLTYr7S9DiwIh4H8V7KO6JYp2oAOupTlTAd4T6PxJjPsX9jwv4vuc7xTHr/PD3TIclm1fxHsZYf1/E/vdlffSbMfpM8T1QvPfXtOgL43/FvpjH/in69ZPzPI9ivxT3QHF/MbH/Pcnj/o+Kc0bv23tyXoo63BvFExP9+sHxae35mMf5YuKcjPF9fuf+ys3/EudnHc4dE+dnPBF9CCXG/yUm+sIY/bD5rkPRh28xhyUbi/Ycu7r+11li/o7O39F+Mcb3SXH/h6KdmxujkdTNv9oYse7Ziy+se/nQujv+LHHrwVPaf7cwZN3rt59Y5zQ+Ms7lKPqyzfzj5x8KfwEIIj+2YAYAAA=="},"shape":[204],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487830","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487831"}}},"glyph":{"type":"object","name":"Line","id":"p487826","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p487828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p487839","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487833","attributes":{"selected":{"type":"object","name":"Selection","id":"p487834","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487835"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p487840","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487841"}}},"glyph":{"type":"object","name":"Line","id":"p487836","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487837","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p487838","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p487778","attributes":{"tools":[{"id":"p487791"},{"id":"p487792"},{"id":"p487793"},{"id":"p487801"},{"type":"object","name":"SaveTool","id":"p487802"},{"id":"p487843"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p487786","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p487787","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p487788"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p487789"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p487781","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p487782","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p487783"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p487784"}}}],"center":[{"type":"object","name":"Grid","id":"p487785","attributes":{"axis":{"id":"p487781"}}},{"type":"object","name":"Grid","id":"p487790","attributes":{"dimension":1,"axis":{"id":"p487786"}}},{"type":"object","name":"Legend","id":"p487821","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p487822","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p487818"}]}},{"type":"object","name":"LegendItem","id":"p487832","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p487829"}]}},{"type":"object","name":"LegendItem","id":"p487842","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p487839"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p487844","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p487854","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p487846"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p487855"},"y_scale":{"type":"object","name":"LinearScale","id":"p487856"},"title":{"type":"object","name":"Title","id":"p487847","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p487885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487879","attributes":{"selected":{"type":"object","name":"Selection","id":"p487880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487881"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKQjtsOfHKftbMmZa8rG/tn88p1urrEHUIDQ1NTUvTdVi79dopa1kFB+Fb3idq7go7wPSpek7yCTv90x7INzjY/NPeTTzWRMLpuz0AYPjm3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487887"}}},"glyph":{"type":"object","name":"Line","id":"p487882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p487884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p487894","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487888","attributes":{"selected":{"type":"object","name":"Selection","id":"p487889","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487890"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKQjtsOfHKftbMmZa8rG/tn88p1urrEHUIDQ1NTUvTdVi79dopa1kFB+Fb3idq7go7wPSpek7yCTv90x7INzjY/NPeTTzWRMLpuz0AYPjm3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487895","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487896"}}},"glyph":{"type":"object","name":"Line","id":"p487891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p487893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p487905","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487899","attributes":{"selected":{"type":"object","name":"Selection","id":"p487900","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487901"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKQjtsOfHKftbMmZa8rG/tn88p1urrEHUIDQ1NTUvTdVi79dopa1kFB+Fb3idq7go7wPSpek7yCTv90x7INzjY/NPeTTzWRMLpuz0AYPjm3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487906","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487907"}}},"glyph":{"type":"object","name":"Line","id":"p487902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p487904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p487915","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487909","attributes":{"selected":{"type":"object","name":"Selection","id":"p487910","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487911"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p487916","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487917"}}},"glyph":{"type":"object","name":"Line","id":"p487912","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487913","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p487914","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p487853","attributes":{"tools":[{"id":"p487867"},{"id":"p487868"},{"id":"p487869"},{"id":"p487877"},{"type":"object","name":"SaveTool","id":"p487878"},{"id":"p487919"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p487862","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p487863","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p487864"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p487865"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p487857","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p487858"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p487859"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p487860"}}}],"center":[{"type":"object","name":"Grid","id":"p487861","attributes":{"axis":{"id":"p487857"}}},{"type":"object","name":"Grid","id":"p487866","attributes":{"dimension":1,"axis":{"id":"p487862"}}},{"type":"object","name":"Legend","id":"p487897","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p487898","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p487894"}]}},{"type":"object","name":"LegendItem","id":"p487908","attributes":{"label":{"type":"value","value":"Median Year (1995)"},"renderers":[{"id":"p487905"}]}},{"type":"object","name":"LegendItem","id":"p487918","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p487915"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p487930","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"6895d906-5fd4-4195-85df-d3d1bf800773","roots":{"p487931":"cc41c7c9-7ba6-4dab-90bf-3138cfdc853f"},"root_ids":["p487931"]}];
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