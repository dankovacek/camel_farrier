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
    
    
    const element = document.getElementById("e3bd63b6-4c2e-484f-b395-a82f6509d68b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3bd63b6-4c2e-484f-b395-a82f6509d68b' but no matching script tag was found.")
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
                  const docs_json = '{"0350f67d-a3e1-43ba-b4fc-6d2d96e6f77a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p523507","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p523508"}}},"roots":[{"type":"object","name":"Column","id":"p523654","attributes":{"children":[{"type":"object","name":"Figure","id":"p523509","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p523510"},"y_range":{"type":"object","name":"DataRange1d","id":"p523511"},"x_scale":{"type":"object","name":"LinearScale","id":"p523519"},"y_scale":{"type":"object","name":"LinearScale","id":"p523520"},"title":{"type":"object","name":"Title","id":"p523512","attributes":{"text":"08MC036 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p523573","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523567","attributes":{"selected":{"type":"object","name":"Selection","id":"p523568","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523569"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDj57VKQEwMDQ4LDFTD9vfMqmO67fA1Mq8reANN70m6C6eANt8D0q5+3wXSj810wLdF7L8gJAOX/SV1QAAAA"},"shape":[10],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523574","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523575"}}},"glyph":{"type":"object","name":"VArea","id":"p523570","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523571","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523572","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523584","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523578","attributes":{"selected":{"type":"object","name":"Selection","id":"p523579","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523580"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJiZoBToBAAss6mCCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523585","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523586"}}},"glyph":{"type":"object","name":"VArea","id":"p523581","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523582","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523583","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523594","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523588","attributes":{"selected":{"type":"object","name":"Selection","id":"p523589","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523590"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLD8OTfQCQC5O8T8CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523595","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523596"}}},"glyph":{"type":"object","name":"VArea","id":"p523591","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523592","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523593","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523603","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523597","attributes":{"selected":{"type":"object","name":"Selection","id":"p523598","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523599"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLgR/TzQiYGBIX/pi0AnAJXAWQcQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523604","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523605"}}},"glyph":{"type":"object","name":"VArea","id":"p523600","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523601","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523602","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523612","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523606","attributes":{"selected":{"type":"object","name":"Selection","id":"p523607","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523608"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFh/7X6QEwMDg5vCQzB9N/MRmC7Z/DjICQCFGTUCIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523613","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523614"}}},"glyph":{"type":"object","name":"VArea","id":"p523609","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523610","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523611","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523621","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523615","attributes":{"selected":{"type":"object","name":"Selection","id":"p523616","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523617"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFjk9izICQAGp4psCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523622","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523623"}}},"glyph":{"type":"object","name":"VArea","id":"p523618","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523619","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523620","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523630","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523624","attributes":{"selected":{"type":"object","name":"Selection","id":"p523625","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523626"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYAiVsQ92YmBgeJPqEOwEAF5I23AQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523631","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523632"}}},"glyph":{"type":"object","name":"VArea","id":"p523627","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523628","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523629","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523639","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523633","attributes":{"selected":{"type":"object","name":"Selection","id":"p523634","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523635"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYCgoSgl2YmBgYN+TGuwEABjRqH4QAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523640","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523641"}}},"glyph":{"type":"object","name":"VArea","id":"p523636","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p523637","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p523638","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p523648","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p523642","attributes":{"selected":{"type":"object","name":"Selection","id":"p523643","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p523644"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[550],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2XXUhUQRSAbyAi0VOEiEQrIj70IiERIjGKD+FDhAThU7uEiA8hEkuIRGsPYiIRImabwZYlZpqo2abL5u+2/tVqtiYScpUwMgkqEzXbvc2cvWd2dq6b9Ba0Tx/nzJlzzsycO3Ouoig5yxV+oijKUqv3LePQ5llg5Wr6G+Bawcyussigpg1eHpgmmqYR5/prA6ndveSMsIz2bH7igo/pza78VxD/SNUUJ+opB/MPzBrI8t6+CrLW9m1WXEdOQodfJOojxmU/lCmFWRH2mLfmL58w5CXI6AfnIzEOXfccky3Fxe/0dUcQ9dHGo9nL54aMiC/IMI77Ja8joGmOU8uTTFaC/nGRS+nHxtm5kdqLY7AvSXFeZm/LtbxkekfpwVFGW2PpiDhuylj0ML25KHsQ7MnxAS7T+I4mz5A4TuO7RKqp7/v1Outjsna02kl2qP3NkWdcFvSm6sR+cZxkZj5lMs2rB9ax09bN4qq+TdAPXirphnjJGU84WX1a6x+Rn1CnDvKd+knouMvlLdi/ZrJB48VfayHr4Oc+H6e0ndzfyv1Qe/OHlnYen9qrBX2dsJ+WlS7OXzS+J6XLkK8sox36l4nxMU+knL+c9y7riCCdZhtw3NmT1F49faGS0wl5less0fUWiWhfRhrpfixXWA1+ZM7BuVwhX8HvdbIC+dfp9XAL6ldRtmwxxhhjjDH+Wwy9nw0Eifc28hO958/caNTv99tkk757drud8zO8q02c8jstv2c4jn4/0nlua73erzj1fskN/YPbCv0B6R13kh80n/bDj/m7i31C6F1uFvsfrbJhlPct1F4L+Pu4H4xD7UyFWb1s3Laa3s3tBHv1QdmLPcn6hprcId53BWG9w6A/75rg+WgQ32sgzsd1IwW/pqq1YdGPrT7JI9K0mBbuA4V+EOyDsM9jhrihONB3psSd8+n99yT4HdkY5/P2YrR1YV6sbzzUOQ99braqwv7b7Qugb8gL/+eweSdqgI68WuiTLUXZ8+L/hdrqnRL7W8xXnUmdEon7ajgPy8oQn/cH0j43vH5BD/sUgHVMi/v8x32Rz0U+PzynfTROWjzkaa774mZ1aFrwPef1KtRpBEP1ESb7j0jp6uH1zeT1QK+h/lEvxAFZ/j5Ef8y/GFccF/phqNtQH+ri3zHaycR5wvyIONinY/8uE++FaJT7clm/TbkeeGi4n/D+w3svmoz3oCzLevT7t4z2H4Dj/9t79RvNpTieMBEAAA=="},"shape":[550],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p523649","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p523650"}}},"glyph":{"type":"object","name":"Line","id":"p523645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p523646","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p523647","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p523518","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p523545"},{"type":"object","name":"WheelZoomTool","id":"p523546","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p523547","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p523548","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p523554","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p523553","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p523555","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p523556","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p523557","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p523558","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p523564","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p523563","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p523565"},{"type":"object","name":"SaveTool","id":"p523566"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p523540","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p523541","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p523542"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p523543"}}}],"right":[{"type":"object","name":"Legend","id":"p523576","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p523577","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p523573"}]}},{"type":"object","name":"LegendItem","id":"p523587","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p523584"},{"id":"p523594"},{"id":"p523603"},{"id":"p523612"},{"id":"p523621"},{"id":"p523630"},{"id":"p523639"}]}},{"type":"object","name":"LegendItem","id":"p523651","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p523648"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p523521","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p523522","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p523523","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p523524","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p523525","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p523526","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p523527","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p523528","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p523529","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p523530","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p523531","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p523532","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p523533","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p523534"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p523537","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p523536","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p523535","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p523538"}}}],"center":[{"type":"object","name":"Grid","id":"p523539","attributes":{"axis":{"id":"p523521"}}},{"type":"object","name":"Grid","id":"p523544","attributes":{"dimension":1,"axis":{"id":"p523540"}}}]}},{"type":"object","name":"Div","id":"p523652","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"0350f67d-a3e1-43ba-b4fc-6d2d96e6f77a","roots":{"p523654":"e3bd63b6-4c2e-484f-b395-a82f6509d68b"},"root_ids":["p523654"]}];
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