
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.f383d034bf234d5c1876.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2115.baseline.en.d345b8d59ba6770a17b1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5349.baseline.en.61f3649e7cd67a3ac680.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.en.a4d5b8ce55e0f25b6ec1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.7f9f68c595dfcef4f605.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.en.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5019.baseline.en.723e311f4a05eaa581cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/235.baseline.en.cc824a8cccdfe3bda9ad.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.en.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4143.baseline.en.2e2d663dfd0af9c78f7d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.baseline.en.3bf7091438aa3237ab29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3395.baseline.en.6bebcf5d55a9a738560c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.baseline.en.bd12189515db74facbbf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.baseline.en.3a519f1ef58d0e8c891c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.51a37bc9f3fe7e46ff2c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2115.baseline.en.75f0868ea801ce96f4cd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.cd97aa36693bd9e67b06.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.cb164c3255e5d577ddea.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/open_sans/opensans_n4.5460e0463a398b1075386f51084d8aa756bafb17.woff2?h1=dmluZS1yZXNwb25zaXZlLXRoZW1lLm15c2hvcGlmeS5jb20&hmac=0b36409659a4f6a3a2c536e183968fb8b9c62b6faf53f5d0c481c549f1a5f1e5","https://fonts.shopifycdn.com/open_sans/opensans_n6.63a74f6cbbfef729fb07955b2d5b4cc83273862e.woff2?h1=dmluZS1yZXNwb25zaXZlLXRoZW1lLm15c2hvcGlmeS5jb20&hmac=00326c247e76516d6ef1e5fefe21aca5d3e80dedc4699ff667ec6f8ef1c0d4d5"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/1125/7104/files/logo_733496c1-3d2c-49f4-adb6-a0d2c5e8ac13_x320.png?v=1613514429"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  