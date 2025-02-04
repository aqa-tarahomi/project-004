const CACHE_NAME = 'isitschool-v1';
const ASSETS = [
    'https://aqa-tarahomi.github.io/project-004/',
  
    // CSS files
    '/source/styles/style.css',
    '/source/bootstrap-5.3.2-dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
  
    // JavaScript files
    '/source/scripts/script.js',
    '/source/scripts/swiper.js',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://kit.fontawesome.com/41290f7b5b.js',
  
    // Images and icons
    '/source/gallery/logo.png',
    '/source/gallery/test-exam.jpg',
    '/source/gallery/anformatic_students.jpg',
    '/source/gallery/favicon.ico',
  
    // Fonts
    'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
