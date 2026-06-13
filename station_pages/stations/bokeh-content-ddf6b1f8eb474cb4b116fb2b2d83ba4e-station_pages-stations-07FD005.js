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
    
    
    const element = document.getElementById("e21794d6-c9eb-414b-9583-5226db28f0aa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e21794d6-c9eb-414b-9583-5226db28f0aa' but no matching script tag was found.")
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
                  const docs_json = '{"43e34ebf-1087-45e7-ad8c-03b78dffa239":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p66694","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p66695"}}},"roots":[{"type":"object","name":"Column","id":"p66858","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p66855","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p66854","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p66847","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p66718"},{"type":"object","name":"PanTool","id":"p66794"}]}},{"type":"object","name":"ToolProxy","id":"p66848","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p66719","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p66795","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p66849","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p66720","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p66721","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p66727","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p66726","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p66796","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p66797","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p66803","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p66802","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p66850","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p66728"},{"type":"object","name":"ResetTool","id":"p66804"}]}},{"type":"object","name":"SaveTool","id":"p66851"},{"type":"object","name":"ToolProxy","id":"p66852","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p66770","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p66853","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p66846","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p66696","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p66697"},"y_range":{"type":"object","name":"DataRange1d","id":"p66698"},"x_scale":{"type":"object","name":"LinearScale","id":"p66706"},"y_scale":{"type":"object","name":"LogScale","id":"p66707"},"title":{"type":"object","name":"Title","id":"p66699","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p66736","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66730","attributes":{"selected":{"type":"object","name":"Selection","id":"p66731","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66732"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2VSSUwTURjGKCgDAkKjcaGFGGACsjTAydT/ERIhESJoUIM1bFJr6AGUeMCiiDYGE1lClIyJESkeNNDIki4IFAoWtbUQtqEiyipUMKxFkGV8j4MX5/Jn3v//3/aegwP5QpGWr4iO5IcgHV8RpMgKQiKKjU73CEASieT04wp/xDCMr/isP+KpYoQj1X5IFTPWlH/FF7mwyrDSyiNoPI+nziryQp/N5jj18gHUYac72ys8ULaIuhjCuZP/Se8AN6TEBzaNK5nbTCp2Rqu0ODQpzAlhEZUM44hyRFRM9fc9qNRgL0ir303mzLdad6HftFifzjmg81p+5Ix1GyoYRmj8ugGB4pKqmdg/gPdRePg6sMrslnzvNYgdy3uwlblKziuzRasgUMyWKZLtgH3YtvpXQDGbSK/IlgHrtjhLlwD7PT5+aZHsNYYxC2Aym5tvL83BCi3uTpb/JDgL0YemYR3r6EiZAuyfmmyZACwvLixwDHAu7UGFo2RuNI/3jdQCadkI4PwkooARwis0eQxDpkRy8EbCF8Iz2ThqBTlPda37hJX06yzCIbLnk3yVhZfZojetmYNEV/RlywDhOVar7N/BlU33Ac5lUtDbB86ssoe910f86bwaesmcrCC1F05RbHhQfM9OLvtqzDCXqDWG2k07+tbvfCL9o11NH4DjOP3z+S6QSiRPByO6YJkWu2+YjLCFG4EPjVDOMIdzSt4Tf2VD8k6Si2tsQid4qmI+urztIHipUz0GuCmi7u6XtcM2x0FRVBvBnfcXtgF5T5vn9PAjUVt837OV9FPKfjX/q0ac38SrdxCv5demDTfBXlbpY3umgzY7HeEq0JE5fW65FjY5TmC1aP6rCVq+X/ATDeF7YTyjIfrk/gY1OGEcqaMaTlJsRmRUI2xg3ubcBqjB93bdWE/8pbgF1wMtLin0oupgHt/zwIUamMY6nfXV8MhgH8qwKWENA79erIK/WpH+OCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p66737","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66738"}}},"glyph":{"type":"object","name":"Line","id":"p66733","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66734","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p66735","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p66745","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66739","attributes":{"selected":{"type":"object","name":"Selection","id":"p66740","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66741"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2VSSUwTURjGKCgDAkKjcaGFGGACsjTAydT/ERIhESJoUIM1bFJr6AGUeMCiiDYGE1lClIyJESkeNNDIki4IFAoWtbUQtqEiyipUMKxFkGV8j4MX5/Jn3v//3/aegwP5QpGWr4iO5IcgHV8RpMgKQiKKjU73CEASieT04wp/xDCMr/isP+KpYoQj1X5IFTPWlH/FF7mwyrDSyiNoPI+nziryQp/N5jj18gHUYac72ys8ULaIuhjCuZP/Se8AN6TEBzaNK5nbTCp2Rqu0ODQpzAlhEZUM44hyRFRM9fc9qNRgL0ir303mzLdad6HftFifzjmg81p+5Ix1GyoYRmj8ugGB4pKqmdg/gPdRePg6sMrslnzvNYgdy3uwlblKziuzRasgUMyWKZLtgH3YtvpXQDGbSK/IlgHrtjhLlwD7PT5+aZHsNYYxC2Aym5tvL83BCi3uTpb/JDgL0YemYR3r6EiZAuyfmmyZACwvLixwDHAu7UGFo2RuNI/3jdQCadkI4PwkooARwis0eQxDpkRy8EbCF8Iz2ThqBTlPda37hJX06yzCIbLnk3yVhZfZojetmYNEV/RlywDhOVar7N/BlU33Ac5lUtDbB86ssoe910f86bwaesmcrCC1F05RbHhQfM9OLvtqzDCXqDWG2k07+tbvfCL9o11NH4DjOP3z+S6QSiRPByO6YJkWu2+YjLCFG4EPjVDOMIdzSt4Tf2VD8k6Si2tsQid4qmI+urztIHipUz0GuCmi7u6XtcM2x0FRVBvBnfcXtgF5T5vn9PAjUVt837OV9FPKfjX/q0ac38SrdxCv5demDTfBXlbpY3umgzY7HeEq0JE5fW65FjY5TmC1aP6rCVq+X/ATDeF7YTyjIfrk/gY1OGEcqaMaTlJsRmRUI2xg3ubcBqjB93bdWE/8pbgF1wMtLin0oupgHt/zwIUamMY6nfXV8MhgH8qwKWENA79erIK/WpH+OCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p66746","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66747"}}},"glyph":{"type":"object","name":"Line","id":"p66742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66743","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p66744","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p66756","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66750","attributes":{"selected":{"type":"object","name":"Selection","id":"p66751","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66752"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2TeUiUURTFCyMrWrCyUjJLpUwrd839jOMyo+M433wz840URWG2UESSJaWtRIsV0kYL7QtFtlG00yKaZIURSWGJkbRQFJUUiRa99zrzzzBv7rv33HN+72L0Wa3+aEfmRfXdmdnv4ZoVp8r+8LcPXvf4lyZs6Yf/54Owv6m8sXqyH/7XD8ODPW9e9fiPYN0o/Jhd8G3R30DWB2FM1NU+7e+DeW8cTlbVDDw9N4T3Q3Gro0F0CGOf8Xhq7R4b4JjAfuH4cEEKm8i+EVBypk5i/8kYVnngbl3tFM6JwvAlH09U1URzXgyCw3w+7WuK4dxYRL4IEoriOD8OotnSZxnx1BEPU7p+42tFAvUkQm4z4HIidSXBOL7JPOFLEvVNxSyPPEimzmQs7H/nycxZKdSbgorbL4dWHkil7jSsW9xp7G1Jo/50bAsZfPDKkAzukYF9LeFvn1ozuU8mnPVHd/4ygXsBSn47uJ8J05fLASbuaYK4LAzM4r5ZmBchb2RxbzO+rC9Bum7m/maUtX0XiZnpQzZ+J67eULwtm35kY5WMKyKHvuRAulnemEN/crFZuLG+JJc+5UJus6N3Hv3Kw65fptgjh/LoWx4CHM2u86kW+mfB4TNyAwt9tCJUDbDSTyvU30Pz6Ws+oiVOF/Lpbz7ktJ+2AvpcgJT5MvEC+m3DvbraXL+NNvpuQ85oWVFI/wvxSOJ8v5A52KFJeTPszMMOFUe3nbkUYZoKsIj5FEHhEehgTg5cDpQTHMzLgWWy/TUHc3NA0mbpqzE/DZL2ZpfGHDVIejzHNeapYa14jW3fNebqRLa0G07m64Tv87jdn7c7mbMT6vm2OZm3jq1ielekztx1FLX6ihKd+evw22gXJzo50KHajXSRBxfU8y51kQsXihWwLvLhgrLTx01O3BDhiAfrJi9uHBP0xh5xkxs35gj6bnx1kx8P1DrpHnLkgcKr2kOePDgn0rO3esiVAfV8wg3yZUDAJRAxyJmBn7Z3NzsaDPJm4HpX5OMFw73kzouV0s7ZXvLnVWoqLnnJoRe91KcY/wC7Sfu1GAUAAA=="},"shape":[163],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/42SX0hTcRTHr5YyRtkKi5CxjUDpj7KH+xAS43d9krAe9jYi2h5CJHoYIT3sIdeDRE8i0sMlYiMTCZeYjbnGardpM2qILLU2szbKJCzM1tKVus4593q3YQ/tYZ/7Ped7/vx+93Ic/swC/HlFsUmo4DiB5xsVHhMKhUIkHm9QCT5He3sD+olyvl6pr5f1mSOoJUOVCSlo39TJuvsg0nS+5wDSETQQQe9X8jokzCe6a4f3EZetNch0v3MvEvx7kF6nRUtxa1Cj6GqiKFaplM8ja6dlN8ah7y4k9KlUzllRSpjHKfkthv5obgMJc34j4dxE2CdPOmggChnXOlIydK8pvl9I2LOMUJdT6ohSPP4TCXtlqQ/PE2G/H1Qviqukh1uJ4P9O/mUrUcpufiXdd5goXAh9IfL8EsUPJT8r9YsU1/g+Udyi/Uj1bSczpKO5NJLrukRMu2rfl9Ld0btAPoUw9x2D9894fh7jjsXpFOpC4myKwb1zPn0K47BPkvI6W5Lyc/1vkZ4JU5GQ964MzmE88uIqkQWys1TXE51FbTQvzCDtodMztMflpdelTA/GSG8T9kmglkwjRUJ9YUifoD7N/mnaT+OLq5T7k4b3+Ir65a+9VAn5yJ2VSawvI/i4yhOT6CNuguH4jdi/2NXieI71HwZuT6Dfqz9XJMan1sbZFjy4b41jHs4RVQnxyJWOZ5hnN1ukHcT5sDrG7RdPRdgG3edTlod+jaNPKN77LbyD6MsdDeO+ntZMSOUfqBvSh2i+zvZYJe7R2RfEPkSoNyanxv6b0NYTaxvDeyijfG8B5d4COA++Mz/OMdqa/Qz2sYc7H6mE+sL91VH022uaigQf3NND7A/f2widp878gOWgT/X1AdyTZVz3VK5Tn7tsm38BzDcOnhgFAAA="},"shape":[163],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p66757","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66758"}}},"glyph":{"type":"object","name":"Line","id":"p66753","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p66755","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p66766","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66760","attributes":{"selected":{"type":"object","name":"Selection","id":"p66761","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66762"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p66767","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66768"}}},"glyph":{"type":"object","name":"Line","id":"p66763","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66764","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p66765","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p66705","attributes":{"tools":[{"id":"p66718"},{"id":"p66719"},{"id":"p66720"},{"id":"p66728"},{"type":"object","name":"SaveTool","id":"p66729"},{"id":"p66770"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p66713","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p66714","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p66715"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p66716"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p66708","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p66709","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p66710"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p66711"}}}],"center":[{"type":"object","name":"Grid","id":"p66712","attributes":{"axis":{"id":"p66708"}}},{"type":"object","name":"Grid","id":"p66717","attributes":{"dimension":1,"axis":{"id":"p66713"}}},{"type":"object","name":"Legend","id":"p66748","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p66749","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p66745"}]}},{"type":"object","name":"LegendItem","id":"p66759","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p66756"}]}},{"type":"object","name":"LegendItem","id":"p66769","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p66766"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p66771","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p66781","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p66773"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p66782"},"y_scale":{"type":"object","name":"LinearScale","id":"p66783"},"title":{"type":"object","name":"Title","id":"p66774","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p66812","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66806","attributes":{"selected":{"type":"object","name":"Selection","id":"p66807","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66808"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiTY2Np4s4aLuIJncw7hNnsfh3t27tjpXbtnXvN+rv/voXXtBJ46dCRJP7UvKy6/zH9ljj64fxgcAI378rWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p66813","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66814"}}},"glyph":{"type":"object","name":"Line","id":"p66809","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66810","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p66811","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p66821","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66815","attributes":{"selected":{"type":"object","name":"Selection","id":"p66816","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66817"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiTY2Np4s4aLuIJncw7hNnsfh3t27tjpXbtnXvN+rv/voXXtBJ46dCRJP7UvKy6/zH9ljj64fxgcAI378rWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p66822","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66823"}}},"glyph":{"type":"object","name":"Line","id":"p66818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66819","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p66820","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p66832","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66826","attributes":{"selected":{"type":"object","name":"Selection","id":"p66827","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66828"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiTY2Np4s4aLuIJncw7hNnsfh3t27tjpXbtnXvN+rv/voXXtBJ46dCRJP7UvKy6/zH9ljj64fxgcAI378rWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p66833","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66834"}}},"glyph":{"type":"object","name":"Line","id":"p66829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p66831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p66842","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p66836","attributes":{"selected":{"type":"object","name":"Selection","id":"p66837","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p66838"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p66843","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p66844"}}},"glyph":{"type":"object","name":"Line","id":"p66839","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p66840","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p66841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p66780","attributes":{"tools":[{"id":"p66794"},{"id":"p66795"},{"id":"p66796"},{"id":"p66804"},{"type":"object","name":"SaveTool","id":"p66805"},{"id":"p66846"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p66789","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p66790","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p66791"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p66792"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p66784","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p66785"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p66786"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p66787"}}}],"center":[{"type":"object","name":"Grid","id":"p66788","attributes":{"axis":{"id":"p66784"}}},{"type":"object","name":"Grid","id":"p66793","attributes":{"dimension":1,"axis":{"id":"p66789"}}},{"type":"object","name":"Legend","id":"p66824","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p66825","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p66821"}]}},{"type":"object","name":"LegendItem","id":"p66835","attributes":{"label":{"type":"value","value":"Median Year (1963)"},"renderers":[{"id":"p66832"}]}},{"type":"object","name":"LegendItem","id":"p66845","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p66842"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p66857","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"43e34ebf-1087-45e7-ad8c-03b78dffa239","roots":{"p66858":"e21794d6-c9eb-414b-9583-5226db28f0aa"},"root_ids":["p66858"]}];
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