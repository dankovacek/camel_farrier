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
    
    
    const element = document.getElementById("f3a475c2-1925-4bd9-b56a-ad79daeb5431");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3a475c2-1925-4bd9-b56a-ad79daeb5431' but no matching script tag was found.")
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
                  const docs_json = '{"469834f1-e8fa-42a6-8c9b-60987705dbad":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p112775","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p112776"}}},"roots":[{"type":"object","name":"Column","id":"p112915","attributes":{"children":[{"type":"object","name":"Figure","id":"p112777","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p112778"},"y_range":{"type":"object","name":"DataRange1d","id":"p112779"},"x_scale":{"type":"object","name":"LinearScale","id":"p112787"},"y_scale":{"type":"object","name":"LinearScale","id":"p112788"},"title":{"type":"object","name":"Title","id":"p112780","attributes":{"text":"08GA058 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p112841","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112835","attributes":{"selected":{"type":"object","name":"Selection","id":"p112836","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112837"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJjwvV33EAMDw41VtWBaIa4YTGcIZoLpDUfidA8BAIuO1kUoAAAA"},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112842","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112843"}}},"glyph":{"type":"object","name":"VArea","id":"p112838","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p112839","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p112840","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p112852","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112846","attributes":{"selected":{"type":"object","name":"Selection","id":"p112847","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112848"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLhR80rrEAMDg4LBA61DAG5txbcQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112853","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112854"}}},"glyph":{"type":"object","name":"VArea","id":"p112849","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p112850","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p112851","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p112861","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112855","attributes":{"selected":{"type":"object","name":"Selection","id":"p112856","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112857"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJBo8NM8xMDAkGDsAqZXPLME0x9m6oNpC19VMN3AIA2mT2wWANMC6WxgOkLqjwaIXnD2I5h+0fBc4xAA3AYRoVgAAAA="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112862","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112863"}}},"glyph":{"type":"object","name":"VArea","id":"p112858","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p112859","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p112860","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p112870","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112864","attributes":{"selected":{"type":"object","name":"Selection","id":"p112865","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112866"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhwIVT9EAMDg0aLN5guMHcE0ztemYFphnk66ocA506UFygAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112871","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112872"}}},"glyph":{"type":"object","name":"VArea","id":"p112867","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p112868","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p112869","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p112879","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112873","attributes":{"selected":{"type":"object","name":"Selection","id":"p112874","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112875"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHBYOEH1EAMDQ0dIm+ohAGhH7+kQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112880","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112881"}}},"glyph":{"type":"object","name":"VArea","id":"p112876","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p112877","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p112878","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p112888","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112882","attributes":{"selected":{"type":"object","name":"Selection","id":"p112883","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112884"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXPaXjLBwDA4T9VwpSsHWKUrC1Cq+IoMVdqjlBHdEpWUzFHoy3iaUeYI6ZIzRGlllJkjMWxis6Rrh1R7Zo545rMGVPEUYu5onPs2W+f3s+vIAjlo1bLywRB0EXnYMPgbLTfWIijHXMxsDYLC9JnonJgGla1moKmwASMOZ+M7j1JmLVUjZIJCViqGITa0His86gX2iq647CtndFviMH1ie1QEROB14LD0XizGUYVh6IrNwQzMkQoHhT0/6vf6058/n6CgR33UPnZdTQ1vIDuoy6UZB5BbdsDaPtjF/pXbkWFMg+NT1ega6cRxcmzUROSgVbnRPRljkV5u+FouNIfnasUKIqPRfWzSLT80By9yY1R1igY9cdqYv/TkeVHQXYXVVevonn1OfTEV6L0eSnqbEVoH2fDQKMtqCxbh6Yvc9AtW4SSa1moXZOGtv5a9D9PQsWuBDR+Ho+uxj1QfDwGNbMj0Npegr5rISg3B6Hhk1cd+b94jKLdVagefwUtYjd6j1egbE4J6jvsR8f1nSisLUDVgFw0v1yOnt0LUJqSibr3p6G9PAUDc0ajMnoomm70Q/faOJQMjEZtQIq2PU3Rn9IQFaG10VjxMoa/oRrFMbdRc9OD1twz6BtYjvJXxWjYuw+dE3agKGwTqn81o2XuMvTGzEeZdxbq16WiY9B4FGoSUfWjCs3avugJ64bSyvaom9ca7R2bYMDbAJXrBTQNfhHNv+YhSgpvoXbiZbR9cBr9lWWo+MqBxthCdN3ajuK8fNSo1qD1n2z0Fc5D+Rd6NDSZik7XOBTNH4XqToPR8mdv9OZ1QdkQGepfh6NjXxgKk+qjqum7Dvx/e4ae+Q9QKvei7vYltG84iYEhx1D55hCa7HvRPWkbSppZUHtiFdoWLEG/fC4qqmag8dvJ6BqajOK3I1GzfyBaJ/dCX7POKD/ZFg0LW6KzcyiK7tRDteVNe/4JT9H71oeyohuon3IRHZITKJw6iqpFB9HcZQ967lhRmr8BdcNWov3dYgwUzUHl1Oloaj4J3ac0KDGOQG3XAWi72xP9+Z1QMbwNGoUW6PpJjOLUuqj58LWM/+kn6DPeQ3m362i4dx6dG10oGnEE1bUOoOXALvSmbkVZizzUn1mBjsVGFOJmo8qXjuZNE9EzYixKaw9H3cH+aNcpMNAiFpVnI9H0dXN0xzVGyf06qC2oacd/pB/9te+i4tBVNE47h66WlSh2l6JmSRFau9vQd38zyjevQ4M6B51Bi1B0OAvVaWloCdei152EsuwE1PeIR8eD7ihsiUHVqAg015Gg53AIStODUNfqVVv+5x5jILsKlYoraHp4Ft1bKlCSWILa4P1oc+xEf3oBKlrnovH8cnQtXYDinpmoeaRD69YU9CWORnndoWgo7ofOjDgUSaNRfUGKlmVN0duzIcqqa6He+rIN/0+rUah3G1U/e9A8/Qx6pOUovViMuuX70P7xDgxUb0Tld2Y0jV6G7nrzUVIyC7UzUtH20Xj0X0xEhUmFxl590fW4K4q3tUdNUmu0ipqgr6QBymcKaIh4EcX/0kMU5dxCde/LaPnrFHq3laFsjAP19QvRUbodBX0+qiLXoPn3bPTkzENpHz3q/FPQvn0cBsaMQmWDwWj6pTe69V1QEiVD7eVwtK0IQ3+f+qh48jaS//fP0DX2AYrf86LmyCW0zjqJvqhjKPccQsM3e9HZd1tk2b92UBNQgAoAAA=="},"shape":[336],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/71WS0iUURT+cyERIS1aiTQRLqKUWUiESFx3LSQkKJA2SrRo1UJkFi4aXUSrKCuRoWB6DVb2sMleNs2MD3QynMYUy0JGGYQwppeZmjm3e87853S50+BYkJuPe/9zz/nOd757R8uCv0W39Z8xJWWo4dx18UNK954N7WJeSkd+sy8Dl6WsPd37QKhDdZtqngspZTy60CdWpPTune6GtTs81MNrlVceLBi210MiXS8MWDndOAYY3nLiHcTFq08NAtYeqQiJNJ/HcE7uOPkQ1o6a8i5Y1xaU+jNQhckbX/x8nnj8VHnmtwdsvk+YVzrvAKAoK+sTS2pd4n/G39U5x0T0EdfX+g7PrXQxEi+qvxo/Qi3fpU/t4za/CbHOsqaK80ewbol/WOeJCHEzsV4+p+KtA4kk5HU4J1HPpg/7IxwH9cavhlGHiCuI+rQkA9wn6aLCvANVv/vVdMc5QP7O+jc4v7ydr7GvivhLez3I9dL8e3jOVE/1KzuKujPmmquO6nyo/ui9jLXya8gVvMv7oEvRoX7M6womIJ/iGbd1ien6hCOuWYwvdCZtvp8hPlS1e4L7A182bo5i/NbOV+jbePUw+5Xqgc+bWvvYd3r/tp/Jlyr/COjUFPS+5Xpwj2LbXth69LOeKeyzh+dIeWie5FuIT/ie8lxJb1N3moeuk10Pke6zxmdq6fiQvp+Tnwj1+1dQir6t3Jg3yjpqdTEvoZ4P+lJ13G3H8LyVGouhHyeLB3T9+bvuO1MPzc9/9Dvta31Yza2jMK+68q4Iz5nmQPyy+dt8P8x3xPQ97ZvvBcWZ70+29wjqBBruZ6CZ18xv7md7x+j+ZcP0HDsZ6Z6uht/VHMWuO4wwv0Ln7ZzRPLeoeCd8HYzfcE4314z0+0i/g8rXYrrxGuRVelyx+XvFLNa5wLigeHg8HvEe34u2rJjO28r4EfOfZ1xGf59lNL/PoO4tWVHxi+87fIbXc4iXuS/qw+Rt8jF5EK5Wn5D6Nc9THapL/AiJX65oniekOeWKX1Xf629d/GckXc39tdY3fUZ6mb772/8DfwEfhRfWgAoAAA=="},"shape":[336],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112889","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112890"}}},"glyph":{"type":"object","name":"Line","id":"p112885","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p112886","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p112887","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p112898","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112892","attributes":{"selected":{"type":"object","name":"Selection","id":"p112893","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112894"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHBcvkDnEAB+Gi5FCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHB4WPXDHgBzCndgCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112899","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112900"}}},"glyph":{"type":"object","name":"Scatter","id":"p112895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p112896","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p112897","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p112908","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p112902","attributes":{"selected":{"type":"object","name":"Selection","id":"p112903","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p112904"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p112909","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p112910"}}},"glyph":{"type":"object","name":"Scatter","id":"p112905","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p112906","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p112907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p112786","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p112813"},{"type":"object","name":"WheelZoomTool","id":"p112814","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p112815","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p112816","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p112822","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p112821","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p112823","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p112824","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p112825","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p112826","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p112832","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p112831","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p112833"},{"type":"object","name":"SaveTool","id":"p112834"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p112808","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p112809","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p112810"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p112811"}}}],"right":[{"type":"object","name":"Legend","id":"p112844","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p112845","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p112841"},{"id":"p112852"},{"id":"p112861"},{"id":"p112870"},{"id":"p112879"}]}},{"type":"object","name":"LegendItem","id":"p112891","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p112888"}]}},{"type":"object","name":"LegendItem","id":"p112901","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p112898"}]}},{"type":"object","name":"LegendItem","id":"p112911","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p112908"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p112789","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p112790","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p112791","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p112792","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p112793","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p112794","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p112795","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p112796","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p112797","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p112798","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p112799","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p112800","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p112801","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p112802"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p112805","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p112804","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p112803","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p112806"}}}],"center":[{"type":"object","name":"Grid","id":"p112807","attributes":{"axis":{"id":"p112789"}}},{"type":"object","name":"Grid","id":"p112812","attributes":{"dimension":1,"axis":{"id":"p112808"}}}]}},{"type":"object","name":"Div","id":"p112912","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p112914","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p112913","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"469834f1-e8fa-42a6-8c9b-60987705dbad","roots":{"p112915":"f3a475c2-1925-4bd9-b56a-ad79daeb5431"},"root_ids":["p112915"]}];
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