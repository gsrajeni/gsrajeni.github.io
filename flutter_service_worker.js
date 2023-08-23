'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"splash.gif": "9e4a570f48c76416bdf0a9e65f0a7bd6",
"version.json": "b42b005a2adb57572719d843cf5258d6",
"index.html": "d88fb46fdc4a3761d3ecfc75db7905ca",
"/": "d88fb46fdc4a3761d3ecfc75db7905ca",
"ssl_encryption.png": "b92992cc0f82a0258a8bd48425d76824",
"main.dart.js": "8609cac4e8b13030d0dd32a80dfd048b",
"logo_only_text.png": "8db42757849c367aee58a9042e8c15f4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.js": "74c37082e4d00f77591d5e9250de4a28",
"favicon.png": "ae08c1032313f2587593b8adc55df14e",
"icons/portpos-maskable-192.png": "4eed3368646b822f3b7eb12c7f3cbe77",
"icons/portpos-512.png": "29b9a79daaa8a5a993d5afbae8713a7b",
"icons/portpos-57.png": "8bba49375cf60074c6e174bb76d7a8a9",
"icons/portpos-114.png": "71d58727e7798aaaa333e63dbdf206cb",
"icons/portpos-76.png": "cdae3c6cccade20902acf0cccdb5c4d1",
"icons/portpos-60.png": "009c4dae10363e009c7e996be9ec6e1e",
"icons/portpos-120.png": "8e43c3838040a616ae11af7ff156b413",
"icons/portpos-maskable-512.png": "b39987c5aec47e6c33350bfde76f9a65",
"icons/portpos-72.png": "0d5d49fc3db59b85bdadd3867c36ce0a",
"icons/portpos-196.png": "fc9c2374f5ee975315dbecdcb0bc6d58",
"icons/portpos-152.png": "e22969c16a07e6ce5f6208b7b03caee0",
"icons/portpos-144.png": "fa4823d545a848f8bd6f2e96e7670982",
"icons/portpos-192.png": "8e3d71477029041bd5710b6cd349a26d",
"manifest.json": "bdfc9f7975782d20a5913d54f56cb608",
"assets/AssetManifest.json": "5f0e0d7ab131c641ea5e832c14bea373",
"assets/NOTICES": "a21d8f5355007acab1ae91d15340a663",
"assets/FontManifest.json": "10950a959636ceb05648816b40e835dc",
"assets/packages/wiredash/lib/assets/fonts/Wirecons.ttf": "e239a2c1f058164f69257aad213f0b0a",
"assets/packages/wiredash/lib/assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/packages/wiredash/lib/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/packages/wiredash/lib/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/packages/wiredash/assets/images/logo_white.png": "d51118529c8b6f919c485cd81e9a840e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "5c717055b6683529243c292ab78aa797",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ecb443c7014fa113661dcee845f9c306",
"assets/fonts/MaterialIcons-Regular.otf": "c581968b2fc8b5cd6cdd29ab0b8ada29",
"assets/assets/images/common/footer_banner.svg": "b47abff440f9500f882103e633e5d5b9",
"assets/assets/images/common/user.svg": "6eefabd3a150b831fd54c2d910865d23",
"assets/assets/images/common/ic_inverse_en.svg": "306c56c93f19fa1f133eac0598f6a3f3",
"assets/assets/images/common/pci_level1_certificate.svg": "e3d788f8a1676a40c814373822e0bc3a",
"assets/assets/images/common/airtel.svg": "985fc0fe72a0c6560373ab4a1fca65eb",
"assets/assets/images/common/gp.svg": "b35a1e31fc0e67b19c7951c920b32c20",
"assets/assets/images/common/skito.svg": "70ee7508c08c1cbd07044e083e3e70ea",
"assets/assets/images/common/no_transaction.svg": "1e19dd518c1ce117ef5309e62fbeb653",
"assets/assets/images/common/no_icon.svg": "64336fcbf59a2c4784b100007d4d3542",
"assets/assets/images/common/robi.svg": "d69115c715d38c474a8ac9e33740501a",
"assets/assets/images/common/file.svg": "4b1455f5014c8894add9f124f45b2df3",
"assets/assets/images/common/user_filled.svg": "7618caf02aad5c36b9103e7a676f5e4e",
"assets/assets/images/common/lock.svg": "c3a2ed09526a3761c158b0156723a859",
"assets/assets/images/common/scanner_icon.svg": "931e315b54a8890a40e566c8f03fae6a",
"assets/assets/images/common/icon-facebook.svg": "21a5d80d48ec7714b1ff41bcc6ae1fb4",
"assets/assets/images/common/cards/amex_cvv_hint.svg": "447183a33a6a217c911404da37bf2075",
"assets/assets/images/common/cards/visa.svg": "623f8fe59807989581f3fa0ed456d6df",
"assets/assets/images/common/cards/maestro.svg": "1c052d17dae817a9778dab967ceaa624",
"assets/assets/images/common/cards/card.svg": "3380a85093644611571883c6cd47c213",
"assets/assets/images/common/cards/american_express.svg": "31fc8f35e5ab64c95aca308867f18be5",
"assets/assets/images/common/cards/visa_cvv_hint.svg": "940b32019790d256428dff756050eff0",
"assets/assets/images/common/cards/mastercard.svg": "1c052d17dae817a9778dab967ceaa624",
"assets/assets/images/common/cards/diners_club.svg": "e59f9ec914c0c558331c1d5030d954b3",
"assets/assets/images/common/pin.svg": "dfd989285534972257e5003c2c1ba457",
"assets/assets/images/common/teletalk.svg": "a2ee8a1613522aa2844a26655f3b1f48",
"assets/assets/images/common/ic_inverse_bn.svg": "12c7a646650662d9172a76fcd782c2c9",
"assets/assets/images/common/ic_on_boarding_0.png": "6e7096b71c794e1501fb2fb09032861a",
"assets/assets/images/common/email.svg": "c49985519fdd04c57c8561407ace56f3",
"assets/assets/images/common/ic_on_boarding_1.png": "da0202ec4d40bf52cfc62b8d3146c8c5",
"assets/assets/images/common/info.svg": "414ecb6eb3dd63b8c0bf46a119c998bd",
"assets/assets/images/common/telco_list_square.svg": "edef793017ed19726624a615f2fe9ef0",
"assets/assets/images/common/ic_brand_logo_animated.gif": "9e4a570f48c76416bdf0a9e65f0a7bd6",
"assets/assets/images/common/ic_logo_banner.svg": "19bc65069eae86250a5e3b8a76d29f1f",
"assets/assets/images/common/language.svg": "1d6115cb40a2fbd8d7ea35276ff73023",
"assets/assets/images/common/clock.svg": "f9625011f82e1372457d847c52c84d1b",
"assets/assets/images/common/banglalink.svg": "53b199b95830a2a896ebff0cc6f9a03a",
"assets/assets/images/common/phone.svg": "24853b651b47372800353b4d7074725a",
"assets/assets/images/common/success.svg": "007ca2d923b12eb91d0d3f1dea13551f",
"assets/assets/images/common/calendar.svg": "c6eea0039588fa7365349ef8df4fba1b",
"assets/assets/images/common/error.svg": "5d2033ff5e671a2bb85bccd67a6084d5",
"assets/assets/images/common/invoice.svg": "b85e513453eae282a4d181c757ca136d",
"assets/assets/images/common/ic_log_out.svg": "84d96085f946fd6cfc8bd47db8885d18",
"assets/assets/images/common/icon-google.svg": "55da7533528be5d16b5c8d1fb0d6a590",
"assets/assets/images/common/no_saved_cards.svg": "8f4c3f0d2cd7a09461e84a028c2d47c1",
"assets/assets/images/light/ic_ssl_encryption.png": "b92992cc0f82a0258a8bd48425d76824",
"assets/assets/images/light/settings_icon.svg": "d404eb1beb44b8ba7bf946cfe92bc3db",
"assets/assets/images/light/my_account.svg": "2a23baf2873ccc4dd4b2b38d4aba6194",
"assets/assets/images/light/home_icon.svg": "00fd7a99774f0ddb59207fc051e48ba5",
"assets/assets/images/light/ic_brand_logo_only_text.png": "6d0c02e8686db1115d839cd1d7a4e5e4",
"assets/assets/images/light/help_and_support_icon.svg": "55c83e14d9ac080e343303bcfe7fab92",
"assets/assets/images/light/ic_contact_picker.svg": "b1c7afbbeab642d29721d194187b9550",
"assets/assets/images/light/settings.svg": "fd045f4656d1cea031ac220e6808cd42",
"assets/assets/images/light/ic_brand_logo_text_inverse.svg": "327b1a769d9d3435251ea682f8e2011d",
"assets/assets/images/light/transaction.svg": "99deef67471ad824e0ac62397bdc8438",
"assets/assets/images/light/ic_slider_thumb.png": "dc5d84ec153c5e8c013acf39f009eb27",
"assets/assets/images/light/recharge.svg": "6212984136bf7e02f9f98915e467d431",
"assets/assets/images/light/save_card.svg": "ef4cf3096da2d257bca30c2e1c562679",
"assets/assets/images/dark/ic_ssl_encryption.png": "47da5b24e0423f2c6db66cd61f02b8c4",
"assets/assets/images/dark/ic_brand_logo_only_text.png": "5c4b066e63874342f0bba421ffc64d2a",
"assets/assets/images/dark/ic_brand_logo_text_inverse.svg": "57e02b7d43fa8962d1b3b7d581da93f6",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
