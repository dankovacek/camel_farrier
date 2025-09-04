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
    
    
    const element = document.getElementById("feff0422-d92f-4b9e-bb38-e2f011e4d5ca");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'feff0422-d92f-4b9e-bb38-e2f011e4d5ca' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.6.0.min.js"];
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
                  const docs_json = '{"2b9203f4-8d55-4b7c-b34b-76fd8510c09f":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1311496","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1311497"},"y_range":{"type":"object","name":"DataRange1d","id":"p1311498"},"x_scale":{"type":"object","name":"LinearScale","id":"p1311505"},"y_scale":{"type":"object","name":"LinearScale","id":"p1311506"},"title":{"type":"object","name":"Title","id":"p1311503"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1311530","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1311529","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1311538","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1311532","attributes":{"selected":{"type":"object","name":"Selection","id":"p1311533","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1311534"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"pyZL2SSfWEHYgTLJRZ9YQYwmP5ZNn1hBzlgAy3mfWEH90YyxfZ9YQZ9tToeIn1hBazjuqZSfWEGIq7d/n59YQQXHSGajn1hBKR0Lq66fWEHpFZ6Rsp9YQaG+cWe9n1hBCIcGTsGfWEFde9OSzJ9YQXVBAWDUn1hBzXTgNd+fWEHo+G2L459YQRZaUmHun1hBeCftR/KfWEGhkNYd/Z9YQUUqaHMBoFhBdQtJHxegWEHL2ugFG6BYQVyq1UomoFhBCVd3MSqgWEEt13MHNaBYQZ8TDV05oFhBwMEOM0SgWEFAPwDnT6BYQbvV/ytboFhBWwKoEl+gWEFHJ508VKBYQWFRPddjoFhBitUwAVmgWEGhn3PxbKBYQaO5baxhoFhB2bIWk2WgWEEjmzKue6BYQbzG3pR/oFhBmswMsJWgWEGdKryWmaBYQc7r1dukoFhBbt04qaygWEHl6WF/t6BYQeFvFWa7oFhB0DI7q8agWEEmSobEwqBYQa9CG7bjoFhBDchiz9+gWEGOqluXC6FYQQqHGX4PoVhBfCddwxqhWEF34RyqHqFYQZZ7bHJKoVhBl7vxrlKhWEEBelOFXaFYQRFpG2xhoVhBOsPmh3ehWEHw5LFue6FYQTJej4qRoVhBlrJdcZWhWEEZS02Nq6FYQep9gTenoVhB9AH7fLKhWEFhY81jtqFYQYPw03/MoVhBqJN/TdShWEH2Q/V2yaFYQQ4ooETRoVhBDCItG9yhWEF4oQQC4KFYQVNSdivVoVhBjBaBA+2hWEGMihfa96FYQedb7i/8oVhBI1Up3RGiWEG+cAfEFaJYQY85qAkholhB0zKI8CSiWEEI44zjRaJYQVxkccpJolhBt6be5l+iWEHvWsbNY6JYQc69Rep5olhB8AYcuIGiWEFkKeP9jKJYQakjvsuUolhB4hPy9ImiWEEL9N7bjaJYQbmCF5aColhBwsTauY6iWEGadaiQmaJYQSZBl3edolhBZzG8zd+iWEFPRsZ326JYQYiDiGv8olhBY++CwQCjWEGjlHeYC6NYQcmycWYTo1hB7MB+d0qjWEE0VohFUqNYQY2RmYtdo1hBfHegcmGjWEG0rYkyrqNYQTVlnIiyo1hBusfNX72jWEErd+BGwaNYQVIkGY3Mo1hBrLEtdNCjWEFkTWlL26NYQQarfzLfo1hBG/rCeOqjWEGtNdtf7qNYQaoKITf5o1hBiBY7Hv2jWEGiB4lkCKRYQez0WSUkpFhB3hIO1DmkWEET4DMqPqRYQf74lAFJpFhBOi3dz1CkWEFCL7TtZqRYQUq629RqpFhBE6lQG3akWEEfEnoCeqRYQbK3a8+lpFhBLP+atqmkWEFSRyb9tKRYQWHQIIHIpFhBMQq3x9OkWEFEqY1k46RYQXjcyoL5pFhBUZF/pwWlWEE11yR/EKVYQV3q6JcMpVhBZY+QbxelWEH7x1OIE6VYQSfM/V8epVhBKCrAeBqlWEHlTFKNUaVYQdpeDqZNpVhBKaiVxGOlWEH0TtyrZ6VYQWi9dcp9pVhB9Je/sYGlWEGwZkKooqVYQcJ99MCepVhBCWercLSlWEHnTVuJsKVYQZJi6LQeplhBoTWLzRqmWEF7N4+lJaZYQeQvMb4hplhBGZE3liymWEHdrtiuKKZYQWIGCaZJplhBQPdrjU2mWEEkoMKEbqZYQaWhNdtyplhByL1Xs32mWEHq3+7LeaZYQXxzVZPGplhBbZ3jq8KmWEGdALSj46ZYQYDlKYvnplhBBJwggwinWEHrrKjZDKdYQawqxtEtp1hBEzFFuTGnWEH9Ex7ZR6dYQaFOoMBLp1hBQC//uGynWEGe5XjRaKdYQb54d6KUp1hBTEXsupCnWEF1IHCTm6dYQUMS5KuXp1hByPx586KnWEFgA8XNlqdYQTzySqahp1hBoCS+vp2nWEHpLPj36qdYQb5uvLnip1hBsMsQ2vinWEGxUEGpAKhYQVKS/PALqFhB8/CW2A+oWEF5rcHRMKhYQcBMhQIpqFhBlzs92zOoWEFrGwAMLKhYQSsUueQ2qFhB0eYZ/TKoWEEiQ6YdSahYQWzXBDZFqFhBZGvGDlCoWEHiJCQnTKhYQQCVjSBtqFhB+84pv3yoWEFqMxEHiKhYQTjZuu6LqFhBYZ2Ux5aoWEH6KFMem6hYQTK0Dhi8qFhBcvU/CqyoWEH3tCTjtqhYQXNQxxOvqFhByDzlOqSoWEFqMxEHiKhYQRyb/E6TqFhBcu2ZWX+oWEHBLMiAdKhYQZfpDipwqFhBhFpCUWWoWEFdDPmBXahYQdp1XmFHqFhB2UC9eUOoWEHt0zRZLahYQWzTlnEpqFhBOHTimB6oWEGm8TRCGqhYQevDhWkPqFhB9nLrgQuoWEEFgeeI6qdYQb5uvLnip1hB0dUPctenWEHIaHyK06dYQT5q5bHIp1hBGM5TysSnWEH5wiOqrqdYQTBblcKqp1hBtan8ep+nWEFDEuSrl6dYQeaMYdOMp1hBYUY+lYSnWEEFZ83cj6dYQfKels9/p1hBqOYj116nWEF/Up/vWqdYQQIfuc9Ep1hBEQGq8yynWEGs+UsbIqdYQeO8TA4Sp1hBw+f3NQenWEFGdo5B86ZYQYUGN/rnplhB+RPBEuSmWEE7yS3zzaZYQQX/1jzCplhB8z4UFc2mWEHLcy9GxaZYQUrf9G26plhBv/GYSK6mWEF8OWZwo6ZYQY22+IifplhBtgu/QZSmWEGUPehyjKZYQacWwZqBplhB1RBMRH2mWEGpGipscqZYQZ2gW51qplhBt8Y0Vl+mWEGIpc9uW6ZYQYBAuZZQplhBBQwdflSmWEFPFciPEqZYQQBnbKgOplhBuz5mYQOmWEGxbgx6/6VYQTd5FaL0pVhBynm9uvClWEFh9cFz5aVYQQcuFqXdpVhBhHIhXtKlWEGiiyeoxqVYQedNW4mwpVhBvq8LoqylWEHZCzHKoaVYQcuRQKWVpVhBbcltzYqlWEH3zyLmhqVYQefqTJ97pVhBos8DuHelWEERnW6ZYaVYQQTlFRVOpVhBWTJUzkKlWEHQFBLnPqVYQcfryr5JpVhBfXZF8EGlWEEaV//HTKVYQeJts0M5pVhBnCH5/C2lWEHRk7kVKqVYQRKPCz4fpVhBvQ5NGROlWEEr5aZBCKVYQVYx8Rz8pFhB4+JSRfGkWEE8M+N26aRYQVpERTDepFhBY4CletKkWEH1vA80x6RYQanU3EzDpFhB1/BRdbikWEEEL4tpqKRYQcFhDHSHpFhBTFHhjIOkWEFEW/ZubaRYQUt+zodppFhBF0hisF6kWEG6hBJzVqRYQcbTrJtLpFhBFyCJtEekWEH7riRuPKRYQUrZAoc4pFhB72Gnry2kWEGSXIfIKaRYQf8CPo39o1hBeekjpvmjWEGM7t3O7qNYQRv6wnjqo1hBzC6Cod+jWEGfXUDs06NYQdwRBabIo1hBnF3e18CjWEGI2amRtaNYQcWamKqxo1hBVThr06ajWEHQyVvsoqNYQYPnMaaXo1hBKEEX2I+jWEEabfUAhaNYQZgn6hmBo1hBdledtl+jWEEkqJbPW6NYQTKbhvhQo1hBE7yBEU2jWEF/W3bLQaNYQUXIbhY2o1hBCZJr0CqjWEFTZGvpJqNYQQdqbRIco1hBqM96IAijWEHFWYdJ/aJYQUNnjfP4olhBioeGXqGiWEF2JJkInaJYQU1EyjGSolhBpdvcSo6iWEGVBBN0g6JYQd6nPjd7olhBCFV7YHCiWEEAFZJ5bKJYQc9/1jNholhBfB3vTF2iWEGhAjZ2UqJYQd5dbjlKolhBH8e7Yj+iWEFcjdh7O6JYQZX/KqUwolhBLCJsaCiiWEFxGMWRHaJYQS4H5qoZolhBZbWpjgOiWEFYc/LA+6FYQQrpXnvwoVhBEGOFlOyhWEGjyPK94aFYQTeUH2jdoVhBgCiSkdKhWEEcULyqzqFYQYxqM7itoVhBCBpi0amhWEFkquuLnqFYQXY3HKWaoVhB/Zilzo+hWEH99dfni6FYQTwmbKKAoVhBymCgu3yhWEGCjGzJW6FYQdROpeJXoVhBD/lLnUyhWEHlmIa2SKFYQUHGiMQnoVhBx+3H3SOhWEHYja0V+KBYQb5E+r/zoFhB9biCE96gWEGr78os2qBYQbo0bRHEoFhB7J24KsCgWEH9AG0PqqBYQaOcuyimoFhBPGWh45qgWEFO3vH8lqBYQZ/r0yaMoFhBdjQmQIigWEGTLPBOZ6BYQRnXmTVroFhBt46U8F+gWEF5pzNGZKBYQYrVMAFZoFhB3GeJGlWgWEEu9IFESqBYQTxW3F1GoFhBgpDlQjCgWEHkJENcLKBYQc104DXfn1hB32R5HOOfWEGBkAIhi59YQTSZhHaPn1hBV1fNMYSfWEHFF1sYiJ9YQQSimUJ9n1hBSYgmKYGfWEGNcGdTdp9YQad88zl6n1hB78I2ZG+fWEHh9MFKc59YQWNgq1pSn1hBxgAzQVafWEGsjoJrS59YQepUCVJPn1hBykBbfESfWEHiLOFiSJ9YQfomQx49n1hBq4i6c0GfWEH6+B4vNp9YQSEjoxU6n1hByU78Py+fWEGFaQMNN59YQf1Hn1FCn1hBiBKrHkqfWEEEE1v0VJ9YQey11UlZn1hBAeSKH2SfWEFtsxQGaJ9YQeH0wUpzn1hBh6FNMXefWEECBQ0Hgp9YQYpNORCSn1hBY90B5pyfWEEQp5LMoJ9YQdYQVBGsn1hB1XUNxbefWEGMuTvvrJ9YQcJ7ztWwn1hBhx3//6WfWEGRBZHmqZ9YQcJg0KGen1hBPRNV96KfWEG45Jayl59YQcMKJ5mbn1hBi+xew5CfWEEE/32QmJ9YQfDptrqNn1hBCxzpw52fWEGWqrWZqJ9YQW/kR4Csn1hB/AB6qqGfWEEQO513qZ9YQcJg0KGen1hB+mBhiKKfWEG45Jayl59YQYirt3+fn1hBazjuqZSfWEEE/32QmJ9YQfDptrqNn1hBXdZFoZGfWEGLz41chp9YQZIxD7KKn1hBA6FZbX+fWEF2y+ZTg59YQVn2Jn54n1hBoUazZHyfWEGHz/WOcZ9YQXc2DVx5n1hBgMhQhm6fWEEr39tscp9YQTfPIZdnn1hBugusfWufWEFMjwE5YJ9YQRu8fY5kn1hBszokdE6fWEFjYKtaUp9YQSRD/IRHn1hBrI6Ca0ufWEFpz9WVQJ9YQcpAW3xEn1hBYp2+NzmfWEG6djWNPZ9YQeQe93Inn1hBe3l5WSufWEHMrNeDIJ9YQUItWWokn1hBgOzHJRmfWEHVZDp7HZ9YQUKaqzYSn1hBzFgrHRafWEHQy5BHC59YQTewDy4Pn1hBKIF3WASfWEFvi/U+CJ9YQUy6X2n9nlhBcOrcTwGfWEE4d0l69p5YQTzNxWD6nlhB2nhDHO+eWEEa574C855YQZVVMC3onlhBtumqE+yeWEEUth4+4Z5YQRVwmCTlnlhBh/gl+u+eWEHI0ZJP9J5YQcmkEgvpnlhB0nV1LfWeWEFsdwgDAJ9YQQD2A9AHn1hBVQ+PFBOfWEEkSoMdI59YQYt/8tgXn1hBIYtryCufWEGRmMnyIJ9YQacmS9kkn1hB"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1311539","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1311540"}}},"glyph":{"type":"object","name":"Patch","id":"p1311535","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1311536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1311537","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1311550","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1311544","attributes":{"selected":{"type":"object","name":"Selection","id":"p1311545","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1311546"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1311551","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1311552"}}},"glyph":{"type":"object","name":"Scatter","id":"p1311547","attributes":{"x":{"type":"value","value":-13284422.753306095},"y":{"type":"value","value":6454722.76658772},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1311548","attributes":{"x":{"type":"value","value":-13284422.753306095},"y":{"type":"value","value":6454722.76658772},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1311549","attributes":{"x":{"type":"value","value":-13284422.753306095},"y":{"type":"value","value":6454722.76658772},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1311560","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1311554","attributes":{"selected":{"type":"object","name":"Selection","id":"p1311555","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1311556"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1311561","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1311562"}}},"glyph":{"type":"object","name":"Scatter","id":"p1311557","attributes":{"x":{"type":"value","value":-13284418.300526464},"y":{"type":"value","value":6454675.959996632},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1311558","attributes":{"x":{"type":"value","value":-13284418.300526464},"y":{"type":"value","value":6454675.959996632},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1311559","attributes":{"x":{"type":"value","value":-13284418.300526464},"y":{"type":"value","value":6454675.959996632},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1311504","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1311517"},{"type":"object","name":"WheelZoomTool","id":"p1311518","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1311519","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1311520","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1311526","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1311525","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1311527"},{"type":"object","name":"SaveTool","id":"p1311528"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1311512","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1311513","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1311514","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1311515"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1311507","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1311508","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1311509","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1311510"}}}],"center":[{"type":"object","name":"Grid","id":"p1311511","attributes":{"axis":{"id":"p1311507"}}},{"type":"object","name":"Grid","id":"p1311516","attributes":{"dimension":1,"axis":{"id":"p1311512"}}},{"type":"object","name":"Legend","id":"p1311541","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1311542","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1311538"}]}},{"type":"object","name":"LegendItem","id":"p1311553","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1311550"}]}},{"type":"object","name":"LegendItem","id":"p1311563","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1311560"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"2b9203f4-8d55-4b7c-b34b-76fd8510c09f","roots":{"p1311496":"feff0422-d92f-4b9e-bb38-e2f011e4d5ca"},"root_ids":["p1311496"]}];
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