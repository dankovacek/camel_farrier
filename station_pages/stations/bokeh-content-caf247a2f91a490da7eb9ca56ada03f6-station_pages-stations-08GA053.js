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
    
    
    const element = document.getElementById("c4dcf0cf-3527-450d-aead-265a10c16ccf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c4dcf0cf-3527-450d-aead-265a10c16ccf' but no matching script tag was found.")
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
                  const docs_json = '{"85fe1018-f47b-4a88-9c92-47fea9c2e33b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p263915","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p263916"}}},"roots":[{"type":"object","name":"Column","id":"p264013","attributes":{"children":[{"type":"object","name":"Figure","id":"p263917","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p263918"},"y_range":{"type":"object","name":"DataRange1d","id":"p263919"},"x_scale":{"type":"object","name":"LinearScale","id":"p263927"},"y_scale":{"type":"object","name":"LinearScale","id":"p263928"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p263975","attributes":{"start":4.939999809265137,"end":8.668999900817871}}]]},"title":{"type":"object","name":"Title","id":"p263920","attributes":{"text":"08GA053 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p263986","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p263980","attributes":{"selected":{"type":"object","name":"Selection","id":"p263981","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263982"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3HaVwIBhjA4XfkKG0RkiMxYVIjOWKUiMy1uTbHJkVCNJKjNL1CCTnDSoaQhGIiUkiuXImSs5FCrojkSpv/p+f3iOgj37EevUTkQAO3L+r8VJT+7uN4/eru/H486p6fPPjcN6i9I8dzE8cJ/FYBSmyoJ59hM5H3yEatOduL5zSaxDcfR/GeMJl3NpzCqySgXhrqzSPLUSdET+Xtnafxj0UoZ5f68DXt/uBjc1Db+E/nZRYz+ImTKMu9fPmvxjN5i/2oL0b48ZQPqIs3z+JDXGbzJsUoj8Pn8AMd5vKgPNT+gf7crHkAv38aZe+UeXyuSSB3SUI1GfUnv12BGhszn/u6BvEez1AMVyvP6bSAb7mF6h0UzLtYLeRVMlEuT1vEI00Xc89k1Pa/hfBPEsrP7kBZ238JH1uCYh0RxssclvL0u6jLg5fxka2X8xYXUUqmh/OU+it4SArqELeV3MJgFX8ch5I0aDUPKkUZsGENN+u+lhfcQ927OIL7W6/jLlkotf3W89vmG/jONFRfj7+4Y41IbrgHJffnKL6lDGVq1EbexSmaVy1EvbxkE4+y/Zt7XkWxm7OZf2q8hZ87gbrWcyt3M4rh1okob4dt4+nvUMI3becje+3gVo9QS5bF8qPtd/KQXJShAXHcwnIXL85ATZoUz/Xr3XzAPygNft3DCz6iJGzZy/37JPA+T1Brr0zkd+z38Z03UGb+uZ87fvsPNzqLmut9gG+tncSnHkRxGH2QV61Eydp2iEf1S+YTn6ParTnMKzof4eduo0RoCndreZS3PY/61ieVn6ybxsMPo4z6/Ri3qnKcv4xFPTrgBA99iTp0XTpv2u0kL85HObgwg+t3p/jAS6gNfE/zB2ZneMJRlIBxZ3mfaud4nXjUO4Mzedxr1Jl/nedOPS5wowKU6yEX+da2l/i0K6gOsy5zg0ZZPOsYysbxV/jEmtm8w17UiiFXeeZb1IiN1/i4njm8bRFKeVguP/n9db7iGuqouXm8pcUN/jIdJXXiTR5a6xYftg+16Yjb/Ml71IN/3+ELet/lAx+jmIfn8wd2//LE66gB8+7xvs3u8zqnUe5OLuBx3zzgfgdQnUYW8loVqNe3FvGYvg/5tKcoXVc94gadHvMrN1E3zi/mXi2e8A7nUD5Pfcoz6zzj6w6hjhvznNvIC16+HSXjxxK+4gXK6LUveUuHV/zVHdTUBaV8SavXfNgFFMvpb/iTemX80BHUBWPf8kFVy7l5HErhwHc88RXKvPXved8fPnDTe6h3F33ku9p84n6XUXrOrOC1zD/zvFTUGPdK7lNdxn95190o1X7+il95gxIdWYV7OVbl9g9QP4ca8PM21fi6bBT32dW5TeMa/N1x1IwJNflKQ0M+OgGl1TAj/qocJS26Fl/ibMyHP0S1XPY1f9ruG34oByXY34QPalqbN8xALfSqw/cZm/J5+1Fcf6nLTT+i5G+ux3e51OezilF7rjDjxvYNeF4eyrZAc+7TvCHvdga1mncjnm3SmEcnoUwa1YTbf0apjLHg512b8vXPUN1XW3Lbzs34u1sop4Ka85VW3/IxmaitfFrwUlMrnpaMEvZbSz78q1a8WSzq0/6teXIJanDEd3xw1za8YT5KUbA139e6LQ+8iOo6w4bXNbPl+Sko8W7f81kG7bjzLlTjwe35jVLUbRvs+B/dO/Bu91Gqh9jzbOuOfFMW6iS/Trxjw868Mg3lgkcXvr6GA/fYg2o7pCt/X4Z6KqobX+X0Ax9TiNI6rDsvte3Bj11FDZvjyEc0ceLN0lGeefbkyUbOfGEi6uDhvXij96hFm3rz/b1ceOAjlH7L+/C6dn35v7mo8QGufLZlP+586n//A7rYRV5oCwAA"},"shape":[365],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9VW/09VZRi/aF/IuSI4533fy5c4UFaOWF+YWRnzkBEzS6VaJRrdrJg5Iyoycq5OUZkpkblGjrFwDJ1l1FBZM79cnREpc1RzxejLNSVjjoy5UmZK576fz6nz/gWtnz73/XKe53k/z+d5npsSicSOTLLdiI8XF1pJbFXnafR25WpMjJ7T6E69SOj9oQ0yifH9ecCepRrdhW/rc6c+DntVv2h0i7bY/B77a4Yt3iemwZ/oz0hi5GUb66Er4f+K14Eb79DfOwMvwM7gXI2J8pu038SZTfATG8S961MRb/xO3Kt7ArixW9uLpY/X6/jMifju8DJ9P167Nogb6/WlsLPoUo2RQ3X6PHL/W/T3OPwtuARxLLP0urWmWPuJ9/bqd7WWPYJ37X1Oo1NxNCN8/g8PVodxL7mj8ds22Gt5Cnlqvt3gz3+P5ab4PzZnW+QFePdC8rkBGN+v78Wf+RV2umcZefLenYH4S2/E/pRK8Nb2O+6fuAp222rgf+Ir2p6vI+M8tuZJxF3YiXtbe/71nzx/7DPsr1rC912O70e+1nw4rx3PYH5MPc5p4Lt+xv7iW5GPghV2Mo5EezP0kV6P+FeWID8XpAR5Ata7OG9oshkn3r0uCl2cPIv4fppDHn7EefM+6usNYP/BoH5E0r/TmaPrwSueIMHzIujmg6cF6utVwfwK8NaO9eIduHffEYG492iMbf8SusqfL8J58vmyw+/3xDw7XAfekmNBHiXfIcP1Epn8PewcOm2H4/Smb2O8I4J5F6xDQb0grsbbBPOD9bEz4OPBm/mORwX1CrslMQl+10m8aybiSr1Gsu9I5hnrmp3A7gPA4eXoN713SfKOuA4+L1jXivpQjFNCD1mS+/BXVCTZP7BfNySZT+DAqBG/V5KA/eW7EUd1uqL+JXkCFt4Av6VdivoB9vwZhT4+ykQ9RzKh/2lR5lORR+D6z433+/qEv/JPNbqV28nT+3jHtIdNnqrfUewbGmM7ahXr0Vh7xW/C36l7dRxeU3WUelPUh6IOFXlUrE/m4y/Jutf7zrUPKeYXfhr3AquqFO2C77583v8BfHd8gby2nACP4woCfnGvfzbsZn4Mv9kVkvmWrGPFPqyYL8n6Z763wH5tBnlejfeN+1Cx/5r+Ko4a9RKgz58M58fXqeJcCvSmDF13PStYp4I6QF02/cY+lRXME86vybDvfAJ/ad+h3kbuwb2CC0X4O6ejDOczVgnqJZg/4Gmfw7mcBruXnS+pv+A9rPcpwOPl+H70Rep9OvpNg8T52vdsfn/6pf8htpYdRj+f8IDFvmFxvmM/dbMVngv+/OF8PGCRb8yFP67GPOg6aVGX2D/1TQ54/CqL+QzqWRm8p4+XYb6D/0l+fLBbeQvnSIsI/49xp660ac/m3Azml2Bfz4QeZuXpdfv8PHdsbCy3MyeX9qOcB4Zu/b7OOi+RnGMyPHeC/0V+30G8g33ZfF827yv2Z8F+yrm7xw73XX/uC/bP4H9j8P+Mur8uyvlMfQ5zXjeac3awzyY/xtzz+bSN/3v5A/huhUD9Ld313+n3bxZirqxoCwAA"},"shape":[365],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263987","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263988"}}},"glyph":{"type":"object","name":"Line","id":"p263983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p263985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p263997","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263991","attributes":{"selected":{"type":"object","name":"Selection","id":"p263992","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263993"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263998","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263999"}}},"glyph":{"type":"object","name":"Scatter","id":"p263994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p263995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p263996","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p264007","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p264001","attributes":{"selected":{"type":"object","name":"Selection","id":"p264002","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p264003"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p264008","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p264009"}}},"glyph":{"type":"object","name":"Scatter","id":"p264004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p264005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p264006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p263926","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p263953"},{"type":"object","name":"WheelZoomTool","id":"p263954","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p263955","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p263956","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p263962","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p263961","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p263963","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p263964","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p263965","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p263966","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p263972","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p263971","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p263973"},{"type":"object","name":"SaveTool","id":"p263974"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p263948","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p263949","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p263950"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p263951"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p263976","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p263977","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p263978"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p263979"}}},{"type":"object","name":"Legend","id":"p263989","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p263990","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p263986"}]}},{"type":"object","name":"LegendItem","id":"p264000","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p263997"}]}},{"type":"object","name":"LegendItem","id":"p264010","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p264007"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p263929","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p263930","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p263931","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p263932","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p263933","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p263934","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p263935","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p263936","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p263937","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p263938","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p263939","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p263940","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p263941","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p263942"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p263945","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p263944","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p263943","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p263946"}}}],"center":[{"type":"object","name":"Grid","id":"p263947","attributes":{"axis":{"id":"p263929"}}},{"type":"object","name":"Grid","id":"p263952","attributes":{"dimension":1,"axis":{"id":"p263948"}}}]}},{"type":"object","name":"Div","id":"p264011","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"85fe1018-f47b-4a88-9c92-47fea9c2e33b","roots":{"p264013":"c4dcf0cf-3527-450d-aead-265a10c16ccf"},"root_ids":["p264013"]}];
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