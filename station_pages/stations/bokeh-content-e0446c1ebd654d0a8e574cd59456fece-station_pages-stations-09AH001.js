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
    
    
    const element = document.getElementById("a9f6861a-f6c8-493c-8bb8-85d28af3c39a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a9f6861a-f6c8-493c-8bb8-85d28af3c39a' but no matching script tag was found.")
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
                  const docs_json = '{"03237402-be95-4fc3-a615-ad580c096a62":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p937625","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p937626"}}},"roots":[{"type":"object","name":"DataTable","id":"p937649","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p937648","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":1000,"source":{"type":"object","name":"ColumnDataSource","id":"p937627","attributes":{"selected":{"type":"object","name":"Selection","id":"p937628","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p937629"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NiYGBgBWIOIOYCYh4g5gdiISAWBWJxIJYCYlkgVgRiAGf+xQQwAAAA"},"shape":[12],"dtype":"int32","order":"little"}],["Station ID/Identification de la station",{"type":"ndarray","array":["09AH001","09AH001","09AH001","09AH001","09AH001","09AH001","09AH001","09AH001","09AH001","09AH001","09AH001","09AH001"],"shape":[12],"dtype":"object","order":"little"}],["Date (UTC)/Date (TUC)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgcPh0/HeFEwNDw1ftXyD6gO/l5yDaIVH7HpgWmnoJRDPY9C0B86tE54Np1/ltYHp5UT5Y3qQ0Bsx/994ITD/nka1wAgCCbFJoYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}],["Timezone Offset/D\\u00e9calage Horaire",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx////HyRgAKK461QwAAAA"},"shape":[12],"dtype":"int32","order":"little"}],["Activity Type/Type d&#x27;activit\\u00e9",{"type":"ndarray","array":["Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit"],"shape":[12],"dtype":"object","order":"little"}],["Gauge Height/Niveau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKBjQAqZgDFGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}],["Mean Gauge Height/Niveau Moyen",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wFgAJ//arx0kxgEB0ACK4cW2c4EQGiR7Xw/NQhAEoPAyqFFCUDfT42XbhIQQBkEVg4tsgpAiUFg5dAiDEDl0CLb+X4RQLbz/dR46QZACKwcWmQ7CkBEi2zn+6kPQMuhRbbzfRlA+0ITQmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}],["Discharge/D\\u00e9bit",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIFOBzBV0QqhJ5RD6APFEJqhFEI79EPoHRMgtMZMCL0AJl8D4X+YAqFlljkAACyO7LRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}],["Rating Curve Table Number/Num\\u00e9ro de cource de tarage",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAEZBzBFMS0BNQdG/6gHANghDdRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}],["Shift From Base Curve/D\\u00e9calage par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2uLurznscha+7DadduS6nfa7ymZLMES9sH+m0ZM/6GvX/Y/rBJZ5/6Q4cCPQymrEkKa9n/aEJA9q3zN/nuT21ujLq+xfxO4Q6719dv9QEVAlZ/3X/ZNEoiwPLKfAQx+1AMAnvMtfGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}],["Deviation From Base Curve/D\\u00e9viation par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4vNPfpvU/Uie/VDbcvDT22yn9LeGnV5z8P9ojoOC/e/ebJ/4/4382x0Xuz3CPgjUXy9aL/1Iv/5pYWz90/5xhY/w2eq/ZbIrztvdT3cv2M98/MejYf7GcDgRz2MBgDK0JeyYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}],["Deviation From Shifted Curve/D\\u00e9viation par rapport \\u00e0 la courbe d\\u00e9cal\\u00e9e",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/5typNXj685Z+wuLwlS1Vhrvn9LeGnV5z8P9ojoOC/e/ebJ/4/4382x0Xuz3CPgjUXy9aL/1Iv/5pYWz90/5xhY/w2eq/ZbIrztvdT3cv2M98/MejYf7GcDgRz2MBgA8dqSMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}],["Control Condition/Condition de contr\\u00f4le",{"type":"ndarray","array":["Measurement condition : Clear; Partly Cloudy , No Precipitation , Moderate Wind Blowing Upstream","Measurement condition : Clear; Mostly Cloudy , No Precipitation , Calm Wind ","Measurement condition : Ice; Mostly Cloudy , No Precipitation ,  ","Measurement condition : Ice; Mostly Cloudy , No Precipitation , Very Light Wind Swirling/Variable","Measurement condition : Ice; Mostly Cloudy ,  ,  ","Measurement condition : Clear; Partly Cloudy , No Precipitation , Light Wind Blowing Upstream","Measurement condition : Clear; Partly Cloudy , No Precipitation , Moderate Wind Blowing Downstream","Measurement condition : Clear; Partly Cloudy , Hail , Moderate Wind Swirling/Variable","Measurement condition : Ice; Mostly Cloudy , No Precipitation ,  ","Measurement condition : Ice; Partly Cloudy , No Precipitation ,  ","Measurement condition : Clear; Clear , No Precipitation ,  ","Measurement condition : Clear; Smokey , No Precipitation , Light Wind Swirling/Variable"],"shape":[12],"dtype":"object","order":"little"}],["Control Condition Remarks/Remark sur les condition de contr\\u00f4le",{"type":"ndarray","array":["Control is channel and appears clear. Some shore ice still present in shady areas (under bridge) on left bank. ","Control is channel and appears clear. Water just starting to flow in side channel of gravel bar on LB d/s gauge at this stage (possible breakpoint in the stage-discharge relationship).","Control is complete ice cover. Soft ice in front of gauge, lots of surface melt. ","Control is complete ice cover. Large open lead infront of campground (usual section).","Control is complete ice cover. No visible open leads near control. Open for more than 50% of channel at usual measurement section, ~2km u/s gauge.","Control is channel and appears clear.","Control is channel and appears clear.","Control is channel and appears clear.","Control is complete ice cover. No visible open leads.","Control is complete ice cover. No visible open leads.","Control is channel and appears clear.","Control is channel &amp; appears clear. \\n"],"shape":[12],"dtype":"object","order":"little"}],["Activity Remarks/Remarques des activit\\u00e9s",{"type":"ndarray","array":["Moving boat meaasurement (RR), ~40m d/s gauge. Water flowing around island downstream gauge. Last measured on 2024-05-23, stage has risen since last mmnt, therefore remeasured for curve validation.  @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL taken near sensor line. Did not reset after first DWL due to small but resonable surge (+/-0.002).  ADCP by Moving Boat","Moving boat measurement (RR with ARCboat #167) ~100m d/s gauge.Navigation Reference: BT (BT: 686.945, GGA: 689.060, VTG: 690.028). Uncertainty - COV: 0.7%. Uncertainty - Total: 3.4%. No significant QREV messages. No QA/QC concerns. High confidence measurement.   @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL at sensor line in natural calm pool. HWM (wash line,  -poor confidence): 4.432m. Depth of HG sensor at 10:20: DWL(2.598) - Offset(2.564) = 0.034m. Depth of HG2 sensor at 10:20: DWL(2.598) - Offset(1.248) = 1.350m. Repositioned HG sensor slightly deeper after first reset as found to be in very little water. Stage will rise so do not want too depth to avoid painty trace. Depth of HG sensor at 10:50: DWL(2.598) - Offset(2.311) = Sensor reading (0.287m).   ADCP by Moving Boat","SP SxS under ice, ~2km u/s gauge. Measured about 10m u/s from last mmnt. In front of old Trans North hanger.   @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL taken near sensor line. HG2 is feeding stage.working.  Mid-section","Section-by-section measurement (SP) ~1.5km U/S gauge (infront of old Trans North hanger). Slush: Yes (14 panels). Panels: 27. Max. (q/Q): 7.53%. Uncertainty: 4.19%. No QA/QC concerns. EXTRAP NOT CONDUCTED. High confidence measurement.  @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ **RFT: HG2 is feeding stage working.** DWL near sensor line. No HWM (no peak stage observed on hydrograph since previously obtained HWM). Depth of HG sensor at 14:45: DWL(3.162) - Offset(2.597) = 0.565m. Depth of HG2 sensor at 14:45: DWL(3.162) - Offset(2.597) = 0.565m.  Mid-section","Section-by-section, under ice measurement (SP) at gauge, ~15m d/s bridge. Slush: Yes (most panels). Panels: 22. Max. (q/Q): 12.9%. Uncertainty: 3.95%. Some QA/QC concerns (see field review). EXTRAP NOT CONDUCTED. Unable to measure at usual section (infront of campgroud, ~2km u/s gauge) as still open for more than 50% of channel. Limited access to river due to private property along shoreline between usual section and gauge. Therefore measured at gauge. Very jumbled ice at mmnt section. Lots of slush. Please see Field Review for further detail. Note: bridge pier u/s of panel tagmark 100m (likely causing angular flow and slush to gather). @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL near sensor line. HWM (ice edge attached to shoreline - high confidence): 4.811m. Depth of HG sensor at 13:05: DWL(4.024) - Offset(2.616) = 1.408m. Depth of HG2 sensor at 13:05: DWL(4.024) - Offset(1.289) = 2.736m.  Mid-section","Moving boat measurement (RR w/ 16ft Lowe/15hp Yamaha) ~2km U/D/S of gaugel, at campground. Navigation Reference: BT (BT: 1011, GGA: 1034, VTG: 1042). Uncertainty - COV: 0.7%. Uncertainty - Total: 3.5%. No significant QREV messages. No QA/QC concerns. High confidence measurement.  @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL at sensor line w/stilling bucket. No discernible HWM. No HWM (no peak stage observed on hydrograph since previously obtained HWM). Depth of HG sensor at 13:40: DWL(3.333) - Offset(2.583) = 0.750m. Depth of HG2 sensor at 13:40: DWL (3.333) - Offset (1.307) = 2.026m.  ADCP by Moving Boat","Attempted personned-boat for this measurement but 15hp Yamaha needs service. Moving boat measurement from bridge walkway (RR w/ ARCboat 167) ~80m D/S of gauge. Difficult mmnt - contended with large eddies on both shores as well as turbulent flow from bridge piers. As well GPS data was lost twice mid-transect (restarted transects), believed to be caused by iron heavy bridge supports. Navigation Reference: GGA (BT: 1067, GGA: 1074, VTG: 1066). Uncertainty - COV: 1.5%. Uncertainty - Total: 6.0%. Some QREV messages and some QA/QC concerns (edges - large eddies). Moderate confidence measurement.   @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @  DWL at sensor line w/stilling bucket. No discernible HWM. Depth of HG sensor at 15:20: DWL(3.518) - Offset(2.583) = 0.935m. Depth of HG2 sensor at 15:20: DWL (3.518) - offset (1.307) = 2.211m.  ADCP by Moving Boat","Moving boat measurement (RR RiverBoat 16ft/15hp Mercury) in front of coal mine campground. Navigation Reference: GGA (BT: 1610, GGA: 1608, VTG: 1603). Uncertainty - COV: 4.0%. Uncertainty - Total: 5.2%. No significant QREV messages. No QA/QC concerns. High confidence measurement.   @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL at sensor line w/stilling bucket. Plugged HG back into logger (was compromised during most of winter). No discernible HWM. Depth of HG2 sensor at 14:50 DWL (4.377) - Offset (1.368) = 3.009m.  HG depth at 14:50 is DWL (4.377) - Offset (2.592) = 1.785.   ADCP by Moving Boat","Section-by-section measurement (SP) 2.25km U/S of gauge (in front of Coal Miner Campound), u/s last measurement. Slush: No. Panels: 22. Max. (q/Q): 10.3%. Uncertainty: 2.76%. No QA/QC concerns. EXTRAP NOT CONDUCTED. High confidence measurement.   @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ **PLEASE USE HG2. DWL near sensor line. No HWM (no peak stage observed on hydrograph since previously obtained HWM). Depth of sensor at 09:25: DWL(2.868) - Offset(1.269) = 1.599m. Establishing new primary as BM5 is winter access only and on centre pier. Mid-section","Section-by-section measurement (SP) 2.25km U/S of gauge. Slush: Yes. Panels: 21. Max. (q/Q): 9.22%. Uncertainty: 2.82%. No QA/QC concerns. EXTRAP NOT CONDUCTED. High confidence measurement. M1: difficulty with RiverRay, M2 (StreamPro)to be used.  @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ Did not visit gauge due to limited daylight. Will do so tomorrow, 2023-01-20, and use the SRC applied for MGH. Mid-section","Moving boat measurement (RR with 16ft Valco/15hp Mercury) approximately 1km U/S of gauge, at Coal Miner Campground. Navigation Reference: BT (BT: 1334, GGA: 1338, VTG: 1339). Uncertainty - COV: 4.2%. Uncertainty - Total: 5.4%. No significant QREV messages. No QA/QC concerns. High confidence measurement. Measurements being reintroduced to this station as of 2022-08-30 therefore new curve possibly to be developed.   @ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ DWL at sensor line. Depth of HG2 sensor at 13:20: DWL(3.956) - Offset(1.210) = 2.746m. Depth of HG sensor at 13:20: DWL(3.956) - Offset(2.600) = 1.360m.   ADCP by Moving Boat","Moving boat measurement, RR with ArcBoat, 40m downstream bridge (M2) with comparison SxS measurement (M1). Please use M2 for this site visit. First measurement in a number of years, curve not yet developed. Record high measurement. Consider conducting future measurements by person-boat to avoid GPS interruption from large metal bridge as well as many power lines. Much difficulty with GPS loss in connection after repeated attempts. Navigation Reference: GGA (BT: 2846, GGA: 2827, VTG: 2844). Uncertainty - COV: 3.0%. Uncertainty - Total: 6.1%. No significant QREV messages. No QA/QC concerns. High confidence measurement.   DWL at sensor line w/stilling bucket. HWM (debris line - medium confidence): 6.650m. Depth of (HG) sensor at 16:20: DWL(6.373) - Offset(2.624) = 3.749m.   ADCP by Moving Boat"],"shape":[12],"dtype":"object","order":"little"}],["Width/Largeur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIKGdAcQxbAgDUI/yILQDFA6IRnCV8hGVceQCVWHRifkQMQTMhwAmjMdNWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}],["Area/Secteur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIIfDQ4giuFCHYTeUAmhH5RC6IJaCD2jGUJrtEBohk4IfaAKQhtA9Sd0QMUnOQAA31ROd2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}],["Velocity/Vitesse",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2t9HbhDrvW7vS3X9cUFtt/sP13yTRKIeGv/TSOm/9DXN/bmnY4JTy88s581EwR+2gMVA3X8shdZ5/6wSoTBQfzmue/Bj1/aHzy10HXb57f2IF0aMb/tgZJAFUwOADPWzxZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}],["Air Temperature/Temp\\u00e9rature de l&#x27;air",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAEtBzDF8KMeQjMcgNAGUNoGShs5pIGBsQNEXgFKq0DlYfp1oOK2DgCi8WopYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}],["Water Temperature/La temp\\u00e9rature de l&#x27;eau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0tLAwEFBwYw+FE/ayYI7LRHpyHyBg5g5Wn6DsZgIOmArg4irwKV13UAAOWNKgZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}],["Approval/Approbation",{"type":"ndarray","array":["Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire"],"shape":[12],"dtype":"object","order":"little"}],["Uncertainty/Incertitude",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0tLAwEBB2Mw4HZY5/6wSmQdv8Phrxox/YcEHGbNBAF+BwYw4IHSEg5nz4CAiIMIWAObQ/8hkAY2qHpRB7CxaRIOAMt9mTlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}],["quality_symbol",{"type":"ndarray","array":[{"type":"number","value":"nan"},{"type":"number","value":"nan"},"B","B","B",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},"B","B",{"type":"number","value":"nan"},{"type":"number","value":"nan"}],"shape":[12],"dtype":"object","order":"little"}],["quality_label",{"type":"ndarray","array":["No flag","No flag","Ice Conditions","Ice Conditions","Ice Conditions","No flag","No flag","No flag","Ice Conditions","Ice Conditions","No flag","No flag"],"shape":[12],"dtype":"object","order":"little"}],["date_string",{"type":"ndarray","array":["2024-05-28","2024-05-23","2024-03-27","2024-02-26","2024-01-21","2023-08-31","2023-08-14","2023-05-30","2023-03-19","2023-01-19","2022-09-12","2022-07-06"],"shape":[12],"dtype":"object","order":"little"}],["time",{"type":"ndarray","array":["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],"shape":[12],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p937653","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p937654"}}},"columns":[{"type":"object","name":"TableColumn","id":"p937630","attributes":{"field":"date_string","title":"Date (UTC/TUC)","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p937631"},"editor":{"type":"object","name":"StringEditor","id":"p937632"}}},{"type":"object","name":"TableColumn","id":"p937633","attributes":{"field":"time","title":"Time/Heure","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p937634"},"editor":{"type":"object","name":"StringEditor","id":"p937635"}}},{"type":"object","name":"TableColumn","id":"p937636","attributes":{"field":"Discharge/D\\u00e9bit","title":"Discharge/D\\u00e9bit","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p937637"},"editor":{"type":"object","name":"StringEditor","id":"p937638"}}},{"type":"object","name":"TableColumn","id":"p937639","attributes":{"field":"Mean Gauge Height/Niveau Moyen","title":"Mean Gauge Height/Niveau Moyen","width":180,"formatter":{"type":"object","name":"StringFormatter","id":"p937640"},"editor":{"type":"object","name":"StringEditor","id":"p937641"}}},{"type":"object","name":"TableColumn","id":"p937642","attributes":{"field":"quality_label","title":"Quality","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p937643"},"editor":{"type":"object","name":"StringEditor","id":"p937644"}}},{"type":"object","name":"TableColumn","id":"p937645","attributes":{"field":"Rating Curve Table Number/Num\\u00e9ro de cource de tarage","title":"Rating Curve #","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p937646"},"editor":{"type":"object","name":"StringEditor","id":"p937647"}}}],"index_position":null}}]}}';
                  const render_items = [{"docid":"03237402-be95-4fc3-a615-ad580c096a62","roots":{"p937649":"a9f6861a-f6c8-493c-8bb8-85d28af3c39a"},"root_ids":["p937649"]}];
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