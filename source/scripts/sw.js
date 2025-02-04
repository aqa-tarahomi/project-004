const CACHE_NAME = 'isitschool-v1';
const ASSETS = [
    '/',
  
    // CSS files
    'source/styles/style.css',
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

self.addEventListener("install", (event) => {
  event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
          return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
          return response || fetch(event.request);
      })
  );
});