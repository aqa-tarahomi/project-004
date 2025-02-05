const CACHE_NAME = "pwa-cache-v2";
const FILES_TO_CACHE = [
  '/',
  
    // CSS files
    '../styles/style.css',
    '../bootstrap-5.3.2-dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
  
    // JavaScript files
    '../scripts/script.js',
    '../scripts/swiper.js',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://kit.fontawesome.com/41290f7b5b.js',
  
    // Images and icons
    '../gallery/logo.png',
    '../gallery/test-exam.jpg',
    '../gallery/anformatic_students.jpg',
    '../gallery/favicon.ico',
  
    // Fonts
    'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',

];


// ✅ Install Event: Cache Files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        }).then(() => self.skipWaiting()) // Activate the new service worker immediately
    );
});

// ✅ Activate Event: Clean Up Old Cache
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Make sure SW takes control immediately
    );
});

// ✅ Fetch Event: Serve Files From Cache First
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(() => caches.match("/index.html")) // Serve index.html if offline
    );
});
  