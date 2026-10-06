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
    
    
    const element = document.getElementById("b6a396d8-8caf-474d-9336-33652f5af25f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b6a396d8-8caf-474d-9336-33652f5af25f' but no matching script tag was found.")
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
                  const docs_json = '{"da81778e-bfc5-4c36-83c3-0681fc102d67":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p77719","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p77720"}}},"roots":[{"type":"object","name":"Column","id":"p77842","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p77724","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02OH014&lt;/strong&gt;:\\n        171 revised days; 0 removed.\\n        3.99% of the earlier published daily record changed.\\n        Affected interval: 2023-04-12 to 2023-09-30;\\n        longest consecutive revision run: 117 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p77725","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p77726"},"y_range":{"type":"object","name":"DataRange1d","id":"p77727"},"x_scale":{"type":"object","name":"LinearScale","id":"p77734"},"y_scale":{"type":"object","name":"LinearScale","id":"p77735"},"title":{"type":"object","name":"Title","id":"p77732"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p77775","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p77721","attributes":{"selected":{"type":"object","name":"Selection","id":"p77722","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p77723"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DBzcWAAAAwE8IKdFSIQlFoiWKRENlFEnRMEplVDRJhdCiSKWBRCnUr3T33gUCgUCQyww2xFCXG2a4Ea4w0pWuMsrVRhvjGte6zvVuMNaNbnKzccab4BYT3WqS20w2xVS3u8M0091phrvMNMvd7nGv+9xvtgfMMdeDHjLPfA9b4BELLfKoxzzuCYs96SlPW2KpZZZ7xrNWWOk5qzxvtRe8aI21XvKyV7xqnfU22Og1r9vkDW96y2ZbbLXN297xru12eM/7PvChj3xsp10+sdunPvO5Pfba5wv7HXDQl77ytW9865DDvvO9I476wTE/+snPjvvFr37zuxNOOuUPp/3pjLP+8rdz/vGv8y646D//uwQjIavxrAIAAA=="},"shape":[171],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JeSwXYByA8W/TdEyHpjGmZVkJY2maTdOb1XRO0xjrUJiW2GxWIfRWjiIioiQiSv1iaSqd3jSmZelQpmlZlmXdp6W01vPXZ3seEbXAc3dyoIiUZaD58wh11Jzk/6rOnShenWiKHVP4v+JRRbaitNum8t1jUBdeRfVz4h7+xg1o7jagnidp/PwQlG+1aMJHUN9Zmc53rUDJ/Yjmk8rghxajuvkGxcVvLz87F/X7flQh3prfsg+Ncw/qA3P38YeTUYIfoGl23s93TESl21CG7A7wV29D3XQdlb1NJj99M5rXl1CvsMriN4ai2NWjSRlF/WpNNn95FYrlC5rpy3L4u0pR9b9FCfQ/SJ8ygCrJ5xC9LxNNQC/q2vm5/MlpKIkP0Tybncf3T0JV3Y4yweEwPz4O9ZNbqPym5fMrt6Kxaka93bqA3x2O4mtBUz6GWtYd4cfWoHR9R7MgqJBfdgLV2DuU6IAifmchaq9BVCW+R/mjOWgiX6Bu9yzme+xFKXqM5uecEv7GXajaOlHcnI7x8xNQf2tFFTGjlN8ag8b1GurcSWX8zxtQwhrR3JTjfJf1qHLqUD6MoAlZdYLfUoFq1ieUzKXl/OFi1MFDqK74neQ75aHRL1EPeVfw1+xHudyDxn7eKX56CqrBBygrZ1XyGxNR291DlTqzij+wDc3yG6gtNqf5tpEou5vQ9FtV8wPDUNXXo0z9jSZpbQ2/rwrVkq8odcvO8CeXoU4cRvXcv5a/uABN9QDqCQvr+AlZKE970fi5n+VXpqEa340S53KO352E2rcD1UmHev64HWhib6Pumnae7xOFcrwZzZj1BX50BKr7FhTvv2hK1ln4ozWotvxA6Qi6yPcoR130HtVIQAN/UxGatkHUbosakwP/AWiWivBYBQAA"},"shape":[171],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/z1UXUhTYRg+DYsQERMREdERIv2JDPEqxndCIrzwQqgIiTyIiHghI0JkSFvE2EVEiIQMkVnDzP4gE5EwN4fZSjPzZ2a23FrLapmaDf/S9b7PObqb57zv9/59z/e8kyRJTtJFhSRJwTzDd8b2lYkIo9J/JQzb4QiJffSR373IttUb08kq/mVbf+Ca6m/OQL6Sev0ro1x06aeWvw00GXfgD5mXuZ6+vGqJ7WBHq9o3qxx50tlwCHUDud8YPdm2Va3OCuIbfqDubh9rTRPiae4A8uzpszhvWpzS8ie1+HGxE4/Pm9PGGC23i0fENuEp5aWIE3reDLI/xxYdZDvnyRmgc0jvERv0caL7BduidxXodDheM7rbll5xHXdJkhf1Sys9qN9S5xWb5K8fcDOKypQ+Rufp3mdii/yXa54y5tjTuzg/fsx+T6yhLmxnZsFjEUXfNrGK+Dt7uE7+rpW7XM9iTOzk+Irk/O69unRsGXA+4Hjqe5/nofxB5l2pOvmO567oy54Gb61DQUa5sHANPN3yxhil4/YvHEc8zDK6ffXgDfzQ3PGHWc85LmhOS5C5jsNxSCZ33O9a3qvL+YFcP+orkXGuM+8yvWUUPT4/o3t0tAD5JmMqoyd2ZB35i40LyLvZ8nkvnmxrbf+Upkd1fpMxkfNofoOGGYz8Y6T7QDd6w0HozOPMhK6l6Qbohs6hG2VhC7qRDz6CbqgP9Ej626/dC3MFx9YwF38Cd6Y+IE+JIN6aPvsbcY0Ce6S3RSM8r9zjwz3oncEH8fUe5wnnx9hPPKu2PR1IfUe0ew9r8Su499GLa+x3Z9viWlyazH29MXUfbVHcV7LUqnsYMn9iWwl3zDEGSyuDXMdTkvSRbeIN+xUs69vUzsET7VUA855LBs+0V5iL3gPzK9XVeD/S3wzb7XWp2DPKQ7w04wL/NFcKI8X/Qf2Nq9DV/OE58G1tzlD5jpaNQ/fFN0bRJ2T+p/XRyTSvVRSBV9IJ6tDcW6iXZ/iFOf0uVTcmo04mv5JyAf9LxBfem3QK/nf1LAoLwYfVmBiGvyAAntqXOnEv2tNJRtL5BCP0vzsf2RZvzAe/tv/0rsN8jv+T/15OgzxYBQAA"},"shape":[171],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/z1UX0hTcRS+lonsyUTKRNwIESNEREQk5F7xYYRESBAR0oaEiIiIiIRITkREfBARiWHhFTEVRGyIjRDdxNR02rRpmsk2bZktsznXwtR1zreb92Ef5993zvmdcyYIguvJ3ndRIFwK7jJa5ns8jPrHt3YgV5W6xVAo5Oyt3GdZ1rovSKy32Y7ECMKCbOgl1UfE69/c/sIoDCWGeXsrT8FfG3fGaPAW/gJvd8IB+BIffoMcSA3HpZncLGuavB7mF24U+RHfW+mD/0E/eIkH/oY8fdg/qmGLZeHMsQ592bgDdduvf2DsntbYlT4WGesnuufFM8Ky8WmW1cNaK8uTVaVW+HdNW8QTwv26SeaToofG2a5r3weqm6+8YxRby2fFU8LsFivyUyvgt8xbuX5XoXkCfDMFrxlDgz4TcK13RPRTXHHMAPqKj3yJ/NUdA2KAMJA6JB6SPXrouRgk1Hvkc+T8Td6e87i/qPuVeEz93ikeYb9uo3GQ5fpcVT/ycz9UZ72YtYQ668sc6Kslz8WoKWr7DRzWBqAf8+Nd9bGN6xxP819k2bCXYuV3CZ06zKzXtU1dlEhPc7rMSHPEfDUPclxK3CrivIV27i/0tMzGevVW8hrrZaMxHfGCEMtoSWoKIq/H/hX7Nd+DudL+wN/QEY+6Lf5TIH0qiX5k47UMRtqbqxLFSZmZIdQxrMXeWIL3sJ/CzeZt8Lfvo75Jm+0zePdSNjifJiM6zK/so96cdIl5qa8/8OvM32U/Q67KqeTHvv3fe5rjT5ZdfV3YT1ediHuSfSvoQ982tYq9SI5aZlly3sU+6nJG7bDHNmJPsZ8cFx85A705CX3QPmFOlB/9yZW5cRLzuGuPYFfuRLOxhPsVGjo3Ee+xf2K01Ew40XdB9obCdwisjTsGb9zwLtudfV14F7pPvAfqYtm3gvqFNBPmqom8H57Ls4oVjlOnb4X9S0oEiXkLzTGMNBfUT+hW+t9gf914Ne5TbXrxnu00/wVgIPWEkb4LPE+6c/zPnPMUtaFeqbXcq/hhPmSPkAjl/NYfsI/OYd5yQnr4/XmfeT+yHoXfY65mm/M7l4KbjOKYH33JFbGoi+56GXZl//U7fQuIL46Zwz3lqmZ5r+kO3iKfu3Za/AfxoPYFWAUAAA=="},"shape":[171],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2VUSyuEYRSebKQsrW0pS1n5AZSYKQs7pNSsXJopmpRLMpM0LoPxWZjNlGtTdiOLIyvZKDYkjdyjiNi4jef93vd58c3q6bznnOc85/J9tfl8vi0RlDVgfn1A9gHdif4Cu9fn89V3DMkD/LnIqMUY7GTXiBwB/fCTh7Y3nnYN+Bb+5LHuLXgG/9Tv99Qjrzde84blG/F1HT3S4vYRlBNgH/gYr/nCRv8vziCuAXlEx+2nR1qBIfDwfQ52I95LoT8AZByx060XtPyMJw+RcdrfbvgDQtv7rvkDpl5hHHlZ739+u7xA12UkLCXQ3YQ9XcCuio7Jndv3lPGn3fn5s0vyCUx2zZj5xeTA7XtIDoEhzJNzrAbfeYR5GVk2+V/A7uC0nAIrUEfzjdj6Ws+oROCfdLZM3Yy8w86B7x5YPDxn+OJWL++nDHUrwUu9H4hPgUfViT5syjEw6axaP0z0O2/7UncWgj7Vf3M2Lip/OzUuW8BL3Df7fzM87Is82o7LHh4Eea8qP5wwPItm/7O2D9bR84vJruLF/XOunA8xC3/xxoCdN/ssR99XmA/1sF/6idTz7PJMWJ1PsP3YdxF4dqBb2S3YN+fO/qiXd0Jd1L+CQHU/9HOftP/ryRTcFefGPM6BqPc8K5z/NepJ6neuOi8tj3gPJRbkDKjuhn3cwE46jt0j56D/BzE7D+6ZfurnnbFv6uJevMjvgu8/DvzQ01gFAAA="},"shape":[171],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0WSeVzMeRjH52hmfr+ZqWYqZLQmFMaopNcLoVkvEjmKaF/RsZIsTUOHdOiw0qGtdlO6BtHWKgmdrt39PumSohqGVkqRippqymhC/Xb2av96Xs/zvJ7z8z6wY82yHPQMuZ0r+7LwsgJdDDi+X2vRIJKITnfXiEfR85vysj3HlGjIrbSXkT6AduvCgB65Hc2/fWdIIulHITbFdvFrh5Gb+ynLImIEeVTPeTEZokTuni/oPtxh5DMYmsbb1o2Eln+Yew11oQ6XM1oHNPF1DQVuWa4KtDLZJ9o4fwQljk3Gb1o2hJKGHQcClyoR22rrDWeLEeRpmuWBVr9HW/vEqg2zFCiYde5Wnt8QWsA+ySPGFAh3SiiMD1ei4E/ZkW1LlEhYq/tryq4R1Gidy07V9E9qsc+4HUqgxG11b+uyKdC2ROLkTyODVMdP/n09BSxO8g3vjTHgGondG01jQERVo0DcTgeOgYAqKGeAmW2XcBmbCiXX5bk66Sw4oy4fqNjDgkyCmEMhkWCXamdPlREZ9GdIn46UaOqmko9QgAIp87wbePUsoPiMvg98jENJzJeOJfE47MNeZq4U6kKmNFlxJZ8LXdHXKjN2cWC3k+fFM+YU+EgQi0gkDpzm++0c57Lh4b9zjcP0zybEMeA/+8SC1Dw/ZwZIM1rSjeq58ON5seB+LweOWT4ojYubBeHye5mDNTqQ3VkZ60fjQpFL5grJYW0IvV/nWLWaCXblkbVFV5lgPaFT7ivBwNcpUXqVSwcTjnl8Xj4Z7AsnI593YqBtRWp/sB2DN9yAF1gPE7Z7RdSkmHChqQA7lC3Vh6xT/S9PRE2gYAVHHdCqQrZfsdtu6DOAE6ztuf4DDncPxqxRH8HhrXWCsWwjC0qOu5aFPWHBURMPXVkIHVr4heSlxj0ox031MVhbhcLVJ7kCSxo4qC8EHXpDh/UBGypreTg8jHfQM7yNwUbF5S2fb2KQJg2a7aPCYVXEZq1iWwWidlC1mrNfI53SLneL6FHURxBoiqBCzHeZ1vNyaFA8pigPOcoA5ulPPl1zMbBbnHrwp34MYqWvXYI0+jQ0RbleuoCDtGOwO6UGg5/DvWf1rKKDcfZ6/r7fJtEdM5ucFUICiVjd9yOiGNBPEFFTBANU7x7/8PIRE/inEgY/2DHgPM+rMS+VBhNX+uyKDDGQ64d6JcZikLvX/UjZKAbOcZDfovnDgGDb2kRzJjCZmQ0GZBY4ZbSI/tJjcz89/9txJhxcW/G5j8UEU4VohofG/+e/NCj0+Gav+j0N3jhnlCa7q5Gfj8uwoVyFeFtYgXpOFMACmdEVEhqULZBV6DzR8FK0Y52pEIfq1taOcT0MxJP6IioJh6zCNElcEg7ek0QflaQFY02lofsFVKgu9nftMGTAxoLiMNcJHBKWP2wSo//3MuuqOYwvZ0GSQ5U41QSHdabl/Af+GLQ4bbCOamPCiVzTvk4jJvj/zcE4ir+bdmlV3kfEm5IlZndqQcFrq33t7zBoiHlVy/sdh1dnM5wdwnCok096z56Ng0H1IoOZZWyImTnXTPRJiXwj9wYJD5CBl+ohu47RQbhwk72K+wUJFozby2UUuO4fcMeokQaxcyNRaL3WdL5v4p6NuJkGpTLRFetHDPj6rKze9yljmueiHvdnoSEYVOratl+2wiDP0cRDIsdA2SxOb2vHIKZ2aKGL5v55nP4CfX98mv9fbOK6S41wYPcudm+8xQZ+PnO+46j2tK6iVjJvZQ0H/gRpF5wNWAUAAA=="},"shape":[171],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p77776","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p77777"}}},"glyph":{"type":"object","name":"Scatter","id":"p77772","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p77773","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p77774","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p77783","attributes":{"data_source":{"id":"p77721"},"view":{"type":"object","name":"CDSView","id":"p77784","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p77785"}}},"glyph":{"type":"object","name":"Scatter","id":"p77780","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p77781","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p77782","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p77733","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p77760"},{"type":"object","name":"WheelZoomTool","id":"p77761","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p77762","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p77763","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p77769","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p77768","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p77770"},{"type":"object","name":"SaveTool","id":"p77771"},{"type":"object","name":"HoverTool","id":"p77840","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p77755","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p77756","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p77757"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p77758"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p77736","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p77737","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p77738","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p77739","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p77740","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p77741","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p77742","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p77743","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p77744","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p77745","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p77746","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p77747","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p77748","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p77749"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p77752","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p77751","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p77750","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p77753"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p77754","attributes":{"axis":{"id":"p77736"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p77759","attributes":{"dimension":1,"axis":{"id":"p77755"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p77778","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p77779","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p77775"}]}},{"type":"object","name":"LegendItem","id":"p77786","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p77783"}]}}]}}]}},{"type":"object","name":"Figure","id":"p77787","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p77726"},"y_range":{"type":"object","name":"DataRange1d","id":"p77789"},"x_scale":{"type":"object","name":"LinearScale","id":"p77796"},"y_scale":{"type":"object","name":"LinearScale","id":"p77797"},"title":{"type":"object","name":"Title","id":"p77794"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p77837","attributes":{"data_source":{"id":"p77721"},"view":{"type":"object","name":"CDSView","id":"p77838","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p77839"}}},"glyph":{"type":"object","name":"Scatter","id":"p77834","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p77835","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p77836","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p77795","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p77822"},{"type":"object","name":"WheelZoomTool","id":"p77823","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p77824","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p77825","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p77831","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p77830","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p77832"},{"type":"object","name":"SaveTool","id":"p77833"},{"type":"object","name":"HoverTool","id":"p77841","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p77817","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p77818","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p77819"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p77820"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p77798","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p77799","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p77800","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p77801","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p77802","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p77803","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p77804","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p77805","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p77806","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p77807","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p77808","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p77809","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p77810","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p77811"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p77814","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p77813","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p77812","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p77815"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p77816","attributes":{"axis":{"id":"p77798"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p77821","attributes":{"dimension":1,"axis":{"id":"p77817"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"da81778e-bfc5-4c36-83c3-0681fc102d67","roots":{"p77842":"b6a396d8-8caf-474d-9336-33652f5af25f"},"root_ids":["p77842"]}];
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