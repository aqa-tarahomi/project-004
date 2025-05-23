// /project-004/sw.js

const STATIC_CACHE = "static-cache-v1";
const DYNAMIC_CACHE = "dynamic-cache-v1";
const OFFLINE_URL = "/project-004/offline.html";

const STATIC_ASSETS = [
  // App Shell
  "/project-004/index.html",
  "/project-004/offline.html",
  "/project-004/source/styles/style.css",
  "/project-004/source/scripts/script.js",
  "/project-004/source/bootstrap-5.3.2-dist/css/bootstrap.min.css",
  "/project-004/source/gallery/logo.png",
  "/project-004/source/gallery/favicon.ico",
  "/project-004/main/contact-us/index.html",
  "/project-004/main/Portfolio/index.html",
  "/project-004/main/products/index.html"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener("activate", event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (![STATIC_CACHE, DYNAMIC_CACHE].includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  if (!event.request.url.startsWith("http")) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then(fetchResponse => {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            if (event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_URL);
          }
        });
    })
  );
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
