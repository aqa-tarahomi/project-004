const CACHE_NAME = "pwa-cache-v3";
const FILES_TO_CACHE = [
  "/index.html",
  "/styles/style.css",
  "/source/bootstrap-5.3.2-dist/css/bootstrap.min.css",
  "/source/bootstrap-5.3.2-dist/js/bootstrap.bundle.min.js",
  "/gallery/anformatic_1.png",
  "/gallery/anformatic_students.jpg",
  "/gallery/logo.png",
  "/gallery/favicon.ico",
  "/scripts/script.js",
  "/scripts/swiper.js",
  "/scripts/particle.js",
  "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap",
];



// Activate event: Remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Install event: Cache all necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Fetch event: Cache-first with network fallback
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        // Optionally, fetch the resource to update the cache in the background
        fetch(event.request)
          .then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone()); // Update the cache
              return response;
            });
          })
          .catch(() => {
            // Do nothing if offline and the network fails
          });

        return cachedResponse;
      }

      // If no cache available, fetch from network
      return fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone()); // Cache the network response
          return response;
        });
      });
    }).catch(() => caches.match("/index.html")) // Offline fallback
  );
});
