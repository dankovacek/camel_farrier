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
    
    
    const element = document.getElementById("c2611661-cb88-4f50-bab2-2fd6bbfd5766");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c2611661-cb88-4f50-bab2-2fd6bbfd5766' but no matching script tag was found.")
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
                  const docs_json = '{"51741c9e-680a-4f79-82bc-eecc71ec901b":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p120336","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p120337"}}},"roots":[{"type":"object","name":"DataTable","id":"p120360","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p120359","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":1000,"source":{"type":"object","name":"ColumnDataSource","id":"p120338","attributes":{"selected":{"type":"object","name":"Selection","id":"p120339","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p120340"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DQQpEUAAA0J+kLKcsLGwsxGaydAOHcBO5hVIiaZrSpDmk9+pFIYTYxNSXmbmFpZW1jW9bO3sHRydnF1c3dw9PP369/Hn79wGjDU6kgAAAAA=="},"shape":[32],"dtype":"int32","order":"little"}],["Station ID/Identification de la station",{"type":"ndarray","array":["07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002","07SA002"],"shape":[32],"dtype":"object","order":"little"}],["Date (UTC)/Date (TUC)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYKibsq3CiYGBIdluIph+JtIMoh26n4mD6AOVyTblIPqPpR6IZrirt78MRGdruoHoBoX3l0pB8jsM8kC0w+rWaDB9ydQDTCemMYJoBs2eVyUgdUkKzCDagVd7YxGIP3nC/gIg3SA1TzQbmc7Md0kH8e/t0k0G6W/Z/iABRD/nnxQDohfPlQbTG3RFwXTUls/RIJrrxVYwzVETCKbD7miBaes2VjDdxHwyCkTL/1ob5QQACHQDEwABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Timezone Offset/D\\u00e9calage Horaire",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v5////nwOIAUwpqeqAAAAA"},"shape":[32],"dtype":"int32","order":"little"}],["Activity Type/Type d&#x27;activit\\u00e9",{"type":"ndarray","array":["Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit"],"shape":[32],"dtype":"object","order":"little"}],["Gauge Height/Niveau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqBNIA2TWfPgABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Mean Gauge Height/Niveau Moyen",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9s09/3yY9xWDm8Cd8i1els5XPZNEoj4aemw5UTZvvlWVg4/gh8vnd1i7XB9cYEtV7iVQ+NU5+6c51YOz3+v/HhprZWDLRdIxtohwhKkw8phzhGFDUUZ1g4flh/zNve0clgjE5ViXW/l4ALU9bvTykEzpv/Q1xdWDmF8upvmnrdyaBe7ee67sI1Drb1p3K5MBP30gtLtn/ssHYCinjxNVg4gbRp3LB1WfbzkmxRg7WAMAsII98L4Z88AgY+Vw5e/VypeLrNymAf0nvd1Kweh5gOnFrJaO0x8W2NvOs8a4g92GwcAdy5x7wABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Discharge/D\\u00e9bit",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zt7Bgh8jByMwcAeQm82cEgDAxsHBjBIgdJOEPpAiMNZkL4ef6h4PFS/K5SfAOEXO0DMWeYC1ecG4R8LhZofDBFvKIDQH0qg/BKoeWpQczyg6nUg8guSoO40g7jjjCGczwACDQ4QdQwBEPHgECg/Gqo/A0ILFDoAAA/WiMUAAQAA"},"shape":[32],"dtype":"float64","order":"little"}],["Rating Curve Table Number/Num\\u00e9ro de cource de tarage",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAERBzBFNP2jHqJ+6NMA4z28UAABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Shift From Base Curve/D\\u00e9calage par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3upZsixRmbV/t9WBec6Lq3b/7f9y+3rjYv3y3/JCatdt2x/VIr1ff/e9v13t7bUXNg8cz8DGPyoHy40AEubViUAAQAA"},"shape":[32],"dtype":"float64","order":"little"}],["Deviation From Base Curve/D\\u00e9viation par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zt12Glt5r2N+30/9wWXqCzfXy2yzv1hVYl9Flhgy/6F6ZtfFW9t3V9/07YyYsXS/Qxg8KN+uNAAfcUC6AABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Deviation From Shifted Curve/D\\u00e9viation par rapport \\u00e0 la courbe d\\u00e9cal\\u00e9e",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zt12Glt5r2N+30/9wWXqCzfXy2yzv1hVYn9uhvxZf5yy/YvTN/8qnhr6/76m7aVESuW7mcAgx/1w4UGAKUJBzkAAQAA"},"shape":[32],"dtype":"float64","order":"little"}],["Control Condition/Condition de contr\\u00f4le",{"type":"ndarray","array":["Measurement condition : Clear; Partly Cloudy , No Precipitation , Light Wind Blowing Downstream","Measurement condition : Clear; Partly Cloudy , No Precipitation , Moderate Wind Blowing Downstream","Measurement condition : Clear; Clear , No Precipitation , Very Light Wind Blowing Downstream","Measurement condition : Clear; Partly Cloudy , No Precipitation , Calm Wind ","Measurement condition : Clear; Cloudy , Light Rain , Calm Wind Blowing Upstream","Measurement condition : Clear; Cloudy , No Precipitation , Very Light Wind Blowing Upstream",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"}],"shape":[32],"dtype":"object","order":"little"}],["Control Condition Remarks/Remark sur les condition de contr\\u00f4le",{"type":"ndarray","array":["SMALL AMOUNT OF ICE FORMING ON ROCKS ON SLOWER SECTIONS","Open water conditions at control with wide, shallow edges, with flow through boulders - some algae growth in low flow areas.  Mmnt section chosen 800m D/S at constriction.  High water side channel upstream of mmnt section was verified no-flow, visually, before commencing mmnt.  ","OPEN WATER CONDITIONS.  LOW WATER.  MMNT REQUIRED TO HELP DEFINE/VALIDATE LOW END OF RAATING.  SHIFT TO WITHIN 5% OF RATING UNTIL MORE MMNTS CAN BE DONE.","Open water conditions no obvious changes to control but given the nature of control a change is extremely unlikely.   ","OPEN, CLEAR, HIGH WATER","Control is rocky channel around bend from gauge, currently in section control, barely going into channel control. 0.3m of water flowing on right bank over gravel bars for 33m.",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"}],"shape":[32],"dtype":"object","order":"little"}],["Activity Remarks/Remarques des activit\\u00e9s",{"type":"ndarray","array":["COMPASS CAL FAILED INITIALLY THEN SAID COMPLETED AFTER SECOND GO AROUND. DECIDED TO DO A STATIONARY MBT. @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ OFFSET BEFORE 21.541 AND AFTER 21.539. LEFT TAVIS ON HG2 WITHOUT ANY RESET BECAUSE THERE WAS NO OFFSET PUT IN BEFORE, NOT SURE WHAT THE USE OF IT IS. ** REALIZED DOING CDP THAT I MAY HAVE CALIBRATED THE HG RESULT NUMBER IN PLACE OF THE DWL, RESULT MAY BE CARRYING THE -0.024 SRC FORWARD** ADCP by Moving Boat","MMNT END TIME ACTUALLY 10:21 MST.  6H40MIN CORRECTION Applied @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ Stationary MB Test completed.  No Compass Cal required, No MB found. Shift to mmnt (or hold if within 5% of currently applied shift) Reset HG1(10min values) at 11:28.   Changed over to SL3 with Analog (11:57MST - SN 23010028).  Forgot to enter Offset for HG2 on new set up (20.208m - to be entered in Aquarius). ADCP by Moving Boat","@ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ ADCP by Moving Boat","Measured downstream approx 750m downstream.  Tethered boat man to man measurement.   Took water level in line with the bench marks.   ADCP by Moving Boat","HIGH STAGE, SOME MINOR FLOW INTO THE VEGETATION, MINOR WEED GROWTH AT EDGES, LARGER EDGES DUE TO SHALLOW DEPTHS AND HIGH VELOCITIES PREVENTING GETTING CLOSER THEN 15M. ATTEMPTED SECOND MEASUREMENT UPSTREAM AND SLOW CONSTRICTION, LOTS OF WEEDS, CONSIDERABLY MORE FLOW. WILL DISREGARD. RESET SUB SENSORS AT 10:06. OD 5.979m TAVIS Reset 11:31. INSTALLED SL3 WITH 100M OTT SUB. NOT TRANSMITTING, BACK UP LOGGER UNTIL ANALOG TIPPING BUCKETS GET SORTED. INSTALLED IN 7.24m OF WATER. ADCP by Moving Boat","POOR MEASUREMENT, LOW WATER, DIFFICULT TO FIND GOOD SECTION, BATTERY ISSUES WITH RIVERPRO, BACK UP BATTERY USED AT EARLIER SITES AS PRIMARY BATTERY WENT FROM 100% CHARGE TO EMPTY WHEN UNDER LOAD.  Corrected M.G.H. includes Sensor Reset Correction of 0.010 and Gage Correction of 0.000 applied to Weighted M.G.H of 26.330 WATER LEVEL APPEARS TO BE RECEEDING BASED ON WETNESS ON SHORE. LOW WATER. 0.010M SRC, NOT RESET DUE TO LIGHT WIND AND WAVE ACTION SURGE OF 0.009m DUE TO DEPTH OF WATER SURROUNDING SHORELINE. ADCP by Moving Boat","Poor measurement, stage inbetween high and low sections. Tried two different locations which gave the same average. One slow and deep section with small edges but boat speed close to water speed and one shallow fast section with large edges ~25m. Measured at High Water Section and at deep narrows between highwater section and gauge. Sources:Manual","Rio Grande 1200 mmnt from zodiac 2km below gauge at narrows, slow velocities, difficult to control boat Sources:Manual","Rio Grande 1200 mmnt fm zodiac approx. 2 km dwnstrm of gauge at hi water mmnt section Sources:Manual","River Ray mmnt on tethered boat suspended from Zodiac Sources:Manual","Sources:Manual","StreamPro mmnt on tethered boat Sources:Manual","RiverRay mmnt approx 500m below gauge at lo wter mmnt section Sources:Manual","RiverRay on tethered boat from zodiac Sources:Manual","Sources:Manual",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"}],"shape":[32],"dtype":"object","order":"little"}],["Width/Largeur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0tLA4Jn5g5nzwCBj4UDiJuWZuowayYQSJo5MICAQwyEf9PPwRgMIiD0Zn84DVanEAjhBwdAxT0g+hlcIfSBUCj/Rz1YPQMafSAIqg5KM1hC+Z5QffYQusEfyofpd4Ly3aC0F5T2gaqH0gxQfQeCIeJAGgC/FHA3AAEAAA=="},"shape":[32],"dtype":"float64","order":"little"}],["Area/Secteur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zM2BoLNpg4MYODoAOIaG+s4pIHAMwuIuEKyw6yZQCDpDuE7JEHoA4lQ+TwI3ZALpbOg+h0g/IQgqLoaCM3wo54BDBD0xLc19qYOBQ7r3B9WicTlOsi3vg7ccc8Kon5BKMS8NDcIH2YvUD/Ena4OZ88AQY8v1J1Q+xiiIeodYqH64iG0QhqcBgADIge1AAEAAA=="},"shape":[32],"dtype":"float64","order":"little"}],["Velocity/Vitesse",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9tyomzffKnX9rJRKdb3/d/ac11fXGDL9dneFsz4ZH/2DAh8sFfcUJQx8e0Le6Bi/bsqj+xLJ0uwhPHdtV8CVH198QOovuP2bI1TnbtzHtvH7fLkYdJ+b/8mcIdc6+uH9hPf1tibxu2yTwODd/Yrjnmbdzq+sQcSCU8vvLMH2d47/Yv9nhKQwd/s+w991Yjpv2UfBNIe+Me+FqTb84p9kkCE5ZYTH+x/1WUBld6wBwvz3ILzT4K8o3/XHmio0u2fj6D+eGZvDAavoeZ9gbr7hz0ABTZvkQABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Air Temperature/Temp\\u00e9rature de l&#x27;air",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zt7BgRYDjCAgbEDhNZxSAOBZzC+KVTc2GHWTCCQtIbwGwwg/JmWUHkNKG0BpVWgtAiUNoTSulBaAEqboKmH6ZOAijscYAADASitBhWHiDIwGEDFVSB0gytMHZT+YA9RCXOHEVS/mQMAU5QLgwABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Water Temperature/La temp\\u00e9rature de l&#x27;eau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAOHs2dAwMgBwlWA0j/qwfwGQyhfyyENDHSgfAOHWTOBQNIYyteDyhtBzRNCNYfhRz1Y+zOovplaUHkNKK2CRnNA+QxoQAmHOLo6GB9mjgxUH8yfOg4AFDSyVwABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["Approval/Approbation",{"type":"ndarray","array":["Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Provisional/Provisoire","Final/Finales","Provisional/Provisoire","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Provisional/Provisoire","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Provisional/Provisoire","Final/Finales","Final/Finales"],"shape":[32],"dtype":"object","order":"little"}],["Uncertainty/Incertitude",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zt7BgTkHIzBQNKBAQykoHx+KP9HPUR8+NEAuxvl+gABAAA="},"shape":[32],"dtype":"float64","order":"little"}],["quality_symbol",{"type":"ndarray","array":[{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},"E",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},"A","A",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},"A"],"shape":[32],"dtype":"object","order":"little"}],["quality_label",{"type":"ndarray","array":["No flag","No flag","No flag","No flag","Estimated","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","No flag","Partial Day","Partial Day","No flag","No flag","No flag","No flag","Partial Day"],"shape":[32],"dtype":"object","order":"little"}],["date_string",{"type":"ndarray","array":["2023-10-26","2023-07-02","2023-05-19","2022-06-20","2020-08-07","2020-06-24","2019-07-15","2018-07-04","2017-07-11","2016-09-01","2016-07-05","2016-05-06","2015-09-29","2015-07-20","2013-07-31","2010-09-15","2006-06-22","1999-06-29","1999-06-29","1995-05-03","1990-11-19","1988-05-18","1985-07-22","1985-04-21","1985-04-16","1985-03-21","1985-02-01","1984-11-15","1984-10-16","1984-09-17","1984-08-01","1984-07-11"],"shape":[32],"dtype":"object","order":"little"}],["time",{"type":"ndarray","array":["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],"shape":[32],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p120364","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p120365"}}},"columns":[{"type":"object","name":"TableColumn","id":"p120341","attributes":{"field":"date_string","title":"Date (UTC/TUC)","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p120342"},"editor":{"type":"object","name":"StringEditor","id":"p120343"}}},{"type":"object","name":"TableColumn","id":"p120344","attributes":{"field":"time","title":"Time/Heure","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p120345"},"editor":{"type":"object","name":"StringEditor","id":"p120346"}}},{"type":"object","name":"TableColumn","id":"p120347","attributes":{"field":"Discharge/D\\u00e9bit","title":"Discharge/D\\u00e9bit","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p120348"},"editor":{"type":"object","name":"StringEditor","id":"p120349"}}},{"type":"object","name":"TableColumn","id":"p120350","attributes":{"field":"Mean Gauge Height/Niveau Moyen","title":"Mean Gauge Height/Niveau Moyen","width":180,"formatter":{"type":"object","name":"StringFormatter","id":"p120351"},"editor":{"type":"object","name":"StringEditor","id":"p120352"}}},{"type":"object","name":"TableColumn","id":"p120353","attributes":{"field":"quality_label","title":"Quality","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p120354"},"editor":{"type":"object","name":"StringEditor","id":"p120355"}}},{"type":"object","name":"TableColumn","id":"p120356","attributes":{"field":"Rating Curve Table Number/Num\\u00e9ro de cource de tarage","title":"Rating Curve #","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p120357"},"editor":{"type":"object","name":"StringEditor","id":"p120358"}}}],"index_position":null}}]}}';
                  const render_items = [{"docid":"51741c9e-680a-4f79-82bc-eecc71ec901b","roots":{"p120360":"c2611661-cb88-4f50-bab2-2fd6bbfd5766"},"root_ids":["p120360"]}];
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