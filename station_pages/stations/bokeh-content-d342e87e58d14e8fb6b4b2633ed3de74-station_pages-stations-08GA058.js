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
    
    
    const element = document.getElementById("a78755a9-55cb-4e93-bafa-d012526a9b5f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a78755a9-55cb-4e93-bafa-d012526a9b5f' but no matching script tag was found.")
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
                  const docs_json = '{"ba20bc0b-4557-4cab-bf04-b0fd2b047896":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p110923","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p110924"}}},"roots":[{"type":"object","name":"Column","id":"p111063","attributes":{"children":[{"type":"object","name":"Figure","id":"p110925","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p110926"},"y_range":{"type":"object","name":"DataRange1d","id":"p110927"},"x_scale":{"type":"object","name":"LinearScale","id":"p110935"},"y_scale":{"type":"object","name":"LinearScale","id":"p110936"},"title":{"type":"object","name":"Title","id":"p110928","attributes":{"text":"08GA058 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p110989","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p110983","attributes":{"selected":{"type":"object","name":"Selection","id":"p110984","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p110985"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJjwvV33EAMDw41VtWBaIa4YTGcIZoLpDUfidA8BAIuO1kUoAAAA"},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p110990","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p110991"}}},"glyph":{"type":"object","name":"VArea","id":"p110986","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p110987","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p110988","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p111000","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p110994","attributes":{"selected":{"type":"object","name":"Selection","id":"p110995","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p110996"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLhR80rrEAMDg4LBA61DAG5txbcQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111001","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111002"}}},"glyph":{"type":"object","name":"VArea","id":"p110997","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p110998","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p110999","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p111009","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p111003","attributes":{"selected":{"type":"object","name":"Selection","id":"p111004","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p111005"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJBo8NM8xMDAkGDsAqZXPLME0x9m6oNpC19VMN3AIA2mT2wWANMC6WxgOkLqjwaIXnD2I5h+0fBc4xAA3AYRoVgAAAA="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111010","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111011"}}},"glyph":{"type":"object","name":"VArea","id":"p111006","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p111007","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p111008","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p111018","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p111012","attributes":{"selected":{"type":"object","name":"Selection","id":"p111013","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p111014"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhwIVT9EAMDg0aLN5guMHcE0ztemYFphnk66ocA506UFygAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111019","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111020"}}},"glyph":{"type":"object","name":"VArea","id":"p111015","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p111016","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p111017","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p111027","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p111021","attributes":{"selected":{"type":"object","name":"Selection","id":"p111022","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p111023"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHBYOEH1EAMDQ0dIm+ohAGhH7+kQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111028","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111029"}}},"glyph":{"type":"object","name":"VArea","id":"p111024","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p111025","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p111026","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.015680000744760017},"y2":{"type":"value","value":1.02},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p111036","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p111030","attributes":{"selected":{"type":"object","name":"Selection","id":"p111031","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p111032"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXPaXjLBwDA4T9VwpSsHWKUrC1Cq+IoMVdqjlBHdEpWUzFHoy3iaUeYI6ZIzRGlllJkjMWxis6Rrh1R7Zo545rMGVPEUYu5onPs2W+f3s+vIAjlo1bLywRB0EXnYMPgbLTfWIijHXMxsDYLC9JnonJgGla1moKmwASMOZ+M7j1JmLVUjZIJCViqGITa0His86gX2iq647CtndFviMH1ie1QEROB14LD0XizGUYVh6IrNwQzMkQoHhT0/6vf6058/n6CgR33UPnZdTQ1vIDuoy6UZB5BbdsDaPtjF/pXbkWFMg+NT1ega6cRxcmzUROSgVbnRPRljkV5u+FouNIfnasUKIqPRfWzSLT80By9yY1R1igY9cdqYv/TkeVHQXYXVVevonn1OfTEV6L0eSnqbEVoH2fDQKMtqCxbh6Yvc9AtW4SSa1moXZOGtv5a9D9PQsWuBDR+Ho+uxj1QfDwGNbMj0Npegr5rISg3B6Hhk1cd+b94jKLdVagefwUtYjd6j1egbE4J6jvsR8f1nSisLUDVgFw0v1yOnt0LUJqSibr3p6G9PAUDc0ajMnoomm70Q/faOJQMjEZtQIq2PU3Rn9IQFaG10VjxMoa/oRrFMbdRc9OD1twz6BtYjvJXxWjYuw+dE3agKGwTqn81o2XuMvTGzEeZdxbq16WiY9B4FGoSUfWjCs3avugJ64bSyvaom9ca7R2bYMDbAJXrBTQNfhHNv+YhSgpvoXbiZbR9cBr9lWWo+MqBxthCdN3ajuK8fNSo1qD1n2z0Fc5D+Rd6NDSZik7XOBTNH4XqToPR8mdv9OZ1QdkQGepfh6NjXxgKk+qjqum7Dvx/e4ae+Q9QKvei7vYltG84iYEhx1D55hCa7HvRPWkbSppZUHtiFdoWLEG/fC4qqmag8dvJ6BqajOK3I1GzfyBaJ/dCX7POKD/ZFg0LW6KzcyiK7tRDteVNe/4JT9H71oeyohuon3IRHZITKJw6iqpFB9HcZQ967lhRmr8BdcNWov3dYgwUzUHl1Oloaj4J3ac0KDGOQG3XAWi72xP9+Z1QMbwNGoUW6PpJjOLUuqj58LWM/+kn6DPeQ3m362i4dx6dG10oGnEE1bUOoOXALvSmbkVZizzUn1mBjsVGFOJmo8qXjuZNE9EzYixKaw9H3cH+aNcpMNAiFpVnI9H0dXN0xzVGyf06qC2oacd/pB/9te+i4tBVNE47h66WlSh2l6JmSRFau9vQd38zyjevQ4M6B51Bi1B0OAvVaWloCdei152EsuwE1PeIR8eD7ihsiUHVqAg015Gg53AIStODUNfqVVv+5x5jILsKlYoraHp4Ft1bKlCSWILa4P1oc+xEf3oBKlrnovH8cnQtXYDinpmoeaRD69YU9CWORnndoWgo7ofOjDgUSaNRfUGKlmVN0duzIcqqa6He+rIN/0+rUah3G1U/e9A8/Qx6pOUovViMuuX70P7xDgxUb0Tld2Y0jV6G7nrzUVIyC7UzUtH20Xj0X0xEhUmFxl590fW4K4q3tUdNUmu0ipqgr6QBymcKaIh4EcX/0kMU5dxCde/LaPnrFHq3laFsjAP19QvRUbodBX0+qiLXoPn3bPTkzENpHz3q/FPQvn0cBsaMQmWDwWj6pTe69V1QEiVD7eVwtK0IQ3+f+qh48jaS//fP0DX2AYrf86LmyCW0zjqJvqhjKPccQsM3e9HZd1tk2b92UBNQgAoAAA=="},"shape":[336],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/71WS0iUURT+cyERIS1aiTQRLqKUWUiESFx3LSQkKJA2SrRo1UJkFi4aXUSrKCuRoWB6DVb2sMleNs2MD3QynMYUy0JGGYQwppeZmjm3e87853S50+BYkJuPe/9zz/nOd757R8uCv0W39Z8xJWWo4dx18UNK954N7WJeSkd+sy8Dl6WsPd37QKhDdZtqngspZTy60CdWpPTune6GtTs81MNrlVceLBi210MiXS8MWDndOAYY3nLiHcTFq08NAtYeqQiJNJ/HcE7uOPkQ1o6a8i5Y1xaU+jNQhckbX/x8nnj8VHnmtwdsvk+YVzrvAKAoK+sTS2pd4n/G39U5x0T0EdfX+g7PrXQxEi+qvxo/Qi3fpU/t4za/CbHOsqaK80ewbol/WOeJCHEzsV4+p+KtA4kk5HU4J1HPpg/7IxwH9cavhlGHiCuI+rQkA9wn6aLCvANVv/vVdMc5QP7O+jc4v7ydr7GvivhLez3I9dL8e3jOVE/1KzuKujPmmquO6nyo/ui9jLXya8gVvMv7oEvRoX7M6womIJ/iGbd1ien6hCOuWYwvdCZtvp8hPlS1e4L7A182bo5i/NbOV+jbePUw+5Xqgc+bWvvYd3r/tp/Jlyr/COjUFPS+5Xpwj2LbXth69LOeKeyzh+dIeWie5FuIT/ie8lxJb1N3moeuk10Pke6zxmdq6fiQvp+Tnwj1+1dQir6t3Jg3yjpqdTEvoZ4P+lJ13G3H8LyVGouhHyeLB3T9+bvuO1MPzc9/9Dvta31Yza2jMK+68q4Iz5nmQPyy+dt8P8x3xPQ97ZvvBcWZ70+29wjqBBruZ6CZ18xv7md7x+j+ZcP0HDsZ6Z6uht/VHMWuO4wwv0Ln7ZzRPLeoeCd8HYzfcE4314z0+0i/g8rXYrrxGuRVelyx+XvFLNa5wLigeHg8HvEe34u2rJjO28r4EfOfZ1xGf59lNL/PoO4tWVHxi+87fIbXc4iXuS/qw+Rt8jF5EK5Wn5D6Nc9THapL/AiJX65oniekOeWKX1Xf629d/GckXc39tdY3fUZ6mb772/8DfwEfhRfWgAoAAA=="},"shape":[336],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111037","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111038"}}},"glyph":{"type":"object","name":"Line","id":"p111033","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p111034","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p111035","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p111046","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p111040","attributes":{"selected":{"type":"object","name":"Selection","id":"p111041","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p111042"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHBcvkDnEAB+Gi5FCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHB4WPXDHgBzCndgCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111047","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111048"}}},"glyph":{"type":"object","name":"Scatter","id":"p111043","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p111044","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p111045","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p111056","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p111050","attributes":{"selected":{"type":"object","name":"Selection","id":"p111051","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p111052"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p111057","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p111058"}}},"glyph":{"type":"object","name":"Scatter","id":"p111053","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p111054","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p111055","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p110934","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p110961"},{"type":"object","name":"WheelZoomTool","id":"p110962","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p110963","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p110964","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p110970","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p110969","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p110971","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p110972","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p110973","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p110974","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p110980","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p110979","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p110981"},{"type":"object","name":"SaveTool","id":"p110982"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p110956","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p110957","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p110958"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p110959"}}}],"right":[{"type":"object","name":"Legend","id":"p110992","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p110993","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p110989"},{"id":"p111000"},{"id":"p111009"},{"id":"p111018"},{"id":"p111027"}]}},{"type":"object","name":"LegendItem","id":"p111039","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p111036"}]}},{"type":"object","name":"LegendItem","id":"p111049","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p111046"}]}},{"type":"object","name":"LegendItem","id":"p111059","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p111056"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p110937","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p110938","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p110939","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p110940","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p110941","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p110942","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p110943","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p110944","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p110945","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p110946","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p110947","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p110948","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p110949","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p110950"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p110953","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p110952","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p110951","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p110954"}}}],"center":[{"type":"object","name":"Grid","id":"p110955","attributes":{"axis":{"id":"p110937"}}},{"type":"object","name":"Grid","id":"p110960","attributes":{"dimension":1,"axis":{"id":"p110956"}}}]}},{"type":"object","name":"Div","id":"p111060","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p111062","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p111061","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"ba20bc0b-4557-4cab-bf04-b0fd2b047896","roots":{"p111063":"a78755a9-55cb-4e93-bafa-d012526a9b5f"},"root_ids":["p111063"]}];
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