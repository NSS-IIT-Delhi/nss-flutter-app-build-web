'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4e9e873bfbad2ae86558824d931d9c3f",
"assets/AssetManifest.json": "c05bd3b30e33a9d1a333e93c49b2f895",
"assets/assets/about_page/connections.png": "3aa1f50f15387655e9cd774a17902821",
"assets/assets/about_page/education.png": "fca2d10308d1ed9ff3c1e160bf9c715c",
"assets/assets/about_page/education_icon.png": "ec382cabfae010fe710274acd6039c11",
"assets/assets/about_page/environment.png": "40e90fb3208ced96c9af1fcd0ad93c3d",
"assets/assets/about_page/health.png": "e9f17934b10182604be61eba0b935d4b",
"assets/assets/about_page/innovation.png": "49b5d054c10352043718728e8fb85afe",
"assets/assets/about_page/kaizen22.png": "b43f9820f1eb362bcbad0a731e4e0ba9",
"assets/assets/about_page/nss_logo.png": "aa79398f1f92c862097b4fb47ee231db",
"assets/assets/about_page/society.png": "5f175d76d5e0ca45ccc1cb39f84505da",
"assets/assets/fonts/SFPRODISPLAYREGULAR.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/hours_complaint/background.png": "c8349d0ad116414bcd32f2477fafe582",
"assets/assets/hours_complaint/illustration.png": "04484dde74bb0b5fd2f8a4e728e07639",
"assets/assets/hours_complaint/new_complaint.png": "7cbf85bad45b04d9b17507439a3d80ef",
"assets/assets/hours_complaint/open_with_browser.png": "24e85d04808d0f4febcc6059ab4c4ba9",
"assets/assets/hours_complaint/past_complaints.png": "35e17a5f617e83f9eb29a781b674143a",
"assets/assets/icons/blood.png": "7dfa7d5a1e19e83ff38e9301065ee325",
"assets/assets/icons/demography.png": "3c86959d599cf7179b64657e1ad9e533",
"assets/assets/icons/events.svg": "4aaddc4d8ae8a2c2296f373ebdcb4d50",
"assets/assets/icons/home.svg": "437317a5c9ced79ad1eff6d2fa805cd4",
"assets/assets/icons/homepage_item_icons/blood_donation.svg": "79cf301514c361d2b341a9ce0061bf85",
"assets/assets/icons/homepage_item_icons/campus.svg": "bba4f38e118aa35573f27f196e4a2f05",
"assets/assets/icons/homepage_item_icons/contacts.svg": "d3f8048104d811545177276fa4feab32",
"assets/assets/icons/homepage_item_icons/find_event_id.svg": "466ff78a15b9d833d03249717556b033",
"assets/assets/icons/homepage_item_icons/lost_found.svg": "a1bb51db2fef3c3c75b3776f40f99d00",
"assets/assets/icons/homepage_item_icons/quick_links.svg": "74b6411711200e638767488f353878c8",
"assets/assets/icons/homepage_item_icons/registered_events.svg": "a177ccd70bae35292b236d0ffdb5856f",
"assets/assets/icons/homepage_item_icons/scribe_request.svg": "16e9fa87e040b89b01c61680655147de",
"assets/assets/icons/hours.svg": "158c0644eee106153b804da834884556",
"assets/assets/icons/open.png": "211e28b9eee5c2b8ae014c1257767e18",
"assets/assets/icons/profile.svg": "e9e5398e6ec75c2db7a928dae81c1d79",
"assets/assets/icons/volunteer.svg": "5b63f4014f441bb393fe2ef1ded69f5d",
"assets/assets/images/auth_bg.png": "25a0088025e80c0f2e526e55b00fed85",
"assets/assets/images/auth_image.png": "00460f8eb05d3c70bd0378e9c316a057",
"assets/assets/images/breeze_bg.png": "1764c236e5415b355d2e087bac9c6c69",
"assets/assets/images/drawer_bg.png": "b5e9dce9a6535ab2ece8ec34dd9ba097",
"assets/assets/images/fruits_image_bottom.png": "12e52dc880e1eb0c99beb69d7a4668ce",
"assets/assets/images/fruits_image_top.png": "8fd65caa0429c071ff774a8df95f2ef4",
"assets/assets/images/homepage_illustration.png": "5941bfa391b70d72374d7db872e36050",
"assets/assets/images/image1.png": "d93397ee0ebafd7dee415eb3d70d831f",
"assets/assets/images/image2.png": "2ae21d2179dc46f3a41044c0b7b1f300",
"assets/assets/images/logo.png": "e6befe06aac062dc8b54a6f801bf68b3",
"assets/assets/images/logo_big.png": "168d24d3e822a3da07c00842390c7194",
"assets/assets/images/profile.png": "47084a7cd201fc1a01b57e539cd4ca42",
"assets/assets/images/quick_links.png": "3a764e327e56152b80caf6ff0d80f6e8",
"assets/assets/profile_page/bloodtype.png": "976f0f9eede94b2d9f930e65dbc381a6",
"assets/assets/profile_page/contact.png": "f89f0c70c4984968df3d6c38d3afebe2",
"assets/assets/profile_page/edit_profile.png": "bd1ee4cc9e76fcf9582ffd0426219cd3",
"assets/assets/profile_page/email.png": "c4007cea2fd7c00b327fa46f63504159",
"assets/assets/profile_page/error.png": "1b86815fdd7d522f4c93bbed10ea1523",
"assets/assets/profile_page/home.png": "d085bb545de0886912f8a1fc930cf9a9",
"assets/assets/profile_page/india_flag.png": "6e0f089302f2454faf7c0554db8033fb",
"assets/assets/profile_page/logout.png": "e76f9c605d1da1cbbb7c303e49e949db",
"assets/assets/profile_page/profile_frame.png": "2ca3e97f21dcd783c6468aa40c94de7e",
"assets/assets/profile_page/save.png": "015d3f8419740e3b9fd921ced704ea51",
"assets/assets/profile_page/star.png": "c1434ca84f6325a6364f05e811d02765",
"assets/assets/profile_page/verified.png": "86540b2008510da35c36cf2431bd6e6f",
"assets/FontManifest.json": "241019665f60f611f1f10e8279533220",
"assets/fonts/MaterialIcons-Regular.otf": "b67d64c1a271c5c5b034ba02a73de025",
"assets/NOTICES": "e0faa1e2c851bf08402db866d9e12ef5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc90b43d357fc01a0797289b3d995041",
"/": "bc90b43d357fc01a0797289b3d995041",
"main.dart.js": "3b0ad1c456b230c6fe8a1a17e312bb98",
"manifest.json": "398827c6071d6bea83e25c2568ac5afd",
"version.json": "e2a09adb51eb2eea2c312210aede3c70"};
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
