const CACHE_NAME = "pwa-cache-v9";
const FILES_TO_CACHE = [
  "/project-004/index.html",
  "/project-004/source/styles/style.css",
  "/project-004/source/scripts/script.js",
  "/project-004/source/bootstrap-5.3.2-dist/css/bootstrap.min.css",
  "/project-004/source/gallery/logo.png",
  "/project-004/source/gallery/favicon.ico",
  "/project-004/main/contact-us/index.html",
  "/project-004/main/Portfolio/index.html",
  "/project-004/main/products/index.html",
  "https://kit.fontawesome.com/41290f7b5b.js",
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
  "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap",
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
  "https://unpkg.com/aos@2.3.1/dist/aos.css"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const file of FILES_TO_CACHE) {
        try {
          const response = await fetch(file);
          if (response.ok && response.url.startsWith("http")) {
            await cache.put(file, response.clone());
          }
        } catch (error) {
          console.warn(`Install skip: ${file}`, error);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (!request.url.startsWith("http")) return;

  event.respondWith(
    (async () => {
      if (navigator.onLine) {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open(CACHE_NAME);
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          const cached = await caches.match(request);
          return cached || Response.error();
        }
      } else {
        const cached = await caches.match(request);
        return cached || caches.match("/project-004/index.html");
      }
    })()
  );
});
