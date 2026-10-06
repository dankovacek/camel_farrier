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
    
    
    const element = document.getElementById("a83763f0-9542-4771-acd6-8196c6328821");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a83763f0-9542-4771-acd6-8196c6328821' but no matching script tag was found.")
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
                  const docs_json = '{"a94b024e-a216-40cd-a671-083ecb2bbd1f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p179702","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p179703"}}},"roots":[{"type":"object","name":"Column","id":"p179825","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p179707","attributes":{"text":"&lt;p&gt;&lt;strong&gt;05ND010&lt;/strong&gt;:\\n        30 revised days; 0 removed.\\n        0.25% of the earlier published daily record changed.\\n        Affected interval: 2024-06-24 to 2024-09-25;\\n        longest consecutive revision run: 11 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p179708","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p179709"},"y_range":{"type":"object","name":"DataRange1d","id":"p179710"},"x_scale":{"type":"object","name":"LinearScale","id":"p179717"},"y_scale":{"type":"object","name":"LinearScale","id":"p179718"},"title":{"type":"object","name":"Title","id":"p179715"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p179758","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p179704","attributes":{"selected":{"type":"object","name":"Selection","id":"p179705","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p179706"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhQ3AMAAAoM7d3f5/c5AQQgiRsYmpmbmFpZW1ja2dvYOjk7OLq5u7h6eXt4+vnz9wiOYbeAAAAA=="},"shape":[30],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaFhbwVLpxMDQ4HKIFUQ7rBJhA9EMAulguuE2NzuIPsDDzAHmF4WCaYcby8E0g90vMH1gsQ8nWJ5zPph2yP8IphmuOnOB+WzW3GB+Ti+YPnDxPphuMDfiAcvPbQHTDMzXwfSBDE1esPy5ajDtYHIOTDPMUuADy/8vAtMNf/gEwPwj/kJg+W9uwmD65TZJsPgqfXmw/iXpSpVOAJMiqEnwAAAA"},"shape":[30],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGCoz3pgD6QWOHc/AdEO5p0vQXSDyLrnIPrAfKn79v///7c377yJTMtHpdwG87ecuAZSBwQ3QPz/Kz9eAtH3fZMugOkLSqft/wHV9U4/B1KX8Hjpafu////v9zY/Cdb378oJsP3vlx8Dyz+9cMj+z///89/W7Aepu690e6f9r///67P2bAHJP/i9cqP9Z6B44I51IPPr982fZf/s///4PSWT7S8C7XlY1QLSD6SXwPlA/UD3JNgDAN+rFXnwAAAA"},"shape":[30],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFDYUPTAnoGB4UDJ5CcguiFj4ksQvcB123MQzcCkfR/MnznzJpxmZGBI2FNyG6xe7OY1+////9snCdwA8R14mC6D+PIbii7Y//v/v36q82l7oPoHgTvOgcTvLz92GqQuQSDiJIhff+jrCbD+LSeOgej/Kz8esv/1///+sn377X8D+atldoHUH/j8dwvIPPnW1xtBdHyK9Xr7V0D68dLZ9u+A+h9WTbF/AFSv1d5m/xOo//PfJSD99dPzmuyFgfb6JgXYAwDQ4k/O8AAAAA=="},"shape":[30],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/6v5//+/fVKAfQ2Ufgek65H4MPGtQPF4oDiMhokTomcC9fkD9cFomHpcfJh4N1CfO1AfjEY3B8Zf/+//f1+gOnQaTX6/8P//94Hq9gMAQPISXfAAAAA="},"shape":[30],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9u9RlCt8PMJe0a5u09/vz9s/+pPmmYp1wF7wwAWQV6fg/YCMfpnfcJO2ZdLRl0N5boAp1N+Fzz5+fys/Q2lZnGDXxftV69atYpJ8KK9Y4prqMD8q/b3BUSuvPp/w17L7WZAoME9eyfFO612x2/ZO7xLixZbeNd+6m31sCS7B/Z7z5bYLKh7YC+v5snhJPLI/p33q+dnjjy1d0jfGaLA8so+OGLviRvr3tsz8mg+OXPgs735wedVdgbf7deGhdqvW/XLvubq7hlvjvA5qN6c11HJK+ogztBgx8Cg4sDE2LCeiYEFxj/AAAaeBwDBaDdh8AAAAA=="},"shape":[30],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p179759","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p179760"}}},"glyph":{"type":"object","name":"Scatter","id":"p179755","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p179756","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p179757","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p179766","attributes":{"data_source":{"id":"p179704"},"view":{"type":"object","name":"CDSView","id":"p179767","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p179768"}}},"glyph":{"type":"object","name":"Scatter","id":"p179763","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p179764","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p179765","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p179716","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p179743"},{"type":"object","name":"WheelZoomTool","id":"p179744","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p179745","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p179746","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p179752","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p179751","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p179753"},{"type":"object","name":"SaveTool","id":"p179754"},{"type":"object","name":"HoverTool","id":"p179823","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p179738","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p179739","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p179740"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p179741"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p179719","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p179720","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p179721","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p179722","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p179723","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p179724","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p179725","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p179726","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p179727","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p179728","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p179729","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p179730","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p179731","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p179732"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p179735","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p179734","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p179733","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p179736"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p179737","attributes":{"axis":{"id":"p179719"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p179742","attributes":{"dimension":1,"axis":{"id":"p179738"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p179761","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p179762","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p179758"}]}},{"type":"object","name":"LegendItem","id":"p179769","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p179766"}]}}]}}]}},{"type":"object","name":"Figure","id":"p179770","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p179709"},"y_range":{"type":"object","name":"DataRange1d","id":"p179772"},"x_scale":{"type":"object","name":"LinearScale","id":"p179779"},"y_scale":{"type":"object","name":"LinearScale","id":"p179780"},"title":{"type":"object","name":"Title","id":"p179777"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p179820","attributes":{"data_source":{"id":"p179704"},"view":{"type":"object","name":"CDSView","id":"p179821","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p179822"}}},"glyph":{"type":"object","name":"Scatter","id":"p179817","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p179818","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p179819","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p179778","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p179805"},{"type":"object","name":"WheelZoomTool","id":"p179806","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p179807","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p179808","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p179814","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p179813","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p179815"},{"type":"object","name":"SaveTool","id":"p179816"},{"type":"object","name":"HoverTool","id":"p179824","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p179800","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p179801","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p179802"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p179803"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p179781","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p179782","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p179783","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p179784","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p179785","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p179786","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p179787","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p179788","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p179789","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p179790","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p179791","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p179792","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p179793","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p179794"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p179797","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p179796","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p179795","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p179798"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p179799","attributes":{"axis":{"id":"p179781"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p179804","attributes":{"dimension":1,"axis":{"id":"p179800"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"a94b024e-a216-40cd-a671-083ecb2bbd1f","roots":{"p179825":"a83763f0-9542-4771-acd6-8196c6328821"},"root_ids":["p179825"]}];
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