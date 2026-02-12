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
    
    
    const element = document.getElementById("db0a19a0-4c1d-4539-9ad2-ce5dac9887d9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'db0a19a0-4c1d-4539-9ad2-ce5dac9887d9' but no matching script tag was found.")
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
                  const docs_json = '{"43d6d067-a1f2-4efe-bc08-f106ceb3bf61":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1068328","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1068329"}}},"roots":[{"type":"object","name":"DataTable","id":"p1068352","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p1068351","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":1000,"source":{"type":"object","name":"ColumnDataSource","id":"p1068330","attributes":{"selected":{"type":"object","name":"Selection","id":"p1068331","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1068332"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DQQpAQAAAwE1xkJLC0U1Sm4hSpJQc/P9DZmqSEEJqZm5haWVtY2tn7+BodHJ2cXVz9/D08vbx9fMHd8w+Q3AAAAA="},"shape":[28],"dtype":"int32","order":"little"}],["Station ID/Identification de la station",{"type":"ndarray","array":["10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001","10KC001"],"shape":[28],"dtype":"object","order":"little"}],["Date (UTC)/Date (TUC)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgOJDo9r3CiYGB4QrvDRDtcHL1KjB/el05mFZ/mgSiG4TCrcDyl2fygulkhp/lIHkfzdcg2sFa6haIbuheUQ/mbzZ9WwaiRTmvgWiG1JokEN0Q8M4SzDfbrAuiD/jkK4HFFVVZwfSEjuelIH2VG2+C6AO2xUdAdMPKohVg8QN6c8H8x/FFYP5NiTgQzbDunANY/ZEuUzB9t+RbiRMAHUnFCeAAAAA="},"shape":[28],"dtype":"float64","order":"little"}],["Timezone Offset/D\\u00e9calage Horaire",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v5////n3TEAIkmsKxwAAAA"},"shape":[28],"dtype":"int32","order":"little"}],["Activity Type/Type d&#x27;activit\\u00e9",{"type":"ndarray","array":["Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit","Discharge/D\\u00e9bit"],"shape":[28],"dtype":"object","order":"little"}],["Gauge Height/Niveau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDlAYAGFcHIuAAAAA="},"shape":[28],"dtype":"float64","order":"little"}],["Mean Gauge Height/Niveau Moyen",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0uxvu/fO13Q4ekFpds//wk4hPHpbpqbL+Sw4pi3eacjr0MKSF5cwKHQluv64gJBh9s/67L2lAg5nD0DArwO4jfPfQ9+zAdRN13AgQEMftQvm31EYUMRvwML2EBeh01z3y8/5s3jsOrjJd8kAUG4uh1yra8Dd3A4THPuznn+m9shbpcnD9NqAYeTZfvmS60XcAh5vBRokrDDj2AQg8tBqPnAqYWuvA5sjVOdu98IOMhGgWwWdfjy90rFSzV2hwVS+ndV2DgdNGP6D31dIeQAABb6kp/gAAAA"},"shape":[28],"dtype":"float64","order":"little"}],["Discharge/D\\u00e9bit",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0tLA4Jn4Q4MYGACoRsSHNLA4kZQ2gIifiAeKp/uYAwG2lB5U4ezZ0DAEGqOPpQPNc8hxmHWTCCQDIPwE9Idri8usOUKV4ToT9OByM+0gpqfDKEfQGmBIqg6I4i5PkZQc1Kh9pVDaQMobQyhF2Q7AACojfL64AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["Rating Curve Table Number/Num\\u00e9ro de cource de tarage",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAEFBwaK6B/12PkDTwMARvnkG+AAAAA="},"shape":[28],"dtype":"float64","order":"little"}],["Shift From Base Curve/D\\u00e9calage par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1PcUJQx8e2L/a2vA3fItf7eL37z3Pfgx0/3p4HBp/1vQMKvv+7nur64wJbr/n7tdjGgisv7Rda5P6wS+ba/Gsz4Yg/kABm/9jOAwY/6wUIDAACN173gAAAA"},"shape":[28],"dtype":"float64","order":"little"}],["Deviation From Base Curve/D\\u00e9viation par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yssClPVWmm83/q+f+/0vDf7P13yTRKIuLu/ZKvo79PvXu43erZO9Unzq/3nficly7y+tn/Cgh+Gz9ad3f9Hovi60KfX+/eUTJZgCXu1X8T+2J2tLW/2M4DBj/rBQgMA4EF2z+AAAAA="},"shape":[28],"dtype":"float64","order":"little"}],["Deviation From Shifted Curve/D\\u00e9viation par rapport \\u00e0 la courbe d\\u00e9cal\\u00e9e",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yssClPVWmm8X9dZ5vUjMy0YbV/iXRu3v9bXvkLourzWSmd7mPyatTfiy/zz7Bmg4M/Kj5d8kxzsO5Jj77gxP9gPEf1RP1hoAMrOn/zgAAAA"},"shape":[28],"dtype":"float64","order":"little"}],["Control Condition/Condition de contr\\u00f4le",{"type":"ndarray","array":["Measurement condition : Fill; Partly Cloudy , No Precipitation , Moderate Wind Blowing Upstream","Measurement condition : Ice; Partly Cloudy , No Precipitation , Heavy Wind Blowing Downstream","Measurement condition : Clear; Cloudy , No Precipitation , Moderate Wind Blowing Upstream","Measurement condition : Ice; Cloudy , Light Snow , Moderate Wind Blowing Downstream","Measurement condition : Ice; Partly Cloudy , No Precipitation , Moderate Wind Blowing Downstream","Measurement condition : Clear; Clear , No Precipitation , Heavy Wind Blowing Downstream","Measurement condition : Clear; Cloudy , No Precipitation , Very Light Wind Blowing Downstream","Measurement condition : Ice; Partly Cloudy , No Precipitation , Light Wind Blowing Upstream","Measurement condition : Ice; Partly Cloudy , No Precipitation , Very Heavy Wind Blowing Downstream","Measurement condition : Ice; Mostly Cloudy , No Precipitation , Very Heavy Wind Blowing Downstream","Measurement condition : Ice; Partly Cloudy , No Precipitation , Very Light Wind ",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"}],"shape":[28],"dtype":"object","order":"little"}],["Control Condition Remarks/Remark sur les condition de contr\\u00f4le",{"type":"ndarray","array":["-Ice hanging over shores but very minimal contact with water. If there is B conditions it would be expected to be very minimal.\\n-A few sections of hanging ice broke and dropped during measurement. Lots of noise and a wave created. Did not affect us or the measurement.","-Complete ice cover from gauge down to braided section.\\n-Still no snow on river, bare ice. Likely too windy to stick.\\n-Small open sections in bend where gauge is located, can see minimal/no slush flowing in channel.","-Clear. Trees hung up in channel in May appear to be gone now. \\n-Beach at gauge pool looks altered with more rocks in it and boat, tied around same height as holding BM appears to be silted in more than normal.","-Complete ice cover at gauge pool and measurement section.\\n-Open leads between them and upstream of the gauge, looks like collapsed ice lead to the openings.","-Complete ice cover at measurement section and in front of gauge. A few small leads between the two locations.\\n-thin layer of crusted snow on ice.","-Open water conditions\\n-downstream of measurement section appears to have changed in shape although this is anectdotal amongst tech discussion. ","-Open. Minimal snow and ice patches left on shore but not touching water surface.","-CIC below gauge and several substantial open leads above the gauge\\n-glaciated at bend in gauge but low point in ice surface near area where lines enter water","-Complete ice cover\\n-open lead from December is now frozen over","-Complete ice cover through canyon. \\n-Open lead about 200m downstream on canyon mouth / mmt transect","-Complete ice conditions\\n-uneven ice surface with some large cracks\\n-jumbled ice and large drifts in bend at gauge",{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"},{"type":"number","value":"nan"}],"shape":[28],"dtype":"object","order":"little"}],["Activity Remarks/Remarques des activit\\u00e9s",{"type":"ndarray","array":["-M9 mmt from boat with trimaran and direct connect. At same section as 2022 at outlet of canyon. -MGH from telemetry. USB not available. -Large shift available. Values have been continually getting bigger (negative values) for several years. This is in line with the deposition trend. -@ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ -offset 3.118. -cut taken to the wall side of the beach to find a hard surface to set the rod on. -No download. USB not available. ADCP by Moving Boat","-Ice surface mmt with StreamPro ~200m below exit from canyon. Close to 2022/2023 open water location. -Obvious signs of glaciation all along the measurement area. Ice surface over 100m wide but flow confined to a narrow depression.  -More confined than expected. Panel spacing originally too large, resulted in less than 20 panels as limited time to keep splitting. Do not consider this to reduce to the accuracy of the measurement by much. -@ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ -Cut taken ~15 from beach at the usual area. Water ~20cm deep from ice surface. -No reset, no time for confirmation levels. Limited daylight. -Limited MGH points, trace seens steady. Mid-section","-M9 measurement from boat about ~400m downstream of gauge. Near where 2022/2023 winter Q was done. -communication issues on first two transects. End transect delayed on both. Discarded. -Expected negative shift based on 2022 open mmts. New curve appears to be needed. -@ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ -reset for 11:00. New offset 3.106 -MGH values taken from telemetry. Did not return to gauge after measurement. Seperate locations/landings. ADCP by Moving Boat","-SxS through ice with StreamPro at same measurement section as February, old holes still visible and transect drilled at same spots. - @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ -DWL taken about 20m from beach. Cut taken from deep in hole, ~0.60m. -MGH from logged data. Not a shift site for under ice Q. -Only one DWL, heli repositioning from mmt to gauge section. Mid-section","-SxS mmt with StreamPro at same section summer measurements were done in 2022. ~600m d/s gauge. -panels less than standard as time limited to still get levels at seperate location. Given fairly even distribution with wider panels, do not consider accuracy largely diminished. -Ice much thicker than anticipated. Slowed measurement down a bit. @ Uncertainty: ISO method, 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ -DWL taken in usual spot off beach, ~15m from rock wall where lines enter water. -Cut confirmed with ice line frozen onto rod. -Did not access gauge for reset or download due to time constraints (daylight, pilot duty day). Very close to last SRC value, also not reset. Mid-section","-ArcBoat measurement at same location as May 2022 about 400m downstream of gauge -lost control of boat on sixth (final) transect, later diagnosed as failed drive motor of starboard prop. -Accepted measurement as under 720s as initial mmt&#x27;s similar in value and accepting 5th would leave without reciprocal. -No MBT due to above. Not expected. -despite above issues, consisder good measurement usable for new curve development and confirming that control has changed (large negative shift also observed in May) -@ Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). @ -Cut for DWL taken at beach, same us usual.  -subpar surveying conditions, strong wind and gusts and large surge on rod. ADCP by Moving Boat","-Arc mmt ~500m downstream after the canyon. Appears to be good mmt section and worth trying in the winter as well. -Slight directional bias appears to be consistent with usage of Arc boat. -Uncertainty: QRev Uncertainty Analysis (DS Mueller, 2016), 2-sigma value (1 x Uncertainty Value reported in *.xml File). -DWL taken at beach next to gauging pool ADCP by Moving Boat","-SxS with StreamPro at exit of canyon d/s of gauge. ~20m u/s of section last measurement to avoid thick drifted snow. -RHB under overhanging cliff DWL taken at usual spot near benchmarks Mid-section","-SxS with Streampro about 20m downstream from exit of canyon -no slush in channel. Cleared out since last measurement.  -No MGH as no time for DWL/download and no telemetry from this time period.  NOTE: (MGH entered 07FEB to create shift value but will need reviewed/revised after download)","-StreamPro at canyon mouth -Large portion of channel slush to bottom - majority of flow confined to RHB -MGH from telemetry - levels run yesterday (09DEC) Levels run on 09DEC - MGH taken from telemetry corrected values - may need reviewed after next DWL Mid-section","-measured about 100m below exit from canyon -misjudged spacing and river location so holes measured out of sequence",{"type":"number","value":"nan"},"ADJUSTED AFTER QREV PROCESSING Measured downstream by aircraft tie down in bedrock bank on right hand side. Sources:Manual","PROCESSED WITH QREV USING DWL AS MGH - STAGE HIGHLY VARIABLE BUT SUSPECT NOT ACCURATE REFLECTION OF RIVER","ADJUSTED AFTER QREV PROCESSING BT VALUE: 188 DWL USED AS MGH Sources:Manual","7m estimate RHB due to unsafe ice condition - Used M9 Sources:Manual","M9 was used. Sources:Manual","M9 was used. Sources:Manual","PROCESSED IN QREV BT VALUE: 161 -RiverRay measurement with GPS Sources:Manual","ADJUSTED AFTER QREV PROCESSING -RiverRay measurement with GPS Sources:Manual","ADJUSTED AFTER QREV PROCESSING  BT VALUE=303 -RiverRay Measurement with GPS    -Used DWL for MGH","-M9 Measurement    -Taken at end of gorge    -No Slush Sources:Manual","-Did not conduct DWL, therefore MGH is taken from the logger. Sources:Manual","-Use DWL for MGH Sources:Manual","-near max water level for boating through gorge with zodiac and 15hp Sources:Manual","-M9 measurement approximately 50m upstream of last visit, due to open lead of last visit&#x27;s Q location (see photos) Sources:Manual","-Conducted discharge measurement ~250m below gauge    -Max %Q @ station 5 = 5.0%    -Average ice thickness = 0.56m Sources:Manual","-Conducted manned boat measurement approximately 350m downstream of gauge location at terminus of gorge. Sources:Manual"],"shape":[28],"dtype":"object","order":"little"}],["Width/Largeur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/5s1Ewhu+jowgIGzwywQ/2cglO8Bpd0c0kDALdDh7Bkg8PGHiltC6APOUNoNQjdAaQYDB2Mw8IbwHTwh+s94o+pnsIPS9lDaE9V+Bah7GhxR1R1wh5i/GSp/wBfiTjUniD9uejkAAPYD1u3gAAAA"},"shape":[28],"dtype":"float64","order":"little"}],["Area/Secteur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEoB2MQ2GzuAOYyxDjMmgkEkS5Q2glC74yAysdB1bs6nD0DBD6+EPEGZ4i6mfYQeWMzhzQQOBYO4X8OhahziIWIPzOGmucEoQ84Q82JhNNg82WSIObedIWqh6o7EA+hHyRC1PE4Qt3jCHcvAHLr2dvgAAAA"},"shape":[28],"dtype":"float64","order":"little"}],["Velocity/Vitesse",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/zuqsKEoY+Jb++6c579Xfnxl/7BKZJ37w0/2kixhfLqb7tq7gCWe2leDhKu+2Mu3vg7cIffT/mrFSzVDjiv2a2SiUqzvX7c/WbZvvpT+XXu2xqnO3Tn37ac5gzS+tee6vrjAluuzvWZM/6GvGh/sZ80EgZ/2YGXPb9t7gC28aX8U7A6YPT/sv2mANPywfwO0rfX1f6j7btnzMGm3i928Z3/4K1iB/RKg6dcXsziAtYncs88Xaj5wauFDqD5GBwCo5rWY4AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["Air Temperature/Temp\\u00e9rature de l&#x27;air",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0tLAwEpBwYwUD4A5qapOBiDgfwBiLgFVFwAqk4EShtA5R2gtBGaekso/0c9hP5gD6EZoOJaUJoBap4Jmnp02gZDHuzMzWZQ/RIHZs0EAV24OgDxAB9W4AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["Water Temperature/La temp\\u00e9rature de l&#x27;eau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAEOh1kzQWDn/jQwkHNgQANnz4AAC0wcrh4mbwwGl+1Rdf2oh9ASDqh8GA0DD+zlW18H7pB7C9Uv4wAxTxOqTwFKf4CbD7FfGCquBTcf4s43UHVKDgDeKqDZ4AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["Approval/Approbation",{"type":"ndarray","array":["Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Provisional/Provisoire","Final/Finales","Final/Finales","Final/Finales","Final/Finales","Provisional/Provisoire"],"shape":[28],"dtype":"object","order":"little"}],["Uncertainty/Incertitude",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/5s1EwSEHbiuLy6w5ZJ3MAYDQYfDXzVi+g9JQmgnZQcGMBCByvM7LAGqvr5Y2KH1deAOuVYhh1lgc/gd0sBABKr+R/1A0wDOv0VE4AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["quality_symbol",{"type":"ndarray","array":[{"type":"number","value":"nan"},"B",{"type":"number","value":"nan"},"B","B",{"type":"number","value":"nan"},"E","B","B","B","B","B",{"type":"number","value":"nan"},{"type":"number","value":"nan"},"A",{"type":"number","value":"nan"},"B","B",{"type":"number","value":"nan"},"A",{"type":"number","value":"nan"},"B","B",{"type":"number","value":"nan"},{"type":"number","value":"nan"},"A","A",{"type":"number","value":"nan"}],"shape":[28],"dtype":"object","order":"little"}],["quality_label",{"type":"ndarray","array":["No flag","Ice Conditions","No flag","Ice Conditions","Ice Conditions","No flag","Estimated","Ice Conditions","Ice Conditions","Ice Conditions","Ice Conditions","Ice Conditions","No flag","No flag","Partial Day","No flag","Ice Conditions","Ice Conditions","No flag","Partial Day","No flag","Ice Conditions","Ice Conditions","No flag","No flag","Partial Day","Partial Day","No flag"],"shape":[28],"dtype":"object","order":"little"}],["date_string",{"type":"ndarray","array":["2024-05-14","2024-02-07","2023-09-19","2023-04-13","2023-02-08","2022-10-05","2022-05-19","2022-03-16","2022-02-01","2021-12-10","2021-03-04","2019-12-05","2019-09-24","2018-09-30","2018-05-27","2018-04-19","2018-03-15","2017-12-14","2017-09-13","2017-08-01","2017-05-27","2017-03-01","2017-01-25","2016-09-14","2016-07-13","2016-04-13","2016-03-09","2015-08-26"],"shape":[28],"dtype":"object","order":"little"}],["time",{"type":"ndarray","array":["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],"shape":[28],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1068356","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1068357"}}},"columns":[{"type":"object","name":"TableColumn","id":"p1068333","attributes":{"field":"date_string","title":"Date (UTC/TUC)","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p1068334"},"editor":{"type":"object","name":"StringEditor","id":"p1068335"}}},{"type":"object","name":"TableColumn","id":"p1068336","attributes":{"field":"time","title":"Time/Heure","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p1068337"},"editor":{"type":"object","name":"StringEditor","id":"p1068338"}}},{"type":"object","name":"TableColumn","id":"p1068339","attributes":{"field":"Discharge/D\\u00e9bit","title":"Discharge/D\\u00e9bit","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p1068340"},"editor":{"type":"object","name":"StringEditor","id":"p1068341"}}},{"type":"object","name":"TableColumn","id":"p1068342","attributes":{"field":"Mean Gauge Height/Niveau Moyen","title":"Mean Gauge Height/Niveau Moyen","width":180,"formatter":{"type":"object","name":"StringFormatter","id":"p1068343"},"editor":{"type":"object","name":"StringEditor","id":"p1068344"}}},{"type":"object","name":"TableColumn","id":"p1068345","attributes":{"field":"quality_label","title":"Quality","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p1068346"},"editor":{"type":"object","name":"StringEditor","id":"p1068347"}}},{"type":"object","name":"TableColumn","id":"p1068348","attributes":{"field":"Rating Curve Table Number/Num\\u00e9ro de cource de tarage","title":"Rating Curve #","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p1068349"},"editor":{"type":"object","name":"StringEditor","id":"p1068350"}}}],"index_position":null}}]}}';
                  const render_items = [{"docid":"43d6d067-a1f2-4efe-bc08-f106ceb3bf61","roots":{"p1068352":"db0a19a0-4c1d-4539-9ad2-ce5dac9887d9"},"root_ids":["p1068352"]}];
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