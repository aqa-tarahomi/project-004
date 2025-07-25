const CACHE_NAME = "pwa-cache-v9"; // Increment version for debugging
const FILES_TO_CACHE = [
  // Local project files
  "/project-004/index.html",
  "/project-004/source/styles/style.css",
  "/project-004/source/scripts/script.js",
  "/project-004/source/bootstrap-5.3.2-dist/css/bootstrap.min.css",
  "/project-004/source/gallery/logo.png",
  "/project-004/source/gallery/favicon.ico",
  "/project-004/main/contact-us/index.html",
  "/project-004/main/Portfolio/index.html",
  "/project-004/main/products/index.html",

  // CDN files
  "https://kit.fontawesome.com/41290f7b5b.js",
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
  "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap",
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
  "https://unpkg.com/aos@2.3.1/dist/aos.css"
];

// ✅ Install event with request filtering
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Install event");
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log("[Service Worker] Caching files...");
      for (const file of FILES_TO_CACHE) {
        try {
          const response = await fetch(file);
          if (response.ok && response.url.startsWith("http")) {
            await cache.put(file, response.clone());
            console.log(`[Service Worker] Cached: ${file}`);
          } else {
            console.warn(`[Service Worker] Skipped caching: ${file} (Invalid response)`);
          }
        } catch (error) {
          console.error(`[Service Worker] Error caching file: ${file}`, error);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// ✅ Activate event
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activate event");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ✅ Fetch event with request filtering
self.addEventListener("fetch", (event) => {
  console.log(`[Service Worker] Fetching: ${event.request.url}`);
  if (!event.request.url.startsWith("http")) {
    console.warn(`[Service Worker] Ignored non-HTTP request: ${event.request.url}`);
    return; // Skip non-HTTP(S) requests
  }
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log(`[Service Worker] Serving from cache: ${event.request.url}`);
        return cachedResponse;
      }
      console.log(`[Service Worker] Fetching from network: ${event.request.url}`);
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            console.log(`[Service Worker] Cached dynamically: ${event.request.url}`);
            return response;
          });
        })
        .catch((error) => {
          console.error(`[Service Worker] Fetch error: ${error}`);
          if (event.request.mode === "navigate") {
            return caches.match("/project-004/index.html");
          }
        });
    })
  );
});
